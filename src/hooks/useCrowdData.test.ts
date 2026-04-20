import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useCrowdData } from './useCrowdData';
import { FALLBACK_ZONES } from '@/types/crowd';
import type { CrowdZone } from '@/types/crowd';

const mocks = vi.hoisted(() => ({
  snapshotCallback: null as ((snap: unknown) => void) | null,
  errorCallback: null as ((err: unknown) => void) | null,
  unsubscribe: vi.fn(),
  updateDoc: vi.fn().mockResolvedValue(undefined),
}));

vi.mock('firebase/firestore', () => ({
  collection: vi.fn(() => ({})),
  onSnapshot: vi.fn((_ref: unknown, onNext: (snap: unknown) => void, onError: (err: unknown) => void) => {
    mocks.snapshotCallback = onNext;
    mocks.errorCallback = onError;
    return mocks.unsubscribe;
  }),
  doc: vi.fn((_db: unknown, _col: string, id: string) => ({ id })),
  updateDoc: mocks.updateDoc,
}));

vi.mock('@/lib/firebase', () => ({
  db: {},
}));

const zones: CrowdZone[] = [
  {
    zoneId: 'north',
    zoneName: 'North Stand',
    lat: 51.1,
    lng: -0.1,
    density: 30,
    estimatedWaitMinutes: 4,
    recommendedAlternative: 'South Stand',
  },
  {
    zoneId: 'west',
    zoneName: 'West Wing',
    lat: 51.2,
    lng: -0.2,
    density: 70,
    estimatedWaitMinutes: 10,
    recommendedAlternative: 'East Wing',
  },
];

const makeSnapshot = (docs: CrowdZone[]) => ({
  empty: docs.length === 0,
  docs: docs.map((d) => ({ data: () => d })),
});

beforeEach(() => {
  mocks.snapshotCallback = null;
  mocks.errorCallback = null;
  mocks.unsubscribe.mockReset();
  mocks.updateDoc.mockClear();
});

describe('useCrowdData', () => {
  it('parses Firestore onSnapshot documents into zones', async () => {
    const { result } = renderHook(() => useCrowdData());

    await act(async () => {
      mocks.snapshotCallback?.(makeSnapshot(zones));
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.zones).toEqual(zones);
    expect(result.current.error).toBeNull();
  });

  it('supports density calculations from parsed snapshot data', async () => {
    const { result } = renderHook(() => useCrowdData());

    await act(async () => {
      mocks.snapshotCallback?.(makeSnapshot(zones));
    });

    const averageDensity = result.current.zones.reduce((sum, z) => sum + z.density, 0) / result.current.zones.length;
    expect(averageDensity).toBe(50);
  });

  it('falls back when Firestore collection is empty', async () => {
    const { result } = renderHook(() => useCrowdData());

    await act(async () => {
      mocks.snapshotCallback?.(makeSnapshot([]));
    });

    expect(result.current.zones).toEqual(FALLBACK_ZONES);
    expect(result.current.error).toBeNull();
  });

  it('handles Firestore errors and keeps app usable', async () => {
    const { result } = renderHook(() => useCrowdData());

    await act(async () => {
      mocks.errorCallback?.(new Error('permission-denied'));
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toContain('Live data unavailable');
  });

  it('updates a zone density through Firestore', async () => {
    const { result } = renderHook(() => useCrowdData());

    await act(async () => {
      await result.current.updateZoneDensity('north', 45);
    });

    expect(mocks.updateDoc).toHaveBeenCalledWith({ id: 'north' }, { density: 45 });
  });
});

