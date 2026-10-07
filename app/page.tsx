import Hero from '@/components/hero';
import ProofStrip from '@/components/proof-strip';
import Problem from '@/components/problem';
import ProductShowcase from '@/components/product-showcase';
import { OrderFlowMock, StorefrontMock } from '@/components/mocks';
import FeatureGrid from '@/components/feature-grid';
import HowItWorks from '@/components/how-it-works';
import Pricing from '@/components/pricing';
import Faq from '@/components/faq';
import FinalCta from '@/components/final-cta';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <main id='main' className='flex min-h-dvh flex-col'>
        <Hero />
        <ProofStrip />
        <Problem />
        <ProductShowcase
          id='product'
          eyebrow='Your storefront'
          title='Give your business a proper storefront.'
          body='One link where customers can discover your business, browse products, see prices and decide what they want before starting a conversation.'
          visual={<StorefrontMock variant='phone' />}
        />
        <ProductShowcase
          reversed
          eyebrow='WhatsApp'
          title='WhatsApp doesn’t disappear. It gets better.'
          body='Customers browse first, then tap to order. The details arrive in your WhatsApp conversation, so you pick up right where you always do.'
          visual={<OrderFlowMock />}
        />
        <FeatureGrid />
        <HowItWorks />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
