// motion/index.ts
//
// Barrel export for the motion system.
// Usage: import { motionTokens, fadeUp, useChapterReveal } from '@/motion';

export { motionTokens, duration, ease, stagger, threshold, distance, opacity } from './tokens';
export {
  fadeIn,
  fadeUp,
  fadeUpSubtle,
  fadeUpSlow,
  scaleReveal,
  staggerContainer,
  staggerContainerFast,
  staggerContainerSlow,
  staggerContainerExplorative,
  staggerChild,
  subtleParallax,
  gentleParallax,
  minimalParallax,
  type ParallaxConfig,
} from './variants';
export { useChapterReveal } from './hooks/useChapterReveal';
