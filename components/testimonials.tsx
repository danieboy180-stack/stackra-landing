"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Newsreader } from "next/font/google";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const serif = Newsreader({ subsets: ["latin"], weight: "400" });

type Slot = {
  /** Company name shown in the tab. Empty for now. */
  name: string;
  quote: string;
  author: string;
  role: string;
  href?: string;
};

// Tabs are placeholders: fill in `name` (plus quote, author, role) per slot.
const slots: Slot[] = [
  { name: "", quote: "", author: "", role: "" },
  { name: "", quote: "", author: "", role: "" },
  { name: "", quote: "", author: "", role: "" },
  { name: "", quote: "", author: "", role: "" },
  { name: "", quote: "", author: "", role: "" },
  { name: "", quote: "", author: "", role: "" },
];

const PLACEHOLDER_QUOTE =
  "Your customer’s words go here — a couple of lines on how Stackra helped them start selling and grow their business.";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  // Rotates through the tabs; pauses on hover/focus and restarts on every manual pick.
  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setTimeout(
      () => setActive((a) => (a + 1) % slots.length),
      6000
    );
    return () => window.clearTimeout(id);
  }, [active, paused, reduceMotion]);

  const slot = slots[active];

  return (
    <section id="testimonials" className="px-3 py-16 sm:px-4 sm:py-24">
      <div className="mx-auto max-w-7xl md:px-4 lg:px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex flex-col items-start gap-5 sm:mb-12 sm:flex-row sm:justify-between sm:gap-8"
        >
          <h2 className="max-w-xl text-3xl font-medium tracking-tight text-balance sm:text-4xl md:text-5xl">
            Why modern businesses choose Stackra to power their growth
          </h2>
          <Button asChild variant="outline" className="shrink-0">
            <a href="#customers">View all customers</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#171717] text-white"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -bottom-32 h-80 w-[70%] rounded-full bg-violet-600/25 blur-[110px]"
          />

          <div className="relative px-5 pt-6 sm:px-8 sm:pt-8 md:px-10 md:pt-10">
            {/* Photo slot, left empty on purpose */}
            <div
              aria-hidden
              className="size-20 rounded-xl bg-white/10 sm:size-24"
            />

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="min-h-[280px] sm:min-h-[320px]"
              >
                <blockquote
                  className={cn(
                    serif.className,
                    "mt-8 max-w-4xl text-3xl leading-[1.15] tracking-tight text-white/90 sm:mt-10 sm:text-4xl md:text-[44px]"
                  )}
                >
                  “{slot.quote || PLACEHOLDER_QUOTE}”
                </blockquote>
                <p className="mt-8 text-sm sm:mt-10">
                  <span className="font-medium">
                    {slot.author || "Customer name"}
                  </span>{" "}
                  <span className="text-white/50">{slot.role || "Role"}</span>
                </p>
                <a
                  href={slot.href ?? "#customers"}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-white/90 transition-colors hover:text-white"
                >
                  Read story
                  <ChevronRightIcon className="size-4 text-white/50" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            role="tablist"
            aria-label="Customer stories"
            className="relative mt-10 flex gap-2 overflow-x-auto px-3 pb-3 [scrollbar-width:none] sm:mt-16 sm:px-4 sm:pb-4 md:grid md:grid-cols-6 md:overflow-visible [&::-webkit-scrollbar]:hidden"
          >
            {slots.map((s, i) => {
              const isActive = active === i;
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={s.name || `Customer ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={cn(
                    "relative flex h-16 min-w-28 flex-1 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-white/40 sm:h-[72px] md:min-w-0",
                    isActive ? "text-white" : "text-white/50 hover:text-white/80"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="testimonial-tab"
                      aria-hidden
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                      className="absolute inset-0 rounded-xl border border-white/20 bg-white/10 shadow-[0_0_48px_-6px_rgba(139,92,246,0.65)]"
                    />
                  )}
                  <span className="relative">{s.name}</span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
