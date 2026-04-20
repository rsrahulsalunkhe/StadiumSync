import { describe, it, expect, beforeEach, vi } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { ProtectedRoute } from './ProtectedRoute';
import type { UserRole } from '@/types/auth';

type StoreUser = {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  role: UserRole;
} | null;

const storeState: { user: StoreUser; isLoading: boolean; isAuthenticated: boolean } = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
};

vi.mock('@/store/authStore', () => ({
  useAuthStore: () => storeState,
}));

function renderProtected(initialPath: string) {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/attendee" element={<div>Attendee Home</div>} />
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin" element={<div>Admin Page</div>} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );
}

beforeEach(() => {
  storeState.user = null;
  storeState.isLoading = false;
  storeState.isAuthenticated = false;
});

describe('ProtectedRoute', () => {
  it('redirects unauthenticated users to login', () => {
    renderProtected('/admin');
    expect(screen.getByText('Login Page')).toBeInTheDocument();
  });

  it('redirects users with wrong role to their home route', () => {
    storeState.user = { uid: '1', email: 'a@b.com', displayName: 'User', photoURL: '', role: 'attendee' };
    storeState.isAuthenticated = true;

    renderProtected('/admin');
    expect(screen.getByText('Attendee Home')).toBeInTheDocument();
  });

  it('renders the protected route for the allowed role', () => {
    storeState.user = { uid: '2', email: 'a@b.com', displayName: 'Admin', photoURL: '', role: 'admin' };
    storeState.isAuthenticated = true;

    renderProtected('/admin');
    expect(screen.getByText('Admin Page')).toBeInTheDocument();
  });

  it('shows loading spinner while auth state is resolving', () => {
    storeState.isLoading = true;

    renderProtected('/admin');
    // Loading spinner has no text content — check nothing from routes rendered
    expect(screen.queryByText('Login Page')).not.toBeInTheDocument();
    expect(screen.queryByText('Admin Page')).not.toBeInTheDocument();
  });
});
