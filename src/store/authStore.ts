import { create } from 'zustand';

interface AuthState {
  user: {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    role: 'attendee' | 'staff' | 'admin';
  } | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  setUser: (user: AuthState['user']) => void;
  setLoading: (loading: boolean) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setLoading: (isLoading) => set({ isLoading }),
  clearUser: () => set({ user: null, isAuthenticated: false }),
}));
