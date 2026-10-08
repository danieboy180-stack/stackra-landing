import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand" aria-label="Stackra home">
              <svg className="brand-logo" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                <path d="M10 78 Q50 28 90 78" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity=".22"/>
                <path d="M10 60 Q50 10 90 60" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity=".58"/>
                <path d="M10 42 Q50 -8 90 42" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
              </svg>
              Stackra
            </Link>
            <p className="footer-copy">{site.tagline}</p>
          </div>
          <div><div className="footer-heading">Product</div><div className="footer-links"><Link href="/product">Product</Link><Link href="/#how-it-works">How it works</Link><Link href="/#storefront">Storefront</Link></div></div>
          <div><div className="footer-heading">Company</div><div className="footer-links"><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="https://instagram.com/stackraio" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={12}/></Link><Link href="https://x.com/stackraio" target="_blank" rel="noreferrer">X <ArrowUpRight size={12}/></Link></div></div>
          <div><div className="footer-heading">Resources</div><div className="footer-links"><Link href="/pricing">Pricing</Link><Link href="/#faq">FAQ</Link></div></div>
          <div><div className="footer-heading">Legal</div><div className="footer-links"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div>
        </div>
        <div className="footer-region"><label htmlFor="footer-region" className="sr-only">Region and language</label><select id="footer-region" defaultValue="ng-en" aria-label="Region and language"><option value="ng-en">Nigeria · English</option></select></div><div className="footer-wordmark" aria-hidden="true">STACKRA</div><div className="footer-bottom"><span>© 2026 Stackra Technologies. All rights reserved.</span><span>Built for the way merchants already sell.</span></div>
      </div>
    </footer>
  );
}
