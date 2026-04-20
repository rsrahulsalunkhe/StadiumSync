import { cn } from '@/lib/utils';
import type { QueueZone, QueueStatus, ZoneType } from '@/types/queue';
import { DoorOpen, UtensilsCrossed, Bath, Car } from 'lucide-react';

// ── Icon map ──────────────────────────────────────────────────────────────────

const TYPE_ICON: Record<ZoneType, React.ReactNode> = {
  gate:       <DoorOpen className="h-5 w-5" aria-hidden="true" />,
  concession: <UtensilsCrossed className="h-5 w-5" aria-hidden="true" />,
  restroom:   <Bath className="h-5 w-5" aria-hidden="true" />,
  parking:    <Car className="h-5 w-5" aria-hidden="true" />,
};

// ── Status badge ──────────────────────────────────────────────────────────────

const STATUS_STYLES: Record<QueueStatus, string> = {
  open:   'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
  busy:   'bg-amber-500/20  text-amber-400  border border-amber-500/30',
  closed: 'bg-red-500/20    text-red-400    border border-red-500/30',
};

const STATUS_LABEL: Record<QueueStatus, string> = {
  open:   'Open',
  busy:   'Busy',
  closed: 'Closed',
};

// ── Capacity bar colour ────────────────────────────────────────────────────────

function capacityColor(pct: number): string {
  if (pct >= 85) return 'bg-red-500';
  if (pct >= 60) return 'bg-amber-500';
  return 'bg-emerald-500';
}

// ── Wait time label ────────────────────────────────────────────────────────────

function waitLabel(minutes: number): string {
  if (minutes === 0) return 'No wait';
  if (minutes === 1) return '~1 min';
  return `~${minutes} mins`;
}

// ── Component ─────────────────────────────────────────────────────────────────

interface QueueCardProps {
  zone: QueueZone;
  className?: string;
}

export function QueueCard({ zone, className }: QueueCardProps) {
  const pct = Math.round((zone.currentCount / zone.capacity) * 100);

  return (
    <article
      aria-label={`${zone.name} queue status`}
      className={cn(
        'rounded-xl border border-navy-700 bg-navy-800 p-4 flex flex-col gap-3',
        'hover:border-navy-600 transition-colors duration-150',
        className,
      )}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-slate-400 shrink-0">{TYPE_ICON[zone.type]}</span>
          <h3 className="text-sm font-semibold text-white truncate">{zone.name}</h3>
        </div>
        <span
          className={cn(
            'shrink-0 rounded-full px-2 py-0.5 text-xs font-medium',
            STATUS_STYLES[zone.status],
          )}
          aria-label={`Status: ${STATUS_LABEL[zone.status]}`}
        >
          {STATUS_LABEL[zone.status]}
        </span>
      </div>

      {/* Wait time */}
      <div className="flex items-end justify-between">
        <div>
          <p
            className={cn(
              'text-2xl font-bold tabular-nums',
              zone.status === 'closed' ? 'text-slate-500' : 'text-white',
            )}
            aria-label={`Wait time: ${waitLabel(zone.waitMinutes)}`}
          >
            {zone.status === 'closed' ? '—' : waitLabel(zone.waitMinutes)}
          </p>
          <p className="text-xs text-slate-400 mt-0.5">wait time</p>
        </div>

        <div className="text-right">
          <p className="text-sm font-medium text-slate-300 tabular-nums">
            {zone.currentCount.toLocaleString()}
            <span className="text-slate-500">/{zone.capacity.toLocaleString()}</span>
          </p>
          <p className="text-xs text-slate-400">capacity</p>
        </div>
      </div>

      {/* Capacity progress bar */}
      <div>
        <div
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${zone.name} at ${pct}% capacity`}
          className="h-1.5 w-full rounded-full bg-navy-700 overflow-hidden"
        >
          <div
            className={cn('h-full rounded-full transition-all duration-500', capacityColor(pct))}
            style={{ width: `${Math.min(pct, 100)}%` }}
          />
        </div>
        <p className="text-xs text-slate-500 mt-1">{pct}% full</p>
      </div>
    </article>
  );
}
