import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge Tailwind classes without conflicts (shadcn/ui convention). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a Date or ISO string to a localised human-readable string. */
export function formatDate(value: Date | string, locale = 'en-US'): string {
  const date = typeof value === 'string' ? new Date(value) : value;
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

/** Returns `true` when `expiresAt` (Unix ms) is in the future with optional buffer. */
export function isTokenValid(expiresAt: number, bufferMs = 60_000): boolean {
  return expiresAt - bufferMs > Date.now();
}

/** Clamp a number between min and max. */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Convert 0–100 occupancy to a Tailwind colour class for gauges. */
export function occupancyColor(percent: number): string {
  if (percent >= 90) return 'text-red-500';
  if (percent >= 70) return 'text-amber-400';
  return 'text-neon';
}
