"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Seconds the row takes to travel past one picture (higher = slower).
const SECONDS_PER_PICTURE = 4;
// A short list is repeated until a group has at least this many cards.
const MIN_CARDS = 6;

// Plain CSS animation: it starts on its own, needs no JavaScript to run, and
// pauses while the row is hovered or pressed. When a phone has animations turned
// off or reduced, the row still drifts, at under half the speed.
const css = `
@keyframes pic-strip-drift { to { transform: translateX(-50%); } }
.pic-strip-track { animation: pic-strip-drift var(--dur, 60s) linear infinite; }
.pic-strip:hover .pic-strip-track, .pic-strip:active .pic-strip-track { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) { .pic-strip-track { animation-duration: calc(var(--dur, 60s) * 2.5); } }
`;

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

// Endless, constant-speed drift like the home hero: two identical groups side by
// side, moved by exactly half the track so the loop has no seam.
export default function AutoPicStrip({ images }: { images: string[] }) {
  if (images.length === 0) return null;

  const cards = Array.from(
    { length: Math.ceil(MIN_CARDS / images.length) * images.length },
    (_, i) => images[i % images.length]
  );
  const fade =
    "linear-gradient(to right, transparent, black 5%, black 95%, transparent)";

  return (
    <div
      aria-hidden
      className="pic-strip my-10 overflow-hidden sm:my-12"
      style={{ maskImage: fade, WebkitMaskImage: fade }}
    >
      <style>{css}</style>
      <div
        className="pic-strip-track flex w-max will-change-transform"
        style={{ "--dur": `${cards.length * SECONDS_PER_PICTURE}s` } as CSSProperties}
      >
        <Group cards={cards} />
        <Group cards={cards} hidden />
      </div>
    </div>
  );
}
