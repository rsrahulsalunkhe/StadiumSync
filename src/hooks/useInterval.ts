import { useEffect, useRef } from 'react';

/**
 * Runs `callback` on a fixed `delay` interval.
 *
 * - Pass `delay = null` to pause the interval without unmounting.
 * - Always uses the latest callback ref so stale closures are never a problem.
 *
 * Based on the canonical Dan Abramov pattern.
 */
export function useInterval(callback: () => void, delay: number | null): void {
  const savedCallback = useRef<() => void>(callback);

  // Keep the ref up to date whenever callback identity changes
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}
