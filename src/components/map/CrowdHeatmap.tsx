import * as React from 'react';
import { Map } from '@vis.gl/react-google-maps';
import { HeatmapOverlay } from './HeatmapOverlay';
import { StadiumGroundOverlay } from './StadiumGroundOverlay';
import { ZoneMarker } from './ZoneMarker';
import { ExitRoutePolyline } from './ExitRoutePolyline';
import { STADIUM_CENTER } from '@/types/crowd';
import type { CrowdZone } from '@/types/crowd';

// Dark map style to match the navy app theme
const DARK_MAP_STYLES: google.maps.MapTypeStyle[] = [
  { elementType: 'geometry',              stylers: [{ color: '#0a0f1e' }] },
  { elementType: 'labels.text.fill',      stylers: [{ color: '#94a3b8' }] },
  { elementType: 'labels.text.stroke',    stylers: [{ color: '#0a0f1e' }] },
  { featureType: 'road',                  elementType: 'geometry',      stylers: [{ color: '#1a2f4a' }] },
  { featureType: 'road',                  elementType: 'geometry.stroke', stylers: [{ color: '#112236' }] },
  { featureType: 'road.highway',          elementType: 'geometry',      stylers: [{ color: '#1e3a5f' }] },
  { featureType: 'water',                 elementType: 'geometry',      stylers: [{ color: '#0d1b2a' }] },
  { featureType: 'poi',                   elementType: 'geometry',      stylers: [{ color: '#112236' }] },
  { featureType: 'poi',                   elementType: 'labels.text.fill', stylers: [{ color: '#475569' }] },
  { featureType: 'poi.park',              elementType: 'geometry',      stylers: [{ color: '#0f2d1a' }] },
  { featureType: 'transit',               elementType: 'geometry',      stylers: [{ color: '#112236' }] },
  { featureType: 'administrative',        elementType: 'geometry',      stylers: [{ color: '#1a2f4a' }] },
  { featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{ color: '#64748b' }] },
];

const MAPS_MAP_ID = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID as string | undefined;

interface CrowdHeatmapProps {
  zones: CrowdZone[];
}

/**
 * Core map component — composes dark-styled Map with three layers:
 *   1. StadiumGroundOverlay — semi-transparent stadium floor-plan SVG
 *   2. HeatmapOverlay       — google.maps.visualization.HeatmapLayer
 *   3. ZoneMarker[]         — AdvancedMarker + InfoWindow per zone
 *
 * Must be rendered inside an <APIProvider>. Zones come from useCrowdData().
 */
export function CrowdHeatmap({ zones }: CrowdHeatmapProps) {
  const markers = React.useMemo(() => {
    return zones.map((zone) => <ZoneMarker key={zone.zoneId} zone={zone} />);
  }, [zones]);

  return (
    <Map
      mapId={MAPS_MAP_ID ?? 'DEMO_MAP_ID'}
      defaultCenter={STADIUM_CENTER}
      defaultZoom={16}
      gestureHandling="greedy"
      disableDefaultUI={false}
      styles={DARK_MAP_STYLES}
      style={{ width: '100%', height: '100%' }}
      aria-label="Stadium crowd density heatmap"
      reuseMaps
    >
      <StadiumGroundOverlay />
      <HeatmapOverlay zones={zones} />
      {markers}
      <ExitRoutePolyline />
    </Map>
  );
}
