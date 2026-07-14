// components/section/footer/components/FooterNavigation.tsx
// REVISION 04: Typography smaller, contrast reduced, gap tightened.
//              Navigation quietly supports the closing — never competes.
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../motion/footerMotion";
import { FooterNavItem } from "../types/footer";

interface FooterNavigationProps {
  items: FooterNavItem[];
}

/**
 * Primary navigation — horizontal row on desktop, stacked on mobile.
 *
 * Per 01_FOOTER_BIBLE.md:
 * — Only important destinations.
 * — No long sitemap. Every link must have a purpose.
 *
 * REVISION 04: Visual importance reduced. Smaller text, wider tracking,
 * lower contrast. Navigation exists to be found — not to attract attention.
 */
export default function FooterNavigation({ items }: FooterNavigationProps) {
  if (!items || items.length === 0) return null;

  return (
    <motion.nav
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      aria-label="Footer navigation"
      className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-7"
    >
      {items.map((item) => (
        <motion.div key={item.id} variants={fadeUp}>
          <Link
            href={item.href}
            className="text-[11px] tracking-[0.12em] uppercase text-utbex-text-secondary/40 hover:text-utbex-text-secondary/70 transition-colors duration-500 py-1"
            aria-label={item.label}
          >
            {item.label}
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  );
}
