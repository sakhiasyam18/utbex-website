import { MotionValue } from "framer-motion";

export interface HeroMotionProps {
  blur: MotionValue<string>;
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
}
