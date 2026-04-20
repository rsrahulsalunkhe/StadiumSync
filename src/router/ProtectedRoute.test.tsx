import { describe, it, expect, beforeEach, vi } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { ProtectedRoute } from './ProtectedRoute';
import type { User, UserRole } from '@/types/auth';

const authState = {
  currentUser: null as User | null,
  userRole: null as UserRole | null,
  isLoggedIn: false,
};

vi.mock('@/store/authStore', () => ({
  useAuthStore: () => authState,
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
  authState.currentUser = null;
  authState.userRole = null;
  authState.isLoggedIn = false;
});

describe('ProtectedRoute', () => {
  it('redirects unauthenticated users to login', () => {
    renderProtected('/admin');
    expect(screen.getByText('Login Page')).toBeInTheDocument();
  });

  it('redirects users with wrong role to their home route', () => {
    authState.currentUser = { uid: '1', email: 'a@b.com', displayName: 'User', role: 'attendee' };
    authState.userRole = 'attendee';
    authState.isLoggedIn = true;

    renderProtected('/admin');
    expect(screen.getByText('Attendee Home')).toBeInTheDocument();
  });

  it('renders the protected route for allowed role', () => {
    authState.currentUser = { uid: '1', email: 'a@b.com', displayName: 'Admin', role: 'admin' };
    authState.userRole = 'admin';
    authState.isLoggedIn = true;

    renderProtected('/admin');
    expect(screen.getByText('Admin Page')).toBeInTheDocument();
  });
});
