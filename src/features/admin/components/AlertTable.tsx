import { flexRender, type Table } from '@tanstack/react-table';
import { cn } from '@/lib/utils';
import type { Alert } from '@/types/alert';
import { SortIcon, ALERT_COLUMNS } from './AlertTableColumns';

export interface AlertTableProps {
  table: Table<Alert>;
}

export function AlertTable({ table }: AlertTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-navy-700">
      <table className="w-full text-sm" aria-label="Broadcast alert history" aria-rowcount={table.getPrePaginationRowModel().rows.length}>
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
                  aria-sort={header.column.getIsSorted() === 'asc' ? 'ascending' : header.column.getIsSorted() === 'desc' ? 'descending' : 'none'}
                >
                  <span className="flex items-center gap-1">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getCanSort() && <SortIcon sorted={header.column.getIsSorted()} />}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-navy-800">
          {table.getRowModel().rows.length === 0 ? (
            <tr>
              <td colSpan={ALERT_COLUMNS.length} className="px-4 py-12 text-center text-sm text-slate-500 italic">
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
  );
}
