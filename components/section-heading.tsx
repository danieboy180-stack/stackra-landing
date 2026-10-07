import { cn } from '@/lib/utils';

export function Container({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('mx-auto w-full max-w-6xl px-5', className)} {...props} />;
}

export function Eyebrow({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn('text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground', className)}
      {...props}
    />
  );
}

export function H2({ className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2
      className={cn(
        'text-balance text-[clamp(2.25rem,5vw+0.5rem,4.25rem)] font-medium leading-[1.02] tracking-[-0.035em]',
        className
      )}
      {...props}
    />
  );
}
