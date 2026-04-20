import type { UserRole } from '@/types/auth';

export interface AppRoute {
  path: string;
  label: string;
  roles: UserRole[];
  icon?: string;
}

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  UNAUTHORIZED: '/unauthorized',
  PROFILE: '/profile',

  // Attendee
  ATTENDEE_DASHBOARD: '/attendee',
  ATTENDEE_TICKETS: '/attendee/tickets',
  ATTENDEE_HEATMAP: '/attendee/heatmap',
  ATTENDEE_QUEUE: '/attendee/queue',

  // Staff
  STAFF_DASHBOARD: '/staff',
  STAFF_SCANNER: '/staff/scanner',
  STAFF_TASKS: '/staff/tasks',

  // Attendee notifications
  ATTENDEE_NOTIFICATIONS: '/attendee/notifications',

  // Admin
  ADMIN_DASHBOARD: '/admin',
  ADMIN_USERS: '/admin/users',
  ADMIN_CROWD: '/admin/crowd',
  ADMIN_HEATMAP: '/admin/heatmap',
  ADMIN_ALERTS: '/admin/alerts',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

/** Default landing path per role */
export const ROLE_HOME: Record<UserRole, RoutePath> = {
  attendee: ROUTES.ATTENDEE_DASHBOARD,
  staff: ROUTES.STAFF_DASHBOARD,
  admin: ROUTES.ADMIN_DASHBOARD,
};
