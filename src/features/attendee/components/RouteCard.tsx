import { memo, useCallback } from 'react';
import { cn } from '@/lib/utils';
import type { ScoredRoute } from '@/services/exitRoutingService';
import { Clock, Users, MapPin } from 'lucide-react';

const RANK_STYLES = [
  { border: 'border-emerald-500/50', badge: 'bg-emerald-500/20 text-emerald-400', label: 'Best' },
  { border: 'border-amber-500/30',   badge: 'bg-amber-500/20  text-amber-400',  label: 'Good' },
  { border: 'border-red-500/30',     badge: 'bg-red-500/20    text-red-400',    label: 'Busy' },
];

function crowdLabel(density: number): string {
  if (density < 40) return 'Low crowd';
  if (density < 70) return 'Moderate';
  return 'High crowd';
}

export interface RouteCardProps {
  route: ScoredRoute;
  index: number;
  onViewOnMap: (route: ScoredRoute) => void;
}

/**
 * RouteCard Component
 * Displays an individual exit route with rank and details.
 * @param {RouteCardProps} props - The component props.
 * @returns {JSX.Element} The rendered RouteCard.
 */
export const RouteCard = memo(function RouteCard({ route, index, onViewOnMap }: RouteCardProps): JSX.Element {
  const style = RANK_STYLES[index] ?? RANK_STYLES[2];
  
  const handleClick = useCallback(() => {
    onViewOnMap(route);
  }, [onViewOnMap, route]);

  return (
    <div
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
        onClick={handleClick}
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
});

RouteCard.displayName = 'RouteCard';
