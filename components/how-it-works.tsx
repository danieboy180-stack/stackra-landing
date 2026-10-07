import { Container, Eyebrow, H2 } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { cn } from '@/lib/utils';

const STEPS = [
  { n: '01', title: 'Set up your business', body: 'Add your business information and your products.' },
  { n: '02', title: 'Your storefront goes live', body: 'Stackra gives customers one place to browse everything you sell.' },
  { n: '03', title: 'Share your link', body: 'Put it on WhatsApp, Instagram, TikTok and anywhere customers find you.' },
];

export default function HowItWorks() {
  return (
    <section id='how-it-works' className='border-t border-border py-24 sm:py-32'>
      <Container>
        <Reveal>
          <Eyebrow>How it works</Eyebrow>
          <H2 className='mt-5 max-w-3xl'>Live in three steps.</H2>
        </Reveal>
        <ol className='mt-14 grid border-t border-border md:grid-cols-3'>
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className={cn(
                'border-b border-border py-8 last:border-b-0 md:border-b-0 md:py-10',
                i > 0 && 'md:border-l md:pl-8',
                i < STEPS.length - 1 && 'md:pr-8'
              )}
            >
              <Reveal delay={i * 0.08}>
                <p className='text-6xl font-medium tracking-tight text-foreground/20 sm:text-7xl'>{s.n}</p>
                <h3 className='mt-8 text-xl font-medium tracking-tight'>{s.title}</h3>
                <p className='mt-2 max-w-xs text-muted-foreground'>{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
