import { Container, Eyebrow, H2 } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';

const PROBLEMS = [
  { n: '01', quote: 'How much is this?', body: 'You keep sending prices and product photos by hand.' },
  { n: '02', quote: 'Send me that one again.', body: 'Products disappear inside long conversations.' },
  { n: '03', quote: 'I’ll check later.', body: 'Customers have no single place to browse everything.' },
];

export default function Problem() {
  return (
    <section className='py-24 sm:py-32'>
      <Container>
        <Reveal>
          <Eyebrow>The problem</Eyebrow>
          <H2 className='mt-5 max-w-3xl'>Selling shouldn’t mean answering the same question all day.</H2>
          <p className='mt-6 max-w-xl text-pretty text-muted-foreground'>
            WhatsApp is great for conversation. Browsing everything you sell works better in one place.
          </p>
        </Reveal>
        <div className='mt-14 grid gap-4 md:grid-cols-3'>
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08} className='h-full'>
              <div className='h-full rounded-2xl border border-border bg-card p-6 sm:p-8'>
                <p className='text-sm text-muted-foreground'>{p.n}</p>
                <p className='mt-10 text-2xl font-medium tracking-tight'>{p.quote}</p>
                <p className='mt-3 text-muted-foreground'>{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
