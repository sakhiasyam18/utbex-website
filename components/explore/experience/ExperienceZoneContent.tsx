// components/explore/experience/ExperienceZoneContent.tsx
//
// The "museum room interior" — renders the full exploration space
// inside each experience zone.
//
// Source of truth:
//   09A_EXPERIENCE_LAYOUT_SYSTEM.md §3–§5, §9–§11
//   10_ANIMATION_SYSTEM.md §7–§8, §21
//
// Structure (per doc 09A §3):
//   Experience
//     ↓ Entry Animation (fade in)
//     ↓ Experience Title (small label)
//     ↓ Hero Evidence (single large card, appears first)
//     ↓ Editorial Layout (EvidenceCluster with narrative-ordered cards)
//     ↓ Interaction Layer (hover/click enabled only after entry)
//     ↓ Drawer Layer (deep-dive overlay)
//     ↓ Exit Transition (fade out)
//
// Key behavior:
//   - Hero fades in first (600–900ms)
//   - Supporting cards stagger in by narrativeOrder
//   - Interaction enabled only after full entry sequence
//   - Each experience is a curated exhibition space, not a section

"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ExperienceZone } from "@/types/explore";
import { heroReveal, experienceEntry } from "@/motion/explore/variants";
import { EXPERIENCE_EVIDENCE_MAP, EXPERIENCE_COMPOSITIONS } from "@/data/explore/groups";
import { EvidenceCluster } from "@/components/explore/evidence/EvidenceCluster";
import { Drawer } from "@/components/explore/evidence/Drawer";
import { GalleryCard } from "@/components/explore/evidence/GalleryCard";
import { VideoCard } from "@/components/explore/evidence/VideoCard";
import { AwardCard } from "@/components/explore/evidence/AwardCard";
import { PDFCard } from "@/components/explore/evidence/PDFCard";
import { StoryCard } from "@/components/explore/evidence/StoryCard";
import { QuoteCard } from "@/components/explore/evidence/QuoteCard";
import { TimelineCard } from "@/components/explore/evidence/TimelineCard";
import { EvidenceCard } from "@/components/explore/evidence/EvidenceCard";
import { useExperienceState } from "@/hooks/explore/useExperienceState";
import { useDrawer } from "@/hooks/explore/useDrawer";
import type { EvidenceItem } from "@/types/explore";

interface ExperienceZoneContentProps {
  zone: ExperienceZone;
  isActive: boolean;
}

/**
 * Renders the correct specialized hero card for a given evidence type.
 */
function HeroCard({
  item,
  transform,
  isInteractive,
  onClick,
}: {
  item: EvidenceItem;
  transform?: import("@/types/explore").CardTransform;
  isInteractive: boolean;
  onClick: (item: EvidenceItem) => void;
}) {
  const commonProps = {
    item,
    size: "large" as const,
    transform,
    isInteractive,
    onClick,
  };

  switch (item.type) {
    case "photo":
    case "product":
      return <GalleryCard {...commonProps} />;
    case "video":
      return <VideoCard {...commonProps} />;
    case "award":
      return <AwardCard {...commonProps} />;
    case "pdf":
    case "hki":
    case "certificate":
      return <PDFCard {...commonProps} />;
    case "story":
      return <StoryCard {...commonProps} />;
    case "quote":
      return <QuoteCard {...commonProps} />;
    case "timeline":
      return <TimelineCard {...commonProps} />;
    default:
      return <EvidenceCard {...commonProps} />;
  }
}

export function ExperienceZoneContent({
  zone,
  isActive,
}: ExperienceZoneContentProps) {
  const { isOpen, selectedItem, openDrawer, closeDrawer } = useDrawer();
  const { state, isInteractionEnabled, isVisible } = useExperienceState(
    isActive,
    isOpen,
  );

  // Get evidence data for this experience
  const evidenceGroup = EXPERIENCE_EVIDENCE_MAP[zone.id];
  const composition = EXPERIENCE_COMPOSITIONS[zone.id];

  // Per doc 09A §22: if experience has no evidence, don't render
  if (!evidenceGroup || !composition) return null;

  return (
    <>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            className="absolute inset-0 flex flex-col p-6 gap-4"
            variants={experienceEntry}
            initial="hidden"
            animate={state === "exit" ? "exit" : "visible"}
            exit="exit"
            key={`${zone.id}-content`}
          >
            {/* ── Experience Title Label ────────────────────── */}
            {/* Small, non-intrusive label (per doc 08 §20, 09A §3) */}
            <motion.div
              className="flex items-center gap-3"
              variants={heroReveal}
            >
              <div className="w-6 h-px bg-p2-primary/30" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40">
                {zone.label}
              </span>
              <span className="text-[10px] font-mono text-white/15">
                {zone.focus}
              </span>
            </motion.div>

            {/* ── Hero Evidence ─────────────────────────────── */}
            {/* Always appears first. Single large card. */}
            {/* Per doc 10 §9: Opacity 0→1, Scale 0.97→1, 600–900ms */}
            <motion.div variants={heroReveal}>
              <HeroCard
                item={evidenceGroup.hero}
                transform={composition.cardTransformMap?.[evidenceGroup.hero.id]}
                isInteractive={isInteractionEnabled}
                onClick={openDrawer}
              />
            </motion.div>

            {/* ── Supporting Evidence — Editorial Layout ────── */}
            {/* Cards stagger in by narrativeOrder after hero */}
            {/* Uses hand-crafted grid from composition data */}
            <EvidenceCluster
              items={evidenceGroup.supporting}
              composition={composition}
              isInteractive={isInteractionEnabled}
              onCardClick={openDrawer}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Drawer Layer ──────────────────────────────────── */}
      {/* Renders above everything. Experience visible behind. */}
      {/* Camera position unchanged. */}
      <Drawer
        isOpen={isOpen}
        item={selectedItem}
        onClose={closeDrawer}
      />
    </>
  );
}
