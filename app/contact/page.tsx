import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Stackra about getting your store and commerce workspace set up.",
  alternates: { canonical: "https://stackra.dev/contact" }
};

export default function ContactPage() {
  return (
    <div className="page-shell">
      <section className="page-hero container">
        <span className="eyebrow">Contact</span>
        <h1 className="display-l balance">Let's get your business into Stackra.</h1>
        <p className="lead pretty" style={{maxWidth:"680px",color:"var(--ink-muted)"}}>Send a message or start the conversation on WhatsApp. The fastest path is usually the channel your customers already use.</p>
      </section>
      <section className="section-sm container">
        <div className="contact-card">
          <div>
            <span className="eyebrow">Message Stackra</span>
            <h2 className="h2 balance">Tell us what you need.</h2>
            <p className="body pretty" style={{color:"var(--ink-muted)"}}>The form validates your details and uses the server endpoint when delivery is configured.</p>
            <Link className="button button-brand" href={site.whatsapp.href} style={{marginTop:"18px"}}><MessageCircle size={16}/> WhatsApp <ArrowUpRight size={15}/></Link>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
