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
  interactionDuration,
  hoverStaggerDelay,
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
  heroReveal,
  supportingStagger,
  supportingChild,
  experienceEntry,
  drawerOverlay,
  drawerPanel,
  drawerContentStagger,
  drawerContentChild,
} from "./variants";

export { useExploreReducedMotion } from "./useReducedMotion";

