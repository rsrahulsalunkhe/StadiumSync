import { doc, setDoc } from 'firebase/firestore';
import { Bell, BellOff, CheckCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { db } from '@/lib/firebase';
import { useNotificationStore } from '@/store/notificationStore';
import { useAuth } from '@/hooks/useAuth';
import type { Notification, NotificationSeverity } from '@/types/notification';

// ── Severity display ──────────────────────────────────────────────────────────

const SEV_ICON: Record<NotificationSeverity, string> = {
  info:    '📢',
  success: '✅',
  warning: '⚠️',
  error:   '🚨',
};

const SEV_BADGE: Record<NotificationSeverity, 'default' | 'warning' | 'destructive' | 'success'> = {
  info:    'default',
  success: 'success',
  warning: 'warning',
  error:   'destructive',
};

const SEV_LABEL: Record<NotificationSeverity, string> = {
  info:    'Info',
  success: 'Success',
  warning: 'Warning',
  error:   'Emergency',
};

// ── Relative time ─────────────────────────────────────────────────────────────

function relativeTime(iso: string): string {
  const ms = Date.now() - new Date(iso).getTime();
  const min = Math.floor(ms / 60_000);
  if (min < 1)  return 'Just now';
  if (min < 60) return `${min}m ago`;
  const h = Math.floor(min / 60);
  if (h < 24)   return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function NotificationsPage() {
  const { currentUser } = useAuth();
  const { notifications, markAsRead, markAllAsRead, unreadCount } = useNotificationStore();

  async function handleMarkAsRead(notification: Notification) {
    if (notification.read) return;

    // Update Zustand immediately
    markAsRead(notification.id);

    // Persist read state to Firestore (fire-and-forget)
    if (currentUser) {
      setDoc(
        doc(db, 'user_notifications', currentUser.uid, 'items', notification.id),
        { id: notification.id, read: true, readAt: new Date().toISOString() },
        { merge: true },
      ).catch((err: unknown) => {
        console.warn('[NotificationsPage] Firestore write failed:', err);
      });
    }
  }

  async function handleMarkAllAsRead() {
    markAllAsRead();

    if (currentUser && notifications.some((n) => !n.read)) {
      // Batch write all unread notifications as read
      const unread = notifications.filter((n) => !n.read);
      const now = new Date().toISOString();
      await Promise.allSettled(
        unread.map((n) =>
          setDoc(
            doc(db, 'user_notifications', currentUser.uid, 'items', n.id),
            { id: n.id, read: true, readAt: now },
            { merge: true },
          ),
        ),
      );
    }
  }

  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Bell className="h-6 w-6 text-neon" aria-hidden="true" />
            Notifications
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            {unreadCount > 0
              ? `${unreadCount} unread notification${unreadCount !== 1 ? 's' : ''}`
              : 'All caught up!'}
          </p>
        </div>

        {unreadCount > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleMarkAllAsRead}
            aria-label="Mark all notifications as read"
          >
            <CheckCheck className="mr-2 h-4 w-4" aria-hidden="true" />
            Mark all read
          </Button>
        )}
      </div>

      {/* Notification list */}
      {notifications.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center gap-3 rounded-xl border border-navy-700 bg-navy-800/50 py-20 text-center"
          aria-live="polite"
        >
          <BellOff className="h-8 w-8 text-slate-600" aria-hidden="true" />
          <div>
            <p className="font-medium text-slate-400">No notifications yet</p>
            <p className="text-sm text-slate-500 mt-0.5">
              Stadium alerts will appear here in real time.
            </p>
          </div>
        </div>
      ) : (
        <ul
          role="list"
          aria-label="Notification list"
          aria-live="polite"
          className="flex flex-col gap-2"
        >
          {notifications.map((notif) => (
            <li key={notif.id}>
              <button
                type="button"
                onClick={() => void handleMarkAsRead(notif)}
                className={cn(
                  'w-full rounded-xl border p-4 text-left transition-colors duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950',
                  notif.read
                    ? 'border-navy-700 bg-navy-800/40 opacity-60'
                    : 'border-navy-600 bg-navy-800 hover:border-navy-500',
                )}
                aria-label={`${notif.read ? '' : 'Unread: '}${notif.title} — ${notif.message}`}
              >
                <div className="flex items-start gap-3">
                  {/* Severity icon */}
                  <span className="text-xl shrink-0 mt-0.5" aria-hidden="true">
                    {SEV_ICON[notif.severity]}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        {/* Unread dot */}
                        {!notif.read && (
                          <span
                            className="h-2 w-2 shrink-0 rounded-full bg-neon"
                            aria-label="Unread"
                          />
                        )}
                        <p className={cn(
                          'text-sm truncate',
                          notif.read ? 'text-slate-400 font-normal' : 'text-white font-semibold',
                        )}>
                          {notif.title}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <Badge variant={SEV_BADGE[notif.severity]} className="text-[10px]">
                          {SEV_LABEL[notif.severity]}
                        </Badge>
                      </div>
                    </div>

                    <p className="mt-1 text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {notif.message}
                    </p>

                    <time
                      dateTime={notif.timestamp}
                      className="mt-1.5 block text-[11px] text-slate-500"
                    >
                      {relativeTime(notif.timestamp)}
                    </time>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
