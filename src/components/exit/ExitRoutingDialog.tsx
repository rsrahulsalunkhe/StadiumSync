import { useEffect, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useInterval } from '@/hooks/useInterval';
import { useExitRouteStore } from '@/store/exitRouteStore';
import { getRoutesForSection } from '@/services/exitRoutingService';
import type { ScoredRoute } from '@/services/exitRoutingService';
import type { StadiumSection } from '@/types/queue';
import { SECTION_LABELS } from '@/types/queue';
import { Navigation, Clock, Users, MapPin } from 'lucide-react';

// ── Countdown helpers ─────────────────────────────────────────────────────────

/**
 * Returns milliseconds until the next "event end" time.
 * For demo purposes we target the next occurrence of 22:00 local time.
 */
function msUntilEventEnd(): number {
  const now = new Date();
  const end = new Date(now);
  end.setHours(22, 0, 0, 0);
  if (end <= now) end.setDate(end.getDate() + 1); // wrap to tomorrow
  return end.getTime() - now.getTime();
}

function formatCountdown(ms: number): string {
  if (ms <= 0) return '00:00:00';
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return [h, m, s].map((v) => String(v).padStart(2, '0')).join(':');
}

// ── Route card colour ─────────────────────────────────────────────────────────

const RANK_STYLES = [
  // Rank 1 — best
  { border: 'border-emerald-500/50', badge: 'bg-emerald-500/20 text-emerald-400', label: 'Best' },
  // Rank 2
  { border: 'border-amber-500/30',   badge: 'bg-amber-500/20  text-amber-400',  label: 'Good' },
  // Rank 3
  { border: 'border-red-500/30',     badge: 'bg-red-500/20    text-red-400',    label: 'Busy' },
];

function crowdLabel(density: number): string {
  if (density < 40) return 'Low crowd';
  if (density < 70) return 'Moderate';
  return 'High crowd';
}

// ── Form types ────────────────────────────────────────────────────────────────

interface ExitFormValues {
  section: StadiumSection;
}

// ── Component ─────────────────────────────────────────────────────────────────

interface ExitRoutingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ExitRoutingDialog({ open, onOpenChange }: ExitRoutingDialogProps) {
  const { setRoute } = useExitRouteStore();
  const [remainingMs, setRemainingMs] = useState<number>(msUntilEventEnd);
  const [routes, setRoutes] = useState<ScoredRoute[]>([]);

  const { register, watch } = useForm<ExitFormValues>({
    defaultValues: { section: 'north-stand' },
  });

  const section = watch('section');

  // Update routes whenever section changes
  useEffect(() => {
    setRoutes(getRoutesForSection(section));
  }, [section]);

  // Countdown tick
  const tick = useCallback(() => {
    setRemainingMs(msUntilEventEnd());
  }, []);

  useInterval(tick, open ? 1000 : null);

  // Reset countdown when dialog opens
  useEffect(() => {
    if (open) setRemainingMs(msUntilEventEnd());
  }, [open]);

  function handleViewOnMap(route: ScoredRoute) {
    setRoute(route, section);
    onOpenChange(false);
  }

  const sections = Object.entries(SECTION_LABELS) as [StadiumSection, string][];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Navigation className="h-5 w-5 text-neon" aria-hidden="true" />
            Plan My Exit
          </DialogTitle>
          <DialogDescription>
            Select your section to see the best exit routes ranked by congestion and distance.
          </DialogDescription>
        </DialogHeader>

        {/* Countdown timer */}
        <div
          className="flex items-center justify-between rounded-lg bg-navy-800 border border-navy-700 px-4 py-3"
          aria-live="polite"
          aria-label="Time until event end"
        >
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Clock className="h-4 w-4" aria-hidden="true" />
            <span>Event ends in</span>
          </div>
          <span className="font-mono text-xl font-bold text-neon tabular-nums">
            {formatCountdown(remainingMs)}
          </span>
        </div>

        {/* Section selector */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="exit-section"
            className="text-sm font-medium text-slate-300"
          >
            Your Section
          </label>
          <select
            id="exit-section"
            className={cn(
              'w-full rounded-lg border border-navy-600 bg-navy-800 px-3 py-2',
              'text-sm text-white',
              'focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-navy-900',
            )}
            aria-label="Select your stadium section"
            {...register('section')}
          >
            {sections.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Route cards */}
        <div
          className="flex flex-col gap-2"
          aria-label="Ranked exit routes"
          role="list"
        >
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
            Top exit routes
          </p>
          {routes.map((route, index) => {
            const style = RANK_STYLES[index] ?? RANK_STYLES[2];
            return (
              <div
                key={route.id}
                role="listitem"
                className={cn(
                  'rounded-lg border bg-navy-800 p-3 flex items-center justify-between gap-3',
                  style.border,
                )}
                aria-label={`Route ${index + 1}: ${route.name}`}
              >
                <div className="flex flex-col gap-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                    <span className="text-sm font-semibold text-white truncate">{route.name}</span>
                    <span
                      className={cn(
                        'shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase',
                        style.badge,
                      )}
                    >
                      {style.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400 pl-5">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      {route.walkMinutes} min walk
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" aria-hidden="true" />
                      {crowdLabel(route.crowdDensity)}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleViewOnMap(route)}
                  className={cn(
                    'shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium',
                    'bg-neon/10 text-neon border border-neon/30',
                    'hover:bg-neon/20 transition-colors duration-150',
                    'focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-navy-900',
                  )}
                  aria-label={`View ${route.name} on map`}
                >
                  View on map
                </button>
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
