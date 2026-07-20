// components/explore/evidence/EvidenceCluster.tsx
//
// Editorial composition layout for evidence cards within an Experience.
// Source of truth: 09A_EXPERIENCE_LAYOUT_SYSTEM.md §7–§8
//
// This is NOT a uniform grid.
// Each experience gets a hand-crafted composition from groups.ts.
// Cards are placed using CSS grid-template-areas for intentional rhythm.
// The layout feels curated like a magazine spread, not generated.
//
// Evidence within a cluster should feel narratively connected.

"use client";

import { motion } from "framer-motion";
import { supportingStagger } from "@/motion/explore/variants";
import type { EvidenceItem } from "@/data/explore/types";
import type { ExperienceLayoutComposition } from "@/data/explore/types";
import { GalleryCard } from "./GalleryCard";
import { VideoCard } from "./VideoCard";
import { AwardCard } from "./AwardCard";
import { PDFCard } from "./PDFCard";
import { StoryCard } from "./StoryCard";
import { QuoteCard } from "./QuoteCard";
import { TimelineCard } from "./TimelineCard";
import { EvidenceCard } from "./EvidenceCard";

interface EvidenceClusterProps {
  /** All evidence items for this cluster (supporting, not hero) */
  items: EvidenceItem[];
  /** The editorial composition defining grid layout */
  composition: ExperienceLayoutComposition;
  /** Whether cards are interactive (hover/click enabled) */
  isInteractive: boolean;
  /** Click handler — opens drawer for the clicked item */
  onCardClick: (item: EvidenceItem) => void;
}

/**
 * Renders the correct specialized card component for a given evidence type.
 */
function renderCard(
  item: EvidenceItem,
  composition: ExperienceLayoutComposition,
  isInteractive: boolean,
  onCardClick: (item: EvidenceItem) => void,
) {
  const gridArea = composition.cardAreaMap[item.id];
  const size = composition.cardSizeMap[item.id] ?? item.cardSize ?? "medium";
  const transform = composition.cardTransformMap?.[item.id];

  const commonProps = {
    key: item.id,
    item,
    size,
    gridArea,
    transform,
    isInteractive,
    onClick: onCardClick,
  } as const;

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

export function EvidenceCluster({
  items,
  composition,
  isInteractive,
  onCardClick,
}: EvidenceClusterProps) {
  return (
    <motion.div
      className="w-full"
      style={{
        display: "grid",
        gridTemplateColumns: composition.gridColumns,
        gridTemplateRows: composition.gridRows,
        gridTemplateAreas: composition.gridAreas,
        gap: "12px",
      }}
      variants={supportingStagger}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {items.map((item) =>
        renderCard(item, composition, isInteractive, onCardClick)
      )}
    </motion.div>
  );
}
