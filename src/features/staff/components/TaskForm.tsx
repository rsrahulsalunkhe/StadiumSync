import { memo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { doc, setDoc } from 'firebase/firestore';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';
import { db } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { NativeSelect } from '@/components/ui/NativeSelect';
import { useTaskStore } from '@/store/taskStore';
import type { StaffTask, TaskPriority } from '@/types/task';
import { ZONE_OPTIONS } from '@/types/task';

const addTaskSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters').max(120),
  zone: z.string().min(1, 'Select a zone'),
  priority: z.enum(['high', 'medium', 'low']),
  assignedTo: z.string().optional(),
});

export type AddTaskFormValues = z.infer<typeof addTaskSchema>;

export interface TaskFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}

/**
 * TaskForm Component
 * The form used to create a new task.
 */
export const TaskForm = memo(function TaskForm({ onSuccess, onCancel }: TaskFormProps) {
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

    addTask(task);
    onSuccess();
    reset();

    try {
      await setDoc(doc(db, 'tasks', id), task);
    } catch (err) {
      console.error('[TaskForm] Firestore write failed:', err);
      toast.error('Task saved locally — will sync when connection restores.');
    }
  }

  return (
    <form id="add-task-form" onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="task-title">Title <span aria-hidden="true" className="text-red-400">*</span></Label>
        <Input
          id="task-title"
          placeholder="e.g. Crowd buildup at Gate A"
          aria-required="true"
          aria-invalid={!!errors.title}
          aria-describedby={errors.title ? 'task-title-err' : undefined}
          {...register('title')}
        />
        {errors.title && <p id="task-title-err" role="alert" className="text-xs text-red-400">{errors.title.message}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="task-zone">Zone <span aria-hidden="true" className="text-red-400">*</span></Label>
        <NativeSelect
          id="task-zone"
          aria-required="true"
          aria-invalid={!!errors.zone}
          aria-describedby={errors.zone ? 'task-zone-err' : undefined}
          {...register('zone')}
        >
          <option value="">Select zone…</option>
          {ZONE_OPTIONS.map((z) => <option key={z} value={z}>{z}</option>)}
        </NativeSelect>
        {errors.zone && <p id="task-zone-err" role="alert" className="text-xs text-red-400">{errors.zone.message}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="task-priority">Priority <span aria-hidden="true" className="text-red-400">*</span></Label>
        <NativeSelect id="task-priority" aria-required="true" {...register('priority')}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </NativeSelect>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="task-assigned">Assign to (optional)</Label>
        <Input id="task-assigned" placeholder="Staff member name" {...register('assignedTo')} />
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
        <Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Creating…' : 'Create Task'}</Button>
      </div>
    </form>
  );
});

TaskForm.displayName = 'TaskForm';
