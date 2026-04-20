import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor, act } from '@testing-library/react';
import { useNotifications } from './useNotifications';
import { useNotificationStore } from '@/store/notificationStore';

const mocks = vi.hoisted(() => ({
  authUser: null as { uid: string } | null,
  onMessageCallback: null as ((payload: any) => void) | null,
  getToken: vi.fn().mockResolvedValue('fcm-token-123'),
  onMessage: vi.fn(),
  updateDoc: vi.fn().mockResolvedValue(undefined),
}));

mocks.onMessage.mockImplementation((_messaging: unknown, cb: (payload: any) => void) => {
  mocks.onMessageCallback = cb;
  return vi.fn();
});

vi.mock('firebase/messaging', () => ({
  getToken: mocks.getToken,
  onMessage: mocks.onMessage,
}));

vi.mock('firebase/firestore', () => ({
  doc: vi.fn(() => ({})),
  updateDoc: mocks.updateDoc,
}));

vi.mock('@/lib/firebase', () => ({
  db: {},
  getMessagingInstance: vi.fn().mockResolvedValue({ app: 'messaging' }),
}));

vi.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({ currentUser: mocks.authUser }),
}));

vi.mock('react-hot-toast', () => ({
  default: {
    custom: vi.fn(),
  },
}));

beforeEach(() => {
  mocks.authUser = null;
  mocks.onMessageCallback = null;
  mocks.getToken.mockClear();
  mocks.onMessage.mockClear();
  mocks.updateDoc.mockClear();
  useNotificationStore.setState({ notifications: [], unreadCount: 0 });
});

describe('useNotifications integration', () => {
  it('calls getToken after user logs in', async () => {
    const { rerender } = renderHook(() => useNotifications());

    mocks.authUser = { uid: 'user-42' };
    rerender();

    await waitFor(() => {
      expect(mocks.getToken).toHaveBeenCalled();
      expect(mocks.updateDoc).toHaveBeenCalled();
    });
  });

  it('updates notification store when onMessage receives payload', async () => {
    mocks.authUser = { uid: 'user-42' };

    const { result } = renderHook(() => useNotifications());

    await waitFor(() => {
      expect(mocks.onMessage).toHaveBeenCalled();
    });

    act(() => {
      mocks.onMessageCallback?.({
        notification: {
          title: 'Gate Update',
          body: 'Use Gate B for quicker entry',
        },
        data: {
          severity: 'warning',
        },
      });
    });

    expect(result.current.unreadCount).toBe(1);
    expect(result.current.notifications[0]).toMatchObject({
      title: 'Gate Update',
      message: 'Use Gate B for quicker entry',
      severity: 'warning',
      read: false,
    });
  });
});
