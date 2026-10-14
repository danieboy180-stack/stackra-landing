"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

// Floating tiles, placed as % of the scene (laid out like the reference graphic).
// Photos live in /public/storefront. `position` is the crop focus (object-position).
// A tile whose file is missing simply stays an empty placeholder.
// The big card and the pill under it stay empty on purpose.
const tiles = [
  { x: 13.3, y: 15.4, s: 10.1, src: "/storefront/IMG-20260821-WA0232.jpg", position: "40% 65%" }, // star rings
  { x: 32.8, y: 20.8, s: 10.3, src: "/storefront/IMG-20260903-WA0062.jpg", position: "50% 55%" }, // pink sweets
  { x: 51.1, y: 12.5, s: 10.7, src: "/storefront/IMG-20260827-WA0159_1_.jpg", position: "45% 45%" }, // watch in box
  { x: 80.7, y: 17.1, s: 10.1, src: "/storefront/IMG-20260819-WA0128.jpg", position: "50% 50%" }, // glass bottles
  { x: 64.0, y: 23.9, s: 10.3, src: "/storefront/IMG-20260817-WA0070.jpg", position: "45% 55%" }, // earrings
  { x: 5.0, y: 35.9, s: 10.1, src: "/storefront/IMG-20260914-WA0040.jpg", position: "35% 60%" }, // loafers
  { x: 13.4, y: 53.9, s: 10.1, src: "/storefront/IMG-20260827-WA0091.jpg", position: "50% 55%" }, // crochet bag
  { x: 78.6, y: 45.4, s: 10.1, src: "/storefront/IMG-20260907-WA0036.jpg", position: "50% 30%" }, // red hoodie
  { x: 5.0, y: 73.7, s: 10.1, src: "/storefront/IMG-20260905-WA0089.jpg", position: "25% 40%" }, // bodysuit
  { x: 31.3, y: 76.9, s: 10.2, src: "/storefront/IMG-20260907-WA0008.jpg", position: "50% 60%" }, // black flats
  { x: 55.3, y: 70.7, s: 10.2, src: "/storefront/IMG-20260903-WA0057.jpg", position: "45% 50%" }, // brown sweets
  { x: 75.5, y: 76.3, s: 10.2, src: "/storefront/IMG-20260817-WA0061.jpg", position: "50% 45%" }, // gold ring
];

function TilePhoto({ src, position }: { src: string; position: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <Image
      src={src}
      alt=""
      fill
      sizes="(min-width: 1024px) 90px, 14vw"
      onError={() => setFailed(true)}
      className="object-cover"
      style={{ objectPosition: position }}
    />
  );
}

export default function BrowseToOrder() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="storefront" className="px-3 py-16 sm:px-4 sm:py-24">
      <div className="mx-auto max-w-7xl md:px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-xl"
          >
            <h2 className="text-4xl leading-[1.04] font-medium tracking-tighter text-balance sm:text-5xl lg:text-6xl">
              Turn customer interest into orders.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Give your customers one place to explore what you offer. Stackra
              brings your offerings together in a shareable storefront, making
              it easier for people to discover your products and understand how
              to order from your business.
            </p>
          </motion.div>

          {/* Scene sits straight on the page background (theme aware, no panel). */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div aria-hidden className="relative aspect-[1440/1545] w-full">
              {tiles.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
                  className="absolute"
                  style={{ left: `${t.x}%`, top: `${t.y}%`, width: `${t.s}%` }}
                >
                  <motion.div
                    animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                    transition={{
                      duration: 6 + (i % 4),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: (i % 5) * 0.5,
                    }}
                    className={cn(
                      "relative aspect-square w-full overflow-hidden rounded-[22%] border border-border",
                      i % 2 ? "bg-muted/50" : "bg-muted"
                    )}
                  >
                    <TilePhoto src={t.src} position={t.position} />
                  </motion.div>
                </motion.div>
              ))}

              {/* Main card (checkout / storefront screenshot goes here) */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute z-10 border border-border bg-card shadow-[0_24px_60px_-28px_rgba(0,0,0,0.3)]"
                style={{
                  left: "23.06%",
                  top: "29.84%",
                  width: "53.89%",
                  height: "40.13%",
                  borderRadius: "3.5% / 4.6%",
                }}
              />

              {/* Badge overlapping the card corner (logo goes here) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="absolute z-20 border border-border bg-muted shadow-md"
                style={{
                  left: "61.25%",
                  top: "66%",
                  width: "25%",
                  height: "8.5%",
                  borderRadius: "14% / 36%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
