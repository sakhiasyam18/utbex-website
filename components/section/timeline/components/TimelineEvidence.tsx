// components/section/timeline/components/TimelineEvidence.tsx
"use client";

import { useState } from "react";
import { TimelineEvidence as EvidenceType } from "../types/timeline";
import { Lightbox } from "@/components/ui/Lightbox";

interface TimelineEvidenceProps {
    evidence: EvidenceType[];
}

export default function TimelineEvidence({ evidence }: TimelineEvidenceProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeSrc, setActiveSrc] = useState("");
    const [activeAlt, setActiveAlt] = useState("");

    const handleClick = (item: EvidenceType) => {
        if (item.href) {
            // If it's an image, open lightbox
            if (item.href.match(/\.(avif|jpg|jpeg|png|webp)$/i)) {
                setActiveSrc(item.href);
                setActiveAlt(item.label);
                setLightboxOpen(true);
            } else {
                // External link
                window.open(item.href, '_blank', 'noopener,noreferrer');
            }
        }
    };

    return (
        <>
            <div className="flex flex-wrap gap-2.5 mt-5">
                {evidence.map((item, i) => (
                    <button
                        key={i}
                        onClick={() => handleClick(item)}
                        className="group inline-flex items-center gap-2 text-[11px] font-semibold
                                   text-utbex-maroon bg-white/80 backdrop-blur-sm
                                   px-4 py-2.5 rounded-xl transition-all duration-300 cursor-pointer
                                   border border-utbex-maroon/15 shadow-[0_2px_8px_rgba(0,0,0,0.04)]
                                   hover:bg-utbex-maroon hover:text-white hover:border-utbex-maroon
                                   hover:shadow-[0_6px_20px_rgba(139,0,0,0.2)]
                                   hover:-translate-y-0.5 active:translate-y-0"
                    >
                        <span className="text-xs transition-transform duration-300 group-hover:scale-110">
                            {item.type === 'certificate' ? '📜' : item.type === 'documentation' ? '📷' : '📰'}
                        </span>
                        {item.label}
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                        </svg>
                    </button>
                ))}
            </div>

            <Lightbox
                isOpen={lightboxOpen}
                src={activeSrc}
                alt={activeAlt}
                caption={activeAlt}
                onClose={() => setLightboxOpen(false)}
            />
        </>
    );
}
