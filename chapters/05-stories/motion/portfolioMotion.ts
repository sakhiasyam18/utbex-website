// components/section/portfolio/motion/portfolioMotion.ts
import { Variants } from "framer-motion";

/**
 * Motion tokens inherited from About, locked in 06_PORTFOLIO_MOTION_SYSTEM.md.
 * Portfolio uses the exact same timings to ensure continuous feel, but interactions
 * feel calmer through design rather than different math.
 */
export const motionDuration = {
  xs: 0.25,
  s: 0.45,
  m: 0.7,
  l: 1.0,
} as const;

export const motionStagger = 0.12; // Slightly slower stagger for more reflection

const easeSoft = [0.22, 1, 0.36, 1] as const;

/** Section-level fade for captions and small evidence */
export const quietFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: motionDuration.m, ease: easeSoft },
  },
};

/** Slow fade + tiny translate for main stories */
export const storyReveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionDuration.m, ease: easeSoft },
  },
};

/** Documentary Image reveal: very slow, no scale bounce */
export const imageReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionDuration.l, ease: easeSoft },
  },
};

/** Stagger container for project mosaic */
export const mosaicStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionStagger,
      delayChildren: 0.1,
    },
  },
};
