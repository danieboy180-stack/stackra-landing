"use client";

import { motion, type HTMLMotionProps } from "motion/react";

export const Reveal = (props: HTMLMotionProps<"div">) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -70px 0px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    {...props}
  />
);

export const Fade = (props: HTMLMotionProps<"div">) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} {...props} />
);
