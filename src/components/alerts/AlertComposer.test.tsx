import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AlertComposer } from '@/features/admin/components/AlertComposer';

const mocks = vi.hoisted(() => ({
  broadcastAlert: vi.fn().mockResolvedValue({
    id: 'alert-1',
    title: 'Safety update',
    targetZones: ['All Zones'],
  }),
}));

vi.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({
    currentUser: {
      uid: 'admin-1',
      displayName: 'Admin User',
      email: 'admin@stadiumsync.com',
      role: 'admin',
    },
  }),
}));

vi.mock('@/services/alertService', () => ({
  broadcastAlert: mocks.broadcastAlert,
}));

vi.mock('react-hot-toast', () => ({
  default: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

beforeEach(() => {
  mocks.broadcastAlert.mockClear();
});

describe('AlertComposer integration', () => {
  it('submits form and triggers broadcast flow', async () => {
    render(<AlertComposer />);

    fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Safety update' } });
    fireEvent.change(screen.getByLabelText(/Message/i), {
      target: { value: 'Please use east exits while west wing is congested.' },
    });

    await userEvent.click(screen.getByRole('button', { name: /Select zones/i }));
    await userEvent.click(screen.getByRole('option', { name: 'All Zones' }));
    await userEvent.click(screen.getByRole('button', { name: /Send broadcast alert/i }));

    await waitFor(() => {
      expect(mocks.broadcastAlert).toHaveBeenCalledWith(
        expect.objectContaining({
          title: 'Safety update',
          severity: 'info',
          targetZones: ['All Zones'],
        }),
        'Admin User',
        'admin-1',
      );
    });
  });
});
