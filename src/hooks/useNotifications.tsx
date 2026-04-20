import { useEffect, useRef } from 'react';
import { getToken, onMessage } from 'firebase/messaging';
import { doc, updateDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { db } from '@/lib/firebase';
import { getMessagingInstance } from '../lib/firebase';
import { useNotificationStore } from '@/store/notificationStore';
import { useAuth } from '@/hooks/useAuth';
import type { AlertSeverity } from '@/types/alert';
import type { NotificationSeverity } from '@/types/notification';

// ── Severity mapping ──────────────────────────────────────────────────────────

function mapToNotifSeverity(s: AlertSeverity): NotificationSeverity {
  if (s === 'emergency') return 'error';
  return s; // 'info' | 'warning' pass through
}

// ── Custom toast renderers per severity ───────────────────────────────────────

const TOAST_STYLES: Record<AlertSeverity, { border: string; bg: string; text: string }> = {
  info:      { border: 'border-blue-500/50',   bg: 'bg-blue-950/90',   text: 'text-blue-300' },
  warning:   { border: 'border-orange-500/50', bg: 'bg-orange-950/90', text: 'text-orange-300' },
  emergency: { border: 'border-red-500/50',    bg: 'bg-red-950/90',    text: 'text-red-300' },
};

const TOAST_ICON: Record<AlertSeverity, string> = {
  info:      '📢',
  warning:   '⚠️',
  emergency: '🚨',
};

function showAlertToast(title: string, message: string, severity: AlertSeverity) {
  const { border, bg, text } = TOAST_STYLES[severity];
  const icon = TOAST_ICON[severity];

  toast.custom(
    () => (
      <div
        role="alert"
        aria-live={severity === 'emergency' ? 'assertive' : 'polite'}
        className={`flex max-w-sm items-start gap-3 rounded-xl border p-4 shadow-2xl backdrop-blur-sm ${border} ${bg}`}
      >
        <span className="text-xl shrink-0 mt-0.5" aria-hidden="true">{icon}</span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white truncate">{title}</p>
          <p className={`mt-0.5 text-xs leading-relaxed line-clamp-2 ${text}`}>{message}</p>
        </div>
      </div>
    ),
    {
      duration: severity === 'emergency' ? Infinity : 6000,
      id: `alert-${severity}-${Date.now()}`,
      position: 'top-right',
    },
  );
}

// ── Hook ──────────────────────────────────────────────────────────────────────

/**
 * Handles:
 *   1. FCM device token registration (on login, once per session).
 *   2. Foreground push message handler → Zustand store + styled toast.
 *
 * Must be called inside a component that is mounted for the entire session
 * (e.g. AppLayout). Safe to call from multiple components — the setup effect
 * guards against re-running if the user hasn't changed.
 */
export function useNotifications() {
  const { currentUser } = useAuth();
  const store = useNotificationStore();
  const registeredUid = useRef<string | null>(null);

  useEffect(() => {
    // Only run once per user session; skip if already registered for this uid
    if (!currentUser || registeredUid.current === currentUser.uid) return;

    let cleanupFcm: (() => void) | undefined;

    const setup = async () => {
      try {
        const messaging = await getMessagingInstance();
        if (!messaging) {
          console.warn('FCM not supported in this browser — skipping notifications');
          return;
        }

        // Request browser notification permission
        const permission = await Notification.requestPermission();
        if (permission !== 'granted') return;

        // Register the service worker and get FCM token
        const registration = await navigator.serviceWorker.register(
          '/firebase-messaging-sw.js',
          { scope: '/' },
        );

        const vapidKey = import.meta.env.VITE_FIREBASE_VAPID_KEY as string | undefined;

        // exactOptionalPropertyTypes: only include vapidKey when it has a value
        const tokenOptions = vapidKey
          ? { vapidKey, serviceWorkerRegistration: registration }
          : { serviceWorkerRegistration: registration };

        const token = await getToken(messaging, tokenOptions);

        if (token) {
          // Persist FCM token to user's Firestore doc so Cloud Run can target it
          await updateDoc(doc(db, 'users', currentUser.uid), { fcmToken: token });
          registeredUid.current = currentUser.uid;
        }

        // Listen for foreground messages
        cleanupFcm = onMessage(messaging, (payload) => {
          const title    = payload.notification?.title ?? 'StadiumSync Alert';
          const message  = payload.notification?.body  ?? '';
          const severity = (payload.data?.['severity'] as AlertSeverity | undefined) ?? 'info';

          store.addNotification({
            title,
            message,
            severity: mapToNotifSeverity(severity),
          });

          showAlertToast(title, message, severity);
        });
      } catch (err) {
        // FCM setup is best-effort — silent fail so app still works without notifications
        console.warn('[useNotifications] FCM setup failed:', err);
      }
    };

    setup();
    return () => cleanupFcm?.();
  }, [currentUser, store]);

  // Convenience API that components can consume
  return {
    notifications:  store.notifications,
    unreadCount:    store.unreadCount,
    markAsRead:     store.markAsRead,
    markAllAsRead:  store.markAllAsRead,
    removeNotification: store.removeNotification,
    notify:         store.notify,
    showAlertToast,
  };
}
