import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Container, Eyebrow, H2 } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';

const FAQS = [
  {
    q: 'I already sell on WhatsApp. Why do I need this?',
    a: 'That is exactly why Stackra exists. Customers can see your products and prices before the conversation starts, so you spend less time repeating yourself.',
  },
  {
    q: 'I don’t know how to build websites.',
    a: 'You don’t need to. Stackra handles the storefront structure and you simply add your products.',
  },
  {
    q: 'Will my customers still use WhatsApp?',
    a: 'Yes. WhatsApp stays part of the buying experience. Customers browse your storefront, then order through WhatsApp.',
  },
  {
    q: 'Do I need technical knowledge?',
    a: 'No. Setup is designed to stay simple.',
  },
  {
    q: 'What happens after I sign up?',
    a: 'You set up your business and add your products, and your storefront goes live. Then you share your link wherever customers find you.',
  },
];

export default function Faq() {
  return (
    <section id='faq' className='border-t border-border py-24 sm:py-32'>
      <Container className='grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20'>
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <H2 className='mt-5'>Questions merchants actually ask.</H2>
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion type='single' collapsible className='border-t border-border'>
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className='py-6 text-lg font-medium hover:no-underline'>{f.q}</AccordionTrigger>
                <AccordionContent className='max-w-xl pb-6 text-base text-muted-foreground'>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  );
}
