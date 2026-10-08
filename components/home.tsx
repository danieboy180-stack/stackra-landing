import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Boxes, CreditCard, MessageCircle, Package, Sparkles, UsersRound } from "lucide-react";
import { Reveal } from "@/components/motion";
import { ProductTour } from "@/components/product-tour";
import { HeroHeadline, HeroVisual } from "@/components/hero-visual";
import { LeadForm } from "@/components/lead-form";
import { FAQ } from "@/components/faq";
import { site } from "@/content/site";
import { images } from "@/content/images";
import { organizationJsonLd, websiteJsonLd, softwareJsonLd, faqJsonLd } from "@/lib/jsonld";

const iconMap = {
  Orders: MessageCircle,
  Storefront: ArrowRight,
  Inventory: Boxes,
  Payments: CreditCard,
  Customers: UsersRound,
  Insights: BarChart3,
  "WhatsApp flow": MessageCircle,
  "Simple setup": Package
} as const;

export function HomePage() {
  return (
    <>
      <div className="container hero-shell">
        <section className="section" aria-labelledby="hero-title">
          <div className="hero-grid">
            <Reveal className="hero-copy-wrap">
              <span className="eyebrow">{site.hero.eyebrow}</span>
              <HeroHeadline />
              <p className="lead pretty">{site.hero.subhead}</p>
              <div className="hero-actions">
                <Link className="button button-primary" href={site.whatsapp.href}>{site.hero.primaryCta}<ArrowRight size={17}/></Link>
                <Link className="button button-secondary" href="#how-it-works">{site.hero.secondaryCta}<ArrowRight size={16}/></Link>
              </div>
              <p className="microcopy">Keep WhatsApp in the flow. Let Stackra handle the system behind it.</p>
            </Reveal>
            <HeroVisual />
          </div>
        </section>
      </div>

      <section className="section-sm surface" aria-label="Stackra core capabilities">
        <div className="container">
          <div className="trust-row">
            <span className="trust-copy">One workspace for the work that already happens every day</span>
            <div className="trust-pills">{site.features.slice(0,6).map((f)=><span className="trust-pill" key={f.title}>{f.title}</span>)}</div>
          </div>
        </div>
      </section>

      <section id="solutions" className="section container" aria-labelledby="solutions-title">
        <div className="section-head">
          <span className="eyebrow">Outcomes</span>
          <h2 id="solutions-title" className="display-l balance">More control without turning selling into a software project.</h2>
          <p className="body-lg pretty">The product follows the merchant workflow: start the conversation, complete the sale, remember the customer.</p>
        </div>
        <div className="solutions">
          {site.outcomes.map((item, index) => {
            const image = images[item.imageId as keyof typeof images];
            return (
              <Reveal className="solution" key={item.title}>
                <div className="solution-copy">
                  <span className="eyebrow">{item.eyebrow}</span>
                  <h3 className="h2">{item.title}</h3>
                  <p>{item.copy}</p>
                  <Link className="inline-link" href="/product">See what Stackra does <ArrowRight size={15}/></Link>
                </div>
                <div className="solution-visual">
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 767px) 100vw, 50vw" />
                  <div className="solution-ui-crop">
                    <span>Stackra {item.title}</span>
                    <b>{index === 0 ? "4 new orders" : index === 1 ? "3 low-stock alerts" : index === 2 ? "Payment confirmed" : "14 customers to follow up"}</b>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="how-it-works" className="section container" aria-labelledby="tour-title">
        <div className="section-head">
          <span className="eyebrow">Product tour</span>
          <h2 id="tour-title" className="display-l balance">See the same business from three useful angles.</h2>
          <p className="body-lg pretty">Every surface is designed to answer a simple question: what needs my attention next?</p>
        </div>
        <ProductTour />
      </section>

      <section className="section container" aria-labelledby="features-title">
        <div className="section-head">
          <span className="eyebrow">Bento features</span>
          <h2 id="features-title" className="display-l balance">The operating pieces behind every sale.</h2>
        </div>
        <div className="bento">
          {site.features.map((feature,index)=>{
            const Icon=iconMap[feature.title as keyof typeof iconMap] ?? Sparkles;
            return <Reveal className={`bento-card ${index===0||index===4?"big":index===6?"wide":""}`} key={feature.title}>
              <div className="bento-icon"><Icon size={18}/></div>
              <h3>{feature.title}</h3>
              <p><strong>{feature.benefit}</strong> {feature.description}</p>
              <span className="bento-micro mono">{String(index+1).padStart(2,"0")}</span>
            </Reveal>
          })}
        </div>
        <div className="deep-band">
          <span className="eyebrow">Built for today</span>
          <h2>Start with the core. Make the system smarter over time.</h2>
          <p>Stackra can grow into deeper automation and intelligence. The foundation stays focused on helping merchants run the business they already have.</p>
        </div>
      </section>

      <section id="storefront" className="section container" aria-labelledby="storefront-title">
        <div className="split">
          <div className="split-copy">
            <span className="eyebrow">Storefront</span>
            <h2 id="storefront-title" className="h1 balance">Not just a dashboard. A place customers can actually shop.</h2>
            <p>Keep the simplicity of social selling while giving your business a real home on the web.</p>
            <div className="ticks"><span className="tick"><b>01</b>Branded storefront with products and prices.</span><span className="tick"><b>02</b>Easy links to share back into customer conversations.</span><span className="tick"><b>03</b>Orders and customer activity stay connected to your workspace.</span></div>
          </div>
          <div className="storefront">
            <div className="store-head"><span>Amaka's Closet</span><span className="store-pill">Lagos, NG</span></div>
            <div className="store-hero"><span className="store-kicker">New collection</span><h3>Pieces for the moments you remember.</h3><span className="store-link">Browse collection <ArrowRight size={14}/></span></div>
            <div className="product-grid">{["Ankara Dress","Beaded Set","Lace Gown","Headwrap"].map((p,i)=><div className="product" key={p}><div className={`product-image image-${i+1}`}/><strong>{p}</strong><small>₦{[15000,8500,22000,3500][i].toLocaleString()}</small></div>)}</div>
          </div>
        </div>
      </section>

      <section className="section container" id="pricing" aria-labelledby="pricing-title"><div className="deep-band"><span className="eyebrow">Pricing</span><h2 id="pricing-title">No made-up plans. Real pricing when the paid launch is ready.</h2><p>{site.pricingNote} Until then, Stackra keeps the product story focused on what merchants can use.</p><Link href="/pricing" className="button button-brand" style={{marginTop:"18px"}}>See pricing status <ArrowRight size={16}/></Link></div></section>

      <section className="section container" aria-labelledby="faq-title" id="faq">
        <div className="section-head"><span className="eyebrow">Questions</span><h2 id="faq-title" className="display-l balance">A clearer answer to the questions that matter.</h2></div>
        <FAQ />
      </section>

      <section className="section container">
        <div className="cta">
          <Image className="cta-photo" src={images["merchant-market"].src} alt="" fill sizes="100vw" />
          <div className="cta-scrim" />
          <div className="cta-content">
          <span className="eyebrow">Ready when you are</span>
          <h2 className="display-l balance">Your business is already happening on WhatsApp. Give it a system.</h2>
          <p>Start with your email or go straight to WhatsApp. We keep the first step simple.</p>
          <LeadForm />
          <div className="hero-actions" style={{justifyContent:"center"}}><Link className="button button-brand" href={site.whatsapp.href}>{site.hero.primaryCta}<ArrowRight size={16}/></Link><Link className="button button-secondary" href="/contact">Contact Stackra</Link></div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationJsonLd())}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(websiteJsonLd())}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(softwareJsonLd())}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqJsonLd())}} />
    </>
  );
}
