"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What is Stackra?",
    a: "Stackra helps merchants bring their offerings online through a shareable storefront, making it easier for customers to discover what they sell and connect with their business.",
  },
  {
    q: "Who is Stackra for?",
    a: "Stackra is built for merchants and small businesses that want a simpler way to present their products online and reach customers through the channels they already use, including WhatsApp and social media.",
  },
  {
    q: "Do I need my own website to use Stackra?",
    a: "Stackra is designed to give merchants a shareable online presence without requiring them to build a website from scratch. You can direct customers to your storefront so they can explore your offerings in one place.",
  },
  {
    q: "Can my customers browse multiple products?",
    a: "Yes. A Stackra storefront is designed to bring your offerings together in one place, making it easier for customers to explore what your business sells instead of relying on individual product links or scattered messages.",
  },
  {
    q: "How can I share my Stackra storefront?",
    a: "You can share your storefront link with customers through channels such as WhatsApp, Instagram, and other social platforms. This gives people a direct way to discover your business and explore your offerings.",
  },
  {
    q: "How do customers place orders and make payments?",
    a: "Customers should follow the ordering and payment options available on your storefront. The exact process depends on the capabilities currently enabled for your business, so check your store's available options before promising a particular ordering or payment method.",
  },
  {
    q: "How do I get started with Stackra?",
    a: "Start by creating your business presence on Stackra and setting up your storefront. Add your available offerings, make sure your business information is accurate, and share your storefront with potential customers.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="px-3 py-16 sm:px-4 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-4xl font-medium tracking-tighter text-balance sm:text-5xl md:text-6xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-balance text-muted-foreground">
            Everything you need to know about Stackra and how it helps
            merchants bring their businesses online.
          </p>
        </div>

        <ul className="mt-12 border-t border-border sm:mt-16">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="border-b border-border">
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left text-xl font-normal outline-none focus-visible:ring-2 focus-visible:ring-ring/60 sm:py-7 sm:text-2xl"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      aria-hidden
                      className={cn(
                        "mt-1 size-6 shrink-0 transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-a-${i}`}
                      role="region"
                      aria-labelledby={`faq-q-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 text-base leading-7 text-muted-foreground sm:text-lg">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
