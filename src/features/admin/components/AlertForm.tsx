import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Megaphone } from 'lucide-react';
import toast from 'react-hot-toast';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { broadcastAlert } from '@/services/alertService';
import { useAuth } from '@/hooks/useAuth';
import type { AlertSeverity } from '@/types/alert';
import { SEVERITY_STYLES, SEVERITY_LABEL } from '@/types/alert';
import { ZonePicker } from './ZonePicker';
import { memo } from 'react';

const alertSchema = z.object({
  title: z.string().min(3).max(100),
  message: z.string().min(10).max(500),
  severity: z.enum(['info', 'warning', 'emergency'] as const),
  targetZones: z.array(z.string()).min(1),
  scheduledAt: z.string().optional(),
});

type AlertFormValues = z.infer<typeof alertSchema>;

export const AlertForm = memo(function AlertForm() {
  const { currentUser } = useAuth();
  const { register, handleSubmit, control, reset, watch, formState: { errors, isSubmitting } } = useForm<AlertFormValues>({
    resolver: zodResolver(alertSchema),
    defaultValues: { severity: 'info', targetZones: [], scheduledAt: '' },
  });

  const severity = watch('severity') as AlertSeverity;

  async function onSubmit(values: AlertFormValues) {
    if (!currentUser) return;
    try {
      const alertPayload: Parameters<typeof broadcastAlert>[0] = {
        title: values.title, message: values.message, severity: values.severity, targetZones: values.targetZones,
      };
      if (values.scheduledAt) alertPayload.scheduledAt = values.scheduledAt;

      const alert = await broadcastAlert(alertPayload, currentUser.displayName, currentUser.uid);
      toast.success(`Alert "${alert.title}" sent to ${alert.targetZones.join(', ')}`, { id: 'alert-sent', duration: 5000 });
      reset();
    } catch (err) {
      console.error('[AlertComposer] submit error:', err);
      toast.error('Failed to send alert. Please try again.', { id: 'alert-error' });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="alert-title">Title <span aria-hidden="true" className="text-red-400">*</span></Label>
        <Input id="alert-title" placeholder="e.g. West Wing at capacity" aria-required="true" aria-invalid={!!errors.title} aria-describedby={errors.title ? 'alert-title-err' : undefined} {...register('title')} />
        {errors.title && <p id="alert-title-err" role="alert" className="text-xs text-red-400">{errors.title.message}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="alert-msg">Message <span aria-hidden="true" className="text-red-400">*</span></Label>
        <Textarea id="alert-msg" placeholder="Full alert body" rows={3} aria-required="true" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'alert-msg-err' : undefined} {...register('message')} />
        {errors.message && <p id="alert-msg-err" role="alert" className="text-xs text-red-400">{errors.message.message}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label>Severity <span aria-hidden="true" className="text-red-400">*</span></Label>
        <div role="radiogroup" aria-label="Alert severity" className="flex gap-2 flex-wrap">
          {(['info', 'warning', 'emergency'] as const).map((sev) => (
            <label key={sev} className={cn('flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold border transition-all', severity === sev ? SEVERITY_STYLES[sev] : 'border-navy-600 text-slate-500 bg-navy-800 hover:border-navy-500')}>
              <input type="radio" value={sev} className="sr-only" {...register('severity')} />
              {SEVERITY_LABEL[sev]}
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="alert-zones">Target Zones <span aria-hidden="true" className="text-red-400">*</span></Label>
        <Controller name="targetZones" control={control} render={({ field }) => <ZonePicker value={field.value} onChange={field.onChange} error={errors.targetZones?.message} />} />
      </div>

      <Button type="submit" disabled={isSubmitting} className="self-start" aria-label="Send broadcast alert">
        <Megaphone className="mr-2 h-4 w-4" aria-hidden="true" />
        {isSubmitting ? 'Sending…' : 'Send Alert'}
      </Button>
    </form>
  );
});

AlertForm.displayName = 'AlertForm';
