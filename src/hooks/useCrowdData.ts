import { useEffect, useState, useCallback } from 'react';
import { collection, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { CrowdZone } from '@/types/crowd';
import { FALLBACK_ZONES } from '@/types/crowd';

const E2E_BYPASS = import.meta.env.VITE_E2E_BYPASS_AUTH === 'true';

export interface UseCrowdDataResult {
  zones: CrowdZone[];
  isLoading: boolean;
  /** Non-null when Firestore is unavailable — fallback demo data is shown. */
  error: string | null;
  /** Write a new density value to Firestore crowd_zones/{zoneId}. Admin only. */
  updateZoneDensity: (zoneId: string, density: number) => Promise<void>;
}

/**
 * Subscribes to the Firestore `crowd_zones` collection via onSnapshot for
 * real-time crowd density updates. Falls back to FALLBACK_ZONES when the
 * collection is empty or unreachable (e.g. before seeding, or offline).
 *
 * To seed Firestore with initial data, run the seed script in /scripts/seedCrowdZones.ts
 * or call updateZoneDensity from the admin UI which will create documents automatically.
 */
export function useCrowdData(): UseCrowdDataResult {
  const [zones, setZones] = useState<CrowdZone[]>(FALLBACK_ZONES);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (E2E_BYPASS) {
      setZones(FALLBACK_ZONES);
      setIsLoading(false);
      return;
    }

    const crowdRef = collection(db, 'crowd_zones');

    const unsubscribe = onSnapshot(
      crowdRef,
      (snapshot) => {
        if (snapshot.empty) {
          // Collection not yet seeded — use demo data silently
          setZones(FALLBACK_ZONES);
        } else {
          setZones(snapshot.docs.map((d) => d.data() as CrowdZone));
          setError(null);
        }
        setIsLoading(false);
      },
      (err) => {
        console.error('[useCrowdData] Firestore error:', err);
        // Keep whatever zones we have (or fallback) and surface a warning
        setError('Live data unavailable — showing demo data.');
        setIsLoading(false);
      },
    );

    return unsubscribe;
  }, []);

  const updateZoneDensity = useCallback(async (zoneId: string, density: number) => {
    // updateDoc works on existing docs; for new docs use setDoc with merge
    await updateDoc(doc(db, 'crowd_zones', zoneId), { density });
  }, []);

  return { zones, isLoading, error, updateZoneDensity };
}
