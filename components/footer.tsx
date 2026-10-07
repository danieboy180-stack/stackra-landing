import { Logo } from '@/components/logo';
import { Container } from '@/components/section-heading';
import { APP_URL } from '@/lib/site';

const LINKS = [
  { href: '#product', label: 'Product' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
  { href: APP_URL, label: 'Sign in' },
];

export default function Footer() {
  return (
    <footer className='border-t border-border py-14'>
      <Container className='flex flex-col gap-10 md:flex-row md:items-start md:justify-between'>
        <div className='max-w-xs'>
          <Logo />
          <p className='mt-4 text-muted-foreground'>Simple online selling for growing businesses.</p>
        </div>
        <nav aria-label='Footer'>
          <ul className='flex flex-wrap gap-x-8 gap-y-3 text-muted-foreground'>
            {LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className='transition-colors hover:text-foreground'>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <Container className='mt-12 text-sm text-muted-foreground'>© Stackra</Container>
    </footer>
  );
}
