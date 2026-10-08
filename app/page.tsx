import Hero from "@/components/hero";
import Customers from "@/components/customers";
import Partners from "@/components/partners";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import HowItWorks from "@/components/how-it-works";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh">
      <Hero />
      <Customers />
      <Partners />
      <Testimonials />
      <Stats />
      <HowItWorks />
      <Faq />
      <Footer />
    </main>
  );
}
