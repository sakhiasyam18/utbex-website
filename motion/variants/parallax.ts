// motion/variants/parallax.ts
//
// Subtle parallax configurations for scroll-linked depth effects.
// Per Story Architecture: "Parallax with restraint."
// Per Animation Constraints: "Subtle parallax" is preferred; aggressive scaling is avoided.
//
// These are NOT Framer Motion Variants — they are configuration objects
// used by scroll-linked transforms (useScroll + useTransform).

// ─── Parallax Config Type ──────────────────────────────────────
export interface ParallaxConfig {
  /** Movement range in pixels (positive = moves down as user scrolls down) */
  range: number;
  /** Speed multiplier (0.5 = half speed of scroll, creating depth) */
  speed: number;
  /** Optional opacity fade during scroll */
  opacityRange?: [number, number];
}

// ─── Subtle Parallax ──────────────────────────────────────────
// For documentary photos between chapters (ChapterBreather).
// Very slight movement creates depth without drawing attention.
export const subtleParallax: ParallaxConfig = {
  range: 30,
  speed: 0.15,
};

// ─── Gentle Parallax ──────────────────────────────────────────
// For hero imagery. Slightly more pronounced but still restrained.
export const gentleParallax: ParallaxConfig = {
  range: 50,
  speed: 0.2,
  opacityRange: [1, 0.95],
};

// ─── Minimal Parallax ─────────────────────────────────────────
// For text elements that benefit from a hint of depth.
// Movement is barely perceptible — felt, not seen.
export const minimalParallax: ParallaxConfig = {
  range: 15,
  speed: 0.08,
};
