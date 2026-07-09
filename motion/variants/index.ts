// motion/variants/index.ts
//
// Barrel export for all shared motion variants.
// Usage: import { fadeUp, staggerContainer } from '@/motion/variants';

export { fadeIn, fadeUp, fadeUpSubtle, fadeUpSlow, scaleReveal } from './reveal';
export {
  staggerContainer,
  staggerContainerFast,
  staggerContainerSlow,
  staggerContainerExplorative,
  staggerChild,
} from './stagger';
export {
  subtleParallax,
  gentleParallax,
  minimalParallax,
  type ParallaxConfig,
} from './parallax';
