import { useEffect } from 'react';
import { Wifi, WifiOff, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { ZoneControl } from '@/features/admin/components';
import { useCrowdStore } from '@/store/crowdStore';
import { useCrowdStream } from '@/hooks/useCrowd';
import { clamp, occupancyColor, formatDate } from '@/lib/utils';
import type { GateStatus } from '@/types/crowd';

const gateStatusVariant: Record<GateStatus, 'success' | 'warning' | 'destructive'> = {
  open: 'success',
  busy: 'warning',
  closed: 'destructive',
};

export default function CrowdMonitor() {
  // Opens the WebSocket stream and pipes into Zustand store
  const { snapshot, isStreaming, error } = useCrowdStream();
  const reset = useCrowdStore((s) => s.reset);

  // Reset on unmount handled inside the hook; expose manual refresh
  const handleRefresh = () => {
    reset();
  };

  // Announce stream status changes to screen readers
  useEffect(() => {
    // Intentionally empty — aria-live regions in JSX handle this
  }, [isStreaming]);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Crowd Monitor</h1>
          <p className="mt-1 text-slate-400">
            {snapshot
              ? `Last updated: ${formatDate(snapshot.lastUpdated)}`
              : 'Connecting to live feed…'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span
            role="status"
            aria-live="polite"
            aria-label={isStreaming ? 'Live stream connected' : 'Stream disconnected'}
            className="flex items-center gap-1.5 text-xs"
          >
            {isStreaming ? (
              <>
                <Wifi className="h-4 w-4 text-neon" aria-hidden="true" />
                <span className="text-neon">LIVE</span>
              </>
            ) : (
              <>
                <WifiOff className="h-4 w-4 text-red-400" aria-hidden="true" />
                <span className="text-red-400">Offline</span>
              </>
            )}
          </span>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Refresh crowd data"
            onClick={handleRefresh}
          >
            <RefreshCw className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>

      {/* Error banner */}
      {error && (
        <div
          role="alert"
          className="rounded-md border border-red-600/40 bg-red-950/50 px-4 py-3 text-sm text-red-400"
        >
          {error}
        </div>
      )}

      {/* Loading state */}
      {!snapshot && !error && (
        <div
          className="flex h-48 items-center justify-center"
          aria-live="polite"
          aria-busy="true"
        >
          <LoadingSpinner size="lg" label="Connecting to crowd feed…" />
        </div>
      )}

      {snapshot && (
        <>
          {/* Overall capacity */}
          <Card aria-labelledby="overall-capacity-heading">
            <CardHeader>
              <CardTitle id="overall-capacity-heading">Overall Capacity</CardTitle>
              <CardDescription>
                {snapshot.totalAttendees.toLocaleString()} /{' '}
                {snapshot.stadiumCapacity.toLocaleString()} attendees
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Stadium occupancy</span>
                  <span
                    className={`font-bold ${occupancyColor(snapshot.overallOccupancyPercent)}`}
                  >
                    {snapshot.overallOccupancyPercent}%
                  </span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={snapshot.overallOccupancyPercent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuetext={`${snapshot.overallOccupancyPercent}% occupied${snapshot.overallOccupancyPercent >= 90 ? ' — critical' : snapshot.overallOccupancyPercent >= 70 ? ' — elevated' : ''}`}
                  aria-label="Overall stadium occupancy"
                  className="h-4 w-full rounded-full bg-navy-700"
                >
                  <div
                    aria-hidden="true"
                    className={`h-4 rounded-full transition-all ${
                      snapshot.overallOccupancyPercent >= 90
                        ? 'bg-red-500'
                        : snapshot.overallOccupancyPercent >= 70
                          ? 'bg-amber-400'
                          : 'bg-neon'
                    }`}
                    style={{ width: `${clamp(snapshot.overallOccupancyPercent, 0, 100)}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Zone breakdown */}
          <ZoneControl snapshot={snapshot} />

          {/* Gate status */}
          <Card aria-labelledby="gates-heading">
            <CardHeader>
              <CardTitle id="gates-heading">Gate Status</CardTitle>
              <CardDescription>
                {snapshot.gates.filter((g) => g.status === 'open').length} open ·{' '}
                {snapshot.gates.filter((g) => g.status === 'busy').length} busy ·{' '}
                {snapshot.gates.filter((g) => g.status === 'closed').length} closed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul
                role="list"
                className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                aria-label="Gate status list"
              >
                {snapshot.gates.map((gate) => (
                  <li
                    key={gate.id}
                    className="flex items-center justify-between rounded-lg border border-navy-700 bg-navy-800 px-4 py-3"
                  >
                    <div>
                      <p className="font-medium text-slate-100">{gate.name}</p>
                      <p className="text-xs text-slate-400">
                        {gate.currentCount.toLocaleString()} passing /hr
                      </p>
                    </div>
                    <Badge variant={gateStatusVariant[gate.status]} className="capitalize">
                      {gate.status}
                    </Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
