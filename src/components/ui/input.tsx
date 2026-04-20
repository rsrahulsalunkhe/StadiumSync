import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        // Base
        'flex h-11 w-full rounded-md border border-navy-600 bg-navy-800 px-3 py-2',
        'text-sm text-slate-100 placeholder:text-slate-500',
        // Focus — WCAG 2.4.7: visible focus indicator
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950',
        // Disabled
        'disabled:cursor-not-allowed disabled:opacity-50',
        // File input reset
        'file:border-0 file:bg-transparent file:text-sm file:font-medium',
        className,
      )}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
