// components/explore/camera/types.ts
//
// Type definitions for the Camera System.
// Source of truth: 02_CAMERA_SYSTEM.md
//
// Camera Waypoint: defines where the camera focuses for each Experience.
// Camera State: runtime state derived from scroll progress.

/**
 * A single waypoint in the camera journey.
 * Each Experience has one waypoint that defines when and where
 * the camera focuses during scroll.
 *
 * Per 02_CAMERA_SYSTEM.md §7:
 * - Entry Point: camera begins approaching
 * - Focus Point: camera is centered on the experience
 * - Exit Point: camera begins leaving toward next experience
 */
export interface CameraWaypoint {
  /** Internal experience identifier */
  id: string;
  /** Human-readable label (dev-only) */
  label: string;
  /** Focus description from 02_CAMERA_SYSTEM.md §8 */
  focus: string;
  /** Normalized scroll progress [0–1] where camera centers on this experience */
  scrollProgress: number;
  /** World-space position of this experience (px offset from world origin) */
  position: {
    x: number;
    y: number;
  };
  /** Camera zoom level at focus point (1 = default, >1 = zoom in) */
  scale: number;
}

/**
 * Runtime camera state derived from scroll.
 */
export interface CameraState {
  /** Current camera X translation (px) */
  x: number;
  /** Current camera Y translation (px) */
  y: number;
  /** Current camera zoom level */
  scale: number;
  /** ID of the experience the camera is currently inside */
  currentExperience: string;
  /** Global scroll progress [0–1] */
  progress: number;
}

/**
 * Experience zone definition for the world map.
 * Used by ExperiencePlaceholder for positioning.
 */
export interface ExperienceZone {
  id: string;
  label: string;
  focus: string;
  position: {
    x: number;
    y: number;
  };
  /** Approximate dimensions of this experience zone (px) */
  size: {
    width: number;
    height: number;
  };
}
