import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TaskCard } from '@/features/staff/components/TaskCard';
import type { StaffTask } from '@/types/task';

vi.mock('dompurify', () => ({
  default: { sanitize: (s: string) => s },
}));

vi.mock('@dnd-kit/sortable', () => ({
  useSortable: vi.fn(() => ({
    attributes: { 'data-drag-handle': 'true' },
    listeners: { onPointerDown: vi.fn() },
    setNodeRef: vi.fn(),
    transform: null,
    transition: undefined,
    isDragging: false,
  })),
}));

vi.mock('@dnd-kit/utilities', () => ({
  CSS: {
    Transform: {
      toString: () => undefined,
    },
  },
}));

beforeEach(() => {
  vi.setSystemTime(new Date('2026-04-11T12:00:00.000Z'));
});

const baseTask: StaffTask = {
  id: 'task-1',
  title: 'Crowd support needed',
  zone: 'Gate A',
  priority: 'high',
  assignedTo: 'Jamie Wells',
  status: 'unassigned',
  createdAt: '2026-04-11T11:45:00.000Z',
};

describe('TaskCard', () => {
  it('renders draggable surface with drag handle attributes', () => {
    render(<TaskCard task={baseTask} />);

    const card = screen.getByLabelText('Task: Crowd support needed');
    expect(card).toHaveAttribute('data-drag-handle', 'true');
    expect(card).toHaveAttribute('aria-roledescription', 'draggable task card');
  });

  it('applies priority color classes', () => {
    render(<TaskCard task={baseTask} />);

    const priorityChip = screen.getByLabelText('Priority: High');
    expect(priorityChip.className).toContain('text-red-400');
    expect(priorityChip.className).toContain('border-red-500/30');
  });

  it('includes assignment and accessible labels', () => {
    render(<TaskCard task={baseTask} />);

    expect(screen.getByLabelText('Assigned to Jamie Wells')).toBeInTheDocument();
    expect(screen.getByText('Jamie Wells')).toBeInTheDocument();
  });
});
