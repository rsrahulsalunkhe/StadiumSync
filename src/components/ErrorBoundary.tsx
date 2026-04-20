import { useRouteError, useNavigate } from 'react-router-dom';

export function ErrorBoundary() {
  const error = useRouteError() as any;
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#070e17] text-slate-200 px-4">
      <div className="mb-8 text-center text-red-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Something went wrong</h1>
        <p className="text-slate-400">An unexpected error occurred in the application.</p>
      </div>

      <div className="w-full max-w-lg rounded-xl bg-[#0f172a] p-6 shadow-xl border border-slate-800 mb-8">
        {import.meta.env.MODE === 'development' && error ? (
          <div className="mb-4 overflow-auto rounded-lg bg-black/50 p-4 text-xs font-mono text-red-400">
            {error.statusText || error.message || String(error)}
            {error.stack && (
              <pre className="mt-4 whitespace-pre-wrap text-slate-400">{error.stack}</pre>
            )}
          </div>
        ) : (
          <p className="text-center text-slate-400">We've been notified and are looking into it.</p>
        )}
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => navigate('/login')}
          className="rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#0f172a] transition-all"
        >
          Go to Login
        </button>
        <button
          onClick={() => window.location.reload()}
          className="rounded-lg bg-slate-800 px-6 py-2.5 text-sm font-semibold text-white border border-slate-700 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-[#0f172a] transition-all"
        >
          Retry
        </button>
      </div>
    </div>
  );
}
