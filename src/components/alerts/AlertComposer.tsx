import { useState, useRef, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ChevronDown, Check, Megaphone } from 'lucide-react';
import toast from 'react-hot-toast';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { broadcastAlert } from '@/services/alertService';
import { useAuth } from '@/hooks/useAuth';
import type { AlertSeverity } from '@/types/alert';
import { ALERT_ZONE_OPTIONS, SEVERITY_STYLES, SEVERITY_LABEL } from '@/types/alert';

// ── Zod schema ────────────────────────────────────────────────────────────────

const alertSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters').max(100),
  message: z.string().min(10, 'Message must be at least 10 characters').max(500),
  severity: z.enum(['info', 'warning', 'emergency'] as const),
  targetZones: z.array(z.string()).min(1, 'Select at least one target zone'),
  scheduledAt: z.string().optional(),
});

type AlertFormValues = z.infer<typeof alertSchema>;

// ── Multi-select zone picker ──────────────────────────────────────────────────

interface ZonePickerProps {
  value: string[];
  onChange: (next: string[]) => void;
  /** Undefined when there is no validation error */
  error?: string | undefined;
}

function ZonePicker({ value, onChange, error }: ZonePickerProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  function toggle(zone: string) {
    if (zone === 'All Zones') {
      // Selecting "All Zones" replaces everything else
      onChange(value.includes('All Zones') ? [] : ['All Zones']);
      return;
    }
    const next = value.filter((z) => z !== 'All Zones'); // clear "All Zones" if individual selected
    onChange(
      next.includes(zone) ? next.filter((z) => z !== zone) : [...next, zone],
    );
  }

  const label =
    value.length === 0
      ? 'Select zones…'
      : value.length === 1
        ? value[0]
        : `${value.length} zones selected`;

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-invalid={!!error}
        aria-describedby={error ? 'zone-picker-err' : undefined}
        className={cn(
          'flex h-11 w-full items-center justify-between rounded-md border px-3 py-2',
          'text-sm text-slate-100 bg-navy-800',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950',
          error ? 'border-red-500' : 'border-navy-600',
        )}
      >
        <span className={value.length === 0 ? 'text-slate-500' : ''}>{label}</span>
        <ChevronDown
          className={cn('h-4 w-4 text-slate-400 transition-transform', open && 'rotate-180')}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-multiselectable="true"
          aria-label="Select target zones"
          className={cn(
            'absolute top-full left-0 z-50 mt-1 w-full max-h-56 overflow-y-auto',
            'rounded-lg border border-navy-600 bg-navy-800 shadow-xl',
          )}
        >
          {ALERT_ZONE_OPTIONS.map((zone) => {
            const selected = value.includes(zone);
            return (
              <div
                key={zone}
                role="option"
                aria-selected={selected}
                onClick={() => toggle(zone)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(zone); } }}
                tabIndex={0}
                className={cn(
                  'flex cursor-pointer items-center gap-2 px-3 py-2 text-sm',
                  'hover:bg-navy-700 focus-visible:outline-none focus-visible:bg-navy-700',
                  selected ? 'text-neon' : 'text-slate-300',
                  zone === 'All Zones' && 'border-b border-navy-700 font-medium',
                )}
              >
                <span
                  className={cn(
                    'flex h-4 w-4 shrink-0 items-center justify-center rounded border',
                    selected ? 'bg-neon border-neon' : 'border-navy-500',
                  )}
                  aria-hidden="true"
                >
                  {selected && <Check className="h-3 w-3 text-navy-950" strokeWidth={3} />}
                </span>
                {zone}
              </div>
            );
          })}
        </div>
      )}

      {error && (
        <p id="zone-picker-err" role="alert" className="mt-1 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export function AlertComposer() {
  const { currentUser } = useAuth();

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<AlertFormValues>({
    resolver: zodResolver(alertSchema),
    defaultValues: {
      severity: 'info',
      targetZones: [],
      scheduledAt: '',
    },
  });

  const severity = watch('severity') as AlertSeverity;

  async function onSubmit(values: AlertFormValues) {
    if (!currentUser) return;

    try {
      const alertPayload: Parameters<typeof broadcastAlert>[0] = {
        title: values.title,
        message: values.message,
        severity: values.severity,
        targetZones: values.targetZones,
      };
      if (values.scheduledAt) alertPayload.scheduledAt = values.scheduledAt;

      const alert = await broadcastAlert(
        alertPayload,
        currentUser.displayName,
        currentUser.uid,
      );

      toast.success(
        `Alert "${alert.title}" sent to ${alert.targetZones.join(', ')}`,
        { id: 'alert-sent', duration: 5000 },
      );
      reset();
    } catch (err) {
      console.error('[AlertComposer] submit error:', err);
      toast.error('Failed to send alert. Please try again.', { id: 'alert-error' });
    }
  }

  return (
    <Card aria-labelledby="composer-heading">
      <CardHeader>
        <CardTitle id="composer-heading" className="flex items-center gap-2">
          <Megaphone className="h-5 w-5 text-neon" aria-hidden="true" />
          Compose Broadcast Alert
        </CardTitle>
        <CardDescription>
          Send a push notification to all registered devices in the selected zones.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-5"
        >
          {/* Title */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="alert-title">
              Title <span aria-hidden="true" className="text-red-400">*</span>
            </Label>
            <Input
              id="alert-title"
              placeholder="e.g. West Wing at capacity — use East Wing"
              aria-required="true"
              aria-invalid={!!errors.title}
              aria-describedby={errors.title ? 'alert-title-err' : undefined}
              {...register('title')}
            />
            {errors.title && (
              <p id="alert-title-err" role="alert" className="text-xs text-red-400">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="alert-msg">
              Message <span aria-hidden="true" className="text-red-400">*</span>
            </Label>
            <Textarea
              id="alert-msg"
              placeholder="Full alert body — be clear and concise (max 500 characters)"
              rows={3}
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'alert-msg-err' : undefined}
              {...register('message')}
            />
            {errors.message && (
              <p id="alert-msg-err" role="alert" className="text-xs text-red-400">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Severity */}
          <div className="flex flex-col gap-1.5">
            <Label>
              Severity <span aria-hidden="true" className="text-red-400">*</span>
            </Label>
            <div role="radiogroup" aria-label="Alert severity" className="flex gap-2 flex-wrap">
              {(['info', 'warning', 'emergency'] as const).map((sev) => (
                <label
                  key={sev}
                  className={cn(
                    'flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold border transition-all',
                    severity === sev
                      ? SEVERITY_STYLES[sev]
                      : 'border-navy-600 text-slate-500 bg-navy-800 hover:border-navy-500',
                  )}
                >
                  <input
                    type="radio"
                    value={sev}
                    className="sr-only"
                    {...register('severity')}
                  />
                  {SEVERITY_LABEL[sev]}
                </label>
              ))}
            </div>
          </div>

          {/* Target Zones */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="alert-zones">
              Target Zones <span aria-hidden="true" className="text-red-400">*</span>
            </Label>
            <Controller
              name="targetZones"
              control={control}
              render={({ field }) => (
                <ZonePicker
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.targetZones?.message}
                />
              )}
            />
          </div>

          {/* Schedule time (optional) */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="alert-schedule">Schedule time (optional)</Label>
            <Input
              id="alert-schedule"
              type="datetime-local"
              aria-describedby="alert-schedule-hint"
              {...register('scheduledAt')}
              className="[color-scheme:dark]"
            />
            <p id="alert-schedule-hint" className="text-xs text-slate-500">
              Leave blank to send immediately. Times are in your local timezone.
            </p>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="self-start"
            aria-label={isSubmitting ? 'Sending alert…' : 'Send broadcast alert'}
          >
            <Megaphone className="mr-2 h-4 w-4" aria-hidden="true" />
            {isSubmitting ? 'Sending…' : 'Send Alert'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
