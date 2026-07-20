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
import { revealDuration, revealDistance, exploreStagger, interactionDuration } from "./tokens";

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

// ─── Hero Evidence Reveal ─────────────────────────────────────
// Per 10_ANIMATION_SYSTEM.md §9:
// Hero always appears first. Opacity 0→1, Scale 0.97→1.
// Duration 600–900ms. Ease Out.
export const heroReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: interactionDuration.hero,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

// ─── Supporting Evidence Stagger ──────────────────────────────
// Per 10_ANIMATION_SYSTEM.md §10:
// Supporting cards appear one by one after hero.
// Uses stagger with 150ms delay between each card.
export const supportingStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3, // After hero has mostly revealed
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

// Supporting evidence child — individual card reveal
export const supportingChild: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: interactionDuration.component,
      ease: [0.25, 0.05, 0.25, 1.0],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

// ─── Experience Entry ─────────────────────────────────────────
// Per 10_ANIMATION_SYSTEM.md §7:
// Orchestrates: Background → Hero → Supporting → Interaction Ready
// The container variant that sequences the entire experience reveal.
export const experienceEntry: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

// ─── Drawer Overlay ───────────────────────────────────────────
// Per 10_ANIMATION_SYSTEM.md §14: overlay fades in first.
export const drawerOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

// ─── Drawer Panel ─────────────────────────────────────────────
// Per 10_ANIMATION_SYSTEM.md §14: drawer slides in from right.
export const drawerPanel: Variants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
    transition: {
      duration: interactionDuration.drawer,
      ease: [0.25, 0.05, 0.25, 1.0],
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

// ─── Drawer Content Stagger ──────────────────────────────────
// Per 10_ANIMATION_SYSTEM.md §14:
// Title → Description → Gallery → Evidence → Related Content
// Each content section reveals progressively.
export const drawerContentStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: interactionDuration.drawer * 0.6,
    },
  },
};

// Drawer content child — each section in the drawer
export const drawerContentChild: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: interactionDuration.drawerContent,
      ease: "easeOut",
    },
  },
};
