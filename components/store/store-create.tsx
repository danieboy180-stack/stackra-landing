"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Package, Palette, Share2, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_URL, STORE_URL } from "@/lib/site";
import { Reveal } from "./reveal";

const steps: { n: string; title: string; body: string; Icon: LucideIcon }[] = [
  {
    n: "01",
    title: "Add your products",
    body: "Upload photos and add names, prices and descriptions. Add options such as size or colour where they apply.",
    Icon: Package,
  },
  {
    n: "02",
    title: "Make your store yours",
    body: "Set your store name, logo, cover photo and contact details so the store looks and feels like your business.",
    Icon: Palette,
  },
  {
    n: "03",
    title: "Share your store and start selling",
    body: "Copy your store link and share it on WhatsApp, Instagram and anywhere else you already talk to customers.",
    Icon: Share2,
  },
];

const controls = [
  "Store name and short description",
  "Logo and cover photo",
  "Location and opening hours",
  "Products with photos, prices and descriptions",
  "Options such as size or colour",
  "Contact and ordering options",
];

export default function StoreCreate() {
  return (
    <section
      id="create"
      className="scroll-mt-28 px-3 py-16 sm:scroll-mt-32 sm:px-4 sm:py-24"
    >
      <div className="mx-auto max-w-7xl md:px-4 lg:px-6">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground">
            For merchants
          </p>
          <h2 className="mt-4 text-4xl leading-[1.04] font-medium tracking-tighter text-balance sm:text-5xl md:text-6xl">
            Create your store in three steps.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Your store should accurately represent your business. Use genuine
            business information, clear photos and correct contact details.
          </p>
        </Reveal>

        <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-14 md:grid-cols-3">
          {steps.map(({ n, title, body, Icon }, index) => (
            <li key={n} className="bg-background">
              <Reveal
                delay={index * 0.1}
                className="flex h-full min-h-64 flex-col justify-between gap-12 p-6 sm:min-h-72 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground tabular-nums">
                    {n}
                  </span>
                  <span className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground">
                    <Icon className="size-4" aria-hidden />
                  </span>
                </div>
                <div>
                  <h3 className="max-w-[16ch] text-2xl font-medium tracking-tight text-balance sm:text-3xl">
                    {title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">
                    {body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-8 sm:mt-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <Reveal className="max-w-xl">
            <h3 className="text-3xl leading-[1.08] font-medium tracking-tighter text-balance sm:text-4xl">
              What you control.
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Your store is part of your business presence, so keep it current.
              Update prices, remove items that are no longer available and tell
              customers about important changes.
            </p>
            <p className="mt-4 text-base text-muted-foreground">
              Questions about setting up? {" "}
              <Link
                href="/contact"
                className="text-foreground underline underline-offset-4"
              >
                Get in touch
              </Link>
              .
            </p>
          </Reveal>

          <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {controls.map((item, i) => (
              <li key={item} className="bg-background">
                <Reveal
                  delay={i * 0.04}
                  className="flex items-start gap-3 p-5 sm:p-6"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                    aria-hidden
                  />
                  <span className="text-base">{item}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-[#0c0d10] px-6 py-16 text-center text-white sm:mt-24 sm:py-24"
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
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10">
              <Button
                asChild
                size="lg"
                className="border-white bg-white text-neutral-900 hover:bg-white/90 hover:ring-white/20"
              >
                <a href={APP_URL}>Start selling</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white hover:ring-white/10"
              >
                <a href={STORE_URL}>Explore a live store</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
