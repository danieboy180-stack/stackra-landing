import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container, Eyebrow, H2 } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { APP_URL } from '@/lib/site';

const INCLUDED = [
  'Your online storefront',
  'Product catalog',
  'WhatsApp-first ordering',
  'Merchant management',
  'Hosting',
  'Support',
];

export default function Pricing() {
  return (
    <section id='pricing' className='border-t border-border py-24 sm:py-32'>
      <Container className='grid items-center gap-12 lg:grid-cols-2 lg:gap-20'>
        <Reveal>
          <Eyebrow>Pricing</Eyebrow>
          <H2 className='mt-5'>Start selling without building everything yourself.</H2>
          <p className='mt-6 max-w-md text-pretty text-muted-foreground'>
            One simple offer with everything a growing business needs to sell online.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className='rounded-2xl border border-border bg-card p-8 sm:p-10'>
            <p className='text-sm font-medium'>Stackra</p>
            {/* Add the live price here once the commercial offer is final. */}
            <ul className='mt-6 space-y-4'>
              {INCLUDED.map((item) => (
                <li key={item} className='flex items-center gap-3'>
                  <Check className='size-4 shrink-0 text-brand' aria-hidden='true' />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild size='lg' className='mt-8 h-12 w-full rounded-full text-base'>
              <a href={APP_URL}>Get started</a>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
