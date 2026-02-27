/**
 * Performance Optimization Utilities
 * Lazy loading, code splitting, image optimization
 */

import React from 'react';

// Debounce function for scroll/resize events
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for frequent events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Preload images
export const preloadImage = (src: string) => {
  const img = new Image();
  img.src = src;
};

// Preload critical resources
export const preloadCriticalResources = (urls: string[]) => {
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};

// Optimize font loading
export const optimizeFontLoading = () => {
  if ('fonts' in document) {
    Promise.all([
      (document.fonts as any).load('600 1em Poppins'),
      (document.fonts as any).load('400 1em Sora'),
    ]).then(() => {
      document.documentElement.classList.add('fonts-loaded');
    });
  }
};

// Intersection observer for animations
export const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  options?: IntersectionObserverInit
) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
};

// Lazy load images with intersection observer
export const useLazyImage = (src: string, placeholder?: string) => {
  const [imageSrc, setImageSrc] = React.useState(placeholder);
  const [imageRef, setImageRef] = React.useState<HTMLImageElement | null>(null);

  React.useEffect(() => {
    let observer: IntersectionObserver;

    if (imageRef && imageSrc === placeholder) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(imageRef);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [imageRef, imageSrc, placeholder, src]);

  return [imageSrc, setImageRef] as const;
};
