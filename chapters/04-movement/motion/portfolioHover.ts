// components/section/portfolio/motion/portfolioHover.ts
import { motionDuration } from "./portfolioMotion";

const easeSoft = [0.22, 1, 0.36, 1] as const;

/** 
 * Hover interactions locked in 06_PORTFOLIO_MOTION_SYSTEM.md.
 * Hover should reward curiosity, not attract attention.
 */
export const hoverImage = {
  scale: 1.02,
  transition: { duration: motionDuration.s, ease: easeSoft },
};

/** CTA Hover: small horizontal movement only */
export const hoverCTA = {
  x: 4,
  transition: { duration: motionDuration.xs, ease: easeSoft },
};
