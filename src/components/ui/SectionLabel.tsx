'use client';

import { cn } from '@/lib/utils';

interface SectionLabelProps {
  label: string;
  dark?: boolean;
  className?: string;
}

export function SectionLabel({ label, dark = false, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]',
        dark ? 'text-albos-dark' : 'text-albos-muted',
        className
      )}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full rounded-full bg-albos-accent opacity-75 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-albos-accent" />
      </span>
      <span>{label}</span>
    </div>
  );
}
