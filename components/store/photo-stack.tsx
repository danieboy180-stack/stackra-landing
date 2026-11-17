"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Where each of the three visible photos sits. x and y move the card (in % of the card's
// own size), s scales it, r tilts it in degrees. The front photo is the largest and sits
// left, the second sits upper right behind it, the third lower right behind both.
const SLOTS = [
  { x: 2.7, y: 30.4, s: 1, r: -0.6, z: 30 },
  { x: 43.2, y: 2.7, s: 0.78, r: 2.6, z: 20 },
  { x: 44.6, y: 71.7, s: 0.7, r: -2.2, z: 10 },
];
// Every other photo waits behind the stack, invisible, ready to slide in.
const WAITING = { x: 44.6, y: 71.7, s: 0.62, r: -3, z: 1 };

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const MOVE_MS = 620;
const AUTOPLAY_MS = 4000;
// After someone taps, the stack stays still for this long before it drifts on again.
const RESUME_AFTER_MS = 8000;

// A small stack of photographs. Tap the front one to send it to the back, or tap either
// photo behind it to bring that one to the front. It also turns by itself every few
// seconds, and stops while the tab is hidden, off screen, hovered, or just tapped.
// With reduced motion on, it never turns by itself and the photos swap without moving.
export default function PhotoStack({ photos }: { photos: string[] }) {
  const [order, setOrder] = useState(() => photos.map((_, i) => i));
  const [reduceMotion, setReduceMotion] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const inView = useRef(false);
  const hovering = useRef(false);
  const pausedUntil = useRef(0);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion || photos.length < 4) return;
    const tick = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      if (!inView.current || hovering.current) return;
      if (Date.now() < pausedUntil.current) return;
      setOrder((o) => [...o.slice(1), o[0]]);
    }, AUTOPLAY_MS);
    // Coming back to the tab, give the stack a moment before it moves.
    const onVisible = () => {
      if (document.visibilityState === "visible") {
        pausedUntil.current = Math.max(
          pausedUntil.current,
          Date.now() + AUTOPLAY_MS
        );
      }
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      window.clearInterval(tick);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [reduceMotion, photos.length]);

  // The front photo goes to the back. Any other photo comes straight to the front.
  const bringToFront = (position: number) => {
    pausedUntil.current = Date.now() + RESUME_AFTER_MS;
    const by = position === 0 ? 1 : position;
    setOrder((o) => [...o.slice(by), ...o.slice(0, by)]);
  };

  return (
    <div
      ref={root}
      role="group"
      aria-label="Sample product photos"
      className="relative mx-auto aspect-[5/4] w-full max-w-[640px]"
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") hovering.current = true;
      }}
      onPointerLeave={() => {
        hovering.current = false;
      }}
    >
      {photos.map((file, i) => {
        const position = order.indexOf(i);
        const shown = position < 3;
        const slot = shown ? SLOTS[position] : WAITING;
        return (
          <button
            key={file}
            type="button"
            tabIndex={shown ? 0 : -1}
            aria-hidden={shown ? undefined : true}
            aria-label={
              position === 0 ? "Show the next photo" : "Bring this photo to the front"
            }
            onClick={() => bringToFront(position)}
            className="absolute top-0 left-0 aspect-[3/2] w-[74%] touch-manipulation overflow-hidden rounded-[1.25rem] bg-muted shadow-[0_22px_50px_-18px_rgba(0,0,0,0.45)] outline-none will-change-transform select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:rounded-3xl"
            style={{
              transform: `translate(${slot.x}%, ${slot.y}%) rotate(${slot.r}deg) scale(${slot.s})`,
              opacity: shown ? 1 : 0,
              zIndex: slot.z,
              pointerEvents: shown ? "auto" : "none",
              transition: reduceMotion
                ? "none"
                : `transform ${MOVE_MS}ms ${EASE}, opacity ${MOVE_MS}ms ease`,
            }}
          >
            <Image
              src={`/store/${file}`}
              alt=""
              fill
              sizes="(min-width: 1024px) 460px, 70vw"
              draggable={false}
              className="object-cover"
              style={{ objectPosition: "50% 40%" }}
            />
          </button>
        );
      })}
    </div>
  );
}
