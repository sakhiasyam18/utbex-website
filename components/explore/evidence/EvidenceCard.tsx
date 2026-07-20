// components/explore/evidence/EvidenceCard.tsx
//
// Base card component for all evidence types.
// Source of truth: 08_COMPONENT_SYSTEM.md §10, 09A §14, 10_ANIMATION_SYSTEM.md §11–§12
//
// Every evidence card renders through this shell.
// Specialized cards (Gallery, Video, Award, etc.) wrap this component
// and provide type-specific inner content.
//
// Key behavior:
//   - Progressive hover: metadata reveals in staggered sequence
//   - Click triggers drawer (does NOT navigate)
//   - Size variants: large, medium, small, wide, tall
//   - Placeholder thumbnails: CSS gradients + icons (no stock images)

"use client";

import { motion } from "framer-motion";
import { supportingChild } from "@/motion/explore/variants";
import { hoverStaggerDelay, interactionDuration } from "@/motion/explore/tokens";
import type { EvidenceItem, CardSize } from "@/data/explore/types";

// ─── Size → CSS mapping ──────────────────────────────────────
const sizeStyles: Record<CardSize, string> = {
  large: "col-span-2 row-span-2 min-h-[320px]",
  medium: "col-span-1 row-span-1 min-h-[200px]",
  small: "col-span-1 row-span-1 min-h-[160px]",
  wide: "col-span-2 row-span-1 min-h-[180px]",
  tall: "col-span-1 row-span-2 min-h-[320px]",
};

// ─── Evidence type → placeholder gradient ─────────────────────
const typeGradients: Record<string, string> = {
  photo: "from-white/10 to-white/5",
  video: "from-p2-blue/15 to-p2-blue/5",
  pdf: "from-white/8 to-white/3",
  award: "from-p2-gold/15 to-p2-gold/5",
  story: "from-p2-orange/10 to-p2-orange/5",
  quote: "from-p2-purple/12 to-p2-purple/5",
  timeline: "from-p2-primary/10 to-p2-primary/5",
  hki: "from-p2-pink/10 to-p2-pink/5",
  product: "from-p2-orange/12 to-p2-orange/5",
  certificate: "from-p2-gold/10 to-p2-gold/5",
};

export interface EvidenceCardProps {
  /** The evidence data to display */
  item: EvidenceItem;
  /** Override card size (defaults to item.cardSize or derived from priority) */
  size?: CardSize;
  /** CSS grid-area name for editorial layout placement */
  gridArea?: string;
  /** Whether interaction (hover/click) is enabled */
  isInteractive?: boolean;
  /** Click handler — opens drawer */
  onClick?: (item: EvidenceItem) => void;
  /** Optional inner content override (used by specialized cards) */
  children?: React.ReactNode;
}

export function EvidenceCard({
  item,
  size,
  gridArea,
  isInteractive = true,
  onClick,
  children,
}: EvidenceCardProps) {
  const cardSize = size ?? item.cardSize ?? "medium";
  const gradient = typeGradients[item.type] ?? typeGradients.photo;

  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-xl
        bg-gradient-to-br ${gradient}
        border border-white/[0.06]
        ${sizeStyles[cardSize]}
        ${isInteractive ? "cursor-pointer" : ""}
        group
      `}
      style={gridArea ? { gridArea } : undefined}
      variants={supportingChild}
      // Hover animation — scale + glow (per doc 10 §11)
      whileHover={
        isInteractive
          ? {
              scale: 1.03,
              transition: {
                duration: interactionDuration.micro,
                ease: "easeOut",
              },
            }
          : undefined
      }
      onClick={() => {
        if (isInteractive && onClick) onClick(item);
      }}
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-label={isInteractive ? `Explore: ${item.title}` : item.title}
      onKeyDown={(e) => {
        if (isInteractive && onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick(item);
        }
      }}
    >
      {/* ── Placeholder Thumbnail ─────────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center">
        {children ?? (
          <div className="text-white/20 text-xs font-mono uppercase tracking-widest">
            {item.type}
          </div>
        )}
      </div>

      {/* ── Hover Glow Effect ─────────────────────────────── */}
      <div
        className="
          absolute inset-0 rounded-xl opacity-0
          group-hover:opacity-100
          pointer-events-none
        "
        style={{
          boxShadow: "inset 0 0 30px rgba(255,51,51,0.08), 0 0 20px rgba(255,51,51,0.06)",
          transitionProperty: "opacity",
          transitionDuration: `${interactionDuration.hover * 1000}ms`,
          transitionDelay: `${hoverStaggerDelay.glow * 1000}ms`,
          transitionTimingFunction: "ease-out",
        }}
      />

      {/* ── Hover Border Highlight ────────────────────────── */}
      <div
        className="
          absolute inset-0 rounded-xl border border-transparent
          group-hover:border-white/15
          pointer-events-none
        "
        style={{
          transitionProperty: "border-color",
          transitionDuration: `${interactionDuration.micro * 1000}ms`,
          transitionDelay: `${hoverStaggerDelay.border * 1000}ms`,
          transitionTimingFunction: "ease-out",
        }}
      />

      {/* ── Hover Metadata Overlay ────────────────────────── */}
      {/* Progressive reveal: title → subtitle → year → category → hint */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 pointer-events-none">
        {/* Title */}
        <span
          className="
            text-sm font-semibold text-white
            opacity-0 translate-y-2
            group-hover:opacity-100 group-hover:translate-y-0
          "
          style={{
            transitionProperty: "opacity, transform",
            transitionDuration: `${interactionDuration.hover * 1000}ms`,
            transitionDelay: `${hoverStaggerDelay.title * 1000}ms`,
            transitionTimingFunction: "ease-out",
          }}
        >
          {item.title}
        </span>

        {/* Subtitle */}
        <span
          className="
            text-xs text-white/70 mt-0.5
            opacity-0 translate-y-2
            group-hover:opacity-100 group-hover:translate-y-0
          "
          style={{
            transitionProperty: "opacity, transform",
            transitionDuration: `${interactionDuration.hover * 1000}ms`,
            transitionDelay: `${hoverStaggerDelay.subtitle * 1000}ms`,
            transitionTimingFunction: "ease-out",
          }}
        >
          {item.subtitle}
        </span>

        {/* Year + Category row */}
        <div className="flex items-center gap-2 mt-1.5">
          {/* Year badge */}
          <span
            className="
              text-[10px] font-mono text-p2-primary/80
              px-1.5 py-0.5 rounded bg-p2-primary/10
              opacity-0 translate-y-2
              group-hover:opacity-100 group-hover:translate-y-0
            "
            style={{
              transitionProperty: "opacity, transform",
              transitionDuration: `${interactionDuration.hover * 1000}ms`,
              transitionDelay: `${hoverStaggerDelay.year * 1000}ms`,
              transitionTimingFunction: "ease-out",
            }}
          >
            {item.year}
          </span>

          {/* Category tag */}
          <span
            className="
              text-[10px] font-mono text-white/40
              uppercase tracking-wider
              opacity-0 translate-y-2
              group-hover:opacity-100 group-hover:translate-y-0
            "
            style={{
              transitionProperty: "opacity, transform",
              transitionDuration: `${interactionDuration.hover * 1000}ms`,
              transitionDelay: `${hoverStaggerDelay.category * 1000}ms`,
              transitionTimingFunction: "ease-out",
            }}
          >
            {item.category}
          </span>
        </div>

        {/* "Click to Explore" hint */}
        <span
          className="
            text-[10px] text-white/50 mt-2
            tracking-wide uppercase
            opacity-0 translate-y-2
            group-hover:opacity-100 group-hover:translate-y-0
          "
          style={{
            transitionProperty: "opacity, transform",
            transitionDuration: `${interactionDuration.hover * 1000}ms`,
            transitionDelay: `${hoverStaggerDelay.hint * 1000}ms`,
            transitionTimingFunction: "ease-out",
          }}
        >
          Click to Explore
        </span>
      </div>

      {/* ── Bottom gradient for text readability ──────────── */}
      <div
        className="
          absolute bottom-0 left-0 right-0 h-2/3
          bg-gradient-to-t from-black/60 via-black/20 to-transparent
          opacity-0 group-hover:opacity-100
          pointer-events-none
        "
        style={{
          transitionProperty: "opacity",
          transitionDuration: `${interactionDuration.hover * 1000}ms`,
          transitionTimingFunction: "ease-out",
        }}
      />
    </motion.div>
  );
}
