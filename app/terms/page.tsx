import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Stackra terms of service.",
  alternates: { canonical: "https://stackra.dev/terms" },
  robots: { index: false, follow: true }
};

export default function TermsPage() {
  return <div className="page-shell"><section className="page-hero container legal-shell"><span className="eyebrow">Legal</span><h1 className="display-l">Terms</h1><p>The owner-supplied terms text has not been published in this preview. No legal language is invented here. The final terms should replace this notice before the public production launch.</p></section></div>;
}
