// motion/tokens.ts
//
// UTBEX Motion Token System — the shared vocabulary for all animations.
// Every motion value in the project should reference these tokens.
//
// Source of truth:
//   - 07_MOTION_SYSTEM.md (design system motion rules)
//   - 05_SCROLL_EXPERIENCE_SYSTEM.md §Motion Principles
//   - 00_BRAND_STRATEGY_BIBLE.md §Motion Philosophy
//
// Governing principle:
//   "Motion should become invisible. If animation becomes memorable, reduce it."

// ─── Duration Tokens ───────────────────────────────────────────
// All durations in seconds.
export const duration = {
  /** Micro-interactions: hover states, focus rings */
  instant: 0.15,
  /** Navigation transitions, link underlines */
  fast: 0.3,
  /** Standard element reveals (fade-in, slide-up) */
  normal: 0.6,
  /** Chapter-level entrances (whole-chapter reveal) */
  slow: 0.9,
  /** Extended reveals for emotionally significant moments */
  deliberate: 1.2,
  /** Atmosphere breathing cycle (per GlobalAtmosphere) */
  breathing: 18,
  /** Slow atmosphere phase (offset from breathing) */
  atmosphereSlow: 24,
} as const;

// ─── Easing Tokens ─────────────────────────────────────────────
// Cubic bezier curves as [x1, y1, x2, y2] tuples.
// Named for their narrative purpose, not their math.
export const ease = {
  /** Default — smooth, natural, unnoticeable */
  default: [0.25, 0.1, 0.25, 1.0] as const,
  /** Reveal — elements entering view. Gentle deceleration. */
  reveal: [0.16, 1, 0.3, 1] as const,
  /** Exit — elements leaving view. Quick, clean departure. */
  exit: [0.4, 0, 1, 1] as const,
  /** Gentle — for intimate, personal transitions (Ch. 03 Human) */
  gentle: [0.4, 0, 0.2, 1] as const,
} as const;

// ─── Stagger Tokens ────────────────────────────────────────────
// Delay between sequential child animations (in seconds).
export const stagger = {
  /** Tight stagger for small groups (2–3 items) */
  fast: 0.05,
  /** Standard stagger for medium groups (4–6 items) */
  normal: 0.1,
  /** Wide stagger for large groups or reflective chapters */
  slow: 0.15,
  /** Very wide stagger for explorative chapters (Ch. 05 Stories) */
  explorative: 0.2,
} as const;

// ─── Intersection Observer Thresholds ──────────────────────────
// Per 05_SCROLL_EXPERIENCE_SYSTEM.md §Engineering Guidelines:
// "Intersection Observer thresholds should remain consistent."
export const threshold = {
  /** Default: chapter enters view when 20% visible */
  default: 0.2,
  /** For elements that should trigger earlier (hero, breathers) */
  eager: 0.1,
  /** For elements that should trigger later (statistics, counters) */
  late: 0.4,
} as const;

// ─── Transform Distance ───────────────────────────────────────
// Pixel distances for slide/translate animations.
// Keep values small — subtlety is the goal.
export const distance = {
  /** Minimal shift (text reveals) */
  subtle: 12,
  /** Standard element reveal */
  normal: 24,
  /** Larger movements (hero entrance only) */
  prominent: 40,
} as const;

// ─── Opacity Tokens ────────────────────────────────────────────
export const opacity = {
  /** Starting opacity for reveals */
  hidden: 0,
  /** Full opacity */
  visible: 1,
  /** Atmosphere minimum breathing opacity */
  breatheMin: 0.7,
  /** Atmosphere maximum breathing opacity */
  breatheMax: 1,
} as const;

// ─── Combined Export ───────────────────────────────────────────
export const motionTokens = {
  duration,
  ease,
  stagger,
  threshold,
  distance,
  opacity,
} as const;
