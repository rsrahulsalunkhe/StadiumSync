import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Alert } from '@/types/alert';
import { FALLBACK_ALERTS } from '@/types/alert';

export interface UseAlertsResult {
  alerts: Alert[];
  isLoading: boolean;
  error: string | null;
}

/**
 * Subscribes to the Firestore `alerts` collection (most recent 100).
 * Falls back to FALLBACK_ALERTS when empty or unreachable.
 */
export function useAlerts(): UseAlertsResult {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const q = query(
      collection(db, 'alerts'),
      orderBy('sentAt', 'desc'),
      limit(100),
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        if (snapshot.empty) {
          setAlerts(FALLBACK_ALERTS);
        } else {
          setAlerts(snapshot.docs.map((d) => d.data() as Alert));
          setError(null);
        }
        setIsLoading(false);
      },
      (err) => {
        console.error('[useAlerts] Firestore error:', err);
        setAlerts(FALLBACK_ALERTS);
        setError('Live alert data unavailable — showing demo data.');
        setIsLoading(false);
      },
    );

    return unsubscribe;
  }, []);

  return { alerts, isLoading, error };
}
