import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container, Eyebrow } from '@/components/section-heading';
import { StorefrontMock } from '@/components/mocks';
import { APP_URL } from '@/lib/site';

export default function Hero() {
  return (
    <section id='top' className='pt-32 sm:pt-44'>
      <Container>
        <Eyebrow>Built for businesses that sell through WhatsApp</Eyebrow>
        <h1 className='mt-6 max-w-5xl text-balance text-[clamp(3.25rem,8.5vw+0.5rem,7rem)] font-medium leading-[0.95] tracking-[-0.045em]'>
          Sell online. Keep WhatsApp at the center.
        </h1>
        <p className='mt-7 max-w-xl text-pretty text-lg text-muted-foreground'>
          Create your storefront, add your products, share one link, and give customers a simpler way to browse and buy.
        </p>
        <div className='mt-10 flex flex-col gap-3 sm:flex-row'>
          <Button asChild size='lg' className='h-12 rounded-full px-7 text-base'>
            <a href={APP_URL}>
              Create your store <ArrowRight />
            </a>
          </Button>
          <Button
            asChild
            variant='ghost'
            size='lg'
            className='h-12 rounded-full px-7 text-base text-muted-foreground hover:text-foreground'
          >
            <a href='#how-it-works'>See how it works</a>
          </Button>
        </div>
      </Container>
      <Container className='mt-16 sm:mt-24'>
        <div className='max-h-[26rem] overflow-hidden [mask-image:linear-gradient(to_bottom,black_60%,transparent)] animate-in fade-in slide-in-from-bottom-4 duration-700 motion-reduce:animate-none sm:max-h-[34rem]'>
          <StorefrontMock />
        </div>
      </Container>
    </section>
  );
}
