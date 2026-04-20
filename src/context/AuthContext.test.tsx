import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import { useAuthStore } from '@/store/authStore';

const mocks = vi.hoisted(() => ({
  logout: vi.fn(),
  loginWithGoogle: vi.fn(),
}));

// AuthProvider now sources auth state from useAuthStore and delegates
// login/logout to the useAuth hook. We mock the hook's action methods.
vi.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({
    loginWithGoogle: mocks.loginWithGoogle,
    logout: mocks.logout,
    user: null,
    isLoading: false,
    isAuthenticated: false,
    currentUser: null,
    userRole: null,
    isLoggedIn: false,
    login: async () => {},
  }),
}));

vi.mock('@/lib/firebase', () => ({
  auth: {},
  db: {},
  googleProvider: {},
}));

function AuthDisplay() {
  const { currentUser, userRole, isLoggedIn, logout, loginWithGoogle } = useAuth();
  return (
    <div>
      <span data-testid="role">{userRole ?? 'none'}</span>
      <span data-testid="uid">{currentUser?.uid ?? 'none'}</span>
      <span data-testid="logged-in">{String(isLoggedIn)}</span>
      <button onClick={() => void logout()}>Logout</button>
      <button onClick={() => void loginWithGoogle()}>Google</button>
    </div>
  );
}

function renderAuth() {
  return render(
    <MemoryRouter>
      <AuthProvider>
        <AuthDisplay />
      </AuthProvider>
    </MemoryRouter>,
  );
}

beforeEach(() => {
  mocks.logout.mockReset();
  mocks.loginWithGoogle.mockReset();

  useAuthStore.setState({
    user: null,
    isLoading: false,
    isAuthenticated: false,
  });
});

describe('AuthProvider', () => {
  it('renders children with role=none when unauthenticated', () => {
    renderAuth();
    expect(screen.getByTestId('role')).toHaveTextContent('none');
    expect(screen.getByTestId('logged-in')).toHaveTextContent('false');
  });

  it('shows loading spinner while auth is resolving', () => {
    useAuthStore.setState({ isLoading: true, user: null, isAuthenticated: false });
    renderAuth();
    // The loading container has aria-busy="true"; children (AuthDisplay) must not render
    expect(document.querySelector('[aria-busy="true"]')).toBeInTheDocument();
    expect(screen.queryByTestId('role')).not.toBeInTheDocument();
  });

  it('exposes userRole from the Zustand auth store', () => {
    useAuthStore.setState({
      user: { uid: 'u-1', email: 'admin@test.com', displayName: 'Admin', photoURL: '', role: 'admin' },
      isLoading: false,
      isAuthenticated: true,
    });
    renderAuth();
    expect(screen.getByTestId('role')).toHaveTextContent('admin');
    expect(screen.getByTestId('uid')).toHaveTextContent('u-1');
    expect(screen.getByTestId('logged-in')).toHaveTextContent('true');
  });

  it('delegates logout to the useAuth hook', async () => {
    mocks.logout.mockResolvedValue(undefined);
    renderAuth();
    await userEvent.click(screen.getByRole('button', { name: 'Logout' }));
    await waitFor(() => expect(mocks.logout).toHaveBeenCalledTimes(1));
  });

  it('delegates Google login to the useAuth hook', async () => {
    mocks.loginWithGoogle.mockResolvedValue(undefined);
    renderAuth();
    await userEvent.click(screen.getByRole('button', { name: 'Google' }));
    await waitFor(() => expect(mocks.loginWithGoogle).toHaveBeenCalledTimes(1));
  });

  it('reflects role changes when the Zustand store updates', async () => {
    renderAuth();
    expect(screen.getByTestId('role')).toHaveTextContent('none');

    useAuthStore.getState().setUser({
      uid: 'u-2',
      email: 'staff@test.com',
      displayName: 'Staff',
      photoURL: '',
      role: 'staff',
    });

    await waitFor(() => {
      expect(screen.getByTestId('role')).toHaveTextContent('staff');
    });
  });
});
