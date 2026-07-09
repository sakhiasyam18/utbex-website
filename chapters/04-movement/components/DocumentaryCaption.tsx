// components/section/portfolio/components/DocumentaryCaption.tsx
// REVISION 04, 05: Simplified — category only. Location+Year moved inline to card body.
//                  This component is kept for FeaturedStory use only.
"use client";

import { motion } from "framer-motion";
import { quietFade } from "../motion/portfolioMotion";

interface DocumentaryCaptionProps {
  location: string;
  year: string;
  category: string;
  className?: string;
}

/**
 * Used only in FeaturedStory. Cards use inline metadata directly.
 * Small. Quiet. Elegant.
 */
export default function DocumentaryCaption({
  location,
  year,
  category,
  className = "",
}: DocumentaryCaptionProps) {
  return (
    <motion.div
      variants={quietFade}
      className={`flex flex-col gap-1 ${className}`}
    >
      <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-utbex-accent">
        {category}
      </span>
      <span className="text-[10px] uppercase tracking-widest text-utbex-text-secondary/55">
        {location}&nbsp;·&nbsp;{year}
      </span>
    </motion.div>
  );
}
