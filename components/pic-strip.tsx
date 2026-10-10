"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

function ArrowButton({
  dir,
  disabled,
  onClick,
}: {
  dir: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  const Icon = dir === "prev" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      aria-label={dir === "prev" ? "Scroll pictures left" : "Scroll pictures right"}
      disabled={disabled}
      onClick={onClick}
      className="flex size-10 items-center justify-center rounded-full bg-muted text-foreground outline-none transition-all hover:bg-muted/70 focus-visible:ring-2 focus-visible:ring-ring/60 active:scale-95 disabled:pointer-events-none disabled:opacity-35"
    >
      <Icon className="size-[18px]" aria-hidden />
    </button>
  );
}

// Empty picture placeholders in a swipeable row with arrow buttons.
// Drop real images into the cards later.
export default function PicStrip({ count = 6 }: { count?: number }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = (card?.offsetWidth ?? el.clientWidth * 0.8) + 12;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="my-10 sm:my-12">
      <div
        ref={scrollerRef}
        onScroll={update}
        className="-mx-4 flex snap-x snap-mandatory scroll-pl-4 gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:scroll-pl-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {Array.from({ length: count }, (_, i) => (
          <div
            key={i}
            aria-hidden
            className={cn(
              "h-[220px] shrink-0 snap-start rounded-2xl border border-border bg-muted sm:h-[280px]",
              i % 2 === 0 ? "aspect-[4/3]" : "aspect-[3/4]"
            )}
          />
        ))}
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <ArrowButton
          dir="prev"
          disabled={atStart}
          onClick={() => scrollByCard(-1)}
        />
        <ArrowButton
          dir="next"
          disabled={atEnd}
          onClick={() => scrollByCard(1)}
        />
      </div>
    </div>
  );
}
