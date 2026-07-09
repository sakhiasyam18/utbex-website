// components/section/footer/components/FooterSocial.tsx
"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../motion/footerMotion";
import { FooterSocialItem } from "../types/footer";

interface FooterSocialProps {
  items: FooterSocialItem[];
}

/**
 * Inline SVG icons — outline style, uniform 18×18px.
 * Per 02_FOOTER_VISUAL_SYSTEM.md:
 * — Simple outline style. Uniform size.
 * — No colorful brand icons. No circular backgrounds.
 * — They should feel integrated into the editorial design.
 *
 * Using inline SVG paths because this version of lucide-react
 * does not ship social brand icons.
 */
const InstagramIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const PLATFORM_ICON_MAP: Record<string, React.ComponentType> = {
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  YouTube: YouTubeIcon,
};

/**
 * Social icons — placed naturally after contact, never dominate.
 *
 * Per 01_FOOTER_BIBLE.md:
 * — Social media supports credibility. It is not the main attraction.
 * — Minimal labels. Clean icons.
 */
export default function FooterSocial({ items }: FooterSocialProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="flex items-center justify-center gap-4"
    >
      {items.map((item) => {
        const Icon = PLATFORM_ICON_MAP[item.platform];

        if (!Icon) return null;

        return (
          <motion.a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            aria-label={item.ariaLabel}
            className="text-utbex-text-secondary/30 hover:text-utbex-text-secondary/55 transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-utbex-maroon/50 focus-visible:ring-offset-2 rounded-sm"
          >
            <Icon />
          </motion.a>
        );
      })}
    </motion.div>
  );
}
