import { create } from 'zustand';
import type { CrowdSnapshot } from '@/types/crowd';

interface CrowdStore {
  snapshot: CrowdSnapshot | null;
  isStreaming: boolean;
  error: string | null;

  // Actions
  setSnapshot: (snapshot: CrowdSnapshot) => void;
  setStreaming: (streaming: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

const initialState = {
  snapshot: null,
  isStreaming: false,
  error: null,
} as const;

export const useCrowdStore = create<CrowdStore>()((set) => ({
  ...initialState,

  setSnapshot: (snapshot) => set({ snapshot, error: null }),

  setStreaming: (isStreaming) => set({ isStreaming }),

  setError: (error) => set({ error, isStreaming: false }),

  reset: () => set(initialState),
}));
