// components/explore/evidence/GalleryCard.tsx
//
// Photo/Gallery evidence card.
// Source of truth: 08_COMPONENT_SYSTEM.md §6–§8
//
// Wraps EvidenceCard with photo-specific placeholder content.
// Warm-toned gradient thumbnail with image icon.

"use client";

import { Image } from "lucide-react";
import { EvidenceCard, type EvidenceCardProps } from "./EvidenceCard";

type GalleryCardProps = Omit<EvidenceCardProps, "children">;

export function GalleryCard(props: GalleryCardProps) {
  return (
    <EvidenceCard {...props}>
      <div className="flex flex-col items-center gap-2 text-white/15">
        <Image size={32} strokeWidth={1} />
        <span className="text-[10px] font-mono uppercase tracking-widest">
          Photo
        </span>
      </div>
    </EvidenceCard>
  );
}
