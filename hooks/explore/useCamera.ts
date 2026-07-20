// components/explore/camera/useCamera.ts
//
// Core camera hook for the Interactive Evidence Explorer.
// Source of truth: 02_CAMERA_SYSTEM.md
//
// Architecture:
//   1. useScroll() reads the page's scroll progress (0→1)
//   2. useTransform() interpolates between camera waypoints
//   3. Returns MotionValues for x, y, scale — applied to WorldContent
//
// The camera is purely scroll-driven (02_CAMERA §4).
// No drag, no free camera, no manual controls.

"use client";

import { useScroll, useTransform, useSpring, type MotionValue } from "framer-motion";
import { CAMERA_WAYPOINTS } from "@/data/explore/waypoints";
import { cameraEase } from "@/motion/explore/tokens";
import { useExploreReducedMotion } from "@/motion/explore/useReducedMotion";

export interface UseCameraReturn {
  /** Camera X translation — applied to WorldContent style.x */
  cameraX: MotionValue<number>;
  /** Camera Y translation — applied to WorldContent style.y */
  cameraY: MotionValue<number>;
  /** Camera zoom level — applied to WorldContent style.scale */
  cameraScale: MotionValue<number>;
  /** Raw scroll progress [0–1] */
  scrollProgress: MotionValue<number>;
}

/**
 * Scroll-driven camera system.
 *
 * Maps page scroll progress to camera position by interpolating
 * between the ordered waypoints defined in waypoints.ts.
 *
 * Camera translations are the NEGATIVE of experience world positions,
 * which centers each experience in the viewport as the camera "moves" to it.
 */
export function useCamera(): UseCameraReturn {
  const { scrollYProgress } = useScroll();
  const { allowSmoothCamera, allowZoom } = useExploreReducedMotion();

  // ── Build interpolation arrays from waypoints ─────────────
  const scrollBreakpoints = CAMERA_WAYPOINTS.map((wp) => wp.scrollProgress);
  const xPositions = CAMERA_WAYPOINTS.map((wp) => -wp.position.x);
  const yPositions = CAMERA_WAYPOINTS.map((wp) => -wp.position.y);
  const scaleValues = CAMERA_WAYPOINTS.map((wp) =>
    allowZoom ? wp.scale : 1
  );

  // ── Interpolate scroll → camera position ──────────────────
  const rawX = useTransform(scrollYProgress, scrollBreakpoints, xPositions);
  const rawY = useTransform(scrollYProgress, scrollBreakpoints, yPositions);
  const rawScale = useTransform(scrollYProgress, scrollBreakpoints, scaleValues);

  // ── Apply spring smoothing for cinematic feel ─────────────
  // Per 02_CAMERA §10: speed follows story rhythm.
  // Spring gives a natural, organic camera lag.
  // When reduced motion is active, use stiff spring (near-instant).
  const springConfig = allowSmoothCamera
    ? { stiffness: 80, damping: 25, mass: 0.5 }
    : { stiffness: 400, damping: 40, mass: 0.1 };

  const cameraX = useSpring(rawX, springConfig);
  const cameraY = useSpring(rawY, springConfig);
  const cameraScale = useSpring(rawScale, springConfig);

  return {
    cameraX,
    cameraY,
    cameraScale,
    scrollProgress: scrollYProgress,
  };
}
