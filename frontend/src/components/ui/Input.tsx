import type { InputHTMLAttributes, LabelHTMLAttributes, SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'h-9 w-full rounded-lg border border-border bg-surface-1 px-3 text-sm text-text-primary outline-none focus:border-series-1',
        className,
      )}
      {...props}
    />
  );
}

export function Select({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        'h-9 w-full rounded-lg border border-border bg-surface-1 px-3 text-sm text-text-primary outline-none focus:border-series-1',
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  // biome-ignore lint/a11y/noLabelWithoutControl: shared label primitive — callers pass htmlFor (or a control child); the association isn't visible at the component definition.
  return <label className={cn('mb-1 block text-xs font-medium text-text-secondary', className)} {...props} />;
}
