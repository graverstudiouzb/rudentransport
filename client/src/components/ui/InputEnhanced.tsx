import * as React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  success?: boolean;
  label?: string;
}

const InputEnhanced = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, success, label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-foreground mb-2">
            {label}
            {props.required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-lg border border-border bg-input px-3 py-2',
            'text-base text-foreground placeholder:text-muted-foreground',
            'transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium',
            
            error && 'border-destructive focus:ring-destructive',
            success && 'border-green-500 focus:ring-green-500',
            
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-sm text-destructive mt-1">{error}</p>
        )}
      </div>
    );
  }
);

InputEnhanced.displayName = 'InputEnhanced';

export { InputEnhanced };
