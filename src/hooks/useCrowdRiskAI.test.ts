import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { useCrowdRiskAI } from './useCrowdRiskAI';

const mocks = vi.hoisted(() => ({
  apiGet: vi.fn(),
}));

vi.mock('@/lib/axios', () => ({
  apiClient: { get: mocks.apiGet },
}));

const mockResult = {
  assessment: {
    riskLevel: 'elevated' as const,
    predictedHotspots: ['West Wing'],
    recommendedActions: ['Redirect attendees from West Wing'],
    confidence: 0.87,
  },
  zones: [{ id: 'west', name: 'West Wing', density: 82, capacity: 1000 }],
  snapshotAt: '2026-04-20T18:00:00.000Z',
};

beforeEach(() => {
  vi.clearAllMocks();
});

describe('useCrowdRiskAI', () => {
  it('starts with null data and not loading', () => {
    const { result } = renderHook(() => useCrowdRiskAI());
    expect(result.current.data).toBeNull();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('fetches and returns AI risk assessment', async () => {
    mocks.apiGet.mockResolvedValueOnce({ data: mockResult });

    const { result } = renderHook(() => useCrowdRiskAI());

    await act(async () => {
      await result.current.refresh();
    });

    expect(mocks.apiGet).toHaveBeenCalledWith('/api/zones/risk-assessment');
    expect(result.current.data?.assessment.riskLevel).toBe('elevated');
    expect(result.current.data?.assessment.predictedHotspots).toContain('West Wing');
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('sets error message when API call fails', async () => {
    mocks.apiGet.mockRejectedValueOnce(new Error('Service unavailable'));

    const { result } = renderHook(() => useCrowdRiskAI());

    await act(async () => {
      await result.current.refresh();
    });

    expect(result.current.data).toBeNull();
    expect(result.current.error).toMatch(/unavailable/i);
    expect(result.current.isLoading).toBe(false);
  });

  it('uses cache and skips second fetch within TTL', async () => {
    mocks.apiGet.mockResolvedValue({ data: mockResult });

    const { result } = renderHook(() => useCrowdRiskAI());

    await act(async () => { await result.current.refresh(); });
    await act(async () => { await result.current.refresh(); });

    // Should only call once — second call is cache-hit
    expect(mocks.apiGet).toHaveBeenCalledTimes(1);
  });

  it('shows loading state while fetching', async () => {
    let resolve!: (value: unknown) => void;
    mocks.apiGet.mockReturnValueOnce(new Promise((r) => { resolve = r; }));

    const { result } = renderHook(() => useCrowdRiskAI());

    act(() => { void result.current.refresh(); });

    await waitFor(() => expect(result.current.isLoading).toBe(true));

    await act(async () => { resolve({ data: mockResult }); });
    await waitFor(() => expect(result.current.isLoading).toBe(false));
  });
});
