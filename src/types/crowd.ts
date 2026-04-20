// ── Firestore crowd_zones collection ─────────────────────────────────────────

export interface CrowdZone {
  zoneId: string;
  zoneName: string;
  lat: number;
  lng: number;
  /** 0–100 occupancy percentage */
  density: number;
  /** Estimated queue wait time in minutes */
  estimatedWaitMinutes: number;
  /** Suggested lower-density zone to redirect attendees */
  recommendedAlternative: string;
}

/** Demo / seed data — mirrors what should live in Firestore crowd_zones/{zoneId} */
export const FALLBACK_ZONES: CrowdZone[] = [
  { zoneId: 'north-stand',     zoneName: 'North Stand',     lat: 51.5569, lng: -0.2796, density: 88, estimatedWaitMinutes: 12, recommendedAlternative: 'East Wing' },
  { zoneId: 'south-stand',     zoneName: 'South Stand',     lat: 51.5551, lng: -0.2796, density: 54, estimatedWaitMinutes: 4,  recommendedAlternative: 'South Stand' },
  { zoneId: 'east-wing',       zoneName: 'East Wing',       lat: 51.5560, lng: -0.2779, density: 42, estimatedWaitMinutes: 2,  recommendedAlternative: 'East Wing' },
  { zoneId: 'west-wing',       zoneName: 'West Wing',       lat: 51.5560, lng: -0.2813, density: 91, estimatedWaitMinutes: 18, recommendedAlternative: 'East Wing' },
  { zoneId: 'vip-lounge',      zoneName: 'VIP Lounge',      lat: 51.5562, lng: -0.2800, density: 38, estimatedWaitMinutes: 1,  recommendedAlternative: 'VIP Lounge' },
  { zoneId: 'north-concourse', zoneName: 'North Concourse', lat: 51.5575, lng: -0.2796, density: 75, estimatedWaitMinutes: 8,  recommendedAlternative: 'South Concourse' },
  { zoneId: 'south-concourse', zoneName: 'South Concourse', lat: 51.5545, lng: -0.2796, density: 33, estimatedWaitMinutes: 2,  recommendedAlternative: 'South Concourse' },
];

/** Geographic centre of the demo stadium */
export const STADIUM_CENTER = { lat: 51.5560, lng: -0.2796 } as const;

/** Bounds for the GroundOverlay SVG floor plan */
export const STADIUM_OVERLAY_BOUNDS = {
  north: 51.5582,
  south: 51.5538,
  east:  -0.2763,
  west:  -0.2829,
} as const;

// ── WebSocket-based crowd snapshot (existing CrowdMonitor) ────────────────────

export type GateStatus = 'open' | 'busy' | 'closed';

export interface GateData {
  id: string;
  name: string;
  currentCount: number;
  capacity: number;
  status: GateStatus;
}

export interface ZoneOccupancy {
  zoneId: string;
  zoneName: string;
  current: number;
  capacity: number;
  /** 0–100 percentage */
  occupancyPercent: number;
}

export interface CrowdSnapshot {
  stadiumId: string;
  totalAttendees: number;
  stadiumCapacity: number;
  /** 0–100 percentage */
  overallOccupancyPercent: number;
  gates: GateData[];
  zones: ZoneOccupancy[];
  /** ISO 8601 */
  lastUpdated: string;
}

export interface CrowdState {
  snapshot: CrowdSnapshot | null;
  isStreaming: boolean;
  error: string | null;
}
