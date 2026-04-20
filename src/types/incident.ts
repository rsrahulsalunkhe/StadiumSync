// ── Incident reporting types ──────────────────────────────────────────────────

export type IncidentType =
  | 'medical'
  | 'security'
  | 'fire'
  | 'crowd-surge'
  | 'infrastructure'
  | 'other';

export type IncidentStatus = 'open' | 'investigating' | 'resolved';

/** Firestore document shape for the `incidents` collection */
export interface Incident {
  id: string;
  type: IncidentType;
  /** Zone / location name */
  location: string;
  description: string;
  /** Firebase Storage download URL — absent when no photo was uploaded */
  photoUrl?: string;
  /** UID of the attendee who filed the report */
  reportedBy: string;
  createdAt: string;
  status: IncidentStatus;
}

export const INCIDENT_TYPE_LABELS: Record<IncidentType, string> = {
  medical:        'Medical Emergency',
  security:       'Security Concern',
  fire:           'Fire / Smoke',
  'crowd-surge':  'Crowd Surge',
  infrastructure: 'Infrastructure Damage',
  other:          'Other',
};

export const INCIDENT_LOCATION_OPTIONS: string[] = [
  'Gate A', 'Gate B', 'Gate C', 'Gate D',
  'North Stand',  'South Stand',  'East Wing',  'West Wing',
  'North Concessions', 'South Concessions',
  'North Restrooms',   'South Restrooms',
  'Lot A (North)',     'Lot B (South)',
  'VIP Lounge',        'Medical Bay',
  'Concourse', 'Pitch-side',
];
