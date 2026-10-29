"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { APP_URL, STORE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import { heroPhotos } from "./photos";

const shapes = ["wide", "tall", "wide", "wide", "tall", "wide", "tall"] as const;

// Seconds the strip takes to travel past one photo (higher = slower).
const SECONDS_PER_PHOTO = 6;

const lead =
  "A Stackra store is a shareable page that brings everything a business sells into one place. This is how customers experience one, and how any merchant can create theirs.";

function StripCard({
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
      {heroPhotos.map((file, i) => (
        <StripCard
          key={file}
          file={file}
          shape={shapes[i % shapes.length]}
          priority={!hidden && i < 3}
        />
      ))}
    </div>
  );
}

// Endless, constant-speed strip: two identical groups moved by exactly half the track.
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
          duration: heroPhotos.length * SECONDS_PER_PHOTO,
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

export default function StoreHero() {
  return (
    <section className="pb-14 pt-8 sm:pb-20 sm:pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-muted-foreground">Stackra Store</p>
        <h1 className="mt-4 max-w-5xl text-[44px] leading-[1.04] font-medium tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-[88px]">
          Meet the Stackra store.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {lead}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <a href={APP_URL}>Create your store</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={STORE_URL}>Explore a live store</a>
          </Button>
        </div>
      </div>

      <div aria-hidden className="mt-10 sm:mt-14">
        <Strip />
      </div>
    </section>
  );
}
