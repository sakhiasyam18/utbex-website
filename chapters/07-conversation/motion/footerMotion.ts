// components/section/footer/motion/footerMotion.ts

import { Variants } from "framer-motion";

/**
 * Motion tokens for the Footer section.
 *
 * Per 06_FOOTER_IMPLEMENTATION_GUIDE.md:
 * — Motion is optional, and when used must be extremely subtle.
 * — Small opacity transition + small translate only.
 * — No dramatic animation.
 *
 * Values are inherited verbatim from aboutMotion.ts to maintain
 * design language continuity. No new durations or easing invented.
 */

export const motionDuration = {
  xs: 0.25,
  s: 0.45,
  m: 0.7,
  l: 1.0,
} as const;

export const motionStagger = 0.08;

const easeSoft = [0.22, 1, 0.36, 1] as const;

/** Section-level fade — used for labels, copyright. */
export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: motionDuration.m, ease: easeSoft },
  },
};

/** Fade + small upward translate — headline, description, links. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionDuration.m, ease: easeSoft },
  },
};

/** Stagger container for sequential element reveals. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionStagger,
      delayChildren: 0.05,
    },
  },
};
