import { useMemo, useState } from 'react';
import { ListFilter, Navigation } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useQueueData } from '@/hooks/useQueueData';
import { QueueCard, ExitRoutingDialog } from '@/features/attendee/components';
import { QueueCardSkeleton } from '@/components/queue/QueueCardSkeleton';
import type { ZoneType } from '@/types/queue';

// ── Filter tabs ───────────────────────────────────────────────────────────────

type FilterTab = 'all' | ZoneType;

interface TabDef {
  id: FilterTab;
  label: string;
}

const TABS: TabDef[] = [
  { id: 'all',        label: 'All' },
  { id: 'gate',       label: 'Gates' },
  { id: 'concession', label: 'Concessions' },
  { id: 'restroom',   label: 'Restrooms' },
  { id: 'parking',    label: 'Parking' },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function QueueDashboard() {
  const { zones, isLoading, error } = useQueueData();
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [exitDialogOpen, setExitDialogOpen] = useState(false);

  const filtered = useMemo(() => {
    const base = activeTab === 'all' ? zones : zones.filter((z) => z.type === activeTab);
    // Sort ascending by wait time (closed zones go to the bottom)
    return [...base].sort((a, b) => {
      if (a.status === 'closed' && b.status !== 'closed') return 1;
      if (b.status === 'closed' && a.status !== 'closed') return -1;
      return a.waitMinutes - b.waitMinutes;
    });
  }, [zones, activeTab]);

  const queueCards = useMemo(() => {
    return filtered.map((zone) => <QueueCard key={zone.id} zone={zone} />);
  }, [filtered]);

  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Queue Intelligence</h1>
          <p className="mt-1 text-sm text-slate-400">
            Live wait times across all venue zones — sorted by shortest wait.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setExitDialogOpen(true)}
          className={cn(
            'mt-3 sm:mt-0 flex items-center gap-2 self-start rounded-lg px-4 py-2.5',
            'bg-neon/10 text-neon border border-neon/30 text-sm font-medium',
            'hover:bg-neon/20 transition-colors duration-150',
            'focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-navy-900',
          )}
          aria-label="Open exit route planner"
        >
          <Navigation className="h-4 w-4" aria-hidden="true" />
          Plan My Exit
        </button>
      </div>

      {/* Error banner */}
      {error && (
        <div
          role="alert"
          className="rounded-md border border-amber-600/40 bg-amber-950/50 px-4 py-3 text-sm text-amber-400"
        >
          {error}
        </div>
      )}

      {/* Filter tabs */}
      <div
        role="tablist"
        aria-label="Filter by zone type"
        className="flex gap-1 overflow-x-auto rounded-lg border border-navy-700 bg-navy-800/50 p-1"
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'shrink-0 rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-150',
              'focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-1 focus:ring-offset-navy-800',
              activeTab === tab.id
                ? 'bg-navy-700 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200',
            )}
          >
            {tab.label}
            {/* Count badge */}
            {!isLoading && (
              <span
                className={cn(
                  'ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-bold',
                  activeTab === tab.id
                    ? 'bg-neon/20 text-neon'
                    : 'bg-navy-700 text-slate-500',
                )}
                aria-label={`${tab.id === 'all' ? zones.length : zones.filter((z) => z.type === tab.id).length} zones`}
              >
                {tab.id === 'all' ? zones.length : zones.filter((z) => z.type === tab.id).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Zone grid */}
      {isLoading ? (
        <div
          aria-busy="true"
          aria-label="Loading queue data"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <QueueCardSkeleton key={i} />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center gap-3 rounded-xl border border-navy-700 bg-navy-800/50 py-16 text-center"
          aria-live="polite"
        >
          <ListFilter className="h-8 w-8 text-slate-600" aria-hidden="true" />
          <p className="text-sm text-slate-400">No zones found for this filter.</p>
        </div>
      ) : (
        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          aria-live="polite"
          aria-label={`${filtered.length} zones shown`}
        >
          {queueCards}
        </div>
      )}

      {/* Exit routing dialog */}
      <ExitRoutingDialog
        open={exitDialogOpen}
        onOpenChange={setExitDialogOpen}
      />
    </div>
  );
}
