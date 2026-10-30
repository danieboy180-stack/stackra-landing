"use client";

import Image from "next/image";
import { Clock, MapPin, MessageCircle, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { galleryPhotos } from "./photos";

const callouts = [
  {
    title: "Store header",
    body: "Your store name, logo and a short line about what you sell. A share button sits here so visitors can pass your store on.",
  },
  {
    title: "Cover photo",
    body: "A wide photo that sets the mood of your store the moment it opens.",
  },
  {
    title: "Store details",
    body: "Your location and opening hours, so customers know where you are and when you are around.",
  },
  {
    title: "Product grid",
    body: "Photos, names and prices in a clean grid. Opening a product shows its full description and any options such as size or colour.",
  },
  {
    title: "Order button",
    body: "A button that is always within reach. It points customers to the ordering options you offer.",
  },
];

// Where each numbered badge sits on the phone, as % from its top.
const badgeTops = ["3%", "16%", "31%", "56%", "94%"];

const phoneProducts = [1, 6, 11, 16].map((i) => galleryPhotos[i]);
const coverPhoto = galleryPhotos[20];
const gallery = galleryPhotos;

function Photo({ file, sizes }: { file: string; sizes: string }) {
  return (
    <Image
      src={`/store/${file}`}
      alt=""
      fill
      sizes={sizes}
      draggable={false}
      className="object-cover"
      style={{ objectPosition: "50% 40%" }}
    />
  );
}

// A store drawn in CSS with real product photos. The text lines are placeholders
// on purpose, so no made-up names or prices appear.
function Phone() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px]">
      <div className="rounded-[2.5rem] border border-border bg-card p-2 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.3)]">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-background">
          <div className="flex items-center justify-between px-4 pt-4 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="size-8 rounded-full border border-border bg-muted" />
              <div>
                <div className="text-sm leading-tight font-medium">
                  Your store name
                </div>
                <div className="text-[11px] leading-tight text-muted-foreground">
                  A short line about what you sell
                </div>
              </div>
            </div>
            <Share2 className="size-4 text-muted-foreground" aria-hidden />
          </div>

          <div className="relative mx-3 aspect-[16/9] overflow-hidden rounded-xl border border-border bg-muted">
            <Photo file={coverPhoto} sizes="320px" />
          </div>

          <div className="flex items-center gap-4 px-4 py-3 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="size-3" aria-hidden /> Location
            </span>
            <span className="flex items-center gap-1">
              <Clock className="size-3" aria-hidden /> Opening hours
            </span>
          </div>

          <div className="flex gap-2 px-4 pb-3">
            <span className="rounded-full bg-foreground px-3 py-1 text-[11px] font-medium text-background">
              All
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground">
              Category
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground">
              Category
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 px-3 pb-24">
            {phoneProducts.map((file) => (
              <div key={file}>
                <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-muted">
                  <Photo file={file} sizes="150px" />
                </div>
                <div className="mt-2 space-y-1.5">
                  <div className="h-2 w-3/4 rounded-full bg-muted" />
                  <div className="h-2 w-1/3 rounded-full bg-muted" />
                </div>
              </div>
            ))}
          </div>

          <div
            className="absolute inset-x-0 bottom-0 px-3 pt-8 pb-3"
            style={{
              backgroundImage:
                "linear-gradient(to top, var(--background) 60%, transparent)",
            }}
          >
            <div className="flex h-10 items-center justify-center gap-2 rounded-lg bg-foreground text-sm font-medium text-background">
              <MessageCircle className="size-4" aria-hidden /> Message to order
            </div>
          </div>
        </div>
      </div>

      {badgeTops.map((top, i) => (
        <span
          key={top}
          aria-hidden
          className="absolute -right-3 flex size-6 items-center justify-center rounded-full bg-foreground text-xs font-medium text-background shadow-md"
          style={{ top }}
        >
          {i + 1}
        </span>
      ))}
    </div>
  );
}

export default function StoreAnatomy() {
  return (
    <section
      id="design"
      className="scroll-mt-28 px-3 py-16 sm:scroll-mt-32 sm:px-4 sm:py-24"
    >
      <div className="mx-auto max-w-7xl md:px-4 lg:px-6">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground">
            The store design
          </p>
          <h2 className="mt-4 text-4xl leading-[1.04] font-medium tracking-tighter text-balance sm:text-5xl md:text-6xl">
            How a store is designed.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Every Stackra store follows the same clean layout, so customers
            always know where to look. You bring the name, the photos and the
            products.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-14 lg:mt-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-16">
          <Reveal>
            <Phone />
          </Reveal>

          <ol className="border-t border-border">
            {callouts.map((c, i) => (
              <li key={c.title} className="border-b border-border">
                <Reveal
                  delay={i * 0.05}
                  className="flex gap-5 py-5 sm:gap-6 sm:py-6"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-medium text-background">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium tracking-tight">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 max-w-lg text-base leading-7 text-muted-foreground">
                      {c.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal className="mt-20 max-w-2xl sm:mt-28">
          <h3 className="text-3xl leading-[1.08] font-medium tracking-tighter text-balance sm:text-4xl">
            Built around your photos.
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">
            Good photography does most of the selling. A store gives every
            product the same clean frame, so your range looks consistent
            whatever you sell.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-3 gap-2 sm:mt-10 sm:grid-cols-4 sm:gap-3 lg:grid-cols-6">
          {gallery.map((file, i) => (
            <Reveal key={file} delay={(i % 6) * 0.04}>
              <div
                className={cn(
                  "relative aspect-[4/5] overflow-hidden rounded-xl border border-border sm:rounded-2xl",
                  i % 2 ? "bg-muted/50" : "bg-muted"
                )}
              >
                <Photo
                  file={file}
                  sizes="(min-width: 1024px) 200px, (min-width: 640px) 25vw, 33vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
