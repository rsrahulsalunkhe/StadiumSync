/**
 * Firebase Cloud Messaging Service Worker
 *
 * Handles background push notifications when the app is not in the foreground.
 *
 * IMPORTANT: Replace the firebaseConfig values below with your actual Firebase
 * project config. Service workers cannot access Vite env variables, so the
 * config must be hardcoded here.
 *
 * These values are safe to expose client-side (they identify the Firebase
 * project but do not grant any privileged access on their own).
 */

importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

// ── Firebase project config — fill in your values ────────────────────────────
const firebaseConfig = {
  apiKey:            self.__FIREBASE_API_KEY__            || 'YOUR_API_KEY',
  authDomain:        self.__FIREBASE_AUTH_DOMAIN__        || 'YOUR_PROJECT.firebaseapp.com',
  projectId:         self.__FIREBASE_PROJECT_ID__         || 'YOUR_PROJECT_ID',
  storageBucket:     self.__FIREBASE_STORAGE_BUCKET__     || 'YOUR_PROJECT.appspot.com',
  messagingSenderId: self.__FIREBASE_MESSAGING_SENDER_ID__ || 'YOUR_SENDER_ID',
  appId:             self.__FIREBASE_APP_ID__             || 'YOUR_APP_ID',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// ── Background message handler ────────────────────────────────────────────────
messaging.onBackgroundMessage((payload) => {
  const title   = payload.notification?.title ?? 'StadiumSync Alert';
  const body    = payload.notification?.body  ?? '';
  const severity = payload.data?.severity ?? 'info';

  const severityIcons = { info: '📢', warning: '⚠️', emergency: '🚨' };
  const icon = severityIcons[severity] ?? '📢';

  self.registration.showNotification(`${icon} ${title}`, {
    body,
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    tag: `stadiumsync-${severity}`,       // replaces older notification of same tag
    renotify: severity === 'emergency',   // vibrate again for emergencies
    requireInteraction: severity === 'emergency',
    data: {
      url: '/',                           // URL to open on notification click
      ...payload.data,
    },
  });
});

// ── Notification click → open/focus app ──────────────────────────────────────
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url ?? '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      for (const client of windowClients) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    }),
  );
});
