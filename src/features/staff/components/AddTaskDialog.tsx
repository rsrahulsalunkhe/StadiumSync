import { memo } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { TaskForm } from './TaskForm';

export interface AddTaskDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * AddTaskDialog Component
 * Wraps the TaskForm in a Modal Dialog for creating tasks.
 */
export const AddTaskDialog = memo(function AddTaskDialog({ open, onOpenChange }: AddTaskDialogProps) {
  function handleOpenChange(nextOpen: boolean) {
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
        <TaskForm onSuccess={() => handleOpenChange(false)} onCancel={() => handleOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
});

AddTaskDialog.displayName = 'AddTaskDialog';
