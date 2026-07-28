// components/section/footer/components/FooterClosing.tsx
// REVISION 02: Headline scaled up and given heavier emotional weight.
//              Label-to-headline gap increased. Description given more space.
// REVISION 03: Stagger delay increased so the reveal unfolds more slowly,
//              creating a natural pause before the visitor reads further.
"use client";

import {  m as motion, Variants  } from "framer-motion";
import { fade } from "../motion/footerMotion";
import { FooterClosingContent } from "../types/footer";

interface FooterClosingProps {
  content: FooterClosingContent;
}

/** Slower stagger — creates the documentary pause effect. */
const closingContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

/** Larger, slower fadeUp reserved for the editorial headline. */
const headlineFadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/** Softer reveal for the supporting description. */
const descriptionFade: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/**
 * The visual anchor of the Footer.
 *
 * Per 03_FOOTER_LAYOUT_SYSTEM.md:
 * — Always positioned first. Centered. Comfortable reading width.
 * — Never compete with other elements.
 *
 * Per 02_FOOTER_VISUAL_SYSTEM.md:
 * — The closing statement receives the highest visual attention.
 * — No bold visual hierarchy after the closing statement.
 *
 * REVISION 02: Headline treated like the final quote of a premium documentary.
 * Larger scale, thinner weight, generous line height — reads like a final thought.
 */
export default function FooterClosing({ content }: FooterClosingProps) {
  return (
    <motion.div
      variants={closingContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="flex flex-col items-center text-center max-w-3xl mx-auto"
    >
      {/* Section label — quiet, uppercase, brand accent */}
      <motion.p
        variants={fade}
        className="text-[9px] font-semibold uppercase tracking-[0.28em] text-utbex-maroon/70 mb-8"
      >
        {content.label}
      </motion.p>

      {/* Editorial headline — the emotional ending of the website */}
      <motion.h2
        variants={headlineFadeUp}
        className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-utbex-text-primary leading-[1.15] whitespace-pre-line mb-10"
      >
        {content.headline}
      </motion.h2>

      {/* Supporting description — understated, one paragraph */}
      <motion.p
        variants={descriptionFade}
        className="text-sm sm:text-base text-utbex-text-secondary/80 leading-relaxed max-w-[44ch] mb-8"
      >
        {content.description}
      </motion.p>

      {/* Primary Footer CTA Button — memorable ending */}
      <motion.div variants={descriptionFade}>
        <a
          href={content.cta?.href || "https://wa.me/6282252358901"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-utbex-maroon text-white font-bold text-sm tracking-wide shadow-[0_8px_32px_rgba(139,0,0,0.25)] hover:bg-[#6A0000] hover:shadow-[0_12px_40px_rgba(139,0,0,0.35)] transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <span>{content.cta?.label || "Mari Berdiskusi"}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
}
