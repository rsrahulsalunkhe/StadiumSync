import { useState, useRef, useEffect, memo } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ALERT_ZONE_OPTIONS } from '@/types/alert';

export interface ZonePickerProps {
  value: string[];
  onChange: (next: string[]) => void;
  error?: string | undefined;
}

export const ZonePicker = memo(function ZonePicker({ value, onChange, error }: ZonePickerProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
      onChange(value.includes('All Zones') ? [] : ['All Zones']);
      return;
    }
    const next = value.filter((z) => z !== 'All Zones');
    onChange(next.includes(zone) ? next.filter((z) => z !== zone) : [...next, zone]);
  }

  const label = value.length === 0 ? 'Select zones…' : value.length === 1 ? value[0] : `${value.length} zones selected`;

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
          'flex h-11 w-full items-center justify-between rounded-md border px-3 py-2 text-sm text-slate-100 bg-navy-800',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950',
          error ? 'border-red-500' : 'border-navy-600',
        )}
      >
        <span className={value.length === 0 ? 'text-slate-500' : ''}>{label}</span>
        <ChevronDown className={cn('h-4 w-4 text-slate-400 transition-transform', open && 'rotate-180')} aria-hidden="true" />
      </button>

      {open && (
        <div role="listbox" aria-multiselectable="true" aria-label="Select target zones" className={cn('absolute top-full left-0 z-50 mt-1 w-full max-h-56 overflow-y-auto rounded-lg border border-navy-600 bg-navy-800 shadow-xl')}>
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
                className={cn('flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-navy-700', selected ? 'text-neon' : 'text-slate-300', zone === 'All Zones' && 'border-b border-navy-700 font-medium')}
              >
                <span className={cn('flex h-4 w-4 shrink-0 items-center justify-center rounded border', selected ? 'bg-neon border-neon' : 'border-navy-500')} aria-hidden="true">
                  {selected && <Check className="h-3 w-3 text-navy-950" strokeWidth={3} />}
                </span>
                {zone}
              </div>
            );
          })}
        </div>
      )}

      {error && <p id="zone-picker-err" role="alert" className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
});

ZonePicker.displayName = 'ZonePicker';
