"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const sentences = [
  "The simpler way to sell online.",
  "Create your store.",
  "Share it.",
  "Start selling.",
];

// Every photo in /public/hero, in strip order. To add one: upload it to that
// folder and add its filename here. Shapes alternate by position (see below).
const photos = [
  "IMG-20260827-WA0094.jpg",
  "IMG-20261001-WA0117.jpg",
  "IMG-20260828-WA0007.jpg",
  "IMG-20260903-WA0056.jpg",
  "IMG-20260827-WA0111.jpg",
  "IMG-20261001-WA0114.jpg",
  "IMG-20260827-WA0115.jpg",
  "IMG-20261001-WA0133.jpg",
  "IMG-20260907-WA0066.jpg",
  "IMG-20260824-WA0009.jpg",
  "IMG-20260929-WA0038.jpg",
  "IMG-20260929-WA0047.jpg",
  "IMG-20261001-WA0011.jpg",
  "IMG-20261009-WA0055.jpg",
  "IMG-20261009-WA0057.jpg",
  "IMG-20261009-WA0060.jpg",
  "IMG-20261010-WA0008.jpg",
  "IMG-20261010-WA0065.jpg",
];

const shapes = ["wide", "tall", "wide", "wide", "tall", "wide", "tall"] as const;

// Seconds the strip takes to travel past one photo (higher = slower).
const SECONDS_PER_PHOTO = 6;

function HeroCard({
  file,
  shape,
  priority,
}: {
  file: string;
  shape: "tall" | "wide";
  priority: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative h-[240px] shrink-0 overflow-hidden rounded-2xl border border-border bg-muted sm:h-[340px] lg:h-[460px]",
        shape === "tall" ? "aspect-[5/8]" : "aspect-[4/5]"
      )}
    >
      {!failed && (
        <Image
          src={`/hero/${file}`}
          alt=""
          fill
          sizes="(min-width: 1024px) 370px, (min-width: 640px) 275px, 195px"
          priority={priority}
          loading="eager"
          draggable={false}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(
            "object-cover transition-opacity duration-700 ease-out",
            loaded ? "opacity-100" : "opacity-0"
          )}
          style={{ objectPosition: "50% 45%" }}
        />
      )}
    </div>
  );
}

function Group({ hidden }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 gap-3 pr-3 sm:gap-4 sm:pr-4"
    >
      {photos.map((file, i) => (
        <HeroCard
          key={file}
          file={file}
          shape={shapes[i % shapes.length]}
          priority={!hidden && i < 3}
        />
      ))}
    </div>
  );
}

// Endless, constant-speed strip. Two identical groups side by side, moved by
// exactly half the track so the loop has no seam. It runs on its own and is not
// tied to the headline highlight.
function Strip() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="overflow-x-auto">
        <div className="w-max pl-4 sm:pl-6 lg:pl-8">
          <Group />
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
          duration: photos.length * SECONDS_PER_PHOTO,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="ml-[max(1rem,calc((100%_-_80rem)/2_+_1rem))] flex w-max will-change-transform sm:ml-[max(1.5rem,calc((100%_-_80rem)/2_+_1.5rem))] lg:ml-[max(2rem,calc((100%_-_80rem)/2_+_2rem))]"
      >
        <Group />
        <Group hidden />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  // Highlight moves through the sentences; pauses on hover, restarts on every pick.
  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setTimeout(
      () => setActive((a) => (a + 1) % sentences.length),
      4200
    );
    return () => window.clearTimeout(id);
  }, [active, paused, reduceMotion]);

  return (
    <section
      className="pb-14 pt-8 sm:pb-20 sm:pt-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="max-w-5xl text-[44px] leading-[1.04] font-medium tracking-tighter sm:text-6xl md:text-7xl lg:text-[88px]">
          {sentences.map((sentence, i) => (
            <span key={sentence}>
              <span
                role="button"
                tabIndex={0}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(i);
                  }
                }}
                className={cn(
                  "cursor-pointer rounded-sm outline-none transition-colors duration-500 focus-visible:ring-2 focus-visible:ring-ring/60",
                  i === active
                    ? "text-foreground"
                    : "text-foreground/45 hover:text-foreground/70"
                )}
              >
                {sentence}
              </span>{" "}
            </span>
          ))}
        </h1>
      </div>

      <div aria-hidden className="mt-10 sm:mt-14">
        <Strip />
      </div>
    </section>
  );
}
