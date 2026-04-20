import { useState, useMemo } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
  type SortingState,
  type ColumnFiltersState,
} from '@tanstack/react-table';
import { ChevronUp, ChevronDown, ChevronsUpDown, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useAlerts } from '@/hooks/useAlerts';
import type { Alert, AlertSeverity } from '@/types/alert';
import { SEVERITY_STYLES, SEVERITY_LABEL } from '@/types/alert';

// ── Column helper ─────────────────────────────────────────────────────────────

const col = createColumnHelper<Alert>();

// ── Severity badge cell ───────────────────────────────────────────────────────

function SeverityBadge({ severity }: { severity: AlertSeverity }) {
  return (
    <span
      className={cn('rounded-full px-2 py-0.5 text-[10px] font-semibold', SEVERITY_STYLES[severity])}
      aria-label={`Severity: ${SEVERITY_LABEL[severity]}`}
    >
      {SEVERITY_LABEL[severity]}
    </span>
  );
}

// ── Sort icon ─────────────────────────────────────────────────────────────────

function SortIcon({ sorted }: { sorted: false | 'asc' | 'desc' }) {
  if (sorted === 'asc')  return <ChevronUp  className="h-3.5 w-3.5 text-neon" aria-hidden="true" />;
  if (sorted === 'desc') return <ChevronDown className="h-3.5 w-3.5 text-neon" aria-hidden="true" />;
  return <ChevronsUpDown className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />;
}

// ── Date formatter ────────────────────────────────────────────────────────────

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString(undefined, {
    month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
}

// ── Columns definition ────────────────────────────────────────────────────────

const COLUMNS = [
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
    cell: (info) => (
      <span className="font-medium text-slate-200 text-sm">{info.getValue()}</span>
    ),
    enableColumnFilter: true,
  }),

  col.accessor('severity', {
    header: 'Severity',
    cell: (info) => <SeverityBadge severity={info.getValue()} />,
    enableColumnFilter: true,
    filterFn: (row, _col, filterValue: string) =>
      row.original.severity === filterValue || filterValue === '',
  }),

  col.accessor('targetZones', {
    header: 'Zones',
    cell: (info) => (
      <div className="flex flex-wrap gap-1 max-w-[180px]">
        {info.getValue().map((z) => (
          <span
            key={z}
            className="rounded bg-navy-700 px-1.5 py-0.5 text-[10px] text-slate-400"
          >
            {z}
          </span>
        ))}
      </div>
    ),
    enableSorting: false,
    enableColumnFilter: false,
  }),

  col.accessor('sentBy', {
    header: 'Sent by',
    cell: (info) => (
      <span className="text-sm text-slate-400">{info.getValue()}</span>
    ),
    enableColumnFilter: true,
  }),
];

// ── Component ─────────────────────────────────────────────────────────────────

export function AlertHistoryTable() {
  const { alerts, isLoading, error } = useAlerts();
  const [sorting, setSorting]           = useState<SortingState>([{ id: 'sentAt', desc: true }]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter]  = useState('');
  const [severityFilter, setSeverityFilter] = useState<AlertSeverity | ''>('');

  // Merge severity quick-filter into column filters
  const effectiveColumnFilters = useMemo<ColumnFiltersState>(() => {
    const base = columnFilters.filter((f) => f.id !== 'severity');
    return severityFilter ? [...base, { id: 'severity', value: severityFilter }] : base;
  }, [columnFilters, severityFilter]);

  const table = useReactTable({
    data: alerts,
    columns: COLUMNS,
    state: { sorting, columnFilters: effectiveColumnFilters, globalFilter },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel:       getCoreRowModel(),
    getSortedRowModel:     getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel:   getFilteredRowModel(),
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

          {/* Global search */}
          <div className="relative w-full sm:w-64">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
              aria-hidden="true"
            />
            <Input
              placeholder="Search alerts…"
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              aria-label="Search alerts"
              className="pl-9 h-9 text-sm"
            />
          </div>
        </div>

        {/* Severity quick-filter pills */}
        <div role="group" aria-label="Filter by severity" className="flex flex-wrap gap-1.5 pt-1">
          {(['' , 'info', 'warning', 'emergency'] as const).map((sev) => (
            <button
              key={sev}
              type="button"
              onClick={() => setSeverityFilter(sev)}
              className={cn(
                'rounded-full px-2.5 py-1 text-xs font-medium border transition-colors',
                severityFilter === sev
                  ? sev === ''
                    ? 'bg-neon/20 text-neon border-neon/40'
                    : SEVERITY_STYLES[sev]
                  : 'border-navy-600 text-slate-500 hover:border-navy-500',
              )}
              aria-pressed={severityFilter === sev}
            >
              {sev === '' ? 'All' : SEVERITY_LABEL[sev]}
            </button>
          ))}
        </div>
      </CardHeader>

      <CardContent>
        {isLoading ? (
          <div className="space-y-2" aria-busy="true" aria-label="Loading alerts">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-12 rounded-lg bg-navy-800 animate-pulse" />
            ))}
          </div>
        ) : error ? (
          <div role="alert" className="rounded-md border border-amber-600/40 bg-amber-950/50 px-4 py-3 text-sm text-amber-400">
            {error}
          </div>
        ) : (
          <>
            <div className="overflow-x-auto rounded-lg border border-navy-700">
              <table
                className="w-full text-sm"
                aria-label="Broadcast alert history"
                aria-rowcount={alerts.length}
              >
                <thead>
                  {table.getHeaderGroups().map((hg) => (
                    <tr key={hg.id} className="border-b border-navy-700 bg-navy-800/50">
                      {hg.headers.map((header) => (
                        <th
                          key={header.id}
                          scope="col"
                          className={cn(
                            'px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500',
                            header.column.getCanSort() && 'cursor-pointer select-none hover:text-slate-300',
                          )}
                          onClick={header.column.getToggleSortingHandler()}
                          aria-sort={
                            header.column.getIsSorted() === 'asc'
                              ? 'ascending'
                              : header.column.getIsSorted() === 'desc'
                                ? 'descending'
                                : 'none'
                          }
                        >
                          <span className="flex items-center gap-1">
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {header.column.getCanSort() && (
                              <SortIcon sorted={header.column.getIsSorted()} />
                            )}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="divide-y divide-navy-800">
                  {table.getRowModel().rows.length === 0 ? (
                    <tr>
                      <td
                        colSpan={COLUMNS.length}
                        className="px-4 py-12 text-center text-sm text-slate-500 italic"
                      >
                        No alerts match your filters.
                      </td>
                    </tr>
                  ) : (
                    table.getRowModel().rows.map((row) => (
                      <tr key={row.id} className="hover:bg-navy-800/30 transition-colors">
                        {row.getVisibleCells().map((cell) => (
                          <td key={cell.id} className="px-4 py-3">
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </td>
                        ))}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-400">
              <span>
                {table.getFilteredRowModel().rows.length} result
                {table.getFilteredRowModel().rows.length !== 1 ? 's' : ''} &middot;&nbsp;
                Page {table.getState().pagination.pageIndex + 1} of {Math.max(table.getPageCount(), 1)}
              </span>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                  aria-label="Previous page"
                  className="h-7 w-7"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                  aria-label="Next page"
                  className="h-7 w-7"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
