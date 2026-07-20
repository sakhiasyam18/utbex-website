// components/explore/evidence/AwardCard.tsx
//
// Award / Recognition evidence card.
// Source of truth: 08_COMPONENT_SYSTEM.md §11
//
// Gold accent, trophy icon, issuer line in hover metadata.

"use client";

import { Trophy } from "lucide-react";
import { EvidenceCard, type EvidenceCardProps } from "./EvidenceCard";

type AwardCardProps = Omit<EvidenceCardProps, "children">;

export function AwardCard(props: AwardCardProps) {
  return (
    <EvidenceCard {...props}>
      <div className="flex flex-col items-center gap-2 text-p2-gold/20">
        <Trophy size={28} strokeWidth={1} />
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/15">
          Award
        </span>
      </div>
    </EvidenceCard>
  );
}
