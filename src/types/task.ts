// ── Task / Kanban types ───────────────────────────────────────────────────────

export type TaskStatus   = 'unassigned' | 'in-progress' | 'resolved';
export type TaskPriority = 'high' | 'medium' | 'low';

/** Firestore document shape for the `tasks` collection */
export interface StaffTask {
  id: string;
  title: string;
  /** Venue zone e.g. "Gate A", "North Concessions" */
  zone: string;
  priority: TaskPriority;
  /** Display name of the assigned staff member, or null when unassigned */
  assignedTo: string | null;
  status: TaskStatus;
  createdAt: string;
}

export const COLUMN_ORDER: TaskStatus[] = ['unassigned', 'in-progress', 'resolved'];

export const COLUMN_LABELS: Record<TaskStatus, string> = {
  'unassigned':  'Unassigned',
  'in-progress': 'In Progress',
  'resolved':    'Resolved',
};

export const PRIORITY_STYLES: Record<TaskPriority, string> = {
  high:   'bg-red-500/20    text-red-400    border border-red-500/30',
  medium: 'bg-amber-500/20  text-amber-400  border border-amber-500/30',
  low:    'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
};

export const PRIORITY_LABEL: Record<TaskPriority, string> = {
  high:   'High',
  medium: 'Medium',
  low:    'Low',
};

export const ZONE_OPTIONS: string[] = [
  'Gate A', 'Gate B', 'Gate C', 'Gate D',
  'North Concessions', 'South Concessions', 'East Food Court', 'West Snack Bar',
  'North Restrooms', 'South Restrooms',
  'Lot A (North)', 'Lot B (South)',
  'Medical Bay', 'Control Room', 'VIP Lounge',
];

/** Demo seed data shown while Firestore is empty or unreachable */
export const FALLBACK_TASKS: StaffTask[] = [
  {
    id: 'task-1',
    title: 'Crowd buildup at Gate A — need extra staff',
    zone: 'Gate A',
    priority: 'high',
    assignedTo: null,
    status: 'unassigned',
    createdAt: new Date(Date.now() - 10 * 60_000).toISOString(),
  },
  {
    id: 'task-2',
    title: 'Concession till malfunction — cash only',
    zone: 'North Concessions',
    priority: 'medium',
    assignedTo: 'Jamie Wells',
    status: 'in-progress',
    createdAt: new Date(Date.now() - 25 * 60_000).toISOString(),
  },
  {
    id: 'task-3',
    title: 'Restroom cleaning required — spill reported',
    zone: 'North Restrooms',
    priority: 'low',
    assignedTo: 'Sam Okafor',
    status: 'in-progress',
    createdAt: new Date(Date.now() - 40 * 60_000).toISOString(),
  },
  {
    id: 'task-4',
    title: 'Lost property: black jacket, Gate C turnstile',
    zone: 'Gate C',
    priority: 'low',
    assignedTo: null,
    status: 'unassigned',
    createdAt: new Date(Date.now() - 5 * 60_000).toISOString(),
  },
  {
    id: 'task-5',
    title: 'Medical assistance — Row 12, Block B',
    zone: 'Medical Bay',
    priority: 'high',
    assignedTo: 'Dr. Priya Nair',
    status: 'in-progress',
    createdAt: new Date(Date.now() - 15 * 60_000).toISOString(),
  },
  {
    id: 'task-6',
    title: 'Parking overflow — redirect to Lot C',
    zone: 'Lot A (North)',
    priority: 'medium',
    assignedTo: 'Chris Lam',
    status: 'resolved',
    createdAt: new Date(Date.now() - 60 * 60_000).toISOString(),
  },
  {
    id: 'task-7',
    title: 'VIP section access dispute resolved',
    zone: 'VIP Lounge',
    priority: 'high',
    assignedTo: 'Anya Patel',
    status: 'resolved',
    createdAt: new Date(Date.now() - 90 * 60_000).toISOString(),
  },
];
