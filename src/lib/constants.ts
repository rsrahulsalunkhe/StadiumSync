export const CROWD_THRESHOLDS = {
  LOW: 30,
  MEDIUM: 60,
  HIGH: 100,
} as const;

export const EXIT_ROUTING_WEIGHTS = {
  CROWD_DENSITY: 0.6,
  DISTANCE: 0.4,
} as const;

export const FIRESTORE_COLLECTIONS = {
  USERS: 'users',
  CROWD_ZONES: 'crowd_zones',
  QUEUES: 'queues',
  TASKS: 'tasks',
  ALERTS: 'alerts',
  INCIDENTS: 'incidents',
} as const;

export const USER_ROLES = {
  ATTENDEE: 'attendee',
  STAFF: 'staff',
  ADMIN: 'admin',
} as const;

export const ROUTE_PATHS = {
  LOGIN: '/login',
  ATTENDEE: '/attendee',
  STAFF: '/staff',
  ADMIN: '/admin',
} as const;
