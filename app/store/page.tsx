import type { Metadata } from "next";
import StoreHero from "@/components/store/store-hero";
import { StoreOverview, StoreCustomers } from "@/components/store/store-overview";
import StoreAnatomy from "@/components/store/store-anatomy";
import StoreCreate from "@/components/store/store-create";
import StoreTrust from "@/components/store/store-trust";
import StoreFaq from "@/components/store/store-faq";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Stackra Store: see how a store works",
  description:
    "A Stackra store is a shareable page that brings everything a business sells into one place. See what customers see and how merchants create one.",
};

const links = [
  { name: "Overview", href: "#overview" },
  { name: "Customers", href: "#customers" },
  { name: "Design", href: "#design" },
  { name: "Create", href: "#create" },
  { name: "Trust", href: "#trust" },
  { name: "FAQ", href: "#faq" },
];

// Store showcase page. Same page frame as the home page: hairlines down both sides and between sections.
export default function StorePage() {
  return (
    <>
      <div className="sticky top-14 z-40 border-b border-border bg-background/80 backdrop-blur-md sm:top-16">
        <nav
          aria-label="On this page"
          className="mx-auto flex max-w-[1392px] gap-1 overflow-x-auto px-3 py-2 [scrollbar-width:none] sm:px-6 lg:px-8"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="shrink-0 rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      <main className="mx-3 flex min-h-dvh flex-col border-x border-border sm:mx-6 xl:mx-auto xl:max-w-[1392px]">
        <StoreHero />
        <div className="border-t border-border">
          <StoreOverview />
        </div>
        <div className="border-t border-border">
          <StoreCustomers />
        </div>
        <div className="border-t border-border">
          <StoreAnatomy />
        </div>
        <div className="border-t border-border">
          <StoreCreate />
        </div>
        <div className="border-t border-border">
          <StoreTrust />
        </div>
        <div className="border-t border-border">
          <StoreFaq />
        </div>
      </main>
      <Footer />
    </>
  );
}
