import { cn } from '@/lib/utils';

/**
 * Animated placeholder block shown while content is loading.
 * Follows the shadcn/ui pattern — compose by sizing with className.
 *
 * @example
 * <Skeleton className="h-4 w-32" />          // single line
 * <Skeleton className="h-24 w-full" />        // card placeholder
 */
export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={cn('animate-pulse rounded-md bg-navy-800', className)}
      {...props}
    />
  );
}
