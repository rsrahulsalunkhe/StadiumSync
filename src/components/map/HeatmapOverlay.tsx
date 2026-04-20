import { useEffect, useRef } from 'react';
import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import type { CrowdZone } from '@/types/crowd';

interface HeatmapOverlayProps {
  zones: CrowdZone[];
}

/**
 * Renders a google.maps.visualization.HeatmapLayer on the current Map instance.
 *
 * Two separate effects are intentional:
 *  1. Creates / destroys the HeatmapLayer when map or vizLib mounts/unmounts.
 *  2. Updates data when `zones` changes without recreating the layer.
 *
 * Requires the visualization library to be loaded via APIProvider's `libraries`
 * prop, or loaded on-demand via useMapsLibrary (which this component uses).
 */
export function HeatmapOverlay({ zones }: HeatmapOverlayProps) {
  const map = useMap();
  const vizLib = useMapsLibrary('visualization');
  const heatmapRef = useRef<google.maps.visualization.HeatmapLayer | null>(null);

  // ── Create the heatmap layer once map + vizLib are ready ──────────────────
  useEffect(() => {
    if (!map || !vizLib) return;

    heatmapRef.current = new vizLib.HeatmapLayer({
      data: [],
      map,
      radius: 60,
      opacity: 0.72,
      // Green (low) → yellow (mid) → orange → red (high)
      gradient: [
        'rgba(0,   0,   0,   0)',
        'rgba(0,   255, 136, 0.6)',
        'rgba(0,   255, 136, 1)',
        'rgba(251, 191, 36,  1)',
        'rgba(249, 115, 22,  1)',
        'rgba(239, 68,  68,  1)',
        'rgba(185, 28,  28,  1)',
      ],
      dissipating: true,
    });

    return () => {
      heatmapRef.current?.setMap(null);
      heatmapRef.current = null;
    };
  }, [map, vizLib]);

  // ── Update heatmap data whenever zones change ─────────────────────────────
  useEffect(() => {
    if (!heatmapRef.current) return;

    const data: google.maps.visualization.WeightedLocation[] = zones.map((zone) => ({
      location: new google.maps.LatLng(zone.lat, zone.lng),
      // Weight is 0–10 scale; density 0–100 → 0–10
      weight: Math.max(zone.density / 10, 0.1),
    }));

    heatmapRef.current.setData(data);
  }, [zones]);

  // Renders nothing — all output is via the imperative Maps API
  return null;
}
