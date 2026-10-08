import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Layers3, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Why Stackra is building a simpler commerce workspace for African merchants.",
  alternates: { canonical: "https://stackra.dev/about" }
};

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="page-hero container">
        <span className="eyebrow">About Stackra</span>
        <h1 className="display-l balance">Build the system around the way merchants already sell.</h1>
        <p className="lead pretty" style={{maxWidth:"720px",color:"var(--ink-muted)"}}>Stackra is building a commerce workspace for African merchants who already sell through conversations, storefronts and repeat customers.</p>
      </section>
      <section className="section container">
        <div className="bento">
          <article className="bento-card big"><div className="bento-icon"><Compass size={18}/></div><h3>Practical before impressive.</h3><p>We want the product to save a merchant time today before promising a bigger future tomorrow.</p></article>
          <article className="bento-card"><div className="bento-icon"><Layers3 size={18}/></div><h3>One system.</h3><p>Orders, products, payments and customers should reinforce each other instead of living in separate tools.</p></article>
          <article className="bento-card"><div className="bento-icon"><Sparkles size={18}/></div><h3>Smarter over time.</h3><p>Automation and intelligence should sit on top of a reliable commerce foundation.</p></article>
        </div>
      </section>
      <section className="section container">
        <div className="deep-band"><span className="eyebrow">The goal</span><h2>A business should feel bigger than the chat thread it started in.</h2><p>Stackra turns the scattered work around a sale into a system that a merchant can actually run.</p><Link href="/product" className="button button-brand" style={{marginTop:"18px"}}>Explore the product <ArrowRight size={16}/></Link></div>
      </section>
    </div>
  );
}
