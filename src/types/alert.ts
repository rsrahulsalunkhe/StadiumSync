// ── Broadcast alert types ─────────────────────────────────────────────────────

export type AlertSeverity = 'info' | 'warning' | 'emergency';

/** Firestore document shape for the `alerts` collection */
export interface Alert {
  id: string;
  title: string;
  message: string;
  severity: AlertSeverity;
  /** Zone names targeted by this alert — ['All Zones'] for stadium-wide */
  targetZones: string[];
  /** Display name of the admin who sent the alert */
  sentBy: string;
  sentByUid: string;
  /** ISO timestamp when the alert was sent */
  sentAt: string;
  /** ISO timestamp for scheduled delivery — absent if sent immediately */
  scheduledAt?: string;
  /** Whether the FCM push was dispatched successfully */
  fcmSent: boolean;
}

export const SEVERITY_STYLES: Record<AlertSeverity, string> = {
  info:      'bg-blue-500/20    text-blue-400    border border-blue-500/30',
  warning:   'bg-orange-500/20  text-orange-400  border border-orange-500/30',
  emergency: 'bg-red-500/20     text-red-400     border border-red-500/30',
};

export const SEVERITY_LABEL: Record<AlertSeverity, string> = {
  info:      'Info',
  warning:   'Warning',
  emergency: 'Emergency',
};

/** Zones available for broadcast targeting */
export const ALERT_ZONE_OPTIONS: string[] = [
  'All Zones',
  'Gate A', 'Gate B', 'Gate C', 'Gate D',
  'North Stand', 'South Stand', 'East Wing', 'West Wing',
  'North Concessions', 'South Concessions', 'East Food Court',
  'North Restrooms', 'South Restrooms',
  'Lot A (North)', 'Lot B (South)', 'Lot C (East)',
  'VIP Lounge', 'Medical Bay', 'Control Room',
];

/** Fallback data when Firestore is empty / unreachable */
export const FALLBACK_ALERTS: Alert[] = [
  {
    id: 'alert-1',
    title: 'West Wing at 90% capacity',
    message: 'Please direct new arrivals to East Wing. Extra staff deployed.',
    severity: 'warning',
    targetZones: ['West Wing', 'Gate C', 'Gate D'],
    sentBy: 'Admin User',
    sentByUid: 'admin-001',
    sentAt: new Date(Date.now() - 15 * 60_000).toISOString(),
    fcmSent: true,
  },
  {
    id: 'alert-2',
    title: 'Match kick-off in 30 minutes',
    message: 'All gates are now open. Please proceed to your seats.',
    severity: 'info',
    targetZones: ['All Zones'],
    sentBy: 'Admin User',
    sentByUid: 'admin-001',
    sentAt: new Date(Date.now() - 35 * 60_000).toISOString(),
    fcmSent: true,
  },
  {
    id: 'alert-3',
    title: 'Emergency evacuation drill — North Stand',
    message: 'This is a drill. Please follow steward instructions calmly.',
    severity: 'emergency',
    targetZones: ['North Stand', 'Gate A', 'Gate B'],
    sentBy: 'Admin User',
    sentByUid: 'admin-001',
    sentAt: new Date(Date.now() - 90 * 60_000).toISOString(),
    fcmSent: true,
  },
];
