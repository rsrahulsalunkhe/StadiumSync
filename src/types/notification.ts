export type NotificationSeverity = 'info' | 'success' | 'warning' | 'error';

export interface Notification {
  id: string;
  title: string;
  message: string;
  severity: NotificationSeverity;
  /** ISO 8601 timestamp */
  timestamp: string;
  read: boolean;
  /** Optional deep-link route */
  href?: string;
}

export interface NotificationState {
  notifications: Notification[];
  unreadCount: number;
}
