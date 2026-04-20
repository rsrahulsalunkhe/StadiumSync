import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { cn } from '@/lib/utils';
import { TaskCard } from './TaskCard';
import type { StaffTask, TaskStatus } from '@/types/task';
import { COLUMN_LABELS } from '@/types/task';

// ── Column header colour ──────────────────────────────────────────────────────

const HEADER_ACCENT: Record<TaskStatus, string> = {
  'unassigned':  'border-slate-500/40  text-slate-400',
  'in-progress': 'border-amber-500/40  text-amber-400',
  'resolved':    'border-emerald-500/40 text-emerald-400',
};

const HEADER_DOT: Record<TaskStatus, string> = {
  'unassigned':  'bg-slate-500',
  'in-progress': 'bg-amber-500',
  'resolved':    'bg-emerald-500',
};

// ── Component ─────────────────────────────────────────────────────────────────

interface TaskColumnProps {
  status: TaskStatus;
  tasks: StaffTask[];
}

export function TaskColumn({ status, tasks }: TaskColumnProps) {
  const { setNodeRef, isOver } = useDroppable({ id: status });

  return (
    <section
      aria-label={`${COLUMN_LABELS[status]} column — ${tasks.length} tasks`}
      className="flex min-w-[260px] flex-1 flex-col gap-3"
    >
      {/* Column header */}
      <div
        className={cn(
          'flex items-center gap-2 rounded-lg border px-3 py-2',
          HEADER_ACCENT[status],
          'bg-navy-800/50',
        )}
      >
        <span
          className={cn('h-2 w-2 rounded-full', HEADER_DOT[status])}
          aria-hidden="true"
        />
        <h2 className="text-sm font-semibold">{COLUMN_LABELS[status]}</h2>
        <span
          className="ml-auto rounded-full bg-navy-700 px-2 py-0.5 text-xs font-medium text-slate-400"
          aria-label={`${tasks.length} tasks`}
        >
          {tasks.length}
        </span>
      </div>

      {/* Drop zone */}
      <div
        ref={setNodeRef}
        className={cn(
          'flex flex-col gap-2 rounded-lg p-2 min-h-[200px] transition-colors duration-150',
          isOver ? 'bg-neon/5 ring-1 ring-neon/20' : 'bg-navy-800/20',
        )}
      >
        <SortableContext
          items={tasks.map((t) => t.id)}
          strategy={verticalListSortingStrategy}
        >
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </SortableContext>

        {tasks.length === 0 && (
          <p
            className="flex flex-1 items-center justify-center text-xs text-slate-600 italic py-8"
            aria-live="polite"
          >
            Drop tasks here
          </p>
        )}
      </div>
    </section>
  );
}
