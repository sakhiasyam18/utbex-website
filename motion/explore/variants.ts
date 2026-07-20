// motion/explore/variants.ts
//
// Framer Motion variant definitions for the Interactive Evidence Explorer.
// Source of truth: 04_MOTION_SYSTEM.md
//
// These variants encode the motion philosophy:
//   - Halus (smooth)
//   - Elegan (elegant)
//   - Ringan (lightweight)
//   - Organik (organic)
//   - Konsisten (consistent)

import type { Variants } from "framer-motion";
import { revealDuration, revealDistance, exploreStagger } from "./tokens";

// ─── Experience Reveal ────────────────────────────────────────
// Per 04_MOTION_SYSTEM.md §6 & §8:
// Hidden → Preview → Reveal → Focus
// Uses fade + subtle slide. No dramatic effects.
export const experienceReveal: Variants = {
  hidden: {
    opacity: 0,
    y: revealDistance.normal,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: revealDuration.normal,
      ease: [0.25, 0.05, 0.25, 1.0],
    },
  },
  exit: {
    opacity: 0,
    y: -revealDistance.subtle,
    transition: {
      duration: revealDuration.instant,
      ease: [0.4, 0, 1, 1],
    },
  },
};

// ─── Stagger Container ────────────────────────────────────────
// Per 04_MOTION_SYSTEM.md §16: grouped elements appear sequentially.
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: exploreStagger.normal,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: exploreStagger.slow,
      delayChildren: 0.2,
    },
  },
};

// ─── Stagger Child ────────────────────────────────────────────
export const staggerChild: Variants = {
  hidden: {
    opacity: 0,
    y: revealDistance.subtle,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: revealDuration.normal,
      ease: [0.25, 0.05, 0.25, 1.0],
    },
  },
};

// ─── Fade In ──────────────────────────────────────────────────
// Simple opacity reveal. Used for overlays, backgrounds, text.
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: revealDuration.normal,
      ease: "easeOut",
    },
  },
};

// ─── Scale Reveal ─────────────────────────────────────────────
// For evidence cards and images. Per 04_MOTION_SYSTEM.md §8: scale + opacity.
export const scaleReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: revealDuration.slow,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// ─── Floating Drift ───────────────────────────────────────────
// Per 04_MOTION_SYSTEM.md §14: subtle floating for decoration.
// Lambat (slow), Kecil (small), Organik (organic).
export const floatingDriftConfig = {
  y: {
    duration: 6,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut",
  },
  x: {
    duration: 8,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut",
  },
};
