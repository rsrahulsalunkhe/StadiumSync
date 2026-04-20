import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import { useAuthStore } from '@/store/authStore';

const mocks = vi.hoisted(() => ({
  authStateCallback: null as ((user: unknown) => void) | null,
  signInWithEmailAndPassword: vi.fn(),
  signOut: vi.fn(),
  getDoc: vi.fn(),
  toastError: vi.fn(),
  navigate: vi.fn(),
}));

vi.mock('firebase/auth', () => ({
  onAuthStateChanged: vi.fn((_auth: unknown, cb: (user: unknown) => void) => {
    mocks.authStateCallback = cb;
    return vi.fn();
  }),
  signInWithEmailAndPassword: mocks.signInWithEmailAndPassword,
  signInWithPopup: vi.fn(),
  signOut: mocks.signOut,
}));

vi.mock('firebase/firestore', () => ({
  doc: vi.fn(() => ({})),
  getDoc: mocks.getDoc,
}));

vi.mock('@/lib/firebase', () => ({
  auth: {},
  db: {},
  googleProvider: {},
}));

vi.mock('react-hot-toast', () => ({
  default: {
    error: mocks.toastError,
    success: vi.fn(),
  },
  Toaster: () => null,
}));

vi.mock('react-router-dom', async (importActual) => {
  const actual = await importActual<typeof import('react-router-dom')>();
  return {
    ...actual,
    useNavigate: () => mocks.navigate,
  };
});

const fbUser = {
  uid: 'user-1',
  email: 'user@stadiumsync.com',
  displayName: 'Sam User',
  photoURL: null,
};

function AuthActions() {
  const { login, logout, userRole } = useAuth();

  return (
    <div>
      <button onClick={() => login({ email: 'user@stadiumsync.com', password: 'password123' }).catch(() => {})}>
        Login
      </button>
      <button onClick={() => logout()}>Logout</button>
      <span data-testid="role">{userRole ?? 'none'}</span>
    </div>
  );
}

function renderAuth() {
  return render(
    <MemoryRouter>
      <AuthProvider>
        <AuthActions />
      </AuthProvider>
    </MemoryRouter>,
  );
}

async function resolveInitialAuth(user: unknown = null) {
  await waitFor(() => {
    expect(mocks.authStateCallback).not.toBeNull();
  });
  mocks.authStateCallback?.(user);
}

beforeEach(() => {
  mocks.authStateCallback = null;
  mocks.signInWithEmailAndPassword.mockReset();
  mocks.signOut.mockReset();
  mocks.getDoc.mockReset();
  mocks.toastError.mockReset();
  mocks.navigate.mockReset();

  useAuthStore.setState({
    currentUser: null,
    userRole: null,
    isLoading: true,
  });

  mocks.getDoc.mockResolvedValue({ data: () => ({ role: 'attendee' }) });
});

describe('useAuth', () => {
  it('logs in and assigns role from Firestore', async () => {
    mocks.signInWithEmailAndPassword.mockResolvedValue({ user: fbUser });
    mocks.getDoc.mockResolvedValueOnce({ data: () => ({ role: 'staff' }) });

    renderAuth();
    await resolveInitialAuth(null);

    await userEvent.click(screen.getByRole('button', { name: 'Login' }));

    await waitFor(() => {
      expect(useAuthStore.getState().userRole).toBe('staff');
      expect(mocks.navigate).toHaveBeenCalledWith('/staff', { replace: true });
    });
  });

  it('logs out and clears auth state', async () => {
    mocks.getDoc.mockResolvedValueOnce({ data: () => ({ role: 'attendee' }) });

    renderAuth();
    await resolveInitialAuth(fbUser);

    await waitFor(() => {
      expect(useAuthStore.getState().currentUser?.uid).toBe('user-1');
    });

    mocks.signOut.mockResolvedValueOnce(undefined);
    await userEvent.click(screen.getByRole('button', { name: 'Logout' }));

    await waitFor(() => {
      expect(useAuthStore.getState().currentUser).toBeNull();
      expect(mocks.navigate).toHaveBeenCalledWith('/login', { replace: true });
    });
  });

  it('refreshes role on auth state refresh events', async () => {
    renderAuth();

    mocks.getDoc
      .mockResolvedValueOnce({ data: () => ({ role: 'attendee' }) })
      .mockResolvedValueOnce({ data: () => ({ role: 'admin' }) });

    await resolveInitialAuth(fbUser);
    await waitFor(() => {
      expect(useAuthStore.getState().userRole).toBe('attendee');
    });

    mocks.authStateCallback?.(fbUser);
    await waitFor(() => {
      expect(useAuthStore.getState().userRole).toBe('admin');
    });

    expect(mocks.getDoc).toHaveBeenCalledTimes(2);
  });

  it('defaults role to attendee when Firestore role is missing', async () => {
    renderAuth();

    mocks.getDoc.mockResolvedValueOnce({ data: () => ({}) });
    await resolveInitialAuth(fbUser);

    await waitFor(() => {
      expect(useAuthStore.getState().userRole).toBe('attendee');
    });
  });

  it('surfaces login error state for wrong-password', async () => {
    mocks.signInWithEmailAndPassword.mockRejectedValue({ code: 'auth/wrong-password' });

    renderAuth();
    await resolveInitialAuth(null);

    await userEvent.click(screen.getByRole('button', { name: 'Login' }));

    await waitFor(() => {
      expect(mocks.toastError).toHaveBeenCalledWith(
        'Incorrect password. Please try again.',
        expect.objectContaining({ id: 'login-error' }),
      );
    });
  });
});
