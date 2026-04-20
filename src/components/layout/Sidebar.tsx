import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Ticket,
  ScanLine,
  Users,
  BarChart3,
  Map,
  Clock,
  ClipboardList,
  Bell,
  Megaphone,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/router/routes';
import type { UserRole } from '@/types/auth';

interface NavItem {
  label: string;
  path: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const NAV_ITEMS: Record<UserRole, NavItem[]> = {
  attendee: [
    { label: 'Dashboard',       path: ROUTES.ATTENDEE_DASHBOARD,      Icon: LayoutDashboard },
    { label: 'My Tickets',      path: ROUTES.ATTENDEE_TICKETS,        Icon: Ticket },
    { label: 'Stadium Map',     path: ROUTES.ATTENDEE_HEATMAP,        Icon: Map },
    { label: 'Queues',          path: ROUTES.ATTENDEE_QUEUE,          Icon: Clock },
    { label: 'Notifications',   path: ROUTES.ATTENDEE_NOTIFICATIONS,  Icon: Bell },
  ],
  staff: [
    { label: 'Dashboard',     path: ROUTES.STAFF_DASHBOARD, Icon: LayoutDashboard },
    { label: 'Entry Scanner', path: ROUTES.STAFF_SCANNER,   Icon: ScanLine },
    { label: 'Task Board',    path: ROUTES.STAFF_TASKS,     Icon: ClipboardList },
  ],
  admin: [
    { label: 'Dashboard',       path: ROUTES.ADMIN_DASHBOARD, Icon: LayoutDashboard },
    { label: 'User Management', path: ROUTES.ADMIN_USERS,     Icon: Users },
    { label: 'Crowd Monitor',   path: ROUTES.ADMIN_CROWD,     Icon: BarChart3 },
    { label: 'Crowd Heatmap',   path: ROUTES.ADMIN_HEATMAP,   Icon: Map },
    { label: 'Task Board',      path: ROUTES.STAFF_TASKS,     Icon: ClipboardList },
    { label: 'Broadcast Alerts', path: ROUTES.ADMIN_ALERTS,   Icon: Megaphone },
  ],
};

interface SidebarProps {
  role: UserRole;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ role, isOpen, onClose }: SidebarProps) {
  const items = NAV_ITEMS[role];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar panel */}
      <nav
        id="sidebar-nav"
        aria-label="Primary navigation"
        className={cn(
          // Layout
          'fixed left-0 top-0 z-40 flex h-full w-64 flex-col',
          'border-r border-navy-700 bg-navy-900 pt-16',
          // Transition
          'transition-transform duration-200 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          // Always visible on large screens
          'lg:translate-x-0 lg:static lg:z-auto lg:pt-0',
        )}
      >
        {/* Close button (mobile only) */}
        <div className="flex items-center justify-between border-b border-navy-700 px-4 py-3 lg:hidden">
          <span className="text-sm font-semibold text-slate-300">Menu</span>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close navigation menu"
            onClick={onClose}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>

        {/* Nav links */}
        <ul role="list" className="flex flex-col gap-1 p-3">
          {items.map(({ label, path, Icon }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={onClose}
                aria-current={({ isActive }: { isActive: boolean }) => isActive ? 'page' : undefined}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900',
                    isActive
                      ? 'bg-neon/10 text-neon'
                      : 'text-slate-400 hover:bg-navy-800 hover:text-slate-100',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      className={cn('h-5 w-5 shrink-0', isActive ? 'text-neon' : '')}
                      aria-hidden="true"
                    />
                    <span>{label}</span>
                    {isActive && <span className="sr-only">(current page)</span>}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
