import type { Metadata } from "next";
import { ArrowRight, Check, CircleAlert, CreditCard } from "lucide-react";
import { GridDebug } from "@/components/grid-debug";

export const metadata: Metadata = {
  title: "Design system",
  description: "Stackra design-system and QA reference.",
  robots: { index: false, follow: false }
};

export default function DesignPage() {
  return (
    <div className="page-shell">
      <section className="page-hero container">
        <span className="eyebrow">Internal QA</span>
        <h1 className="display-l balance">Stackra design system.</h1>
        <p className="lead" style={{maxWidth:"720px",color:"var(--ink-muted)"}}>Use <code>?grid=1</code> to inspect the desktop container. The theme control in the header verifies both production themes.</p>
        <div className="hero-actions"><a className="button button-primary" href="/?grid=1">Open grid overlay <ArrowRight size={16}/></a></div>
      </section>
      <section className="section-sm container">
        <h2 className="h2">Live token previews</h2>
        <div className="theme-preview light-demo"><span className="eyebrow">Light</span><div className="sample-row"><div className="sample"><CreditCard size={18}/><strong>Surface</strong><small>White + hairline</small></div><div className="sample"><Check size={18}/><strong>Brand</strong><small>Action signal</small></div><div className="sample"><CircleAlert size={18}/><strong>Semantic</strong><small>Only for state</small></div></div></div>
        <div className="theme-preview dark-demo"><span className="eyebrow">Dark</span><div className="sample-row"><div className="sample"><CreditCard size={18}/><strong>Raised surface</strong><small>Near-black canvas</small></div><div className="sample"><Check size={18}/><strong>Brand glow</strong><small>Restrained accent</small></div><div className="sample"><CircleAlert size={18}/><strong>Semantic</strong><small>Only for state</small></div></div></div>
      </section>
      <section className="section-sm container">
        <h2 className="h2">Component states</h2>
        <div className="bento">
          <div className="bento-card"><div className="bento-icon"><Check size={18}/></div><h3>Button</h3><p>Primary, secondary and brand actions use the same 44px+ touch target and visible focus ring.</p><div className="hero-actions"><button className="button button-primary">Primary</button><button className="button button-secondary">Secondary</button></div></div>
          <div className="bento-card"><div className="bento-icon"><CreditCard size={18}/></div><h3>Input</h3><input style={{width:"100%",minHeight:"50px",border:"1px solid var(--line-strong)",borderRadius:"12px",padding:"0 14px",background:"var(--bg)",color:"var(--ink)",fontSize:"16px"}} placeholder="16px input" /></div>
          <div className="bento-card"><div className="bento-icon"><CircleAlert size={18}/></div><h3>Status</h3><div className="form-error" style={{marginTop:"18px"}}>Example validation state.</div></div>
        </div>
      </section>
      <GridDebug />
    </div>
  );
}
