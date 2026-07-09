//app/sections/about/components/SectionLabel.tsx
"use client";

import { motion } from "framer-motion";
import { fade } from "../motion/aboutMotion";

interface SectionLabelProps {
  children: string;
}

/**
 * Small, uppercase, wide-tracked label per 02_ABOUT_VISUAL_SYSTEM.md
 * ("Label — Small. Uppercase. Brand accent. Wide letter spacing.")
 */
export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <motion.p
      variants={fade}
      className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--utbex-maroon,#7A1F2B)]"
    >
      {children}
    </motion.p>
  );
}
