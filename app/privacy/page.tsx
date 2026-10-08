import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Stackra privacy policy.",
  alternates: { canonical: "https://stackra.dev/privacy" },
  robots: { index: false, follow: true }
};

export default function PrivacyPage() {
  return <div className="page-shell"><section className="page-hero container legal-shell"><span className="eyebrow">Legal</span><h1 className="display-l">Privacy</h1><p>The owner-supplied privacy policy text has not been published in this preview. No legal language is invented here. The final policy should replace this notice before the public production launch.</p></section></div>;
}
