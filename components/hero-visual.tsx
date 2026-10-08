"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { images } from "@/content/images";

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const yB = useTransform(scrollYProgress, [0, 1], [-12, 20]);
  const yC = useTransform(scrollYProgress, [0, 1], [18, -12]);

  return (
    <motion.div className="hero-photo" ref={ref} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, ease: [0.22,1,0.36,1], delay: .18 }}>
      <Image src={images["merchant-shop"].src} alt={images["merchant-shop"].alt} fill priority sizes="(max-width: 1050px) 100vw, 48vw" style={{ objectFit: "cover" }} />
      <div className="photo-scrim" />
      <motion.div className="float-card float-a" style={{ y: yA }}><small>New order</small><b>#1042 · ₦18,000</b></motion.div>
      <motion.div className="float-card float-b" style={{ y: yB }}><small>Customer memory</small><b>Sarah is ready to reorder</b></motion.div>
      <motion.div className="float-card float-c" style={{ y: yC }}><small>Inventory</small><b>3 products need attention</b></motion.div>
    </motion.div>
  );
}

export function HeroHeadline() {
  return (
    <motion.h1 id="hero-title" className="display-xl balance" initial="hidden" animate="show">
      {["From WhatsApp seller", "to a real business."].map((line, index) => (
        <motion.span key={line} style={{ display: "block" }} variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: .65, delay: index * .06, ease: [0.22,1,0.36,1] } } }}>{line}</motion.span>
      ))}
    </motion.h1>
  );
}
