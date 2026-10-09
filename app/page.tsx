import Hero from "@/components/hero";
import Customers from "@/components/customers";
import Partners from "@/components/partners";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import HowItWorks from "@/components/how-it-works";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

// Dub-style page frame: hairlines down both sides and between sections.
export default function Home() {
  return (
    <>
      <main className="mx-3 flex min-h-dvh flex-col border-x border-border sm:mx-6 xl:mx-auto xl:max-w-[1392px]">
        <Hero />
        <div className="border-t border-border">
          <Customers />
        </div>
        <div className="border-t border-border">
          <Partners />
        </div>
        <div className="border-t border-border">
          <Testimonials />
        </div>
        <div className="border-t border-border">
          <Stats />
        </div>
        <div className="border-t border-border">
          <HowItWorks />
        </div>
        <div className="border-t border-border">
          <Faq />
        </div>
      </main>
      <Footer />
    </>
  );
}
