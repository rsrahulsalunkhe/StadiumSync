import { useEffect, useState, useCallback, memo } from 'react';
import { useInterval } from '@/hooks/useInterval';
import { Clock } from 'lucide-react';

/**
 * Returns milliseconds until the next "event end" time.
 * For demo purposes we target the next occurrence of 22:00 local time.
 */
function msUntilEventEnd(): number {
  const now = new Date();
  const end = new Date(now);
  end.setHours(22, 0, 0, 0);
  if (end <= now) end.setDate(end.getDate() + 1);
  return end.getTime() - now.getTime();
}

function formatCountdown(ms: number): string {
  if (ms <= 0) return '00:00:00';
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return [h, m, s].map((v) => String(v).padStart(2, '0')).join(':');
}

export interface CountdownTimerProps {
  open: boolean;
}

/**
 * CountdownTimer Component
 * Displays the time until event ends.
 * @param {CountdownTimerProps} props - The component props.
 * @returns {JSX.Element} The rendered CountdownTimer.
 */
export const CountdownTimer = memo(function CountdownTimer({ open }: CountdownTimerProps): JSX.Element {
  const [remainingMs, setRemainingMs] = useState<number>(msUntilEventEnd);

  const tick = useCallback(() => {
    setRemainingMs(msUntilEventEnd());
  }, []);

  useInterval(tick, open ? 1000 : null);

  useEffect(() => {
    if (open) setRemainingMs(msUntilEventEnd());
  }, [open]);

  return (
    <div
      className="flex items-center justify-between rounded-lg bg-navy-800 border border-navy-700 px-4 py-3"
      aria-live="polite"
      aria-label="Time until event end"
    >
      <div className="flex items-center gap-2 text-slate-400 text-sm">
        <Clock className="h-4 w-4" aria-hidden="true" />
        <span>Event ends in</span>
      </div>
      <span className="font-mono text-xl font-bold text-neon tabular-nums">
        {formatCountdown(remainingMs)}
      </span>
    </div>
  );
});

CountdownTimer.displayName = 'CountdownTimer';
