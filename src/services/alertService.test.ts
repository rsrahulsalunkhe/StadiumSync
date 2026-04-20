import { describe, it, expect, vi, beforeEach } from 'vitest';
import { broadcastAlert } from './alertService';

const mocks = vi.hoisted(() => ({
  setDoc: vi.fn().mockResolvedValue(undefined),
  apiPost: vi.fn().mockResolvedValue({ status: 200 }),
}));

vi.mock('firebase/firestore', () => ({
  collection: vi.fn((_db: unknown, path: string) => ({ path })),
  doc: vi.fn((collectionRef: { path: string }, id: string) => ({ path: `${collectionRef.path}/${id}` })),
  setDoc: mocks.setDoc,
}));

vi.mock('@/lib/firebase', () => ({
  db: {},
}));

vi.mock('@/lib/axios', () => ({
  apiClient: {
    post: mocks.apiPost,
  },
}));

vi.mock('nanoid', () => ({
  nanoid: () => 'alert-fixed-id',
}));

beforeEach(() => {
  mocks.setDoc.mockClear();
  mocks.apiPost.mockClear();
});

describe('broadcastAlert', () => {
  it('writes Firestore alert and triggers API call', async () => {
    const alert = await broadcastAlert(
      {
        title: 'Gate update',
        message: 'Use Gate B',
        severity: 'warning',
        targetZones: ['All Zones'],
      },
      'Admin',
      'admin-uid',
    );

    expect(mocks.setDoc).toHaveBeenCalled();
    expect(mocks.apiPost).toHaveBeenCalledWith('/api/alerts', expect.objectContaining({ id: 'alert-fixed-id' }));
    expect(alert.fcmSent).toBe(true);
  });
});
