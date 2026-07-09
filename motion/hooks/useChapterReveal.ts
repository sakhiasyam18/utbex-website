// motion/hooks/useChapterReveal.ts
//
// IntersectionObserver-based chapter reveal hook.
// Fires once when a chapter enters the viewport, returning visibility state.
//
// Per Story Architecture §Engineering Guidelines:
//   "Every chapter should remain independently renderable."
//   "Intersection Observer thresholds should remain consistent."
//
// Per Motion Philosophy:
//   "Motion should degrade gracefully."
//   "Respect reduced-motion preferences."

'use client';

import { useRef, useEffect, useState, type RefObject } from 'react';
import { useReducedMotion } from 'framer-motion';
import { threshold } from '../tokens';

interface ChapterRevealOptions {
  /** IntersectionObserver threshold (0–1). Defaults to tokens.threshold.default */
  threshold?: number;
  /** If true, the reveal triggers only once (does not reset on scroll back). Default: true */
  triggerOnce?: boolean;
  /** Root margin for earlier/later trigger, e.g. "0px 0px -100px 0px" */
  rootMargin?: string;
}

interface ChapterRevealReturn {
  /** Ref to attach to the chapter's root element */
  ref: RefObject<HTMLElement | null>;
  /** Whether the chapter is currently (or has been) in view */
  isInView: boolean;
  /** If user prefers reduced motion, animations should be skipped */
  prefersReducedMotion: boolean;
}

/**
 * Hook for chapter-level scroll reveals.
 *
 * Usage:
 * ```tsx
 * function Belief() {
 *   const { ref, isInView, prefersReducedMotion } = useChapterReveal();
 *   return (
 *     <motion.section
 *       ref={ref}
 *       variants={fadeUp}
 *       initial={prefersReducedMotion ? 'visible' : 'hidden'}
 *       animate={isInView ? 'visible' : 'hidden'}
 *     >
 *       ...
 *     </motion.section>
 *   );
 * }
 * ```
 */
export function useChapterReveal(
  options: ChapterRevealOptions = {}
): ChapterRevealReturn {
  const {
    threshold: customThreshold = threshold.default,
    triggerOnce = true,
    rootMargin = '0px',
  } = options;

  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const prefersReducedMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If reduced motion is preferred, show immediately
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold: customThreshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [customThreshold, triggerOnce, rootMargin, prefersReducedMotion]);

  return { ref, isInView, prefersReducedMotion };
}
