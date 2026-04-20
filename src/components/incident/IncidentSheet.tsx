import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { ImagePlus, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/hooks/useAuth';
import { submitIncident } from '@/services/incidentService';
import type { IncidentType } from '@/types/incident';
import { INCIDENT_TYPE_LABELS, INCIDENT_LOCATION_OPTIONS } from '@/types/incident';

// ── Zod schema ────────────────────────────────────────────────────────────────

const incidentSchema = z.object({
  type: z.enum([
    'medical', 'security', 'fire', 'crowd-surge', 'infrastructure', 'other',
  ] as const, { message: 'Select an incident type' }),
  location: z.string().min(1, 'Select a location'),
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters')
    .max(500, 'Description must be under 500 characters'),
});

type IncidentFormValues = z.infer<typeof incidentSchema>;

// ── Styled native select ──────────────────────────────────────────────────────

function NativeSelect({
  id,
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      id={id}
      className={cn(
        'flex h-11 w-full rounded-md border border-navy-600 bg-navy-800 px-3 py-2',
        'text-sm text-slate-100',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon',
        'focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950',
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

interface IncidentSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function IncidentSheet({ open, onOpenChange }: IncidentSheetProps) {
  const { currentUser } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IncidentFormValues>({
    resolver: zodResolver(incidentSchema),
    // 'other' is a valid default — select shows the blank option via value=""
    // on the native select, so the form will require user to pick before submit.
    defaultValues: { type: 'other', location: '', description: '' },
  });

  // There may be multiple errors — collect them for aria-live
  const errorMessages = Object.values(errors)
    .map((e) => e.message)
    .filter(Boolean);

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
  }

  function handleOpenChange(nextOpen: boolean) {
    if (!nextOpen) {
      reset();
      setPhotoFile(null);
      setPhotoPreview(null);
    }
    onOpenChange(nextOpen);
  }

  async function onSubmit(values: IncidentFormValues) {
    if (!currentUser) {
      toast.error('You must be signed in to report an incident.');
      return;
    }

    try {
      const id = await submitIncident(
        { type: values.type as IncidentType, location: values.location, description: values.description },
        currentUser.uid,
        photoFile ?? undefined,
      );

      toast.success(
        `Incident reported! Tracking ID: ${id}`,
        { duration: 6000, id: 'incident-success' },
      );

      handleOpenChange(false);
    } catch (err) {
      console.error('[IncidentSheet] submit error:', err);
      toast.error('Failed to submit report. Please try again.', { id: 'incident-error' });
    }
  }

  const incidentTypes = Object.entries(INCIDENT_TYPE_LABELS) as [IncidentType, string][];

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent side="bottom" className="px-0">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-400" aria-hidden="true" />
            Report an Incident
          </SheetTitle>
          <SheetDescription>
            Describe what you observed and where. Our team will respond immediately.
          </SheetDescription>
        </SheetHeader>

        {/* Validation error summary — aria-live so screen readers catch updates */}
        {errorMessages.length > 0 && (
          <div
            role="alert"
            aria-live="polite"
            className="mx-6 mt-2 rounded-md border border-red-600/40 bg-red-950/50 px-4 py-3"
          >
            <ul className="list-disc list-inside space-y-0.5">
              {errorMessages.map((msg) => (
                <li key={msg} className="text-sm text-red-400">{msg}</li>
              ))}
            </ul>
          </div>
        )}

        <form
          id="incident-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-5 px-6 pt-4 pb-2"
        >
          {/* Incident type */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="inc-type">
              Incident type <span aria-hidden="true" className="text-red-400">*</span>
            </Label>
            <NativeSelect
              id="inc-type"
              aria-required="true"
              aria-invalid={!!errors.type}
              aria-describedby={errors.type ? 'inc-type-err' : undefined}
              {...register('type')}
            >
              <option value="">Select type…</option>
              {incidentTypes.map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </NativeSelect>
            {errors.type && (
              <p id="inc-type-err" className="text-xs text-red-400 sr-only">
                {errors.type.message}
              </p>
            )}
          </div>

          {/* Location */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="inc-location">
              Location <span aria-hidden="true" className="text-red-400">*</span>
            </Label>
            <NativeSelect
              id="inc-location"
              aria-required="true"
              aria-invalid={!!errors.location}
              aria-describedby={errors.location ? 'inc-location-err' : undefined}
              {...register('location')}
            >
              <option value="">Select location…</option>
              {INCIDENT_LOCATION_OPTIONS.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </NativeSelect>
            {errors.location && (
              <p id="inc-location-err" className="text-xs text-red-400 sr-only">
                {errors.location.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="inc-desc">
              Description <span aria-hidden="true" className="text-red-400">*</span>
            </Label>
            <Textarea
              id="inc-desc"
              placeholder="Describe what happened — include any relevant details (time, people involved, etc.)"
              rows={4}
              aria-required="true"
              aria-invalid={!!errors.description}
              aria-describedby="inc-desc-hint inc-desc-err"
              {...register('description')}
            />
            <p id="inc-desc-hint" className="text-xs text-slate-500">
              10–500 characters
            </p>
            {errors.description && (
              <p id="inc-desc-err" className="text-xs text-red-400 sr-only">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Photo upload (optional) */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="inc-photo">Photo (optional)</Label>
            <input
              ref={fileInputRef}
              id="inc-photo"
              type="file"
              accept="image/*"
              capture="environment"
              className="sr-only"
              aria-label="Upload an incident photo"
              onChange={handlePhotoChange}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className={cn(
                'flex items-center gap-2 rounded-md border border-dashed px-4 py-3',
                'text-sm text-slate-400 transition-colors',
                photoPreview
                  ? 'border-neon/40 text-neon'
                  : 'border-navy-600 hover:border-navy-500 hover:text-slate-300',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon',
              )}
              aria-controls="inc-photo"
            >
              <ImagePlus className="h-4 w-4 shrink-0" aria-hidden="true" />
              {photoPreview ? 'Photo selected — tap to change' : 'Attach a photo'}
            </button>

            {photoPreview && (
              <img
                src={photoPreview}
                alt="Selected incident photo preview"
                className="mt-1 h-24 w-full rounded-md object-cover border border-navy-700"
              />
            )}
          </div>
        </form>

        <SheetFooter className="px-6 pt-2 pb-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => handleOpenChange(false)}
            className="w-full sm:w-auto"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            form="incident-form"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting ? 'Submitting…' : 'Submit Report'}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
