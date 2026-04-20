import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { router } from '@/router';
import { ToastProvider, ToastViewport } from '@/components/ui/toast';

export default function App() {
  return (
    <ToastProvider>
      <RouterProvider router={router} />
      <ToastViewport />
      {/* react-hot-toast for auth error notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#0f172a', // navy-900
            color: '#e2e8f0',      // slate-200
            border: '1px solid #1e293b',
          },
          error: {
            iconTheme: { primary: '#f87171', secondary: '#0f172a' },
          },
          success: {
            iconTheme: { primary: '#34d399', secondary: '#0f172a' },
          },
        }}
      />
    </ToastProvider>
  );
}
