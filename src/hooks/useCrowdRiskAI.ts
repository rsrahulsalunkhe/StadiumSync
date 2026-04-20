import { useState, useCallback, useRef } from 'react';
import { apiClient } from '@/lib/axios';

export interface CrowdRiskAssessment {
  riskLevel: 'safe' | 'elevated' | 'high' | 'critical';
  predictedHotspots: string[];
  recommendedActions: string[];
  confidence: number;
}

export interface CrowdRiskResult {
  assessment: CrowdRiskAssessment;
  zones: Array<{ id: string; name: string; density: number; capacity: number }>;
  snapshotAt: string;
}

export interface UseCrowdRiskAIResult {
  data: CrowdRiskResult | null;
  isLoading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

const CACHE_TTL_MS = 60_000; // re-fetch at most once per minute

export function useCrowdRiskAI(): UseCrowdRiskAIResult {
  const [data, setData] = useState<CrowdRiskResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const lastFetchAt = useRef<number>(0);

  const refresh = useCallback(async () => {
    const now = Date.now();
    if (now - lastFetchAt.current < CACHE_TTL_MS && data) return;

    setIsLoading(true);
    setError(null);
    try {
      const res = await apiClient.get<CrowdRiskResult>('/api/zones/risk-assessment');
      setData(res.data);
      lastFetchAt.current = now;
    } catch {
      setError('AI risk assessment unavailable. Using local data.');
    } finally {
      setIsLoading(false);
    }
  }, [data]);

  return { data, isLoading, error, refresh };
}
