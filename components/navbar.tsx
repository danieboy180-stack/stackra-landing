'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { APP_URL } from '@/lib/site';
import { cn } from '@/lib/utils';

const LINKS = [
  { href: '#product', label: 'Product' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled ? 'border-border bg-background/70 backdrop-blur-xl' : 'border-transparent bg-transparent'
      )}
    >
      <div className='mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5'>
        <Link href='/' aria-label='Stackra home'>
          <Logo />
        </Link>
        <nav aria-label='Primary' className='hidden items-center gap-8 md:flex'>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className='text-sm text-muted-foreground transition-colors hover:text-foreground'>
              {l.label}
            </a>
          ))}
        </nav>
        <div className='flex items-center gap-1'>
          <Button asChild variant='ghost' className='hidden h-10 rounded-full px-4 text-muted-foreground hover:text-foreground sm:inline-flex'>
            <a href={APP_URL}>Sign in</a>
          </Button>
          <Button asChild className='h-10 rounded-full px-5'>
            <a href={APP_URL}>
              Get started <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
