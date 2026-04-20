import { create } from 'zustand';
import type { ScoredRoute } from '@/services/exitRoutingService';
import type { StadiumSection } from '@/types/queue';

interface ExitRouteStore {
  /** The route the user has selected to highlight on the map */
  selectedRoute: ScoredRoute | null;
  /** The section the user is departing from */
  fromSection: StadiumSection | null;
  /** Set after the user picks a route in ExitRoutingDialog */
  setRoute: (route: ScoredRoute, section: StadiumSection) => void;
  /** Clear when the heatmap page unmounts or user dismisses the overlay */
  clearRoute: () => void;
}

export const useExitRouteStore = create<ExitRouteStore>()((set) => ({
  selectedRoute: null,
  fromSection: null,

  setRoute: (selectedRoute, fromSection) => set({ selectedRoute, fromSection }),
  clearRoute: () => set({ selectedRoute: null, fromSection: null }),
}));
