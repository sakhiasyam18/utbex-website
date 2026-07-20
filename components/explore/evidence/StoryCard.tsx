// components/explore/evidence/StoryCard.tsx
//
// Story / testimonial evidence card.
// Source of truth: 08_COMPONENT_SYSTEM.md §14–§15
//
// Text excerpt placeholder, book icon, warm amber gradient.

"use client";

import { BookOpen } from "lucide-react";
import { EvidenceCard, type EvidenceCardProps } from "./EvidenceCard";

type StoryCardProps = Omit<EvidenceCardProps, "children">;

export function StoryCard(props: StoryCardProps) {
  return (
    <EvidenceCard {...props}>
      <div className="flex flex-col items-center gap-2 text-p2-orange/20">
        <BookOpen size={28} strokeWidth={1} />
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/15">
          Story
        </span>
      </div>
    </EvidenceCard>
  );
}
