"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What is a Stackra store?",
    a: "A Stackra store is a shareable page that brings your offerings together in one place, so customers can discover what your business sells and connect with you.",
  },
  {
    q: "How do customers find my store?",
    a: "You share your store link through the channels you already use, such as WhatsApp, Instagram and other social platforms. Anyone with the link can open your store.",
  },
  {
    q: "Do I need my own website?",
    a: "No. Your store gives you a shareable online presence without building a website from scratch. You send customers to your store link instead.",
  },
  {
    q: "Can I list more than one product?",
    a: "Yes. A store is designed to hold your whole range, with photos, descriptions and prices, so customers can browse instead of relying on individual product links.",
  },
  {
    q: "How do customers order and pay?",
    a: "Customers follow the ordering and payment options available on your store. The exact process depends on the capabilities currently enabled for your business, so check your options before promising a particular method.",
  },
  {
    q: "Does a store guarantee sales?",
    a: "No. A store gives you a clear place to present your business. Results depend on your offerings, pricing, presentation, audience and how you reach potential customers.",
  },
  {
    q: "Who is responsible for listings and orders?",
    a: "Stackra provides the platform. Merchants are responsible for the accuracy of their listings, their customer communication and fulfilling the orders they accept.",
  },
];

export default function StoreFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="scroll-mt-28 px-3 py-16 sm:scroll-mt-32 sm:px-4 sm:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-4xl font-medium tracking-tighter text-balance sm:text-5xl md:text-6xl">
            Store questions
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-balance text-muted-foreground">
            Quick answers about how a Stackra store works for merchants and
            customers.
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
                    id={`store-faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`store-faq-a-${i}`}
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
                      id={`store-faq-a-${i}`}
                      role="region"
                      aria-labelledby={`store-faq-q-${i}`}
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
