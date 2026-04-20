import { useEffect, useState, useCallback, useMemo, memo } from 'react';
import { useForm } from 'react-hook-form';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useExitRouteStore } from '@/store/exitRouteStore';
import { getRoutesForSection } from '@/services/exitRoutingService';
import type { ScoredRoute } from '@/services/exitRoutingService';
import type { StadiumSection } from '@/types/queue';
import { SECTION_LABELS } from '@/types/queue';
import { Navigation } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { RouteCard } from './RouteCard';

export interface ExitFormValues {
  section: StadiumSection;
}

export interface ExitRoutingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * ExitRoutingDialog Component
 * Main dialog allowing attendees to plan their exit based on section.
 * @param {ExitRoutingDialogProps} props - The component props.
 * @returns {JSX.Element} The rendered Dialog.
 */
export const ExitRoutingDialog = memo(function ExitRoutingDialog({ open, onOpenChange }: ExitRoutingDialogProps): JSX.Element {
  const { setRoute } = useExitRouteStore();
  const [routes, setRoutes] = useState<ScoredRoute[]>([]);

  const { register, watch } = useForm<ExitFormValues>({
    defaultValues: { section: 'north-stand' },
  });

  const section = watch('section');

  useEffect(() => {
    setRoutes(getRoutesForSection(section));
  }, [section]);

  const handleViewOnMap = useCallback((route: ScoredRoute) => {
    setRoute(route, section);
    onOpenChange(false);
  }, [setRoute, section, onOpenChange]);

  const sections = useMemo(() => Object.entries(SECTION_LABELS) as [StadiumSection, string][], []);

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

        <CountdownTimer open={open} />

        <div className="flex flex-col gap-1.5">
          <label htmlFor="exit-section" className="text-sm font-medium text-slate-300">
            Your Section
          </label>
          <select
            id="exit-section"
            className={cn(
              'w-full rounded-lg border border-navy-600 bg-navy-800 px-3 py-2 text-sm text-white',
              'focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-navy-900',
            )}
            aria-label="Select your stadium section"
            {...register('section')}
          >
            {sections.map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2" aria-label="Ranked exit routes" role="list">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
            Top exit routes
          </p>
          {routes.map((route, index) => (
            <RouteCard key={route.id} route={route} index={index} onViewOnMap={handleViewOnMap} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
});

ExitRoutingDialog.displayName = 'ExitRoutingDialog';
