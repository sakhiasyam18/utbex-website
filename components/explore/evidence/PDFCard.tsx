// components/explore/evidence/PDFCard.tsx
//
// PDF / Document evidence card.
// Source of truth: 08_COMPONENT_SYSTEM.md §17, 10_ANIMATION_SYSTEM.md §19
//
// File icon, muted gradient. PDF not loaded until opened.

"use client";

import { FileText } from "lucide-react";
import { EvidenceCard, type EvidenceCardProps } from "./EvidenceCard";

type PDFCardProps = Omit<EvidenceCardProps, "children">;

export function PDFCard(props: PDFCardProps) {
  return (
    <EvidenceCard {...props}>
      <div className="flex flex-col items-center gap-2 text-white/15">
        <FileText size={28} strokeWidth={1} />
        <span className="text-[10px] font-mono uppercase tracking-widest">
          PDF Document
        </span>
      </div>
    </EvidenceCard>
  );
}
