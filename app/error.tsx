"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GlobalError({ reset }: { reset: () => void }) {
  return <div className="page-shell"><section className="page-hero container legal-shell"><span className="eyebrow">500</span><h1 className="display-l">Something went wrong.</h1><p>The page hit an unexpected error. You can retry or return to Stackra.</p><div className="hero-actions"><button className="button button-primary" onClick={() => reset()}>Try again</button><Link className="button button-secondary" href="/">Back home <ArrowRight size={16}/></Link></div></section></div>;
}
