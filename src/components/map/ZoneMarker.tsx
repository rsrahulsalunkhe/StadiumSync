import { useState } from 'react';
import { AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import type { CrowdZone } from '@/types/crowd';

// ── Helpers ───────────────────────────────────────────────────────────────────

function densityHex(density: number): string {
  if (density >= 67) return '#ef4444'; // red-500
  if (density >= 34) return '#fbbf24'; // amber-400
  return '#00ff88';                     // neon-green (low)
}

function densityLabel(density: number): 'Low' | 'Medium' | 'High' {
  if (density >= 67) return 'High';
  if (density >= 34) return 'Medium';
  return 'Low';
}

function waitLabel(mins: number): string {
  return mins <= 1 ? 'No wait' : `~${mins} min`;
}

// ── Pin ───────────────────────────────────────────────────────────────────────

interface PinProps {
  density: number;
  zoneName: string;
}

function DensityPin({ density, zoneName }: PinProps) {
  const color = densityHex(density);
  return (
    <div
      role="img"
      aria-label={`${zoneName}: ${density}% density — ${densityLabel(density)}`}
      style={{
        background: color,
        boxShadow: `0 0 10px ${color}80, 0 2px 6px rgba(0,0,0,0.5)`,
        borderRadius: '50%',
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontSize: 11,
        color: '#0a0f1e',
        border: '2px solid rgba(255,255,255,0.25)',
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'transform 0.15s ease',
      }}
    >
      {density}%
    </div>
  );
}

// ── InfoWindow content ────────────────────────────────────────────────────────

interface InfoContentProps {
  zone: CrowdZone;
  onClose: () => void;
}

function ZoneInfoContent({ zone, onClose }: InfoContentProps) {
  const color = densityHex(zone.density);

  return (
    <div
      style={{
        background: '#0d1b2a',
        color: '#e2e8f0',
        borderRadius: 8,
        padding: '12px 14px',
        minWidth: 200,
        fontSize: 13,
        position: 'relative',
        border: `1px solid ${color}40`,
      }}
      role="dialog"
      aria-label={`${zone.zoneName} zone information`}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label={`Close ${zone.zoneName} info`}
        style={{
          position: 'absolute',
          top: 8,
          right: 10,
          background: 'none',
          border: 'none',
          color: '#64748b',
          fontSize: 18,
          lineHeight: 1,
          cursor: 'pointer',
          padding: 0,
        }}
      >
        ×
      </button>

      {/* Title */}
      <p
        style={{ fontWeight: 700, fontSize: 15, marginBottom: 10, color: '#fff', paddingRight: 20 }}
      >
        {zone.zoneName}
      </p>

      {/* Stats */}
      <dl style={{ display: 'grid', rowGap: 6 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
          <dt style={{ color: '#94a3b8' }}>Density</dt>
          <dd style={{ color, fontWeight: 700 }}>
            {zone.density}% — {densityLabel(zone.density)}
          </dd>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
          <dt style={{ color: '#94a3b8' }}>Est. wait</dt>
          <dd style={{ color: '#f1f5f9', fontWeight: 600 }}>{waitLabel(zone.estimatedWaitMinutes)}</dd>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
          <dt style={{ color: '#94a3b8' }}>Recommended</dt>
          <dd style={{ color: '#00ff88', fontWeight: 600 }}>{zone.recommendedAlternative}</dd>
        </div>
      </dl>
    </div>
  );
}

// ── ZoneMarker ────────────────────────────────────────────────────────────────

interface ZoneMarkerProps {
  zone: CrowdZone;
}

/**
 * Renders a single AdvancedMarker showing zone density and, when clicked,
 * opens an InfoWindow with detailed stats.
 *
 * AdvancedMarker requires a mapId set on the parent <Map> component.
 */
export function ZoneMarker({ zone }: ZoneMarkerProps) {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <>
      <AdvancedMarker
        position={{ lat: zone.lat, lng: zone.lng }}
        onClick={() => setInfoOpen(true)}
        title={`${zone.zoneName} — ${zone.density}% density`}
      >
        <DensityPin density={zone.density} zoneName={zone.zoneName} />
      </AdvancedMarker>

      {infoOpen && (
        <InfoWindow
          position={{ lat: zone.lat, lng: zone.lng }}
          onCloseClick={() => setInfoOpen(false)}
          headerDisabled
          pixelOffset={[0, -24]}
        >
          <ZoneInfoContent zone={zone} onClose={() => setInfoOpen(false)} />
        </InfoWindow>
      )}
    </>
  );
}
