// components/explore/layers/GradientLayer.tsx
//
// Layer 04–05 of the World Canvas layer system.
// Source of truth: 03_VISUAL_SYSTEM.md §6, §7, §9
//
// Renders:
//   Layer 04 — Soft gradient (atmospheric depth)
//   Layer 05 — Light glow (cinematic accents)
//
// Per 03_VISUAL §6:
//   "Gradient digunakan sebagai cahaya. Bukan sebagai background utama."
//   Gradient hanya membantu kedalaman, fokus, atmosfer.
//
// Per 02_CAMERA_SYSTEM.md §15:
//   Background layers move slower (parallax).

"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { parallaxRatio } from "@/motion/explore/tokens";
import { useExploreReducedMotion } from "@/motion/explore/useReducedMotion";

interface GradientLayerProps {
  /** Camera X motion value — used for parallax */
  cameraX: MotionValue<number>;
  /** Camera Y motion value — used for parallax */
  cameraY: MotionValue<number>;
}

export function GradientLayer({ cameraX, cameraY }: GradientLayerProps) {
  const { parallaxMultiplier } = useExploreReducedMotion();

  // Apply parallax — gradient layer moves slower than content
  const ratio = parallaxRatio.gradient * parallaxMultiplier;
  const gradientX = useTransform(cameraX, (v) => v * ratio);
  const gradientY = useTransform(cameraY, (v) => v * ratio);

  return (
    <motion.div
      className="absolute inset-0 z-10 pointer-events-none"
      style={{ x: gradientX, y: gradientY }}
      aria-hidden="true"
    >
      {/* Layer 04: Soft radial gradient — top-right, dark red atmospheric glow */}
      <div
        className="absolute -top-[30%] -right-[20%] w-[70vw] h-[70vw] rounded-full mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle, rgba(139,0,0,0.12) 0%, rgba(139,0,0,0.04) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Layer 04: Soft radial gradient — bottom-left, subtle warm glow */}
      <div
        className="absolute top-[50%] -left-[15%] w-[60vw] h-[60vw] rounded-full mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle, rgba(255,51,51,0.06) 0%, rgba(255,51,51,0.02) 40%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Layer 05: Subtle center light glow — guides eye to center of world */}
      <div
        className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] rounded-full mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />
    </motion.div>
  );
}
