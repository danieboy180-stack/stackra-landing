import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./site.css";
import "./extra.css";
import "./forms.css";
import "./cta.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteChrome } from "@/components/site-chrome";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://stackra.dev"),
  title: {
    default: "Stackra — From WhatsApp Seller to Real Business",
    template: "%s — Stackra"
  },
  description: "Run orders, storefront, inventory, payments and customer history in one simple workspace.",
  applicationName: "Stackra",
  alternates: { canonical: "https://stackra.dev" },
  openGraph: {
    type: "website",
    siteName: "Stackra",
    title: "Stackra — From WhatsApp Seller to Real Business",
    description: "Run the work behind every sale in one simple commerce workspace.",
    url: "https://stackra.dev",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Stackra commerce workspace" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Stackra — From WhatsApp Seller to Real Business",
    description: "Run the work behind every sale in one simple commerce workspace.",
    images: ["/twitter-image"]
  },
  icons: { icon: "/icon.svg", apple: "/apple-icon.svg" },
  manifest: "/manifest.webmanifest"
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#08090a" }
  ],
  colorScheme: "light dark"
};

const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("stackra-theme");
    var queryTheme = new URLSearchParams(window.location.search).get("theme");
    var theme = queryTheme === "light" || queryTheme === "dark" ? queryTheme : (stored === "light" || stored === "dark" ? stored : "system");
    var resolved = theme === "system" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : theme;
    document.documentElement.dataset.theme = resolved;
    document.documentElement.dataset.themePreference = theme;
    document.documentElement.style.colorScheme = resolved;
  } catch (_) {}
})();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <a className="sr-only focus:not-sr-only" href="#main-content">Skip to content</a>
        <SiteChrome />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <div className="mobile-cta-bar" aria-label="Quick action">
          <a className="button button-primary" href="https://wa.me/2347087773805?text=Hi%20Stackra%2C%20I%27d%20like%20to%20get%20my%20store%20set%20up.">
            Get your store set up <span aria-hidden="true">↗</span>
          </a>
        </div>
      </body>
    </html>
  );
}
