import { useState, useEffect, useId } from 'react';
import { APIProvider } from '@vis.gl/react-google-maps';
import { MapPin, Sliders, RotateCcw } from 'lucide-react';
import { CrowdHeatmap } from '@/components/map/CrowdHeatmap';
import { MapLegend } from '@/components/map/MapLegend';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { Button } from '@/components/ui/button';
import { useCrowdData } from '@/hooks/useCrowdData';
import { useGoogleMaps } from '@/hooks/useGoogleMaps';
import { clamp, occupancyColor } from '@/lib/utils';
import type { CrowdZone } from '@/types/crowd';

const MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;

// ── Density slider for a single zone ─────────────────────────────────────────

interface ZoneSliderProps {
  zone: CrowdZone;
  localDensity: number;
  onChange: (zoneId: string, value: number) => void;
  onCommit: (zoneId: string, value: number) => void;
}

function ZoneSlider({ zone, localDensity, onChange, onCommit }: ZoneSliderProps) {
  const sliderId = useId();
  const outputId = useId();

  function densityColor(d: number): string {
    if (d >= 67) return 'text-red-400';
    if (d >= 34) return 'text-amber-400';
    return 'text-neon';
  }

  function trackColor(d: number): string {
    if (d >= 67) return '#ef4444';
    if (d >= 34) return '#fbbf24';
    return '#00ff88';
  }

  return (
    <li className="space-y-2 rounded-lg border border-navy-700 bg-navy-800 p-3">
      <div className="flex items-center justify-between">
        <label
          htmlFor={sliderId}
          className="text-sm font-medium text-slate-200"
        >
          {zone.zoneName}
        </label>
        <output
          id={outputId}
          htmlFor={sliderId}
          className={`text-sm font-bold tabular-nums ${densityColor(localDensity)}`}
          aria-live="polite"
          aria-atomic="true"
        >
          {localDensity}%
        </output>
      </div>

      <input
        id={sliderId}
        type="range"
        min={0}
        max={100}
        step={1}
        value={localDensity}
        aria-describedby={outputId}
        aria-label={`${zone.zoneName} crowd density: ${localDensity}%`}
        onChange={(e) => onChange(zone.zoneId, Number(e.target.value))}
        onMouseUp={(e) => onCommit(zone.zoneId, Number(e.currentTarget.value))}
        onKeyUp={(e) => onCommit(zone.zoneId, Number(e.currentTarget.value))}
        onTouchEnd={(e) => {
          const input = e.currentTarget;
          onCommit(zone.zoneId, Number(input.value));
        }}
        className="w-full cursor-pointer appearance-none rounded-full bg-navy-700 accent-neon"
        style={{
          // Dynamic accent color matching density
          accentColor: trackColor(localDensity),
        }}
      />

      <div className="flex justify-between text-[10px] text-slate-500" aria-hidden="true">
        <span>Low</span>
        <span>Est. wait: {zone.estimatedWaitMinutes} min</span>
        <span>High</span>
      </div>
    </li>
  );
}

// ── Side panel ────────────────────────────────────────────────────────────────

interface SidePanelProps {
  zones: CrowdZone[];
  onUpdateDensity: (zoneId: string, density: number) => Promise<void>;
}

function ZoneDensityPanel({ zones, onUpdateDensity }: SidePanelProps) {
  // Local state for immediate slider feedback (before Firestore round-trip)
  const [local, setLocal] = useState<Record<string, number>>({});
  const [saving, setSaving] = useState<Record<string, boolean>>({});

  // Sync local state when Firestore data arrives (only for unmodified sliders)
  useEffect(() => {
    setLocal((prev) => {
      const next: Record<string, number> = { ...prev };
      zones.forEach((z) => {
        if (!(z.zoneId in next)) next[z.zoneId] = z.density;
      });
      return next;
    });
  }, [zones]);

  const handleChange = (zoneId: string, value: number) => {
    setLocal((prev) => ({ ...prev, [zoneId]: clamp(value, 0, 100) }));
  };

  const handleCommit = (zoneId: string, value: number) => {
    setSaving((prev) => ({ ...prev, [zoneId]: true }));
    void onUpdateDensity(zoneId, clamp(value, 0, 100)).finally(() => {
      setSaving((prev) => ({ ...prev, [zoneId]: false }));
    });
  };

  const handleReset = () => {
    const reset: Record<string, number> = {};
    zones.forEach((z) => { reset[z.zoneId] = z.density; });
    setLocal(reset);
  };

  const hasPendingSave = Object.values(saving).some(Boolean);

  return (
    <aside
      className="flex h-full w-72 shrink-0 flex-col overflow-hidden rounded-xl border border-navy-700 bg-navy-900"
      aria-label="Zone density controls"
    >
      {/* Panel header */}
      <div className="flex items-center justify-between border-b border-navy-700 px-4 py-3">
        <div className="flex items-center gap-2">
          <Sliders className="h-4 w-4 text-neon" aria-hidden="true" />
          <h2 className="text-sm font-semibold text-white">Zone Controls</h2>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleReset}
          aria-label="Reset all sliders to live values"
          title="Reset to live values"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>

      <p className="px-4 py-2 text-xs text-slate-500">
        Drag a slider to simulate density changes. Values are written to Firestore
        and reflected on the heatmap in real time.
      </p>

      {/* Saving indicator */}
      {hasPendingSave && (
        <p className="px-4 pb-1 text-xs text-neon" aria-live="polite">
          Saving…
        </p>
      )}

      {/* Sliders list */}
      <ul
        role="list"
        className="flex-1 space-y-2 overflow-y-auto p-3"
        aria-label="Zone density sliders"
      >
        {zones.map((zone) => (
          <ZoneSlider
            key={zone.zoneId}
            zone={zone}
            localDensity={local[zone.zoneId] ?? zone.density}
            onChange={handleChange}
            onCommit={handleCommit}
          />
        ))}
      </ul>

      {/* Summary */}
      <div className="border-t border-navy-700 px-4 py-3">
        <p className="text-xs font-semibold text-slate-400">Overall avg density</p>
        <p
          className={`text-xl font-bold tabular-nums ${occupancyColor(
            Math.round(zones.reduce((acc, z) => acc + (local[z.zoneId] ?? z.density), 0) / Math.max(zones.length, 1)),
          )}`}
          aria-live="polite"
          aria-atomic="true"
        >
          {Math.round(
            zones.reduce((acc, z) => acc + (local[z.zoneId] ?? z.density), 0) /
              Math.max(zones.length, 1),
          )}
          %
        </p>
      </div>
    </aside>
  );
}

// ── Map content (inside APIProvider) ─────────────────────────────────────────

function HeatmapContent() {
  const { zones, isLoading: dataLoading, error: dataError, updateZoneDensity } = useCrowdData();
  const { isLoaded, isLoading: mapsLoading, error: mapsError } = useGoogleMaps();

  const isLoading = dataLoading || mapsLoading;
  const error = mapsError ?? dataError;

  if (isLoading) {
    return (
      <div
        className="flex flex-1 items-center justify-center"
        aria-live="polite"
        aria-busy="true"
      >
        <LoadingSpinner size="lg" label="Loading crowd heatmap…" />
      </div>
    );
  }

  if (!MAPS_API_KEY) {
    return (
      <div
        role="alert"
        className="flex flex-1 flex-col items-center justify-center gap-4 text-center"
      >
        <MapPin className="h-10 w-10 text-amber-400" aria-hidden="true" />
        <div>
          <p className="font-semibold text-white">Google Maps is not configured</p>
          <p className="mt-1 text-sm text-slate-400">
            Set{' '}
            <code className="rounded bg-navy-800 px-1 text-neon">VITE_GOOGLE_MAPS_API_KEY</code> in
            your <code className="rounded bg-navy-800 px-1 text-neon">.env</code> file.
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        role="alert"
        className="rounded-md border border-amber-600/40 bg-amber-950/30 px-4 py-2 text-xs text-amber-300"
      >
        {error}
      </div>
    );
  }

  if (!isLoaded) return null;

  return (
    <>
      {/* Map area */}
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-xl border border-navy-700">
        <CrowdHeatmap zones={zones} />

        {/* Legend overlay — bottom-left */}
        <div className="pointer-events-none absolute bottom-4 left-4 z-10">
          <div className="rounded-lg border border-navy-700 bg-navy-900/90 p-3 shadow-xl backdrop-blur-sm">
            <MapLegend className="w-44" />
          </div>
        </div>

        {/* Live badge — top-right */}
        <div
          className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-navy-700 bg-navy-900/90 px-3 py-1.5 text-xs font-semibold shadow backdrop-blur-sm"
          aria-live="polite"
          aria-label="Data is live"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-neon" aria-hidden="true" />
          <span className="text-neon">LIVE</span>
        </div>
      </div>

      {/* Side panel */}
      <ZoneDensityPanel zones={zones} onUpdateDensity={updateZoneDensity} />
    </>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AdminCrowdHeatmap() {
  return (
    <div className="flex h-full flex-col gap-4 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Crowd Heatmap</h1>
        <p className="mt-1 text-sm text-slate-400">
          Live Firestore data · Use the sliders to simulate density changes for
          demonstration or incident response.
        </p>
      </div>

      {/* Map + panel row — fill remaining height */}
      <div className="flex min-h-0 flex-1 gap-4">
        <APIProvider
          apiKey={MAPS_API_KEY ?? ''}
          libraries={['visualization']}
        >
          <HeatmapContent />
        </APIProvider>
      </div>
    </div>
  );
}
