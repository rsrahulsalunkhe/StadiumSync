import { useState } from 'react';
import { APIProvider } from '@vis.gl/react-google-maps';
import { MapPin, Navigation } from 'lucide-react';
import { CrowdHeatmap } from '@/components/map/CrowdHeatmap';
import { MapLegend } from '@/components/map/MapLegend';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { ExitRoutingDialog } from '@/features/attendee/components';
import { useCrowdData } from '@/hooks/useCrowdData';
import { useGoogleMaps } from '@/hooks/useGoogleMaps';
import { cn } from '@/lib/utils';

const MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;

// ── Inner component — must be inside <APIProvider> to use useGoogleMaps ───────

function HeatmapContent({ onPlanExit }: { onPlanExit: () => void }) {
  const { zones, isLoading: dataLoading, error: dataError } = useCrowdData();
  const { isLoaded, isLoading: mapsLoading, error: mapsError } = useGoogleMaps();

  const isLoading = dataLoading || mapsLoading;
  const error = mapsError ?? dataError;

  if (isLoading) {
    return (
      <div
        className="flex h-full items-center justify-center"
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
        className="flex h-full flex-col items-center justify-center gap-4 text-center"
      >
        <MapPin className="h-10 w-10 text-amber-400" aria-hidden="true" />
        <div>
          <p className="font-semibold text-white">Google Maps is not configured</p>
          <p className="mt-1 text-sm text-slate-400">
            Set <code className="rounded bg-navy-800 px-1 text-neon">VITE_GOOGLE_MAPS_API_KEY</code> in
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
        className="rounded-md border border-red-600/40 bg-red-950/50 px-4 py-3 text-sm text-red-400"
      >
        {error}
      </div>
    );
  }

  if (!isLoaded) return null;

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-navy-700">
      {/* Map fills the container */}
      <div className="h-full w-full">
        <CrowdHeatmap zones={zones} />
      </div>

      {/* Legend overlay — bottom-left */}
      <div className="pointer-events-none absolute bottom-4 left-4 z-10">
        <div className="rounded-lg border border-navy-700 bg-navy-900/90 p-3 shadow-xl backdrop-blur-sm">
          <MapLegend className="w-44" />
        </div>
      </div>

      {/* Live indicator — top-right */}
      <div
        className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-navy-700 bg-navy-900/90 px-3 py-1.5 text-xs font-semibold shadow backdrop-blur-sm"
        aria-live="polite"
        aria-label="Data is updating in real time"
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-neon" aria-hidden="true" />
        <span className="text-neon">LIVE</span>
      </div>

      {/* Plan My Exit — bottom-right floating button */}
      <div className="absolute bottom-4 right-4 z-10">
        <button
          type="button"
          onClick={onPlanExit}
          className={cn(
            'flex items-center gap-2 rounded-lg px-4 py-2.5',
            'bg-neon/10 text-neon border border-neon/30 text-sm font-medium shadow-lg',
            'hover:bg-neon/20 transition-colors duration-150 backdrop-blur-sm',
            'focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-navy-900',
          )}
          aria-label="Open exit route planner"
        >
          <Navigation className="h-4 w-4" aria-hidden="true" />
          Plan My Exit
        </button>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AttendeeCrowdHeatmap() {
  const [exitDialogOpen, setExitDialogOpen] = useState(false);

  return (
    <div className="flex h-full flex-col gap-4 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Stadium Map</h1>
        <p className="mt-1 text-sm text-slate-400">
          Real-time crowd density — tap a zone marker for wait times and
          routing advice.
        </p>
      </div>

      {/* Map takes all remaining height */}
      <div className="min-h-0 flex-1">
        <APIProvider
          apiKey={MAPS_API_KEY ?? ''}
          libraries={['visualization']}
        >
          <HeatmapContent onPlanExit={() => setExitDialogOpen(true)} />
        </APIProvider>
      </div>

      <ExitRoutingDialog
        open={exitDialogOpen}
        onOpenChange={setExitDialogOpen}
      />
    </div>
  );
}
