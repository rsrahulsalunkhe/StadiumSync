import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useTaskStore } from '@/store/taskStore';
import type { StaffTask } from '@/types/task';
import { FALLBACK_TASKS } from '@/types/task';

const E2E_BYPASS = import.meta.env.VITE_E2E_BYPASS_AUTH === 'true';

export interface UseTasksResult {
  isLoading: boolean;
  /** Non-null when Firestore is unreachable — fallback demo data is shown */
  error: string | null;
}

/**
 * Subscribes to the Firestore `tasks` collection via onSnapshot and writes
 * results into `taskStore` for optimistic-UI access across the component tree.
 *
 * Falls back to FALLBACK_TASKS when the collection is empty or unreachable.
 */
export function useTasks(): UseTasksResult {
  const { setTasks } = useTaskStore();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError]         = useState<string | null>(null);

  useEffect(() => {
    if (E2E_BYPASS) {
      setTasks(FALLBACK_TASKS);
      setIsLoading(false);
      return;
    }

    const tasksRef = collection(db, 'tasks');

    const unsubscribe = onSnapshot(
      tasksRef,
      (snapshot) => {
        if (snapshot.empty) {
          setTasks(FALLBACK_TASKS);
        } else {
          setTasks(snapshot.docs.map((d) => d.data() as StaffTask));
          setError(null);
        }
        setIsLoading(false);
      },
      (err) => {
        console.error('[useTasks] Firestore error:', err);
        setTasks(FALLBACK_TASKS);
        setError('Live task data unavailable — showing demo data.');
        setIsLoading(false);
      },
    );

    return unsubscribe;
  }, [setTasks]);

  return { isLoading, error };
}
