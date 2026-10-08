"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { motion } from "framer-motion";

type University = {
  name: string;
  short: string;
  /** Tried in order. If none load, the short name is shown instead. */
  logos: string[];
};

// Logos are hot-linked from the universities' own sites for now.
// To self-host: drop the file in /public/logos and put its path first in `logos`.
const universities: University[] = [
  {
    name: "Bingham University",
    short: "BU",
    logos: [
      "https://upload.wikimedia.org/wikipedia/en/0/0a/Bingham_University_logo.png",
      "https://binghamuni.edu.ng/v2/images/Bingham-University-Logo_Formatted.png",
    ],
  },
  {
    name: "Nasarawa State University",
    short: "NSUK",
    logos: ["https://nsuk.edu.ng/api/media/file/logo-new.png"],
  },
];

function UniversityLogo({ name, short, logos }: University) {
  const [index, setIndex] = useState(0);
  const src = logos[index];

  if (!src) {
    return (
      <span className="text-3xl font-semibold tracking-tight text-neutral-400 sm:text-4xl">
        {short}
      </span>
    );
  }

  return (
    <img
      key={src}
      ref={(el) => {
        // Catches images that failed before React attached onError.
        if (el && el.complete && el.naturalWidth === 0) {
          setIndex((i) => i + 1);
        }
      }}
      src={src}
      alt={`${name} logo`}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setIndex((i) => i + 1)}
      className="h-16 w-auto max-w-[70%] object-contain sm:h-24"
    />
  );
}

export default function Partners() {
  return (
    <section id="trusted" className="px-3 py-16 sm:px-4 sm:py-24">
      <div className="mx-auto max-w-7xl md:px-4 lg:px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl font-medium tracking-tight sm:text-4xl"
        >
          Trusted by students
        </motion.h2>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4">
          {universities.map((uni, index) => (
            <motion.li
              key={uni.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="flex h-36 items-center justify-center rounded-2xl border border-border bg-white sm:h-52">
                <UniversityLogo {...uni} />
              </div>
              <p className="mt-3 text-center text-sm font-medium sm:text-base">
                {uni.name}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
