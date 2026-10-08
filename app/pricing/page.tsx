import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Stackra pricing and launch information.",
  alternates: { canonical: "https://stackra.dev/pricing" }
};

export default function PricingPage() {
  return (
    <div className="page-shell">
      <section className="page-hero container">
        <span className="eyebrow">Pricing</span>
        <h1 className="display-l balance">Simple pricing for a simple product.</h1>
        <p className="lead pretty" style={{maxWidth:"700px",color:"var(--ink-muted)"}}>We are finalizing public paid-plan pricing for the current launch phase. We will publish the real plans and prices here before the paid launch.</p>
      </section>
      <section className="section-sm container">
        <div className="contact-card">
          <div>
            <span className="eyebrow">Current launch phase</span>
            <h2 className="h2 balance">Merchant onboarding comes first.</h2>
            <p className="body pretty" style={{color:"var(--ink-muted)"}}>{site.pricingNote}</p>
          </div>
          <div className="surface-raised" style={{borderRadius:"20px",padding:"24px"}}>
            <Info size={18} color="var(--brand)"/>
            <h3 style={{margin:"14px 0 8px"}}>No invented prices.</h3>
            <p className="body" style={{margin:0,color:"var(--ink-muted)"}}>Stackra will show the actual monthly and annual plans once they are finalized by the owner.</p>
            <Link className="button button-primary" href="/contact" style={{marginTop:"18px"}}>Talk to Stackra <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
