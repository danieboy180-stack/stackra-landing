import { Container, Eyebrow, H2 } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { cn } from '@/lib/utils';

type Props = {
  id?: string;
  eyebrow: string;
  title: string;
  body: string;
  visual: React.ReactNode;
  reversed?: boolean;
};

export default function ProductShowcase({ id, eyebrow, title, body, visual, reversed }: Props) {
  return (
    <section id={id} className='border-t border-border py-24 sm:py-32'>
      <Container
        className={cn(
          'grid items-center gap-12 lg:gap-20',
          reversed ? 'lg:grid-cols-[1.2fr_0.8fr]' : 'lg:grid-cols-[0.8fr_1.2fr]'
        )}
      >
        <Reveal className={cn(reversed && 'lg:order-2')}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <H2 className='mt-5'>{title}</H2>
          <p className='mt-6 max-w-md text-pretty text-muted-foreground'>{body}</p>
        </Reveal>
        <Reveal delay={0.1} className={cn(reversed && 'lg:order-1')}>
          {visual}
        </Reveal>
      </Container>
    </section>
  );
}
