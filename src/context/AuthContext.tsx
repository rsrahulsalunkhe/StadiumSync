import { createContext, useContext, type ReactNode } from 'react';
import { useAuthStore } from '@/store/authStore';
import { useAuth as useNewAuth } from '@/hooks/useAuth';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import type { User, UserRole, LoginCredentials } from '@/types/auth';

interface AuthContextValue {
  currentUser: User | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  userRole: UserRole | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { loginWithGoogle, logout } = useNewAuth();
  const { user, isLoading, isAuthenticated } = useAuthStore();

  if (isLoading) {
    return (
      <div
        className="flex h-screen items-center justify-center bg-navy-950"
        aria-live="polite"
        aria-busy="true"
        role="status"
      >
        <LoadingSpinner size="lg" label="Loading your session…" />
      </div>
    );
  }

  const currentUser = user ? {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    role: user.role as UserRole,
  } : null;

  const value: AuthContextValue = {
    currentUser,
    userRole: (user?.role as UserRole) || null,
    isLoading,
    isLoggedIn: isAuthenticated,
    login: async () => {}, // Deprecated fallback
    loginWithGoogle,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
}
