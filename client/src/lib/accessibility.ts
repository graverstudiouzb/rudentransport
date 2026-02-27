/**
 * Accessibility Utilities (WCAG 2.1 AA)
 * Focus management, ARIA labels, keyboard navigation
 */

import React from 'react';

// Focus trap for modals
export const useFocusTrap = (ref: React.RefObject<HTMLElement>) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const element = ref.current;
      if (!element) return;

      const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    const element = ref.current;
    element?.addEventListener('keydown', handleKeyDown);

    return () => {
      element?.removeEventListener('keydown', handleKeyDown);
    };
  }, [ref]);
};

// Keyboard navigation helper
export const useKeyboardNavigation = (
  items: React.RefObject<HTMLElement>[],
  onSelect?: (index: number) => void
) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      let newIndex = selectedIndex;

      switch (e.key) {
        case 'ArrowUp':
        case 'ArrowLeft':
          newIndex = (selectedIndex - 1 + items.length) % items.length;
          e.preventDefault();
          break;
        case 'ArrowDown':
        case 'ArrowRight':
          newIndex = (selectedIndex + 1) % items.length;
          e.preventDefault();
          break;
        case 'Home':
          newIndex = 0;
          e.preventDefault();
          break;
        case 'End':
          newIndex = items.length - 1;
          e.preventDefault();
          break;
        case 'Enter':
        case ' ':
          onSelect?.(selectedIndex);
          e.preventDefault();
          return;
        default:
          return;
      }

      setSelectedIndex(newIndex);
      items[newIndex].current?.focus();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, items, onSelect]);

  return selectedIndex;
};

// Color contrast checker
export const getContrastRatio = (color1: string, color2: string): number => {
  const getLuminance = (color: string) => {
    const rgb = parseInt(color.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    const luminance =
      (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance <= 0.03928
      ? luminance / 12.92
      : Math.pow((luminance + 0.055) / 1.055, 2.4);
  };

  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);

  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return (lighter + 0.05) / (darker + 0.05);
};

// Validate WCAG AA compliance
export const isWCAGAACompliant = (contrastRatio: number, largeText: boolean = false): boolean => {
  return largeText ? contrastRatio >= 3 : contrastRatio >= 4.5;
};
