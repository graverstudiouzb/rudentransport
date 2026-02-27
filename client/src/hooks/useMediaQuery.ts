import { useState, useEffect } from 'react';

/**
 * Hook to detect media query matches
 * Usage: const isMobile = useMediaQuery('(max-width: 640px)');
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Set initial value
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Listen for changes
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener);
  }, [query, matches]);

  return matches;
}

/**
 * Common breakpoint queries
 */
export const mediaQueries = {
  xs: '(max-width: 320px)',
  sm: '(max-width: 640px)',
  md: '(max-width: 768px)',
  lg: '(max-width: 1024px)',
  xl: '(max-width: 1280px)',
  
  smUp: '(min-width: 640px)',
  mdUp: '(min-width: 768px)',
  lgUp: '(min-width: 1024px)',
  xlUp: '(min-width: 1280px)',
  
  isMobile: '(max-width: 768px)',
  isTablet: '(min-width: 768px) and (max-width: 1024px)',
  isDesktop: '(min-width: 1024px)',
  
  touchDevice: '(hover: none) and (pointer: coarse)',
  mouseDevice: '(hover: hover) and (pointer: fine)',
};

/**
 * Hook to detect if device supports touch
 */
export function useTouchDevice(): boolean {
  return useMediaQuery(mediaQueries.touchDevice);
}

/**
 * Hook to detect if device is mobile
 */
export function useIsMobile(): boolean {
  return useMediaQuery(mediaQueries.isMobile);
}

/**
 * Hook to detect if device is tablet
 */
export function useIsTablet(): boolean {
  return useMediaQuery(mediaQueries.isTablet);
}

/**
 * Hook to detect if device is desktop
 */
export function useIsDesktop(): boolean {
  return useMediaQuery(mediaQueries.isDesktop);
}
