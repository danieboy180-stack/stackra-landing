import {
  Droplet,
  Footprints,
  Gift,
  Link2,
  MessageCircle,
  Package,
  Shirt,
  ShoppingBag,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample product UI used as illustration. Swap for real Stackra screenshots when ready.
const PRODUCTS: { name: string; price: string; icon: LucideIcon }[] = [
  { name: 'Ankara tote', price: '₦12,500', icon: ShoppingBag },
  { name: 'Shea butter', price: '₦4,000', icon: Droplet },
  { name: 'Linen shirt', price: '₦18,000', icon: Shirt },
  { name: 'Gift box', price: '₦25,000', icon: Gift },
  { name: 'Leather sandals', price: '₦9,500', icon: Footprints },
  { name: 'Starter pack', price: '₦3,500', icon: Package },
];

function Frame({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      role='img'
      aria-label={label}
      className={cn(
        'overflow-hidden rounded-2xl border border-border bg-card shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]',
        className
      )}
    >
      {children}
    </div>
  );
}

function Tile({ icon: Icon, className }: { icon: LucideIcon; className?: string }) {
  return (
    <div
      aria-hidden='true'
      className={cn('grid place-items-center rounded-lg bg-linear-to-br from-white/[0.08] to-white/[0.02]', className)}
    >
      <Icon className='size-8 text-white/30' strokeWidth={1.25} />
    </div>
  );
}

function WaButton({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-black',
        className
      )}
    >
      <MessageCircle className='size-4' aria-hidden='true' />
      Order on WhatsApp
    </span>
  );
}

export function OrderBubble({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <p
      className={cn(
        'ml-auto w-fit max-w-[92%] rounded-2xl rounded-tr-sm border border-brand/25 bg-brand/15 px-4 py-2.5 text-sm',
        className
      )}
    >
      {children}
    </p>
  );
}

export function StorefrontMock({
  variant = 'wide',
  className,
}: {
  variant?: 'wide' | 'phone';
  className?: string;
}) {
  const phone = variant === 'phone';
  const items = phone ? PRODUCTS.slice(0, 4) : PRODUCTS;
  return (
    <Frame label='Example Stackra storefront' className={cn(phone && 'mx-auto max-w-[22rem]', className)}>
      <div className='flex items-center gap-2 border-b border-border px-4 py-3'>
        {!phone && (
          <span aria-hidden='true' className='flex gap-1.5'>
            <i className='size-2.5 rounded-full bg-white/15' />
            <i className='size-2.5 rounded-full bg-white/15' />
            <i className='size-2.5 rounded-full bg-white/15' />
          </span>
        )}
        <span className='mx-auto rounded-full bg-white/[0.05] px-4 py-1 text-xs text-muted-foreground'>
          stackra.store/your-business
        </span>
        {!phone && <span aria-hidden='true' className='w-10' />}
      </div>
      <div className={cn('p-5', !phone && 'sm:p-8')}>
        <div className='flex items-center gap-3'>
          <span className='grid size-11 place-items-center rounded-full bg-white/[0.08] text-sm font-semibold'>Y</span>
          <div>
            <p className='font-medium leading-tight'>Your business</p>
            <p className='text-sm text-muted-foreground'>Fashion, beauty and gifts</p>
          </div>
        </div>
        <p className='mt-8 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground'>Products</p>
        <div className={cn('mt-4 grid gap-3 sm:gap-4', phone ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3')}>
          {items.map((p, i) => (
            <div
              key={p.name}
              className={cn('rounded-xl border border-border bg-surface p-3', !phone && i > 3 && 'max-sm:hidden')}
            >
              <Tile icon={p.icon} className='aspect-square' />
              <p className='mt-3 text-sm font-medium'>{p.name}</p>
              <p className='text-sm text-muted-foreground'>{p.price}</p>
            </div>
          ))}
        </div>
        <div className='mt-6 flex justify-center'>
          <WaButton />
        </div>
      </div>
    </Frame>
  );
}

const FLOW = ['See the product', 'Tap to order', 'Order arrives in WhatsApp'];

export function OrderFlowMock({ className }: { className?: string }) {
  return (
    <Frame label='Example order flow from a Stackra product to a WhatsApp message' className={className}>
      <div className='grid gap-px bg-border sm:grid-cols-2'>
        <div className='bg-card p-5 sm:p-8'>
          <p className='text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground'>Product</p>
          <Tile icon={ShoppingBag} className='mt-4 aspect-[4/3] [&_svg]:size-12' />
          <p className='mt-4 font-medium'>Ankara tote</p>
          <p className='text-muted-foreground'>₦12,500</p>
          <WaButton className='mt-5 w-full' />
        </div>
        <div className='bg-card p-5 sm:p-8'>
          <p className='text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground'>WhatsApp</p>
          <div className='mt-4 space-y-3'>
            <OrderBubble>Hi! I would like to order from your store.</OrderBubble>
            <OrderBubble>1 × Ankara tote · ₦12,500</OrderBubble>
          </div>
          <p className='mt-6 text-sm text-muted-foreground'>The order arrives ready to confirm.</p>
        </div>
      </div>
      <ol className='grid grid-cols-3 border-t border-border text-center text-xs text-muted-foreground sm:text-sm'>
        {FLOW.map((s, i) => (
          <li key={s} className={cn('p-4', i > 0 && 'border-l border-border')}>
            <span className='mb-1 block font-medium text-foreground'>{`0${i + 1}`}</span>
            {s}
          </li>
        ))}
      </ol>
    </Frame>
  );
}

export function UrlPill() {
  return (
    <span className='inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.04] px-4 py-2 text-sm'>
      <Link2 className='size-4 text-muted-foreground' aria-hidden='true' />
      stackra.store/your-business
    </span>
  );
}

export function ProductRow() {
  return (
    <div className='flex w-full items-center gap-3 rounded-xl border border-border bg-surface p-3'>
      <Tile icon={ShoppingBag} className='size-12 shrink-0 [&_svg]:size-5' />
      <div className='min-w-0 flex-1'>
        <p className='truncate text-sm font-medium'>Ankara tote</p>
        <p className='text-sm text-muted-foreground'>₦12,500</p>
      </div>
      <span className='text-xs text-muted-foreground'>In stock</span>
      <span aria-hidden='true' className='flex h-5 w-9 items-center rounded-full bg-brand p-0.5'>
        <span className='size-4 translate-x-4 rounded-full bg-black' />
      </span>
    </div>
  );
}

const BARS = [38, 60, 46, 78, 54, 92, 68];

export function MiniBars() {
  return (
    <div aria-hidden='true' className='flex h-24 w-full items-end gap-2'>
      {BARS.map((h, i) => (
        <span
          key={i}
          style={{ height: `${h}%` }}
          className={cn('flex-1 rounded-t-md', i === BARS.length - 2 ? 'bg-brand' : 'bg-white/15')}
        />
      ))}
    </div>
  );
}
