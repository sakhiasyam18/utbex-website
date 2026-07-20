// motion/explore/tokens.ts
//
// Motion tokens specific to the Interactive Evidence Explorer.
// Extends the base motion tokens from motion/tokens.ts
// with explore-world-specific values.
//
// Source of truth:
//   04_MOTION_SYSTEM.md — Motion philosophy & behavior
//   02_CAMERA_SYSTEM.md — Camera motion rules
//   03_VISUAL_SYSTEM.md — Visual layer system

// ─── Camera Easing ────────────────────────────────────────────
// Smooth cinematic easing for camera interpolation.
// Not too elastic (02_CAMERA §18: no wild movement).
// Not too stiff (feels mechanical).
export const cameraEase = {
  /** Default camera movement — smooth, organic, cinematic */
  default: [0.25, 0.05, 0.25, 1.0] as const,
  /** Camera approaching a focus point — gentle deceleration */
  approach: [0.16, 1, 0.3, 1] as const,
  /** Camera departing a focus point — clean exit */
  depart: [0.4, 0, 0.8, 1] as const,
} as const;

// ─── Camera Duration ──────────────────────────────────────────
// Duration of camera transition segments.
// Not used for scroll-driven transforms (those are instant),
// but for optional animated transitions (e.g., initial load).
export const cameraDuration = {
  /** Initial camera entrance on page load */
  entrance: 1.8,
  /** Camera transition between experiences (if triggered manually) */
  transition: 1.2,
} as const;

// ─── Parallax Ratios ──────────────────────────────────────────
// Speed multipliers for each layer relative to the camera.
// Per 02_CAMERA_SYSTEM.md §15 and 04_MOTION_SYSTEM.md §15:
//   Background = slowest
//   Decoration = slightly faster
//   Content    = 1.0 (reference, moves with camera)
//   Foreground = fastest
//
// Ratio is applied to camera translation:
//   layer.x = camera.x * ratio
//   layer.y = camera.y * ratio
export const parallaxRatio = {
  /** Background layer — barely moves, creates deep depth */
  background: 0.05,
  /** Noise/texture layer */
  texture: 0.08,
  /** Gradient glow layer — drifts slowly */
  gradient: 0.15,
  /** Decorative elements — moderate parallax */
  decoration: 0.3,
  /** Content layer — moves with camera (reference speed) */
  content: 1.0,
  /** Overlay (vignette, grain) — fixed to viewport, no movement */
  overlay: 0.0,
} as const;

// ─── Reveal Durations ─────────────────────────────────────────
// Tuned for the explore world's cinematic pacing.
// Slightly longer than page 1 to match the documentary feel.
export const revealDuration = {
  /** Fast micro-interaction */
  instant: 0.2,
  /** Standard element reveal */
  normal: 0.7,
  /** Slow, deliberate reveal for important evidence */
  slow: 1.0,
  /** Extended reveal for emotionally significant moments */
  deliberate: 1.5,
} as const;

// ─── Reveal Distances ─────────────────────────────────────────
// Per 04_MOTION_SYSTEM.md §8: subtle movements only.
export const revealDistance = {
  /** Minimal shift for text */
  subtle: 16,
  /** Standard element reveal */
  normal: 30,
  /** Larger movements (hero, key evidence) */
  prominent: 50,
} as const;

// ─── Stagger Timing ───────────────────────────────────────────
// Per 04_MOTION_SYSTEM.md §16: sequential card/element reveals.
export const exploreStagger = {
  fast: 0.06,
  normal: 0.12,
  slow: 0.18,
  explorative: 0.24,
} as const;

// ─── Combined Export ──────────────────────────────────────────
export const exploreMotionTokens = {
  cameraEase,
  cameraDuration,
  parallaxRatio,
  revealDuration,
  revealDistance,
  exploreStagger,
} as const;
