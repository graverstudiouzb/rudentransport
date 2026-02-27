import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes with proper precedence
 * Combines clsx for conditional classes with twMerge to handle Tailwind conflicts
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
