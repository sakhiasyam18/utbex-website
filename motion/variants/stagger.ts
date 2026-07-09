// motion/variants/stagger.ts
//
// Staggered children animation variants.
// When a chapter or a group enters view, its children reveal sequentially
// rather than simultaneously — creating a natural reading rhythm.
//
// Per Story Architecture §Scroll Triggers:
//   "Multiple triggers at the same moment should be avoided.
//    Focus creates clarity."

import { type Variants } from 'framer-motion';
import { duration, ease, stagger, distance, opacity } from '../tokens';

// ─── Stagger Container (standard) ─────────────────────────────
// Apply this to the parent element. Children with `fadeUp` or `fadeIn`
// variants will animate in sequence.
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger.normal,
      delayChildren: 0.1,
    },
  },
};

// ─── Stagger Container (fast) ──────────────────────────────────
// Tighter stagger for small groups like navigation links or stat cards.
export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger.fast,
      delayChildren: 0.05,
    },
  },
};

// ─── Stagger Container (slow) ──────────────────────────────────
// Wider stagger for reflective chapters (Impact) or explorative content (Stories).
export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger.slow,
      delayChildren: 0.15,
    },
  },
};

// ─── Stagger Container (explorative) ──────────────────────────
// Widest stagger for the Stories chapter where each card tells its own story.
export const staggerContainerExplorative: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger.explorative,
      delayChildren: 0.2,
    },
  },
};

// ─── Stagger Child (standard) ──────────────────────────────────
// Each child fades up on its turn. Pair with any staggerContainer above.
export const staggerChild: Variants = {
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
