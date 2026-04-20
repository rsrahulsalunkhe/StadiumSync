import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  // Base styles — WCAG 2.1 AA: min 44×44px touch target, visible focus ring
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium',
    'ring-offset-navy-950 transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'min-h-[44px] min-w-[44px]',
  ],
  {
    variants: {
      variant: {
        default:
          'bg-neon text-navy-950 font-semibold hover:bg-neon-dark active:bg-neon-dark',
        secondary:
          'bg-navy-700 text-white hover:bg-navy-600 border border-navy-600',
        outline:
          'border border-neon text-neon bg-transparent hover:bg-neon/10',
        ghost: 'text-slate-300 hover:bg-navy-800 hover:text-white',
        destructive:
          'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
        link: 'text-neon underline-offset-4 hover:underline min-h-0 min-w-0 p-0',
      },
      size: {
        default: 'h-11 px-5 py-2',
        sm: 'h-9 rounded px-3 text-xs',
        lg: 'h-12 rounded-md px-8 text-base',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
