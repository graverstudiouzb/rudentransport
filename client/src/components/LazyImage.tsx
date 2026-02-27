import { useEffect, useRef, useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  srcSet?: string;
  sizes?: string;
  placeholder?: string;
}

/**
 * LazyImage Component
 * Loads images only when they're about to enter the viewport
 * Improves initial page load performance
 */
export function LazyImage({
  src,
  alt,
  className = '',
  width,
  height,
  srcSet,
  sizes,
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3C/svg%3E',
}: LazyImageProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <img
      ref={ref}
      src={isVisible ? src : placeholder}
      srcSet={isVisible ? srcSet : undefined}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-75'} transition-opacity duration-300`}
      onLoad={() => setIsLoaded(true)}
      loading="lazy"
    />
  );
}

/**
 * ResponsiveImage Component
 * Combines lazy loading with srcset for responsive images
 */
interface ResponsiveImageProps extends LazyImageProps {
  mobileSrc?: string;
  tabletSrc?: string;
  desktopSrc?: string;
}

export function ResponsiveImage({
  src,
  mobileSrc,
  tabletSrc,
  desktopSrc,
  alt,
  className = '',
  ...props
}: ResponsiveImageProps) {
  const srcSet = [
    mobileSrc && `${mobileSrc} 480w`,
    tabletSrc && `${tabletSrc} 768w`,
    desktopSrc && `${desktopSrc} 1200w`,
  ]
    .filter(Boolean)
    .join(', ');

  const sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px';

  return (
    <LazyImage
      src={src}
      alt={alt}
      srcSet={srcSet || undefined}
      sizes={sizes}
      className={className}
      {...props}
    />
  );
}
