// motion/explore/index.ts
//
// Barrel export for the explore motion system.
// Usage: import { exploreMotionTokens, experienceReveal } from '@/motion/explore';

export {
  cameraEase,
  cameraDuration,
  parallaxRatio,
  revealDuration,
  revealDistance,
  exploreStagger,
  exploreMotionTokens,
} from "./tokens";

export {
  experienceReveal,
  staggerContainer,
  staggerContainerSlow,
  staggerChild,
  fadeIn,
  scaleReveal,
  floatingDriftConfig,
} from "./variants";

export { useExploreReducedMotion } from "./useReducedMotion";
