// components/explore/evidence/VideoCard.tsx
//
// Video evidence card.
// Source of truth: 08_COMPONENT_SYSTEM.md §18, 10_ANIMATION_SYSTEM.md §18
//
// No autoplay. Play icon overlay on thumbnail.
// Click opens drawer with video placeholder.

"use client";

import { Play } from "lucide-react";
import { EvidenceCard, type EvidenceCardProps } from "./EvidenceCard";

type VideoCardProps = Omit<EvidenceCardProps, "children">;

export function VideoCard(props: VideoCardProps) {
  return (
    <EvidenceCard {...props}>
      <div className="flex flex-col items-center gap-2 text-white/15">
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
          <Play size={20} strokeWidth={1.5} className="ml-0.5" />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest">
          Video
        </span>
      </div>
    </EvidenceCard>
  );
}
