import { create } from 'zustand';
import type { Notification, NotificationSeverity } from '@/types/notification';

interface NotificationStore {
  notifications: Notification[];
  unreadCount: number;

  // Actions
  addNotification: (
    payload: Omit<Notification, 'id' | 'timestamp' | 'read'>,
  ) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  removeNotification: (id: string) => void;
  clearAll: () => void;
  /** Convenience helper used by interceptors / error boundaries */
  notify: (
    title: string,
    message: string,
    severity?: NotificationSeverity,
  ) => void;
}

let idCounter = 0;
const genId = () => `notif-${++idCounter}-${Date.now()}`;

export const useNotificationStore = create<NotificationStore>()((set, get) => ({
  notifications: [],
  unreadCount: 0,

  addNotification: (payload) => {
    const notification: Notification = {
      ...payload,
      id: genId(),
      timestamp: new Date().toISOString(),
      read: false,
    };
    set((state) => ({
      notifications: [notification, ...state.notifications].slice(0, 50),
      unreadCount: state.unreadCount + 1,
    }));
  },

  markAsRead: (id) =>
    set((state) => {
      const target = state.notifications.find((n) => n.id === id);
      if (!target || target.read) return state;
      return {
        notifications: state.notifications.map((n) =>
          n.id === id ? { ...n, read: true } : n,
        ),
        unreadCount: Math.max(0, state.unreadCount - 1),
      };
    }),

  markAllAsRead: () =>
    set((state) => ({
      notifications: state.notifications.map((n) => ({ ...n, read: true })),
      unreadCount: 0,
    })),

  removeNotification: (id) =>
    set((state) => {
      const target = state.notifications.find((n) => n.id === id);
      return {
        notifications: state.notifications.filter((n) => n.id !== id),
        unreadCount: target?.read
          ? state.unreadCount
          : Math.max(0, state.unreadCount - 1),
      };
    }),

  clearAll: () => set({ notifications: [], unreadCount: 0 }),

  notify: (title, message, severity = 'info') => {
    get().addNotification({ title, message, severity });
  },
}));
