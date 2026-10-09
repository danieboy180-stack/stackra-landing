"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const sentences = [
  "The simpler way to sell online.",
  "Create your store.",
  "Share it.",
  "Start selling.",
];

// Empty placeholder cards (no pictures yet). The first four follow the sentences
// above, the rest keep the strip filled. Mixed portrait/landscape like shopify.com.
const cards = [
  "portrait",
  "landscape",
  "portrait",
  "landscape",
  "portrait",
  "landscape",
] as const;

function Strip({ active }: { active: number }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);

  // Slide so the active card sits near the left edge with a peek of the previous one.
  useEffect(() => {
    const update = () => {
      const card = trackRef.current?.children[active] as
        | HTMLElement
        | undefined;
      if (!card) return;
      const peek = window.innerWidth < 640 ? 44 : 96;
      setX(active === 0 ? 0 : peek - card.offsetLeft);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [active]);

  return (
    <div className="overflow-hidden">
      <div
        ref={trackRef}
        style={{ transform: `translate3d(${x}px, 0, 0)` }}
        className="relative flex w-max gap-3 pr-4 pl-[max(1rem,calc((100%_-_80rem)/2_+_1rem))] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none sm:gap-4 sm:pl-[max(1.5rem,calc((100%_-_80rem)/2_+_1.5rem))] lg:pl-[max(2rem,calc((100%_-_80rem)/2_+_2rem))]"
      >
        {cards.map((shape, i) => (
          <div
            key={i}
            className={cn(
              "h-[240px] shrink-0 rounded-2xl border border-border bg-muted sm:h-[340px] lg:h-[460px]",
              shape === "portrait" ? "aspect-[137/241]" : "aspect-[740/464]"
            )}
          />
        ))}
      </div>
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

  const onKey = (e: KeyboardEvent, i: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(i);
    }
  };

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
                onKeyDown={(e) => onKey(e, i)}
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
        <Strip active={active} />
      </div>
    </section>
  );
}
