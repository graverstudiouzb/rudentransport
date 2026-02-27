import * as React from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  success?: boolean;
  label?: string;
}

const TextareaEnhanced = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, success, label, ...props }, ref) => {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);
    
    // Auto-resize textarea
    React.useEffect(() => {
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = Math.min(textarea.scrollHeight, 300) + 'px';
      }
    }, [props.value]);

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-foreground mb-2">
            {label}
            {props.required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        <textarea
          className={cn(
            'flex min-h-[100px] w-full rounded-lg border border-border bg-input px-3 py-2',
            'text-base text-foreground placeholder:text-muted-foreground',
            'transition-all duration-200 resize-none',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background',
            'disabled:cursor-not-allowed disabled:opacity-50',
            
            error && 'border-destructive focus:ring-destructive',
            success && 'border-green-500 focus:ring-green-500',
            
            className
          )}
          ref={(el) => {
            if (ref) {
              if (typeof ref === 'function') ref(el);
              else ref.current = el;
            }
            (textareaRef as any).current = el;
          }}
          {...props}
        />
        {error && (
          <p className="text-sm text-destructive mt-1">{error}</p>
        )}
      </div>
    );
  }
);

TextareaEnhanced.displayName = 'TextareaEnhanced';

export { TextareaEnhanced };
