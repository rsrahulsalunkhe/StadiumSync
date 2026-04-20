/**
 * Sheet — a slide-in panel built on top of @radix-ui/react-dialog.
 *
 * Supports four sides: top | right | bottom | left.
 * The default (and most common for mobile incident reports) is "bottom",
 * which slides up from the bottom edge of the screen.
 */
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

// ── Re-exports ────────────────────────────────────────────────────────────────
const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;
const SheetPortal = DialogPrimitive.Portal;

// ── Overlay ───────────────────────────────────────────────────────────────────
function SheetOverlay({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={cn(
        'fixed inset-0 z-50 bg-black/70 backdrop-blur-sm',
        'data-[state=open]:animate-in  data-[state=closed]:animate-out',
        'data-[state=open]:fade-in-0   data-[state=closed]:fade-out-0',
        className,
      )}
      {...props}
    />
  );
}

// ── Side variants ─────────────────────────────────────────────────────────────
type SheetSide = 'top' | 'right' | 'bottom' | 'left';

const SIDE_CLASSES: Record<SheetSide, string> = {
  top: cn(
    'inset-x-0 top-0 border-b border-navy-700',
    'data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top',
  ),
  bottom: cn(
    'inset-x-0 bottom-0 border-t border-navy-700 rounded-t-2xl',
    'data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom',
  ),
  left: cn(
    'inset-y-0 left-0 h-full w-3/4 border-r border-navy-700 sm:max-w-sm',
    'data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left',
  ),
  right: cn(
    'inset-y-0 right-0 h-full w-3/4 border-l border-navy-700 sm:max-w-sm',
    'data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right',
  ),
};

// ── Content ───────────────────────────────────────────────────────────────────
interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  side?: SheetSide;
}

function SheetContent({
  side = 'bottom',
  className,
  children,
  ...props
}: SheetContentProps) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <DialogPrimitive.Content
        className={cn(
          'fixed z-50 bg-navy-900 shadow-xl',
          'data-[state=open]:animate-in data-[state=closed]:animate-out duration-300',
          SIDE_CLASSES[side],
          // Bottom sheet max height so it doesn't cover full screen
          side === 'bottom' && 'max-h-[92vh] overflow-y-auto',
          side === 'top'    && 'max-h-[92vh] overflow-y-auto',
          className,
        )}
        {...props}
      >
        {children}
        <SheetClose
          className={cn(
            'absolute right-4 top-4 rounded-sm opacity-70 transition-opacity',
            'hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neon',
            'focus:ring-offset-2 focus:ring-offset-navy-900 disabled:pointer-events-none',
          )}
          aria-label="Close panel"
        >
          <X className="h-4 w-4 text-slate-400" aria-hidden="true" />
        </SheetClose>
      </DialogPrimitive.Content>
    </SheetPortal>
  );
}

// ── Header / Footer ───────────────────────────────────────────────────────────
function SheetHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex flex-col gap-1.5 px-6 pt-6 pb-4', className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex flex-col-reverse gap-2 px-6 py-4 sm:flex-row sm:justify-end', className)}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn('text-lg font-semibold text-white', className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={cn('text-sm text-slate-400', className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
