import * as React from 'react';
import { cn } from '@/lib/utils';

export interface NativeSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

/**
 * NativeSelect Component
 * A styled wrapper around the native <select> element.
 */
export const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          'flex h-11 w-full rounded-md border border-navy-600 bg-navy-800 px-3 py-2',
          'text-sm text-slate-100',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon',
          'focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      />
    );
  }
);

NativeSelect.displayName = 'NativeSelect';
