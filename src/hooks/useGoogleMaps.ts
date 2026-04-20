import { useApiIsLoaded, useApiLoadingStatus } from '@vis.gl/react-google-maps';

export interface GoogleMapsState {
  /** True once the Maps JS SDK has fully initialised. */
  isLoaded: boolean;
  /** True while the SDK bootstrap request is in flight. */
  isLoading: boolean;
  /** Non-null when the SDK failed to load (bad key, network error, etc.). */
  error: string | null;
}

/**
 * Wraps @vis.gl/react-google-maps status hooks into a single ergonomic object.
 *
 * Must be called inside a component that is a descendant of <APIProvider>.
 * Components can gate their render on `isLoaded` and surface `error` to users.
 */
export function useGoogleMaps(): GoogleMapsState {
  const isLoaded = useApiIsLoaded();
  const status = useApiLoadingStatus();

  return {
    isLoaded,
    isLoading: status === 'LOADING',
    error:
      status === 'FAILED'
        ? 'Google Maps failed to load. Check your API key and Cloud Console configuration.'
        : null,
  };
}
