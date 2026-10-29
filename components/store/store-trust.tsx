"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  FileText,
  Info,
  Mail,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./reveal";

// Every card opens an existing page of this site (lib/pages), so nothing is duplicated here.
const docs: {
  title: string;
  body: string;
  href: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "Privacy Policy",
    body: "How Stackra collects, uses, stores and shares personal information when you visit a store or manage one.",
    href: "/privacy",
    Icon: ShieldCheck,
  },
  {
    title: "Terms of Service",
    body: "The rules for using Stackra, for merchants and for customers.",
    href: "/terms",
    Icon: FileText,
  },
  {
    title: "For customers",
    body: "How to explore a store, what to check before you buy and how your information is used.",
    href: "/customers",
    Icon: Users,
  },
  {
    title: "How it works",
    body: "The full guide to bringing a business online with Stackra, including what Stackra does not promise.",
    href: "/how-it-works",
    Icon: Info,
  },
  {
    title: "About Stackra",
    body: "Who is behind Stackra and what it is here to do.",
    href: "/about",
    Icon: Info,
  },
  {
    title: "Contact",
    body: "Questions about a store, your privacy or getting set up? Reach out to us.",
    href: "/contact",
    Icon: Mail,
  },
];

const shopping = [
  "Confirm the exact product and the total price, including any extra charges.",
  "Check availability and how delivery or fulfilment will work.",
  "Keep the merchant contact details and ask before you buy if anything is unclear.",
  "Understand the cancellation, return or refund terms.",
];

const selling = [
  "Keep listings, prices and business details accurate and up to date.",
  "Only publish photos and information you are allowed to use.",
  "Handle customer communication and fulfil the orders you accept.",
  "Remember that a store does not guarantee sales, traffic or growth.",
];

function Checklist({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
      <h3 className="text-2xl font-medium tracking-tight">{title}</h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check
              className="mt-1 size-4 shrink-0 text-muted-foreground"
              aria-hidden
            />
            <span className="text-base leading-7 text-muted-foreground">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function StoreTrust() {
  return (
    <section
      id="trust"
      className="scroll-mt-28 px-3 py-16 sm:scroll-mt-32 sm:px-4 sm:py-24"
    >
      <div className="mx-auto max-w-7xl md:px-4 lg:px-6">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground">
            Privacy, terms and trust
          </p>
          <h2 className="mt-4 text-4xl leading-[1.04] font-medium tracking-tighter text-balance sm:text-5xl md:text-6xl">
            A store runs on trust.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Here is where to read how information is handled, what each side is
            responsible for, and what Stackra does and does not promise.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {docs.map(({ title, body, href, Icon }, index) => (
            <li key={title} className="bg-background">
              <Reveal delay={(index % 3) * 0.08} className="h-full">
                <Link
                  href={href}
                  className="group flex h-full min-h-52 flex-col justify-between gap-10 p-6 transition-colors hover:bg-muted/40 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <ArrowUpRight
                      className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium tracking-tight">{title}</h3>
                    <p className="mt-2 text-base leading-7 text-muted-foreground">
                      {body}
                    </p>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-2">
          <Reveal>
            <Checklist title="If you are shopping" items={shopping} />
          </Reveal>
          <Reveal delay={0.1}>
            <Checklist title="If you are selling" items={selling} />
          </Reveal>
        </div>

        <Reveal className="mt-10 max-w-3xl sm:mt-14">
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            Stackra provides the technology merchants use to present their
            offerings. Merchants remain responsible for their products, claims,
            customer service and fulfilment, subject to applicable law. In
            Nigeria, data protection is overseen by the Nigeria Data Protection
            Commission.
          </p>
          <a
            href="https://www.ndpc.gov.ng/ndp-act-2023/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-base font-medium underline underline-offset-4"
          >
            Read about the Nigeria Data Protection Act
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
