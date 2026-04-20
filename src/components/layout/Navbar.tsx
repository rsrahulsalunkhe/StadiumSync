import { Bell, LogOut, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useNotifications } from '@/hooks/useNotifications';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ROUTES } from '@/router/routes';
import type { UserRole } from '@/types/auth';

interface NavbarProps {
  role: UserRole;
  onMenuToggle: () => void;
  sidebarOpen?: boolean;
}

const roleLabels: Record<UserRole, string> = {
  attendee: 'Attendee',
  staff: 'Staff',
  admin: 'Admin',
};

export function Navbar({ role, onMenuToggle, sidebarOpen = false }: NavbarProps) {
  const { currentUser: user, logout } = useAuth();
  // useNotifications sets up FCM token registration + foreground message handler
  const { unreadCount } = useNotifications();

  return (
    <header
      role="banner"
      className="flex h-16 items-center justify-between border-b border-navy-700 bg-navy-900 px-4 lg:px-6"
    >
      {/* Left: hamburger + brand */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle navigation menu"
          aria-expanded={sidebarOpen}
          aria-controls="sidebar-nav"
          onClick={onMenuToggle}
          className="lg:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </Button>

        <Link
          to={`/${role}`}
          aria-label="StadiumSync home"
          className="flex items-center gap-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon"
        >
          <span className="text-xl font-bold tracking-tight">
            <span className="text-white">Stadium</span>
            <span className="text-neon">Sync</span>
          </span>
        </Link>

        <Badge variant="secondary" className="hidden sm:inline-flex">
          {roleLabels[role]}
        </Badge>
      </div>

      {/* Right: notifications + user */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          asChild
          aria-label={`Notifications${unreadCount > 0 ? `, ${unreadCount} unread` : ''}`}
          className="relative"
        >
          <Link
            to={role === 'attendee' ? ROUTES.ATTENDEE_NOTIFICATIONS : ROUTES.ADMIN_ALERTS}
          >
            <Bell className="h-5 w-5" aria-hidden="true" />
            {unreadCount > 0 && (
              <span
                aria-hidden="true"
                className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-neon text-[10px] font-bold text-navy-950"
              >
                {unreadCount > 9 ? '9+' : unreadCount}
              </span>
            )}
          </Link>
        </Button>

        <div className="hidden items-center gap-2 sm:flex">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt=""
              aria-hidden="true"
              className="h-8 w-8 rounded-full object-cover ring-2 ring-navy-600"
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-700 text-xs font-semibold text-neon ring-2 ring-navy-600"
            >
              {user?.displayName?.[0]?.toUpperCase() ?? '?'}
            </div>
          )}
          <span className="text-sm text-slate-300">{user?.displayName}</span>
        </div>

        <Button
          variant="ghost"
          size="icon"
          aria-label="Sign out"
          onClick={() => void logout()}
        >
          <LogOut className="h-5 w-5" aria-hidden="true" />
        </Button>
      </div>
    </header>
  );
}
