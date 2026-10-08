import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ProductTour } from "@/components/product-tour";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Product",
  description: "See how Stackra brings orders, storefront, inventory, payments and customers into one workspace.",
  alternates: { canonical: "https://stackra.dev/product" }
};

export default function ProductPage() {
  return (
    <div className="page-shell">
      <section className="page-hero container">
        <span className="eyebrow">Product</span>
        <h1 className="display-l balance">The system behind every sale.</h1>
        <p className="lead pretty" style={{maxWidth:"720px",color:"var(--ink-muted)"}}>Stackra brings the work you already do across chats, products, payments and customers into one simple workspace.</p>
        <div className="hero-actions"><Link className="button button-primary" href={site.whatsapp.href}>Get your store set up <ArrowRight size={16}/></Link><Link className="button button-secondary" href="/#how-it-works">See how it works</Link></div>
      </section>
      <section className="section container">
        <ProductTour />
      </section>
      <section className="section container">
        <div className="link-grid">
          {site.features.slice(0,6).map((feature)=><article className="link-card surface" key={feature.title}><CheckCircle2 size={18} color="var(--brand)"/><h3>{feature.title}</h3><p>{feature.benefit} {feature.description}</p></article>)}
        </div>
      </section>
    </div>
  );
}
