// ── Queue / wait-time types ───────────────────────────────────────────────────

export type ZoneType = 'gate' | 'concession' | 'restroom' | 'parking';
export type QueueStatus = 'open' | 'busy' | 'closed';

/** Firestore document shape for the `queues` collection */
export interface QueueZone {
  id: string;
  name: string;
  type: ZoneType;
  /** Live wait time in minutes */
  waitMinutes: number;
  status: QueueStatus;
  /** Current number of people in queue */
  currentCount: number;
  capacity: number;
}

/** Demo seed data shown while Firestore is empty or unreachable */
export const FALLBACK_QUEUES: QueueZone[] = [
  // ── Gates ──────────────────────────────────────────────────────────────────
  { id: 'gate-a', name: 'Gate A',      type: 'gate',       waitMinutes: 8,  status: 'busy',   currentCount: 340, capacity: 500 },
  { id: 'gate-b', name: 'Gate B',      type: 'gate',       waitMinutes: 3,  status: 'open',   currentCount: 120, capacity: 500 },
  { id: 'gate-c', name: 'Gate C',      type: 'gate',       waitMinutes: 14, status: 'busy',   currentCount: 460, capacity: 500 },
  { id: 'gate-d', name: 'Gate D',      type: 'gate',       waitMinutes: 1,  status: 'open',   currentCount: 80,  capacity: 500 },
  // ── Concessions ────────────────────────────────────────────────────────────
  { id: 'ccs-1',  name: 'North Concessions', type: 'concession', waitMinutes: 12, status: 'busy',   currentCount: 95,  capacity: 120 },
  { id: 'ccs-2',  name: 'South Concessions', type: 'concession', waitMinutes: 5,  status: 'open',   currentCount: 40,  capacity: 120 },
  { id: 'ccs-3',  name: 'East Food Court',   type: 'concession', waitMinutes: 3,  status: 'open',   currentCount: 30,  capacity: 100 },
  { id: 'ccs-4',  name: 'West Snack Bar',    type: 'concession', waitMinutes: 22, status: 'busy',   currentCount: 110, capacity: 120 },
  // ── Restrooms ──────────────────────────────────────────────────────────────
  { id: 'wc-1',   name: 'North Restrooms',   type: 'restroom',   waitMinutes: 6,  status: 'busy',   currentCount: 28,  capacity: 40 },
  { id: 'wc-2',   name: 'South Restrooms',   type: 'restroom',   waitMinutes: 2,  status: 'open',   currentCount: 10,  capacity: 40 },
  { id: 'wc-3',   name: 'East Restrooms',    type: 'restroom',   waitMinutes: 0,  status: 'open',   currentCount: 5,   capacity: 40 },
  { id: 'wc-4',   name: 'West Restrooms',    type: 'restroom',   waitMinutes: 15, status: 'closed', currentCount: 0,   capacity: 40 },
  // ── Parking ─────────────────────────────────────────────────────────────────
  { id: 'prk-1',  name: 'Lot A (North)',      type: 'parking',    waitMinutes: 25, status: 'busy',   currentCount: 900, capacity: 1000 },
  { id: 'prk-2',  name: 'Lot B (South)',      type: 'parking',    waitMinutes: 10, status: 'open',   currentCount: 600, capacity: 1000 },
  { id: 'prk-3',  name: 'Lot C (East)',       type: 'parking',    waitMinutes: 5,  status: 'open',   currentCount: 300, capacity: 800 },
];

// ── Exit routing types ────────────────────────────────────────────────────────

/** Stadium sections a user can be seated in */
export type StadiumSection =
  | 'north-stand'
  | 'south-stand'
  | 'east-wing'
  | 'west-wing'
  | 'vip-lounge'
  | 'north-concourse'
  | 'south-concourse';

export const SECTION_LABELS: Record<StadiumSection, string> = {
  'north-stand':     'North Stand',
  'south-stand':     'South Stand',
  'east-wing':       'East Wing',
  'west-wing':       'West Wing',
  'vip-lounge':      'VIP Lounge',
  'north-concourse': 'North Concourse',
  'south-concourse': 'South Concourse',
};

/** Known lat/lng for each section (used as polyline start point) */
export const SECTION_POSITIONS: Record<StadiumSection, { lat: number; lng: number }> = {
  'north-stand':     { lat: 51.5569, lng: -0.2796 },
  'south-stand':     { lat: 51.5551, lng: -0.2796 },
  'east-wing':       { lat: 51.5560, lng: -0.2779 },
  'west-wing':       { lat: 51.5560, lng: -0.2813 },
  'vip-lounge':      { lat: 51.5562, lng: -0.2800 },
  'north-concourse': { lat: 51.5575, lng: -0.2796 },
  'south-concourse': { lat: 51.5545, lng: -0.2796 },
};
