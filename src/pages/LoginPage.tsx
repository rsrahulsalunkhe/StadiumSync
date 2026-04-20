import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuth } from '@/hooks/useAuth';
import { useAuthStore } from '@/store/authStore';

// ── Google wordmark SVG ───────────────────────────
function GoogleIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
        fill="#4285F4"
      />
      <path
        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
        fill="#34A853"
      />
      <path
        d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
        fill="#FBBC05"
      />
      <path
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
        fill="#EA4335"
      />
    </svg>
  );
}

// ── Loading Spinner ───────────────────────────
function Spinner() {
  return (
    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
}

export default function LoginPage() {
  const { loginWithGoogle } = useAuth();
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleGoogleLogin = async () => {
    setIsRedirecting(true);
    await loginWithGoogle();
    // Page will redirect — spinner stays visible during navigation
  };

  const handleDevLogin = (role: 'attendee' | 'staff' | 'admin') => {
    const mockUsers = {
      attendee: { uid: 'dev-attendee-001', email: 'attendee@dev.com', displayName: 'Dev Attendee', photoURL: '', role: 'attendee' as const },
      staff: { uid: 'dev-staff-001', email: 'staff@dev.com', displayName: 'Dev Staff', photoURL: '', role: 'staff' as const },
      admin: { uid: 'dev-admin-001', email: 'admin@dev.com', displayName: 'Dev Admin', photoURL: '', role: 'admin' as const },
    };
    
    setUser(mockUsers[role]);
    navigate(`/${role}`);
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#070e17] text-slate-200 px-4">
        {/* Brand */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl mb-2">
            <span className="text-white">Stadium</span>
            <span className="text-emerald-500">Sync</span>
          </h1>
          <p className="text-slate-400">Your ultimate sports event companion</p>
        </div>

        {/* Card */}
        <div className="w-full max-w-md rounded-2xl bg-[#0f172a] p-8 shadow-2xl border border-slate-800">
          <h2 className="text-xl font-semibold text-center mb-6 text-white">Sign In</h2>
          
          <button
            onClick={handleGoogleLogin}
            disabled={isRedirecting}
            className="w-full flex items-center justify-center gap-3 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#0f172a] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isRedirecting ? (
              <Spinner />
            ) : (
              <GoogleIcon />
            )}
            {isRedirecting ? 'Redirecting to Google...' : 'Continue with Google'}
          </button>

          {import.meta.env.MODE === 'development' && (
            <div className="mt-8">
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-[#0f172a] px-2 text-slate-400">── Dev Login ──</span>
                </div>
              </div>
              
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => handleDevLogin('attendee')}
                  className="px-3 py-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-white rounded-md transition-colors"
                >
                  👤 Attendee
                </button>
                <button
                  onClick={() => handleDevLogin('staff')}
                  className="px-3 py-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-white rounded-md transition-colors"
                >
                  🔧 Staff
                </button>
                <button
                  onClick={() => handleDevLogin('admin')}
                  className="px-3 py-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-white rounded-md transition-colors"
                >
                  ⚙️ Admin
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
