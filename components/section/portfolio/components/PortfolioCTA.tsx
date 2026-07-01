// components/section/portfolio/components/PortfolioCTA.tsx
// REVISION 07: Expanded into editorial CTA — Label → Headline → Body → Primary Button → Secondary Link.
//              Acts as the bridge toward Contact. Same calm documentary feeling.
// REVISION 08: Reduced bottom spacing.
"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../../about/motion/aboutMotion";
import { PortfolioContent } from "../types/portfolio";

interface PortfolioCTAProps {
  content: PortfolioContent;
}

export default function PortfolioCTA({ content }: PortfolioCTAProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="max-w-2xl mx-auto px-4 text-center pb-24 lg:pb-32"
    >
      {/* Small label */}
      {content.ctaLabel && (
        <motion.p
          variants={fadeUp}
          className="text-[10px] uppercase tracking-[0.22em] text-utbex-accent mb-6"
        >
          {content.ctaLabel}
        </motion.p>
      )}

      {/* Editorial headline */}
      <motion.h2
        variants={fadeUp}
        className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-utbex-text-primary mb-6 leading-tight"
      >
        {content.ctaHeadline ?? content.headline}
      </motion.h2>

      {/* Short body */}
      <motion.p
        variants={fadeUp}
        className="text-base md:text-lg text-utbex-text-secondary leading-relaxed mb-10"
      >
        {content.ctaBody ?? content.introduction}
      </motion.p>

      {/* Primary button */}
      <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href={content.ctaHref}
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-utbex-dark text-white text-sm font-medium rounded-full hover:bg-utbex-maroon transition-colors duration-300"
        >
          {content.ctaText}
          <span>→</span>
        </a>

        {/* Secondary link — optional */}
        {content.ctaSecondaryText && (
          <a
            href={content.ctaSecondaryHref ?? "#"}
            className="text-sm font-medium text-utbex-text-secondary/70 hover:text-utbex-text-primary transition-colors underline-offset-4 hover:underline"
          >
            {content.ctaSecondaryText}
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}
