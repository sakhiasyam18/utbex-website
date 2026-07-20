// components/explore/layers/DecorationLayer.tsx
//
// Layer 06–07 of the World Canvas layer system.
// Source of truth: 03_VISUAL_SYSTEM.md §21
//
// Placeholder layer for future decorative elements:
//   Layer 06 — Decoration (abstract lines, grid, watermark, blur shapes)
//   Layer 07 — Floating particles
//
// Per 03_VISUAL §21:
//   Seluruh dekorasi hanya berfungsi mendukung evidence.
//   Tidak menjadi pusat perhatian.
//
// This layer is intentionally empty for the foundation phase.
// Content will be added in later implementation phases.

"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { parallaxRatio } from "@/motion/explore/tokens";
import { useExploreReducedMotion } from "@/motion/explore/useReducedMotion";

interface DecorationLayerProps {
  /** Camera X motion value — used for parallax */
  cameraX: MotionValue<number>;
  /** Camera Y motion value — used for parallax */
  cameraY: MotionValue<number>;
}

export function DecorationLayer({ cameraX, cameraY }: DecorationLayerProps) {
  const { parallaxMultiplier } = useExploreReducedMotion();

  const ratio = parallaxRatio.decoration * parallaxMultiplier;
  const decoX = useTransform(cameraX, (v) => v * ratio);
  const decoY = useTransform(cameraY, (v) => v * ratio);

  return (
    <motion.div
      className="absolute inset-0 z-20 pointer-events-none"
      style={{ x: decoX, y: decoY }}
      aria-hidden="true"
      data-layer="decoration"
    >
      {/* Decoration elements will be added in later phases */}
      {/* Examples: abstract lines, soft grid, floating particles */}
    </motion.div>
  );
}
