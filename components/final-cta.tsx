import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { APP_URL } from '@/lib/site';

export default function FinalCta() {
  return (
    <section className='border-t border-border py-28 sm:py-40'>
      <Container>
        <Reveal className='text-center'>
          <h2 className='mx-auto max-w-5xl text-balance text-[clamp(3rem,9vw,7rem)] font-medium leading-[0.95] tracking-[-0.045em]'>
            Your business is ready for its own storefront.
          </h2>
          <p className='mx-auto mt-7 max-w-xl text-pretty text-lg text-muted-foreground'>
            Put your products in one place, give customers a better way to browse, and keep WhatsApp where it works best.
          </p>
          <div className='mt-10 flex justify-center'>
            <Button asChild size='lg' className='h-12 rounded-full px-7 text-base'>
              <a href={APP_URL}>
                Create your store <ArrowRight />
              </a>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
