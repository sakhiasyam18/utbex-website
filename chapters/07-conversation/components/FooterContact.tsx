// components/section/footer/components/FooterContact.tsx
// REVISION 05: Visual weight reduced. Contact becomes a quiet supporting detail.
"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../motion/footerMotion";
import { FooterContactContent } from "../types/footer";

interface FooterContactProps {
  content: FooterContactContent;
}

/**
 * Essential contact information.
 *
 * Per 03_FOOTER_LAYOUT_SYSTEM.md:
 * — Keep only essential information: Email, Location, optional phone.
 * — Nothing else.
 *
 * REVISION 05: Treated as a quiet supporting detail.
 * Smaller text, reduced contrast, tight separator between items.
 * Visitors discover it naturally — it does not announce itself.
 */
export default function FooterContact({ content }: FooterContactProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="flex items-center justify-center gap-0"
    >
      {content.items.map((item, index) => (
        <motion.div
          key={item.label}
          variants={fadeUp}
          className="flex items-center"
        >
          {/* Quiet dot separator between items */}
          {index > 0 && (
            <span
              aria-hidden="true"
              className="mx-3 text-utbex-text-secondary/20 text-[10px]"
            >
              ·
            </span>
          )}
          {item.href ? (
            <a
              href={item.href}
              aria-label={item.label}
              className="text-[11px] tracking-wide text-utbex-text-secondary/35 hover:text-utbex-text-secondary/60 transition-colors duration-500"
            >
              {item.value}
            </a>
          ) : (
            <span
              aria-label={item.label}
              className="text-[11px] tracking-wide text-utbex-text-secondary/35"
            >
              {item.value}
            </span>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
