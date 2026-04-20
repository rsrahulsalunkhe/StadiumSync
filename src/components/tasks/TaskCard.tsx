import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import type { StaffTask } from '@/types/task';
import { PRIORITY_STYLES, PRIORITY_LABEL } from '@/types/task';

// ── Staff avatar ──────────────────────────────────────────────────────────────

function initials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0] ?? '')
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

/** Deterministic hue from name so the same person always gets the same colour */
function avatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue} 55% 40%)`;
}

// ── Relative time ─────────────────────────────────────────────────────────────

function relativeTime(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const diffMin = Math.floor(diffMs / 60_000);
  if (diffMin < 1) return 'just now';
  if (diffMin < 60) return `${diffMin}m ago`;
  return `${Math.floor(diffMin / 60)}h ago`;
}

// ── Component ─────────────────────────────────────────────────────────────────

interface TaskCardProps {
  task: StaffTask;
}

export function TaskCard({ task }: TaskCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <article
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      aria-label={`Task: ${task.title}`}
      aria-roledescription="draggable task card"
      className={cn(
        'rounded-lg border border-navy-700 bg-navy-800 p-3 flex flex-col gap-2',
        'cursor-grab active:cursor-grabbing select-none',
        'hover:border-navy-600 transition-colors duration-100',
        isDragging && 'opacity-40 shadow-2xl ring-1 ring-neon/40',
      )}
    >
      {/* Title */}
      <p className="text-sm font-medium text-slate-100 leading-snug">{task.title}</p>

      {/* Badges row */}
      <div className="flex flex-wrap items-center gap-1.5">
        {/* Zone badge */}
        <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5">
          {task.zone}
        </Badge>

        {/* Priority chip */}
        <span
          className={cn(
            'rounded-full px-1.5 py-0.5 text-[10px] font-semibold',
            PRIORITY_STYLES[task.priority],
          )}
          aria-label={`Priority: ${PRIORITY_LABEL[task.priority]}`}
        >
          {PRIORITY_LABEL[task.priority]}
        </span>
      </div>

      {/* Footer row — avatar + timestamp */}
      <div className="flex items-center justify-between mt-0.5">
        {task.assignedTo ? (
          <div className="flex items-center gap-1.5">
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
              style={{ backgroundColor: avatarColor(task.assignedTo) }}
              aria-label={`Assigned to ${task.assignedTo}`}
              title={task.assignedTo}
            >
              {initials(task.assignedTo)}
            </span>
            <span className="text-[11px] text-slate-400 truncate max-w-[100px]">
              {task.assignedTo}
            </span>
          </div>
        ) : (
          <span className="text-[11px] text-slate-500 italic">Unassigned</span>
        )}

        <time
          dateTime={task.createdAt}
          className="text-[11px] text-slate-500 shrink-0"
        >
          {relativeTime(task.createdAt)}
        </time>
      </div>
    </article>
  );
}
