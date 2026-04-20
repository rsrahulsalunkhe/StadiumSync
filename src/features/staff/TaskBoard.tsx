import { useState } from 'react';
import { Plus, ClipboardList } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { TaskBoard as TaskBoardComponent, AddTaskDialog } from '@/features/staff/components';
import { useTasks } from '@/hooks/useTasks';
import { useTaskStore } from '@/store/taskStore';
import { useAuth } from '@/hooks/useAuth';

/**
 * TaskBoard — Staff Coordination Panel
 *
 * Accessible to both `staff` and `admin` roles.
 * Only `admin` users see the "Add Task" button.
 */
export default function TaskBoard() {
  const { isLoading, error } = useTasks();
  const tasks = useTaskStore((s) => s.tasks);
  const { userRole } = useAuth();
  const [addOpen, setAddOpen] = useState(false);

  const isAdmin = userRole === 'admin';

  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <ClipboardList className="h-6 w-6 text-neon" aria-hidden="true" />
            Staff Coordination
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            {isLoading
              ? 'Loading tasks…'
              : `${tasks.length} task${tasks.length !== 1 ? 's' : ''} across all zones`}
          </p>
        </div>

        {isAdmin && (
          <Button
            onClick={() => setAddOpen(true)}
            className={cn(
              'mt-3 sm:mt-0 self-start',
            )}
            aria-label="Add a new task"
          >
            <Plus className="mr-2 h-4 w-4" aria-hidden="true" />
            Add Task
          </Button>
        )}
      </div>

      {/* Error banner */}
      {error && (
        <div
          role="alert"
          className="rounded-md border border-amber-600/40 bg-amber-950/50 px-4 py-3 text-sm text-amber-400"
        >
          {error}
        </div>
      )}

      {/* Skeleton loading state */}
      {isLoading ? (
        <div
          className="flex gap-4 overflow-x-auto pb-4"
          aria-busy="true"
          aria-label="Loading task board"
        >
          {['Unassigned', 'In Progress', 'Resolved'].map((col) => (
            <div
              key={col}
              className="flex min-w-[260px] flex-1 flex-col gap-3"
              aria-hidden="true"
            >
              <div className="h-10 rounded-lg bg-navy-800 animate-pulse" />
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 rounded-lg bg-navy-800/60 animate-pulse" />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <TaskBoardComponent />
      )}

      {/* Admin-only dialog */}
      {isAdmin && (
        <AddTaskDialog open={addOpen} onOpenChange={setAddOpen} />
      )}
    </div>
  );
}
