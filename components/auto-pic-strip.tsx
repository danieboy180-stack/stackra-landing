"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

// Seconds the row takes to travel past one picture (higher = slower).
const SECONDS_PER_PICTURE = 6;
// A short list is repeated until a group has at least this many cards.
const MIN_CARDS = 6;

function Card({ src, index }: { src: string; index: number }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative h-[220px] shrink-0 overflow-hidden rounded-2xl border border-border bg-muted sm:h-[280px]",
        index % 2 === 0 ? "aspect-[4/3]" : "aspect-[3/4]"
      )}
    >
      {!failed && (
        <Image
          src={src}
          alt=""
          fill
          sizes="(min-width: 640px) 374px, 294px"
          loading="eager"
          draggable={false}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(
            "object-cover transition-opacity duration-700 ease-out",
            loaded ? "opacity-100" : "opacity-0"
          )}
        />
      )}
    </div>
  );
}

function Group({ cards, hidden }: { cards: string[]; hidden?: boolean }) {
  return (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 gap-3 pr-3">
      {cards.map((src, i) => (
        <Card key={i} src={src} index={i} />
      ))}
    </div>
  );
}

// Same endless, constant-speed drift as the home hero: two identical groups side
// by side, moved by exactly half the track so the loop has no seam.
export default function AutoPicStrip({ images }: { images: string[] }) {
  const reduceMotion = useReducedMotion();
  if (images.length === 0) return null;

  const cards = Array.from(
    { length: Math.ceil(MIN_CARDS / images.length) * images.length },
    (_, i) => images[i % images.length]
  );

  if (reduceMotion) {
    return (
      <div className="my-10 -mx-4 overflow-x-auto px-4 [scrollbar-width:none] sm:my-12 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
        <div className="w-max">
          <Group cards={cards} />
        </div>
      </div>
    );
  }

  const fade = "linear-gradient(to right, transparent, black 5%, black 95%, transparent)";

  return (
    <div
      aria-hidden
      className="my-10 overflow-hidden sm:my-12"
      style={{ maskImage: fade, WebkitMaskImage: fade }}
    >
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
          duration: cards.length * SECONDS_PER_PICTURE,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="flex w-max will-change-transform"
      >
        <Group cards={cards} />
        <Group cards={cards} hidden />
      </motion.div>
    </div>
  );
}
