import { Skeleton } from '@/components/ui/skeleton';

/**
 * Placeholder card shown while queue data is loading.
 * Mirrors the layout of QueueCard so the page doesn't jump.
 */
export function QueueCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="rounded-xl border border-navy-700 bg-navy-800 p-4 flex flex-col gap-3"
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded" />
          <Skeleton className="h-4 w-28" />
        </div>
        <Skeleton className="h-5 w-14 rounded-full" />
      </div>

      {/* Wait time */}
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-3 w-14" />
        </div>
        <div className="flex flex-col items-end gap-1">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-3 w-12" />
        </div>
      </div>

      {/* Progress bar */}
      <div className="flex flex-col gap-1">
        <Skeleton className="h-1.5 w-full rounded-full" />
        <Skeleton className="h-3 w-10" />
      </div>
    </div>
  );
}
