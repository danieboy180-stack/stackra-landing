"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

type Story = {
  id: string;
  /** Photo or video that fills the card, e.g. <Image fill className="object-cover" alt="" /> */
  media?: ReactNode;
  /** Caption over the media. Add `href` as well to get a "Read story" button. */
  title?: string;
  href?: string;
};

// Media slots are intentionally empty for now.
const stories: Story[] = [
  { id: "story-1" },
  { id: "story-2" },
  { id: "story-3" },
  { id: "story-4" },
];

export default function Customers() {
  const [active, setActive] = useState(0);

  return (
    <section id="customers" className="px-3 py-16 sm:px-4 sm:py-24">
      <div className="mx-auto max-w-7xl md:px-4 lg:px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="max-w-3xl text-5xl font-medium tracking-tighter text-balance sm:text-6xl md:text-7xl">
            Meet our customers
          </h2>
          <p className="mt-5 max-w-xl text-lg text-balance text-muted-foreground sm:text-xl">
            Stackra gives businesses the superpowers to sell online without the
            complexity.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href={APP_URL}>Start selling</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#how-it-works">See how it works</a>
            </Button>
          </div>
        </motion.div>

        {/* Mobile: swipeable row. md+: the hovered card grows, the others shrink. */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="-mx-3 mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-3 pb-2 [scrollbar-width:none] sm:mx-0 sm:mt-16 sm:gap-4 sm:px-0 md:snap-none md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {stories.map((story, i) => {
            const isActive = active === i;
            return (
              <article
                key={story.id}
                tabIndex={0}
                aria-label={story.title ?? `Customer story ${i + 1}`}
                data-active={isActive}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                style={{ flexGrow: isActive ? 3.4 : 1 }}
                className={cn(
                  "relative h-[420px] w-[78%] shrink-0 snap-center overflow-hidden rounded-2xl border border-border bg-muted outline-none",
                  "sm:h-[480px] sm:w-[60%]",
                  "md:h-[540px] md:w-auto md:min-w-0 md:shrink md:basis-0 lg:h-[640px]",
                  "transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
                  "focus-visible:ring-2 focus-visible:ring-ring/60"
                )}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-linear-to-b from-transparent to-foreground/5"
                />
                {story.media}
                {story.title && (
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 via-black/30 to-transparent p-5 text-white sm:p-7">
                    <h3 className="max-w-md text-lg leading-snug font-medium sm:text-2xl">
                      {story.title}
                    </h3>
                    {story.href && (
                      <Button
                        asChild
                        size="sm"
                        className="mt-4 border-white bg-white text-neutral-900 hover:bg-white/90"
                      >
                        <a href={story.href}>Read story</a>
                      </Button>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
