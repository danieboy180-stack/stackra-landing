"use client";

import { motion } from "framer-motion";
import { Package, Palette, Share2, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/site";

const steps: { n: string; title: string; Icon: LucideIcon }[] = [
  { n: "01", title: "Add your products", Icon: Package },
  { n: "02", title: "Make your store yours", Icon: Palette },
  { n: "03", title: "Share your store and start selling", Icon: Share2 },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-3 py-16 sm:px-4 sm:py-24">
      <div className="mx-auto max-w-7xl md:px-4 lg:px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl text-4xl font-medium tracking-tighter text-balance sm:text-5xl md:text-6xl"
        >
          Go from idea to selling in minutes
        </motion.h2>

        {/* 1px dividers come from the grid gap showing the border colour */}
        <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-14 md:grid-cols-3">
          {steps.map(({ n, title, Icon }, index) => (
            <motion.li
              key={n}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="flex min-h-48 flex-col justify-between gap-12 bg-background p-6 sm:min-h-64 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground tabular-nums">
                  {n}
                </span>
                <span className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground">
                  <Icon className="size-4" aria-hidden />
                </span>
              </div>
              <h3 className="max-w-[16ch] text-2xl font-medium tracking-tight text-balance sm:text-3xl">
                {title}
              </h3>
            </motion.li>
          ))}
        </ol>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mt-4 overflow-hidden rounded-3xl border border-white/10 bg-[#0c0d10] px-6 py-16 text-center text-white sm:mt-6 sm:py-24"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(ellipse at center, black, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black, transparent 75%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[70%] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[100px]"
          />
          <div className="relative">
            <h3 className="mx-auto max-w-3xl text-4xl font-medium tracking-tight text-balance sm:text-5xl md:text-6xl">
              Your store. Your business. Ready to go.
            </h3>
            <div className="mt-8 sm:mt-10">
              <Button
                asChild
                size="lg"
                className="border-white bg-white text-neutral-900 hover:bg-white/90 hover:ring-white/20"
              >
                <a href={APP_URL}>Start selling</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
