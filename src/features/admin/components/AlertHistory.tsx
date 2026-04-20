import { useState, useMemo } from 'react';
import {
  getCoreRowModel, getSortedRowModel, getPaginationRowModel, getFilteredRowModel,
  useReactTable, type SortingState, type ColumnFiltersState,
} from '@tanstack/react-table';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useAlerts } from '@/hooks/useAlerts';
import type { AlertSeverity } from '@/types/alert';
import { SEVERITY_STYLES, SEVERITY_LABEL } from '@/types/alert';
import { ALERT_COLUMNS } from './AlertTableColumns';
import { AlertTable } from './AlertTable';

export function AlertHistory() {
  const { alerts, isLoading, error } = useAlerts();
  const [sorting, setSorting] = useState<SortingState>([{ id: 'sentAt', desc: true }]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [severityFilter, setSeverityFilter] = useState<AlertSeverity | ''>('');

  const effectiveColumnFilters = useMemo<ColumnFiltersState>(() => {
    const base = columnFilters.filter((f) => f.id !== 'severity');
    return severityFilter ? [...base, { id: 'severity', value: severityFilter }] : base;
  }, [columnFilters, severityFilter]);

  const table = useReactTable({
    data: alerts,
    columns: ALERT_COLUMNS,
    state: { sorting, columnFilters: effectiveColumnFilters, globalFilter },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: { pagination: { pageSize: 10 } },
  });

  return (
    <Card aria-labelledby="history-heading">
      <CardHeader>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle id="history-heading">Alert History</CardTitle>
            <CardDescription>All broadcast alerts — sorted by most recent</CardDescription>
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" aria-hidden="true" />
            <Input placeholder="Search alerts…" value={globalFilter} onChange={(e) => setGlobalFilter(e.target.value)} aria-label="Search alerts" className="pl-9 h-9 text-sm" />
          </div>
        </div>
        <div role="group" aria-label="Filter by severity" className="flex flex-wrap gap-1.5 pt-1">
          {(['', 'info', 'warning', 'emergency'] as const).map((sev) => (
            <button key={sev} type="button" onClick={() => setSeverityFilter(sev)} aria-pressed={severityFilter === sev} className={cn('rounded-full px-2.5 py-1 text-xs font-medium border transition-colors', severityFilter === sev ? (sev === '' ? 'bg-neon/20 text-neon border-neon/40' : SEVERITY_STYLES[sev]) : 'border-navy-600 text-slate-500 hover:border-navy-500')}>
              {sev === '' ? 'All' : SEVERITY_LABEL[sev]}
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-2" aria-busy="true"><div className="h-12 rounded-lg bg-navy-800 animate-pulse" /></div>
        ) : error ? (
          <div role="alert" className="rounded-md border border-amber-600/40 bg-amber-950/50 px-4 py-3 text-sm text-amber-400">{error}</div>
        ) : (
          <>
            <AlertTable table={table} />
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-400">
              <span>{table.getFilteredRowModel().rows.length} results &middot; Page {table.getState().pagination.pageIndex + 1} of {Math.max(table.getPageCount(), 1)}</span>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className="h-7 w-7"><ChevronLeft className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className="h-7 w-7"><ChevronRight className="h-4 w-4" /></Button>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
