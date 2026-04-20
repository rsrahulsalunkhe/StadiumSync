import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { doc, setDoc } from 'firebase/firestore';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';
import { cn } from '@/lib/utils';
import { db } from '@/lib/firebase';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTaskStore } from '@/store/taskStore';
import type { StaffTask, TaskPriority } from '@/types/task';
import { ZONE_OPTIONS } from '@/types/task';

// ── Zod schema ────────────────────────────────────────────────────────────────

const addTaskSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters').max(120),
  zone: z.string().min(1, 'Select a zone'),
  priority: z.enum(['high', 'medium', 'low']),
  assignedTo: z.string().optional(),
});

type AddTaskFormValues = z.infer<typeof addTaskSchema>;

// ── Styled native select ──────────────────────────────────────────────────────

function NativeSelect({
  className,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        'flex h-11 w-full rounded-md border border-navy-600 bg-navy-800 px-3 py-2',
        'text-sm text-slate-100',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon',
        'focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

interface AddTaskDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddTaskDialog({ open, onOpenChange }: AddTaskDialogProps) {
  const { addTask } = useTaskStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AddTaskFormValues>({
    resolver: zodResolver(addTaskSchema),
    defaultValues: { priority: 'medium', zone: '', assignedTo: '' },
  });

  async function onSubmit(values: AddTaskFormValues) {
    const id = nanoid(10);
    const task: StaffTask = {
      id,
      title: values.title,
      zone: values.zone,
      priority: values.priority as TaskPriority,
      assignedTo: values.assignedTo?.trim() || null,
      status: 'unassigned',
      createdAt: new Date().toISOString(),
    };

    // Optimistic add — update UI immediately
    addTask(task);
    onOpenChange(false);
    reset();

    // Persist to Firestore async
    try {
      await setDoc(doc(db, 'tasks', id), task);
    } catch (err) {
      console.error('[AddTaskDialog] Firestore write failed:', err);
      toast.error('Task saved locally — will sync when connection restores.');
    }
  }

  function handleOpenChange(nextOpen: boolean) {
    if (!nextOpen) reset();
    onOpenChange(nextOpen);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>
            Create a task and assign it to staff. It will appear in the Unassigned column.
          </DialogDescription>
        </DialogHeader>

        <form
          id="add-task-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-4"
        >
          {/* Title */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="task-title">
              Title <span aria-hidden="true" className="text-red-400">*</span>
            </Label>
            <Input
              id="task-title"
              placeholder="e.g. Crowd buildup at Gate A"
              aria-required="true"
              aria-invalid={!!errors.title}
              aria-describedby={errors.title ? 'task-title-err' : undefined}
              {...register('title')}
            />
            {errors.title && (
              <p id="task-title-err" role="alert" className="text-xs text-red-400">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Zone */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="task-zone">
              Zone <span aria-hidden="true" className="text-red-400">*</span>
            </Label>
            <NativeSelect
              id="task-zone"
              aria-required="true"
              aria-invalid={!!errors.zone}
              aria-describedby={errors.zone ? 'task-zone-err' : undefined}
              {...register('zone')}
            >
              <option value="">Select zone…</option>
              {ZONE_OPTIONS.map((z) => (
                <option key={z} value={z}>{z}</option>
              ))}
            </NativeSelect>
            {errors.zone && (
              <p id="task-zone-err" role="alert" className="text-xs text-red-400">
                {errors.zone.message}
              </p>
            )}
          </div>

          {/* Priority */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="task-priority">
              Priority <span aria-hidden="true" className="text-red-400">*</span>
            </Label>
            <NativeSelect
              id="task-priority"
              aria-required="true"
              {...register('priority')}
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </NativeSelect>
          </div>

          {/* Assigned to (optional) */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="task-assigned">Assign to (optional)</Label>
            <Input
              id="task-assigned"
              placeholder="Staff member name"
              {...register('assignedTo')}
            />
          </div>
        </form>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => handleOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            form="add-task-form"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating…' : 'Create Task'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
