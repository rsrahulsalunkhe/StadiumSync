import { useEffect } from 'react';
import { useMap } from '@vis.gl/react-google-maps';
import { STADIUM_OVERLAY_BOUNDS } from '@/types/crowd';

// ── Stadium SVG floor plan ────────────────────────────────────────────────────
// A simplified bird's-eye view: outer oval, inner pitch with markings, stands.

const STADIUM_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 360" width="500" height="360">
  <!-- Outer stadium oval -->
  <ellipse cx="250" cy="180" rx="245" ry="175" fill="#0d1b2a" stroke="#1e3a5f" stroke-width="3" opacity="0.92"/>
  <!-- Running track / concourse ring -->
  <ellipse cx="250" cy="180" rx="220" ry="152" fill="#112236" stroke="#1a2f4a" stroke-width="1.5"/>
  <!-- North Stand -->
  <path d="M110,48 Q250,12 390,48 Q250,72 110,48Z" fill="#1a2f4a" stroke="#234b78" stroke-width="1"/>
  <!-- South Stand -->
  <path d="M110,312 Q250,348 390,312 Q250,288 110,312Z" fill="#1a2f4a" stroke="#234b78" stroke-width="1"/>
  <!-- West Stand -->
  <path d="M34,80 Q8,180 34,280 Q56,180 34,80Z" fill="#1a2f4a" stroke="#234b78" stroke-width="1"/>
  <!-- East Stand -->
  <path d="M466,80 Q492,180 466,280 Q444,180 466,80Z" fill="#1a2f4a" stroke="#234b78" stroke-width="1"/>
  <!-- Pitch (green) -->
  <rect x="100" y="88" width="300" height="184" rx="6" fill="#14532d" stroke="rgba(255,255,255,0.7)" stroke-width="1.5"/>
  <!-- Pitch markings -->
  <!-- Centre line -->
  <line x1="250" y1="88" x2="250" y2="272" stroke="rgba(255,255,255,0.6)" stroke-width="1"/>
  <!-- Centre circle -->
  <circle cx="250" cy="180" r="36" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1"/>
  <!-- Centre spot -->
  <circle cx="250" cy="180" r="3" fill="rgba(255,255,255,0.8)"/>
  <!-- Left penalty area -->
  <rect x="100" y="128" width="56" height="104" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1"/>
  <!-- Left goal area -->
  <rect x="100" y="152" width="22" height="56" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1"/>
  <!-- Left penalty spot -->
  <circle cx="141" cy="180" r="2.5" fill="rgba(255,255,255,0.8)"/>
  <!-- Right penalty area -->
  <rect x="344" y="128" width="56" height="104" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1"/>
  <!-- Right goal area -->
  <rect x="378" y="152" width="22" height="56" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1"/>
  <!-- Right penalty spot -->
  <circle cx="359" cy="180" r="2.5" fill="rgba(255,255,255,0.8)"/>
  <!-- Zone labels -->
  <text x="250" y="38"  text-anchor="middle" fill="#94a3b8" font-size="13" font-family="Inter,sans-serif" font-weight="600">N</text>
  <text x="250" y="336" text-anchor="middle" fill="#94a3b8" font-size="13" font-family="Inter,sans-serif" font-weight="600">S</text>
  <text x="24"  y="185" text-anchor="middle" fill="#94a3b8" font-size="13" font-family="Inter,sans-serif" font-weight="600">W</text>
  <text x="476" y="185" text-anchor="middle" fill="#94a3b8" font-size="13" font-family="Inter,sans-serif" font-weight="600">E</text>
  <!-- VIP label (centre) -->
  <text x="250" y="174" text-anchor="middle" fill="rgba(0,255,136,0.5)" font-size="9" font-family="Inter,sans-serif" font-weight="500">VIP</text>
</svg>`;

const STADIUM_IMAGE_URL = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(STADIUM_SVG)}`;

/**
 * Renders a semi-transparent stadium floor-plan as a google.maps.GroundOverlay.
 * The SVG is embedded as a data URI so no external image hosting is needed.
 *
 * Bounds are imported from the shared STADIUM_OVERLAY_BOUNDS constant so they
 * always stay aligned with zone coordinates.
 */
export function StadiumGroundOverlay() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const bounds = new google.maps.LatLngBounds(
      { lat: STADIUM_OVERLAY_BOUNDS.south, lng: STADIUM_OVERLAY_BOUNDS.west },
      { lat: STADIUM_OVERLAY_BOUNDS.north, lng: STADIUM_OVERLAY_BOUNDS.east },
    );

    const overlay = new google.maps.GroundOverlay(STADIUM_IMAGE_URL, bounds, {
      opacity: 0.55,
      clickable: false,
    });
    overlay.setMap(map);

    return () => overlay.setMap(null);
  }, [map]);

  return null;
}
