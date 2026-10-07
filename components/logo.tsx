import { cn } from '@/lib/utils';

const MARK =
  'M50.00 4.25 L45.38 8.50 L2.00 51.75 L0.50 54.62 L0.00 57.00 L0.38 61.00 L1.62 63.88 L22.00 88.12 L24.38 89.88 L26.88 91.00 L30.12 91.62 L43.25 91.00 L44.50 91.12 L45.25 91.62 L45.12 123.38 L45.50 124.75 L46.75 126.62 L49.75 128.75 L73.25 135.88 L82.50 138.38 L84.25 139.12 L85.50 139.25 L90.62 141.00 L92.62 141.38 L94.00 142.00 L95.62 142.25 L97.38 143.00 L103.00 144.38 L110.75 144.00 L114.75 143.38 L132.75 141.88 L137.25 141.12 L139.62 139.88 L141.12 138.62 L143.12 136.00 L144.25 132.25 L144.25 68.00 L144.00 66.25 L143.25 64.25 L141.88 62.00 L140.38 60.50 L138.38 59.25 L136.00 58.38 L114.12 53.88 L113.38 53.12 L113.50 52.50 L122.25 43.88 L126.25 39.25 L127.38 36.38 L127.50 32.62 L127.12 30.75 L126.12 28.62 L105.62 3.25 L103.62 1.50 L101.25 0.38 L99.38 0.00 L96.62 0.00 L58.62 2.50 L52.62 3.12ZM109.62 61.00 L134.00 66.12 L135.12 66.62 L136.12 68.00 L136.38 131.38 L135.75 132.62 L134.88 133.38 L132.75 133.88 L115.38 135.38 L110.25 136.12 L109.00 135.50 L108.88 61.88ZM101.00 10.38 L118.38 31.62 L119.50 33.38 L119.50 34.88 L115.38 39.50 L76.88 78.75 L76.00 78.88 L57.62 55.88 L57.62 55.25 L99.25 11.62Z';

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox='0 0 144.38 144.5' aria-hidden='true' className={cn('size-7', className)}>
      <path fill='currentColor' fillRule='evenodd' d={MARK} />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark />
      <span className='font-logo text-[22px] font-bold leading-none tracking-[-0.045em]'>Stackra</span>
    </span>
  );
}
