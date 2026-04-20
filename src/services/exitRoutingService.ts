import type { StadiumSection } from '@/types/queue';
import { SECTION_POSITIONS } from '@/types/queue';

// ── Domain types ──────────────────────────────────────────────────────────────

export interface ExitGate {
  id: string;
  name: string;
  lat: number;
  lng: number;
  /** Live crowd density at this gate, 0–100 */
  crowdDensity: number;
}

export interface ScoredRoute extends ExitGate {
  /** Estimated walk time in minutes from the user's section */
  walkMinutes: number;
  /** Distance penalty normalised to 0–100 (higher = farther) */
  distanceScore: number;
  /** Composite score — lower is better */
  score: number;
}

// ── Scoring formula ───────────────────────────────────────────────────────────

/**
 * Compute a composite congestion + distance score.
 *
 *   score = (crowdDensity × 0.6) + (distanceScore × 0.4)
 *
 * Both inputs are 0–100; the result is also 0–100.
 * Lower score = better route (less crowded, shorter walk).
 */
export function scoreRoute(crowdDensity: number, distanceScore: number): number {
  return crowdDensity * 0.6 + distanceScore * 0.4;
}

// ── Geometry helpers ──────────────────────────────────────────────────────────

/** Straight-line distance in metres between two WGS-84 coordinates (Haversine). */
export function haversineMeters(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number,
): number {
  const R = 6_371_000; // Earth radius in metres
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// ── Route ranking ─────────────────────────────────────────────────────────────

const WALK_SPEED_M_PER_MIN = 80; // ≈ 4.8 km/h comfortable crowd pace
const MAX_DISTANCE_M = 900;       // normalisation ceiling (~longest stadium walk)

/**
 * Score and rank exit gates by congestion + distance from the given origin.
 *
 * @param fromLat   Latitude of the user's section
 * @param fromLng   Longitude of the user's section
 * @param gates     Available exit gates with live crowdDensity values
 * @param topN      Maximum number of results to return (default 3)
 * @returns         Routes sorted ascending by score (best first)
 */
export function getRankedRoutes(
  fromLat: number,
  fromLng: number,
  gates: ExitGate[],
  topN = 3,
): ScoredRoute[] {
  return gates
    .map((gate) => {
      const distM = haversineMeters(fromLat, fromLng, gate.lat, gate.lng);
      const distanceScore = Math.min((distM / MAX_DISTANCE_M) * 100, 100);
      const walkMinutes = Math.max(Math.round(distM / WALK_SPEED_M_PER_MIN), 1);
      const score = scoreRoute(gate.crowdDensity, distanceScore);
      return { ...gate, walkMinutes, distanceScore, score };
    })
    .sort((a, b) => a.score - b.score)
    .slice(0, topN);
}

// ── Demo exit gate catalogue ──────────────────────────────────────────────────

export const EXIT_GATES: ExitGate[] = [
  { id: 'gate-north', name: 'Gate North', lat: 51.5582, lng: -0.2796, crowdDensity: 88 },
  { id: 'gate-south', name: 'Gate South', lat: 51.5537, lng: -0.2796, crowdDensity: 34 },
  { id: 'gate-east',  name: 'Gate East',  lat: 51.5560, lng: -0.2762, crowdDensity: 42 },
  { id: 'gate-west',  name: 'Gate West',  lat: 51.5560, lng: -0.2830, crowdDensity: 91 },
  { id: 'gate-ne',    name: 'Gate NE',    lat: 51.5576, lng: -0.2770, crowdDensity: 55 },
];

/**
 * Convenience wrapper that resolves the section's lat/lng from the lookup table
 * and returns ranked exit routes for that section.
 */
export function getRoutesForSection(section: StadiumSection): ScoredRoute[] {
  const pos = SECTION_POSITIONS[section];
  return getRankedRoutes(pos.lat, pos.lng, EXIT_GATES);
}
