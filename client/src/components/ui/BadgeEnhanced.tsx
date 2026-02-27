import * as React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'destructive' | 'outline';
}

const BadgeEnhanced = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        'transition-colors duration-200',
        
        variant === 'default' && 'bg-primary text-primary-foreground',
        variant === 'secondary' && 'bg-secondary text-secondary-foreground',
        variant === 'success' && 'bg-green-500/20 text-green-400 border border-green-500/30',
        variant === 'warning' && 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
        variant === 'destructive' && 'bg-destructive/20 text-destructive border border-destructive/30',
        variant === 'outline' && 'border border-border text-foreground',
        
        className
      )}
      {...props}
    />
  )
);

BadgeEnhanced.displayName = 'BadgeEnhanced';

export { BadgeEnhanced };
