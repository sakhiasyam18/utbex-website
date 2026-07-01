//components/section/about/motion/aboutMotion.ts
import { Variants } from "framer-motion";

/**
 * Motion tokens locked in 04_ABOUT_MOTION_SYSTEM.md.
 * Use these values consistently — never invent new durations inline.
 */
export const motionDuration = {
  xs: 0.25,
  s: 0.45,
  m: 0.7,
  l: 1.0,
} as const;

export const motionStagger = 0.08;

const easeSoft = [0.22, 1, 0.36, 1] as const;

/** Section-level fade used for labels and quotes. */
export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: motionDuration.m, ease: easeSoft },
  },
};

/** Fade + small upward translate used for headline, description, CTA. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionDuration.m, ease: easeSoft },
  },
};

/** Slow fade with a very small upward move, reserved for the primary image. */
export const primaryImageReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionDuration.l, ease: easeSoft },
  },
};

/** Stagger container for sequential typography / gallery reveals. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionStagger,
      delayChildren: 0.05,
    },
  },
};

/** Supporting image stagger child — fade only, no rotation or scale bounce. */
export const supportingImage: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionDuration.s, ease: easeSoft },
  },
};

/** Hover scale for images, per motion system (1.02 / 0.45s / soft ease). */
export const imageHover = {
  scale: 1.02,
  transition: { duration: motionDuration.s, ease: easeSoft },
};

/** Very soft ambient float for background glow elements only. */
export const ambientFloat: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};
