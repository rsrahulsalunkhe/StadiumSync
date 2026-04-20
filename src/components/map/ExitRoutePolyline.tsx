import { useEffect, useRef } from 'react';
import { useMap } from '@vis.gl/react-google-maps';
import { useExitRouteStore } from '@/store/exitRouteStore';
import { SECTION_POSITIONS } from '@/types/queue';

/**
 * Draws a `google.maps.Polyline` from the user's selected section to the
 * chosen exit gate.  Reads state from `exitRouteStore` and renders nothing
 * until a route has been selected.
 *
 * Must be mounted inside a `<Map>` component so `useMap()` can resolve.
 */
export function ExitRoutePolyline() {
  const map = useMap();
  const polylineRef = useRef<google.maps.Polyline | null>(null);
  const { selectedRoute, fromSection } = useExitRouteStore();

  useEffect(() => {
    // Remove any existing polyline first
    if (polylineRef.current) {
      polylineRef.current.setMap(null);
      polylineRef.current = null;
    }

    if (!map || !selectedRoute || !fromSection) return;

    const origin = SECTION_POSITIONS[fromSection];

    polylineRef.current = new google.maps.Polyline({
      path: [
        { lat: origin.lat, lng: origin.lng },
        { lat: selectedRoute.lat, lng: selectedRoute.lng },
      ],
      map,
      strokeColor: '#00f5a0',   // neon green matching theme
      strokeOpacity: 0.9,
      strokeWeight: 4,
      geodesic: true,
      // Dashed pattern for a "walking path" aesthetic
      icons: [
        {
          icon: { path: 'M 0,-1 0,1', strokeOpacity: 1, scale: 3 },
          offset: '0',
          repeat: '16px',
        },
      ],
    });

    return () => {
      polylineRef.current?.setMap(null);
      polylineRef.current = null;
    };
  }, [map, selectedRoute, fromSection]);

  return null;
}
