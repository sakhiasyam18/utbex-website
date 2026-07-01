// components/section/footer/components/FooterCopyright.tsx
"use client";

import { motion } from "framer-motion";
import { fade } from "../motion/footerMotion";

interface FooterCopyrightProps {
  text: string;
}

/**
 * Always the final element.
 *
 * Per 01_FOOTER_BIBLE.md:
 * — Quiet. Small. Readable. Never visually dominant.
 *
 * Per 03_FOOTER_LAYOUT_SYSTEM.md:
 * — Small typography. Quiet contrast. Minimal spacing.
 */
export default function FooterCopyright({ text }: FooterCopyrightProps) {
  return (
    <motion.p
      variants={fade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      className="text-[11px] text-utbex-text-secondary/30 tracking-wide text-center"
    >
      {text}
    </motion.p>
  );
}
