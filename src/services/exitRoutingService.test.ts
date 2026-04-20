import { describe, it, expect } from 'vitest';
import {
  scoreRoute,
  haversineMeters,
  getRankedRoutes,
  getRoutesForSection,
  type ExitGate,
} from './exitRoutingService';

describe('scoreRoute', () => {
  it('computes weighted score using crowd and distance components', () => {
    expect(scoreRoute(80, 20)).toBeCloseTo(56);
    expect(scoreRoute(20, 80)).toBeCloseTo(44);
  });
});

describe('haversineMeters', () => {
  it('returns 0 for identical coordinates and positive for different points', () => {
    expect(haversineMeters(51.556, -0.2796, 51.556, -0.2796)).toBe(0);
    expect(haversineMeters(51.556, -0.2796, 51.5582, -0.2796)).toBeGreaterThan(0);
  });
});

describe('getRankedRoutes', () => {
  it('ranks 5+ gate inputs and returns best routes first', () => {
    const gates: ExitGate[] = [
      { id: 'g1', name: 'Gate 1', lat: 51.558, lng: -0.280, crowdDensity: 90 },
      { id: 'g2', name: 'Gate 2', lat: 51.554, lng: -0.278, crowdDensity: 20 },
      { id: 'g3', name: 'Gate 3', lat: 51.5561, lng: -0.279, crowdDensity: 50 },
      { id: 'g4', name: 'Gate 4', lat: 51.557, lng: -0.277, crowdDensity: 10 },
      { id: 'g5', name: 'Gate 5', lat: 51.5564, lng: -0.2815, crowdDensity: 35 },
      { id: 'g6', name: 'Gate 6', lat: 51.5552, lng: -0.2798, crowdDensity: 15 },
    ];

    const routes = getRankedRoutes(51.556, -0.2796, gates, 6);

    expect(routes).toHaveLength(6);
    for (let i = 0; i < routes.length - 1; i += 1) {
      expect(routes[i].score).toBeLessThanOrEqual(routes[i + 1].score);
    }
  });

  it('returns only topN when requested', () => {
    const gates: ExitGate[] = [
      { id: 'g1', name: 'Gate 1', lat: 51.558, lng: -0.280, crowdDensity: 90 },
      { id: 'g2', name: 'Gate 2', lat: 51.554, lng: -0.278, crowdDensity: 20 },
      { id: 'g3', name: 'Gate 3', lat: 51.5561, lng: -0.279, crowdDensity: 50 },
    ];

    expect(getRankedRoutes(51.556, -0.2796, gates, 2)).toHaveLength(2);
  });
});

describe('getRoutesForSection', () => {
  it('returns section-aware ranking', () => {
    const northRoutes = getRoutesForSection('north-stand');
    const southRoutes = getRoutesForSection('south-stand');

    expect(northRoutes).toHaveLength(3);
    expect(southRoutes).toHaveLength(3);
    expect(northRoutes[0].id === southRoutes[0].id && northRoutes[0].distanceScore === southRoutes[0].distanceScore).toBe(false);
  });
});
