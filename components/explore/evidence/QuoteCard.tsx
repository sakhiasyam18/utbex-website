// components/explore/evidence/QuoteCard.tsx
//
// Quote evidence card.
// Source of truth: 08_COMPONENT_SYSTEM.md §15
//
// Large decorative quotation marks, attribution line, deep purple gradient.

"use client";

import { EvidenceCard, type EvidenceCardProps } from "./EvidenceCard";

type QuoteCardProps = Omit<EvidenceCardProps, "children">;

export function QuoteCard(props: QuoteCardProps) {
  return (
    <EvidenceCard {...props}>
      <div className="flex flex-col items-center gap-1 px-4 text-center">
        {/* Decorative quotation mark */}
        <span className="text-4xl leading-none text-p2-purple/20 font-serif">
          &ldquo;
        </span>
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/15">
          Quote
        </span>
      </div>
    </EvidenceCard>
  );
}
