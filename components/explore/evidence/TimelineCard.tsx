// components/explore/evidence/TimelineCard.tsx
//
// Timeline node evidence card.
// Source of truth: 08_COMPONENT_SYSTEM.md §9, 10_ANIMATION_SYSTEM.md §20
//
// Year badge, clock icon, timeline connector line.
// Official timeline: 2014 → 2019 → 2021 → 2023 only.

"use client";

import { Clock } from "lucide-react";
import { EvidenceCard, type EvidenceCardProps } from "./EvidenceCard";

type TimelineCardProps = Omit<EvidenceCardProps, "children">;

export function TimelineCard(props: TimelineCardProps) {
  return (
    <EvidenceCard {...props}>
      <div className="flex flex-col items-center gap-2 text-p2-primary/20">
        <Clock size={24} strokeWidth={1} />
        {/* Year badge */}
        <span className="text-lg font-mono font-bold text-p2-primary/30">
          {props.item.year}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/15">
          Timeline
        </span>
      </div>
    </EvidenceCard>
  );
}
