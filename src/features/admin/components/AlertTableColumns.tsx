import { createColumnHelper } from '@tanstack/react-table';
import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Alert, AlertSeverity } from '@/types/alert';
import { SEVERITY_STYLES, SEVERITY_LABEL } from '@/types/alert';

export function SeverityBadge({ severity }: { severity: AlertSeverity }) {
  return (
    <span
      className={cn('rounded-full px-2 py-0.5 text-[10px] font-semibold', SEVERITY_STYLES[severity])}
      aria-label={`Severity: ${SEVERITY_LABEL[severity]}`}
    >
      {SEVERITY_LABEL[severity]}
    </span>
  );
}

export function SortIcon({ sorted }: { sorted: false | 'asc' | 'desc' }) {
  if (sorted === 'asc') return <ChevronUp className="h-3.5 w-3.5 text-neon" aria-hidden="true" />;
  if (sorted === 'desc') return <ChevronDown className="h-3.5 w-3.5 text-neon" aria-hidden="true" />;
  return <ChevronsUpDown className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />;
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString(undefined, {
    month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
  });
}

const col = createColumnHelper<Alert>();

export const ALERT_COLUMNS = [
  col.accessor('sentAt', {
    header: 'Time',
    cell: (info) => (
      <time dateTime={info.getValue()} className="text-slate-400 text-xs whitespace-nowrap">
        {fmtDate(info.getValue())}
      </time>
    ),
    enableColumnFilter: false,
  }),
  col.accessor('title', {
    header: 'Title',
    cell: (info) => <span className="font-medium text-slate-200 text-sm">{info.getValue()}</span>,
    enableColumnFilter: true,
  }),
  col.accessor('severity', {
    header: 'Severity',
    cell: (info) => <SeverityBadge severity={info.getValue()} />,
    enableColumnFilter: true,
    filterFn: (row, _col, filterValue: string) => row.original.severity === filterValue || filterValue === '',
  }),
  col.accessor('targetZones', {
    header: 'Zones',
    cell: (info) => (
      <div className="flex flex-wrap gap-1 max-w-[180px]">
        {info.getValue().map((z) => (
          <span key={z} className="rounded bg-navy-700 px-1.5 py-0.5 text-[10px] text-slate-400">{z}</span>
        ))}
      </div>
    ),
    enableSorting: false,
    enableColumnFilter: false,
  }),
  col.accessor('sentBy', {
    header: 'Sent by',
    cell: (info) => <span className="text-sm text-slate-400">{info.getValue()}</span>,
    enableColumnFilter: true,
  }),
];
