import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col items-center justify-center gap-6 bg-navy-950 px-4 text-center"
      aria-labelledby="not-found-heading"
      tabIndex={-1}
    >
      <Compass className="h-16 w-16 text-neon animate-pulse-neon" aria-hidden="true" />

      <div>
        <p className="text-6xl font-extrabold text-neon" aria-hidden="true">
          404
        </p>
        <h1 id="not-found-heading" className="mt-2 text-2xl font-bold text-white">
          Page not found
        </h1>
        <p className="mt-2 text-slate-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>

      <Button asChild>
        <Link to="/login">Back to sign in</Link>
      </Button>
    </main>
  );
}
