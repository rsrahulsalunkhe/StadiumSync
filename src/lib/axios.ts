import axios, {
  type AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';
import toast from 'react-hot-toast';
import { auth } from '@/lib/firebase';

const BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 15_000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// ── Request interceptor: attach Firebase ID token ─────────────────────────────
apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const fbUser = auth.currentUser;
    if (fbUser) {
      // getIdToken() returns a cached token and auto-refreshes when within 5 min of expiry
      const idToken = await fbUser.getIdToken();
      config.headers.Authorization = `Bearer ${idToken}`;
    }
    return config;
  },
  (error: unknown) => Promise.reject(error),
);

// ── Response interceptor: surface errors as toasts ────────────────────────────
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        // Firebase token is invalid/expired — sign out
        const { signOut } = await import('firebase/auth');
        const { useAuthStore } = await import('@/store/authStore');
        await signOut(auth);
        useAuthStore.getState().clearAuth();
        toast.error('Session expired. Please sign in again.', { id: '401-error' });
      } else if (status === 403) {
        toast.error("You don't have permission to perform this action.", { id: '403-error' });
      } else if (status >= 500) {
        toast.error('Server error. Something went wrong — try again later.', { id: '5xx-error' });
      }
    }

    return Promise.reject(error);
  },
);

export default apiClient;
