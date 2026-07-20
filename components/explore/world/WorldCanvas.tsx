// components/explore/world/WorldCanvas.tsx
//
// Root client component for the Interactive Evidence Explorer.
// Source of truth: 00_MASTER_PROJECT.md §8, 01_CANVAS_DUNIA_UTBEX.md §2–§14
//
// Architecture:
//   ┌─────────────────────────────────────────────────────────┐
//   │ <div> scroll spacer (900vh) — creates scrollable page  │
//   │                                                         │
//   │ <div> viewport (fixed inset-0) — camera window          │
//   │   ├── BackgroundLayer   z-0   (solid + noise + texture) │
//   │   ├── GradientLayer     z-10  (atmospheric glows)       │
//   │   ├── DecorationLayer   z-20  (empty placeholder)       │
//   │   ├── WorldContent      z-30  (camera-driven transform) │
//   │   │   └── ExperienceMap       (9 experience zones)      │
//   │   └── OverlayLayer      z-60  (vignette + grain)        │
//   └─────────────────────────────────────────────────────────┘
//
// The scroll spacer creates the scrollable height.
// useScroll() reads page scroll progress.
// useCamera() interpolates between waypoints.
// WorldContent gets translated/scaled by camera MotionValues.
// OverlayLayer is fixed — no parallax.

"use client";

import { motion } from "framer-motion";
import { WORLD_SCROLL_HEIGHT } from "@/data/explore/waypoints";
import { useCamera } from "@/components/explore/camera/useCamera";
import { useCurrentExperience } from "@/components/explore/camera/useCurrentExperience";
import { BackgroundLayer } from "@/components/explore/layers/BackgroundLayer";
import { GradientLayer } from "@/components/explore/layers/GradientLayer";
import { DecorationLayer } from "@/components/explore/layers/DecorationLayer";
import { OverlayLayer } from "@/components/explore/layers/OverlayLayer";
import { ExperienceMap } from "@/components/explore/experience/ExperienceMap";

export function WorldCanvas() {
  const { cameraX, cameraY, cameraScale, scrollProgress } = useCamera();
  const currentExperienceId = useCurrentExperience(scrollProgress);

  return (
    <>
      {/* ── Scroll Spacer ──────────────────────────────────────
          Creates the scrollable height that drives the camera.
          This is the only element that participates in document flow.
          Everything else is position:fixed.
      ──────────────────────────────────────────────────────── */}
      <div
        className="relative w-full"
        style={{ height: WORLD_SCROLL_HEIGHT }}
        aria-hidden="true"
      />

      {/* ── Camera Viewport ────────────────────────────────────
          Fixed to the screen. This is the "window" into the world.
          100vw × 100vh — the user's entire view.
      ──────────────────────────────────────────────────────── */}
      <div
        id="world-viewport"
        className="fixed inset-0 overflow-hidden bg-black"
      >
        {/* Layer 01–03: Background (solid + noise + texture) */}
        <BackgroundLayer />

        {/* Layer 04–05: Gradient glows (parallax) */}
        <GradientLayer cameraX={cameraX} cameraY={cameraY} />

        {/* Layer 06–07: Decoration (parallax, empty for now) */}
        <DecorationLayer cameraX={cameraX} cameraY={cameraY} />

        {/* Layer 08: World Content (camera-driven transform) */}
        <motion.div
          id="world-content"
          className="absolute inset-0 z-30"
          style={{
            x: cameraX,
            y: cameraY,
            scale: cameraScale,
          }}
        >
          <ExperienceMap currentExperienceId={currentExperienceId} />
        </motion.div>

        {/* Layer 09+: Overlay (vignette + grain, no parallax) */}
        <OverlayLayer />
      </div>
    </>
  );
}
