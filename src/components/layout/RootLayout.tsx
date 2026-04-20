import { Outlet } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';

/**
 * Top-level layout that provides the AuthContext to every child route.
 * Must be rendered inside a Router context (createBrowserRouter guarantees this).
 */
export default function RootLayout() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}
