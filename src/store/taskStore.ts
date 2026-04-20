import { create } from 'zustand';
import type { StaffTask, TaskStatus } from '@/types/task';

interface TaskStore {
  tasks: StaffTask[];
  /** Replace entire collection (called by useTasks on snapshot) */
  setTasks: (tasks: StaffTask[]) => void;
  /** Optimistic move — update status immediately before Firestore confirms */
  moveTask: (taskId: string, newStatus: TaskStatus) => void;
  /** Optimistic revert — called when Firestore write fails */
  revertTask: (taskId: string, oldStatus: TaskStatus) => void;
  /** Optimistic add — called right after user submits AddTaskDialog */
  addTask: (task: StaffTask) => void;
}

export const useTaskStore = create<TaskStore>()((set) => ({
  tasks: [],

  setTasks: (tasks) => set({ tasks }),

  moveTask: (taskId, newStatus) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === taskId ? { ...t, status: newStatus } : t,
      ),
    })),

  revertTask: (taskId, oldStatus) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === taskId ? { ...t, status: oldStatus } : t,
      ),
    })),

  addTask: (task) =>
    set((state) => ({ tasks: [task, ...state.tasks] })),
}));
