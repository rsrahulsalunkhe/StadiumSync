importScripts(
  'https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js'
)

// Config is injected by the app when registering the service worker
// See src/hooks/useNotifications.ts for how this is passed
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'FIREBASE_CONFIG') {
    firebase.initializeApp(event.data.config)
    const messaging = firebase.messaging()

    messaging.onBackgroundMessage((payload) => {
      const notificationTitle = payload.notification?.title || 'StadiumSync'
      const notificationOptions = {
        body: payload.notification?.body || '',
        icon: '/icons/icon-192x192.png',
        badge: '/icons/badge-72x72.png',
        data: payload.data,
        tag: `stadiumsync-${payload.data?.severity || 'info'}`,
      }
      self.registration.showNotification(
        notificationTitle,
        notificationOptions
      )
    })
  }
})

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
