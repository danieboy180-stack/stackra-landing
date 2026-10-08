import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return <div className="page-shell"><section className="page-hero container legal-shell"><span className="eyebrow">404</span><h1 className="display-l">That page isn't here.</h1><p>The link may be outdated, or the page may still be in development.</p><Link className="button button-primary" href="/" style={{marginTop:"22px"}}>Back to Stackra <ArrowRight size={16}/></Link></section></div>;
}
