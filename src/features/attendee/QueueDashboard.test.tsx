import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QueueDashboard from './QueueDashboard';
import type { QueueZone } from '@/types/queue';

const mockUseQueueData = vi.fn();

vi.mock('@/hooks/useQueueData', () => ({
  useQueueData: () => mockUseQueueData(),
}));

vi.mock('@/components/queue/QueueCard', () => ({
  QueueCard: ({ zone }: { zone: QueueZone }) => <div data-testid="queue-card">{zone.name}</div>,
}));

vi.mock('@/components/queue/QueueCardSkeleton', () => ({
  QueueCardSkeleton: () => <div data-testid="queue-skeleton">Loading</div>,
}));

vi.mock('@/components/exit/ExitRoutingDialog', () => ({
  ExitRoutingDialog: () => null,
}));

const zones: QueueZone[] = [
  { id: 'c1', name: 'Closed Zone', type: 'gate', waitMinutes: 1, status: 'closed', currentCount: 10, capacity: 100 },
  { id: 'g1', name: 'Gate A', type: 'gate', waitMinutes: 5, status: 'open', currentCount: 40, capacity: 100 },
  { id: 'r1', name: 'Restroom A', type: 'restroom', waitMinutes: 2, status: 'busy', currentCount: 20, capacity: 50 },
  { id: 'p1', name: 'Parking A', type: 'parking', waitMinutes: 1, status: 'open', currentCount: 30, capacity: 80 },
];

beforeEach(() => {
  mockUseQueueData.mockReset();
});

describe('QueueDashboard', () => {
  it('renders zone cards in sorted order with closed zones last', () => {
    mockUseQueueData.mockReturnValue({ zones, isLoading: false, error: null });
    render(<QueueDashboard />);

    const cards = screen.getAllByTestId('queue-card').map((el) => el.textContent);
    expect(cards).toEqual(['Parking A', 'Restroom A', 'Gate A', 'Closed Zone']);
  });

  it('filters by tab selection', async () => {
    mockUseQueueData.mockReturnValue({ zones, isLoading: false, error: null });
    render(<QueueDashboard />);

    await userEvent.click(screen.getByRole('tab', { name: /Gates/i }));

    expect(screen.getByText('Gate A')).toBeInTheDocument();
    expect(screen.getByText('Closed Zone')).toBeInTheDocument();
    expect(screen.queryByText('Parking A')).not.toBeInTheDocument();
  });

  it('shows empty state for a filter with no matches', async () => {
    mockUseQueueData.mockReturnValue({
      zones: [{ id: 'g1', name: 'Gate A', type: 'gate', waitMinutes: 5, status: 'open', currentCount: 10, capacity: 100 }],
      isLoading: false,
      error: null,
    });

    render(<QueueDashboard />);
    await userEvent.click(screen.getByRole('tab', { name: /Restrooms/i }));

    expect(screen.getByText('No zones found for this filter.')).toBeInTheDocument();
  });

  it('shows loading skeletons while data is loading', () => {
    mockUseQueueData.mockReturnValue({ zones: [], isLoading: true, error: null });
    render(<QueueDashboard />);

    expect(screen.getAllByTestId('queue-skeleton').length).toBeGreaterThan(0);
  });
});
