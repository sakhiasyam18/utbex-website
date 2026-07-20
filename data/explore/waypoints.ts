// data/explore/waypoints.ts
//
// Camera waypoint definitions for the Interactive Evidence Explorer.
// Source of truth: 02_CAMERA_SYSTEM.md §5–§8, 01_CANVAS_DUNIA_UTBEX.md §9
//
// Spatial layout follows the organic, non-linear path from 01_CANVAS_DUNIA §9:
//
//                  Award
//                          HKI
//   START
//         Arrival
//                   Origin
//                          Movement
//            Community
//                                Innovation
//                    Evidence
//                             Recognition
//            Impact Story
//                         Future
//
// Camera translates are the NEGATIVE of position values
// (to center each experience in the viewport).
//
// NOTE: Position values are tuning placeholders.
// They will be refined visually once content is added.

import type { CameraWaypoint, ExperienceZone } from "@/components/explore/camera/types";

// ─── Total scroll height ──────────────────────────────────────
// The scroll spacer height that drives the camera journey.
// 9 experiences × ~100vh each = 900vh total scroll depth.
export const WORLD_SCROLL_HEIGHT = "900vh";

// ─── Camera Waypoints ─────────────────────────────────────────
// Ordered sequence matching the Experience Journey (02_CAMERA §5).
// scrollProgress values are evenly distributed for foundation.
// They will be refined per-experience when content is built.
export const CAMERA_WAYPOINTS: CameraWaypoint[] = [
  {
    id: "arrival",
    label: "Arrival",
    focus: "Hero Visual",
    scrollProgress: 0.0,
    position: { x: 0, y: 0 },
    scale: 1,
  },
  {
    id: "origin",
    label: "Origin",
    focus: "Awal perjalanan",
    scrollProgress: 0.12,
    position: { x: 120, y: 900 },
    scale: 1,
  },
  {
    id: "movement",
    label: "Movement",
    focus: "Aktivitas lapangan",
    scrollProgress: 0.24,
    position: { x: 280, y: 1800 },
    scale: 1,
  },
  {
    id: "community",
    label: "Community",
    focus: "Dampak kepada masyarakat",
    scrollProgress: 0.36,
    position: { x: -160, y: 2700 },
    scale: 1,
  },
  {
    id: "innovation",
    label: "Innovation",
    focus: "Produk dan karya",
    scrollProgress: 0.48,
    position: { x: 320, y: 3600 },
    scale: 1,
  },
  {
    id: "evidence",
    label: "Evidence",
    focus: "Dokumen pendukung",
    scrollProgress: 0.60,
    position: { x: 60, y: 4500 },
    scale: 1,
  },
  {
    id: "recognition",
    label: "Recognition",
    focus: "Penghargaan",
    scrollProgress: 0.72,
    position: { x: 220, y: 5400 },
    scale: 1,
  },
  {
    id: "impact-story",
    label: "Impact Story",
    focus: "Transformasi nyata",
    scrollProgress: 0.84,
    position: { x: -120, y: 6300 },
    scale: 1,
  },
  {
    id: "future",
    label: "Future",
    focus: "Arah masa depan",
    scrollProgress: 1.0,
    position: { x: 100, y: 7200 },
    scale: 1,
  },
];

// ─── Experience Zones ─────────────────────────────────────────
// Zones define the spatial bounds of each experience in the world.
// Used by ExperiencePlaceholder for positioning and sizing.
export const EXPERIENCE_ZONES: ExperienceZone[] = CAMERA_WAYPOINTS.map((wp) => ({
  id: wp.id,
  label: wp.label,
  focus: wp.focus,
  position: wp.position,
  size: {
    width: 1200,   // placeholder — will be sized per-experience
    height: 800,   // placeholder — will be sized per-experience
  },
}));
