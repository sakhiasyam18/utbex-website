// motion/explore/useReducedMotion.ts
//
// Reduced motion support for the Interactive Evidence Explorer.
// Per 02_CAMERA_SYSTEM.md §17 and 04_MOTION_SYSTEM.md §24:
//
// When reduced motion is active:
//   - Smooth Camera dikurangi → camera jumps between waypoints
//   - Zoom diminimalkan → scale stays at 1
//   - Parallax dimatikan → all layers move at same speed
//   - Floating dimatikan → no ambient animations
//
// Structure of the story is preserved. Only motion intensity changes.

"use client";

import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

/**
 * Returns motion configuration adjusted for reduced-motion preference.
 * Components should call this and use the returned values to determine
 * animation behavior.
 */
export function useExploreReducedMotion() {
  const prefersReduced = useFramerReducedMotion();

  return {
    /** True if the user prefers reduced motion */
    prefersReduced: prefersReduced ?? false,

    /** Parallax ratio override — 1.0 means all layers move at same speed (no parallax) */
    parallaxMultiplier: prefersReduced ? 0 : 1,

    /** Whether floating/ambient animations should play */
    allowFloating: !prefersReduced,

    /** Whether camera should use smooth interpolation vs. instant jumps */
    allowSmoothCamera: !prefersReduced,

    /** Scale range — when reduced, camera stays at scale 1 */
    allowZoom: !prefersReduced,

    /** Transition duration multiplier — 0 = instant, 1 = normal */
    durationMultiplier: prefersReduced ? 0 : 1,
  };
}
