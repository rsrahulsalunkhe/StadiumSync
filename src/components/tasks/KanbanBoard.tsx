import { useCallback } from 'react';
import {
  DndContext,
  closestCorners,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useTaskStore } from '@/store/taskStore';
import { TaskColumn } from './TaskColumn';
import type { TaskStatus } from '@/types/task';
import { COLUMN_ORDER } from '@/types/task';

const E2E_BYPASS = import.meta.env.VITE_E2E_BYPASS_AUTH === 'true';

/**
 * KanbanBoard
 *
 * Renders three droppable columns (Unassigned / In Progress / Resolved).
 * Drag-end handler:
 *   1. Detects the target column from `over.id`.
 *   2. Applies an optimistic Zustand update immediately.
 *   3. Fires an async Firestore updateDoc — reverts on failure.
 */
export function KanbanBoard() {
  const { tasks, moveTask, revertTask } = useTaskStore();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const onDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (!over) return;

      const taskId = active.id as string;
      const overId = over.id as string;

      // Resolve the target column status.
      // `over.id` is either a column status string or another task's id.
      const targetStatus: TaskStatus | undefined = COLUMN_ORDER.includes(
        overId as TaskStatus,
      )
        ? (overId as TaskStatus)
        : (tasks.find((t) => t.id === overId)?.status as TaskStatus | undefined);

      if (!targetStatus) return;

      const draggedTask = tasks.find((t) => t.id === taskId);
      if (!draggedTask || draggedTask.status === targetStatus) return;

      const previousStatus = draggedTask.status;

      // Optimistic update
      moveTask(taskId, targetStatus);

      if (E2E_BYPASS && typeof window !== 'undefined') {
        (window as Window & { __e2eFirestoreUpdateCalled?: boolean }).__e2eFirestoreUpdateCalled = true;
      }

      // Async Firestore sync with rollback on failure
      updateDoc(doc(db, 'tasks', taskId), { status: targetStatus }).catch(
        (err: unknown) => {
          console.error('[KanbanBoard] Firestore update failed — reverting:', err);
          revertTask(taskId, previousStatus);
        },
      );
    },
    [tasks, moveTask, revertTask],
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={onDragEnd}
    >
      <div
        className="flex gap-4 overflow-x-auto pb-4"
        role="region"
        aria-label="Task board — drag cards between columns to change status"
      >
        {COLUMN_ORDER.map((status) => (
          <TaskColumn
            key={status}
            status={status}
            tasks={tasks.filter((t) => t.status === status)}
          />
        ))}
      </div>
    </DndContext>
  );
}
