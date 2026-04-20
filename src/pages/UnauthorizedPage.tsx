import { useNavigate } from 'react-router-dom';
import { ShieldOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { ROLE_HOME } from '@/router/routes';

export default function UnauthorizedPage() {
  const navigate = useNavigate();
  const { currentUser, userRole, logout } = useAuth();

  const handleGoHome = () => {
    if (currentUser && userRole) {
      void navigate(ROLE_HOME[userRole], { replace: true });
    } else {
      void navigate('/login', { replace: true });
    }
  };

  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col items-center justify-center gap-6 bg-navy-950 px-4 text-center"
      aria-labelledby="unauthorized-heading"
      tabIndex={-1}
    >
      <ShieldOff className="h-16 w-16 text-red-500" aria-hidden="true" />

      <div>
        <h1
          id="unauthorized-heading"
          className="text-2xl font-bold text-white"
        >
          Access Denied
        </h1>
        <p className="mt-2 text-slate-400">
          You don't have permission to view this page.
        </p>
      </div>

      <div className="flex gap-3">
        <Button onClick={handleGoHome}>Go to my dashboard</Button>
        <Button variant="outline" onClick={() => void logout()}>
          Sign out
        </Button>
      </div>
    </main>
  );
}
