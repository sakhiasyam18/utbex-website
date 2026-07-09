// components/section/portfolio/components/PortfolioHeader.tsx
// REVISION 04: Tightened — label added above headline. Smaller intro. Quieter.
// REVISION 08: Reduced mb from mb-32 to mb-16.
"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/motion";
import { PortfolioContent } from "../types/portfolio";

interface PortfolioHeaderProps {
  content: PortfolioContent;
}

export default function PortfolioHeader({ content }: PortfolioHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="max-w-2xl mx-auto text-center mb-16 lg:mb-20 px-4"
    >
      {/* Section label */}
      <motion.p
        variants={fadeUp}
        className="text-[10px] uppercase tracking-[0.22em] text-utbex-text-secondary/60 mb-5"
      >
        Chapter Three
      </motion.p>

      <motion.h2
        id="portfolio-headline"
        variants={fadeUp}
        className="text-4xl md:text-5xl font-medium tracking-tight text-utbex-text-primary mb-5"
      >
        {content.headline}
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="text-base md:text-lg text-utbex-text-secondary leading-relaxed"
      >
        {content.introduction}
      </motion.p>
    </motion.div>
  );
}
