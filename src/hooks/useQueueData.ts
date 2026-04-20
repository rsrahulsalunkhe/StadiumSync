import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { QueueZone } from '@/types/queue';
import { FALLBACK_QUEUES } from '@/types/queue';

export interface UseQueueDataResult {
  zones: QueueZone[];
  isLoading: boolean;
  /** Non-null when Firestore is unavailable — fallback demo data is shown */
  error: string | null;
}

/**
 * Subscribes to the Firestore `queues` collection via onSnapshot.
 * Falls back to FALLBACK_QUEUES when the collection is empty or unreachable.
 *
 * Firestore document shape expected:
 *   queues/{id} → { id, name, type, waitMinutes, status, currentCount, capacity }
 */
export function useQueueData(): UseQueueDataResult {
  const [zones, setZones] = useState<QueueZone[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const queueRef = collection(db, 'queues');

    const unsubscribe = onSnapshot(
      queueRef,
      (snapshot) => {
        if (snapshot.empty) {
          setZones(FALLBACK_QUEUES);
        } else {
          setZones(snapshot.docs.map((d) => d.data() as QueueZone));
          setError(null);
        }
        setIsLoading(false);
      },
      (err) => {
        console.error('[useQueueData] Firestore error:', err);
        setZones(FALLBACK_QUEUES);
        setError('Live queue data unavailable — showing demo data.');
        setIsLoading(false);
      },
    );

    return unsubscribe;
  }, []);

  return { zones, isLoading, error };
}
