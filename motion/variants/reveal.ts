// motion/variants/reveal.ts
//
// Fade-reveal animation variants — the primary animation pattern.
// Used for chapter entrances and element reveals on scroll.
//
// Per Story Architecture: "Preferred: Fade. Reveal. Opacity. Depth."
// Per Motion Philosophy: "Motion should become invisible."

import { type Variants } from 'framer-motion';
import { duration, ease, distance, opacity } from '../tokens';

// ─── Fade In (opacity only) ────────────────────────────────────
// The simplest reveal. Used when no directional movement is needed.
export const fadeIn: Variants = {
  hidden: {
    opacity: opacity.hidden,
  },
  visible: {
    opacity: opacity.visible,
    transition: {
      duration: duration.normal,
      ease: ease.reveal,
    },
  },
};

// ─── Fade Up ───────────────────────────────────────────────────
// Fade in with a subtle upward movement. The default chapter reveal.
export const fadeUp: Variants = {
  hidden: {
    opacity: opacity.hidden,
    y: distance.normal,
  },
  visible: {
    opacity: opacity.visible,
    y: 0,
    transition: {
      duration: duration.normal,
      ease: ease.reveal,
    },
  },
};

// ─── Fade Up Subtle ────────────────────────────────────────────
// Smaller movement for secondary elements within a chapter.
export const fadeUpSubtle: Variants = {
  hidden: {
    opacity: opacity.hidden,
    y: distance.subtle,
  },
  visible: {
    opacity: opacity.visible,
    y: 0,
    transition: {
      duration: duration.normal,
      ease: ease.reveal,
    },
  },
};

// ─── Fade Up Slow ──────────────────────────────────────────────
// Longer duration for emotionally significant chapters (Belief, Human).
export const fadeUpSlow: Variants = {
  hidden: {
    opacity: opacity.hidden,
    y: distance.normal,
  },
  visible: {
    opacity: opacity.visible,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: ease.gentle,
    },
  },
};

// ─── Scale Reveal ──────────────────────────────────────────────
// Very subtle scale for photographic elements. Per docs: "Scale with subtlety."
export const scaleReveal: Variants = {
  hidden: {
    opacity: opacity.hidden,
    scale: 0.97,
  },
  visible: {
    opacity: opacity.visible,
    scale: 1,
    transition: {
      duration: duration.slow,
      ease: ease.reveal,
    },
  },
};
