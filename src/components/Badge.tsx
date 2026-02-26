import React from 'react';
import { cn } from '../lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'accent';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius)] px-2 py-1 text-xs font-mono font-medium ring-1 ring-inset transition-colors",
        {
          'bg-secondary text-secondary-foreground ring-border': variant === 'default',
          'bg-transparent text-muted-foreground ring-border': variant === 'outline',
          'bg-accent text-accent-foreground ring-ring': variant === 'accent',
        },
        className
      )}
      {...props}
    />
  );
}
