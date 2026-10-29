"use client";

import {
  LayoutGrid,
  Link2,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./reveal";

const features: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "One shareable link",
    body: "Your store gets its own link. Send it on WhatsApp, post it on Instagram or add it to your bio, so customers always land in the same place.",
    Icon: Link2,
  },
  {
    title: "Everything in one place",
    body: "Photos, descriptions and prices sit together on one page, so customers can browse your whole range instead of scrolling back through chats.",
    Icon: LayoutGrid,
  },
  {
    title: "A clear way to order",
    body: "Customers follow the contact and ordering options on your store. What is available depends on what is currently enabled for your business.",
    Icon: MessageCircle,
  },
];

const journey = [
  {
    n: "01",
    title: "Open the link",
    body: "Customers arrive from a message, a post or a profile link and land straight on your store.",
  },
  {
    n: "02",
    title: "Browse in one place",
    body: "Your whole range sits on a single page, with photos, descriptions, prices and availability, all provided by you.",
  },
  {
    n: "03",
    title: "Look closer",
    body: "Opening a product shows its details, including options such as size or colour where you have added them.",
  },
  {
    n: "04",
    title: "Get in touch or order",
    body: "Customers use the contact and ordering options on your store to ask a question or place an order.",
  },
  {
    n: "05",
    title: "Know who they are buying from",
    body: "Each store represents a business. Customers should confirm the product, total price, delivery and refund terms with the merchant before they buy.",
  },
];

export function StoreOverview() {
  return (
    <section
      id="overview"
      className="scroll-mt-28 px-3 py-16 sm:scroll-mt-32 sm:px-4 sm:py-24"
    >
      <div className="mx-auto max-w-7xl md:px-4 lg:px-6">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground">
            What is a Stackra store?
          </p>
          <h2 className="mt-4 text-4xl leading-[1.04] font-medium tracking-tighter text-balance sm:text-5xl md:text-6xl">
            Everything you sell, one link away.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A Stackra store is the page your customers visit. It is built to
            present your business clearly and to make it easy for people to
            explore what you offer. This page is about the store itself, what
            it looks like, how customers use it and how any merchant can create
            one.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-14 md:grid-cols-3">
          {features.map(({ title, body, Icon }, index) => (
            <li key={title} className="bg-background">
              <Reveal
                delay={index * 0.1}
                className="flex h-full min-h-56 flex-col justify-between gap-12 p-6 sm:p-8"
              >
                <span className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground">
                  <Icon className="size-4" aria-hidden />
                </span>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-balance">
                    {title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">
                    {body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function StoreCustomers() {
  return (
    <section
      id="customers"
      className="scroll-mt-28 px-3 py-16 sm:scroll-mt-32 sm:px-4 sm:py-24"
    >
      <div className="mx-auto max-w-7xl md:px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <Reveal className="max-w-xl lg:sticky lg:top-40 lg:self-start">
            <p className="text-sm font-medium text-muted-foreground">
              For customers
            </p>
            <h2 className="mt-4 text-4xl leading-[1.04] font-medium tracking-tighter text-balance sm:text-5xl lg:text-6xl">
              What your customers see.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Customers do not need to learn anything new. They open your link,
              look around and reach out when they are ready. Product details,
              prices and availability come from the merchant, and Stackra
              provides the platform that presents them.
            </p>
          </Reveal>

          <ol className="border-t border-border">
            {journey.map((step, index) => (
              <li key={step.n} className="border-b border-border">
                <Reveal
                  delay={index * 0.05}
                  className="flex gap-5 py-6 sm:gap-8 sm:py-8"
                >
                  <span className="w-8 shrink-0 pt-1 text-sm font-medium text-muted-foreground tabular-nums">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
