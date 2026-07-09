// components/section/portfolio/motion/portfolioReveal.ts
import { Variants } from "framer-motion";
import { motionDuration } from "./portfolioMotion";

const easeSoft = [0.22, 1, 0.36, 1] as const;

/** 
 * Used for Evidence Annotations which should "feel attached to the documentary".
 * Tiny fade, tiny translate.
 */
export const evidenceReveal: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: motionDuration.m, ease: easeSoft },
  },
};

/** 
 * Partner Ecosystem slow reveal 
 */
export const partnerReveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: motionDuration.l, ease: easeSoft },
  },
};
