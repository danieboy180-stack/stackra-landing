import { Container, Eyebrow, H2 } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { MiniBars, OrderBubble, ProductRow, UrlPill } from '@/components/mocks';

const FEATURES = [
  {
    title: 'Your own storefront',
    body: 'Give customers one link where they can see everything you sell.',
    visual: <UrlPill />,
  },
  {
    title: 'Product management',
    body: 'Update a product once and your storefront stays current.',
    visual: <ProductRow />,
  },
  {
    title: 'WhatsApp orders',
    body: 'Keep the conversation where your customers already prefer it.',
    visual: <OrderBubble>1 × Ankara tote · ₦12,500</OrderBubble>,
  },
  {
    title: 'Business insights',
    body: 'See what is happening with your store at a glance.',
    visual: <MiniBars />,
  },
];

export default function FeatureGrid() {
  return (
    <section id='features' className='border-t border-border py-24 sm:py-32'>
      <Container>
        <Reveal>
          <Eyebrow>Features</Eyebrow>
          <H2 className='mt-5 max-w-3xl'>Everything you need to keep your storefront moving.</H2>
        </Reveal>
        <Reveal delay={0.1} className='mt-14'>
          <div className='grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2'>
            {FEATURES.map((f) => (
              <div key={f.title} className='flex flex-col bg-background p-7 sm:p-10'>
                <h3 className='text-xl font-medium tracking-tight'>{f.title}</h3>
                <p className='mt-2 max-w-sm text-muted-foreground'>{f.body}</p>
                <div className='mt-10 flex min-h-24 flex-1 items-end'>{f.visual}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
