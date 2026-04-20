import { useEffect, useRef } from 'react';
import { useCrowdStore } from '@/store/crowdStore';
import type { CrowdSnapshot } from '@/types/crowd';

const WS_URL = import.meta.env.VITE_WS_URL as string;
const RECONNECT_DELAY_MS = 3_000;

/**
 * Connects to the crowd WebSocket feed and pipes snapshots into the Zustand
 * crowd store. Automatically reconnects on unexpected close.
 *
 * Usage: call once at the admin layout level; components read from useCrowdStore.
 */
export function useCrowdStream() {
  const { setSnapshot, setStreaming, setError, reset } = useCrowdStore();
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let active = true;

    function connect() {
      if (!active) return;
      const ws = new WebSocket(`${WS_URL}/crowd`);
      wsRef.current = ws;

      ws.onopen = () => {
        if (!active) { ws.close(); return; }
        setStreaming(true);
        setError(null);
      };

      ws.onmessage = (event: MessageEvent<string>) => {
        if (!active) return;
        try {
          const snapshot = JSON.parse(event.data) as CrowdSnapshot;
          setSnapshot(snapshot);
        } catch {
          setError('Received malformed crowd data.');
        }
      };

      ws.onerror = () => {
        setError('WebSocket connection error.');
      };

      ws.onclose = (e) => {
        setStreaming(false);
        if (active && !e.wasClean) {
          reconnectRef.current = setTimeout(connect, RECONNECT_DELAY_MS);
        }
      };
    }

    connect();

    return () => {
      active = false;
      if (reconnectRef.current) clearTimeout(reconnectRef.current);
      wsRef.current?.close(1000, 'Component unmounted');
      reset();
    };
  }, [reset, setError, setSnapshot, setStreaming]);

  return useCrowdStore((s) => ({
    snapshot: s.snapshot,
    isStreaming: s.isStreaming,
    error: s.error,
  }));
}

/** Lightweight hook for components that only need to read crowd state. */
export function useCrowdSnapshot() {
  return useCrowdStore((s) => s.snapshot);
}
