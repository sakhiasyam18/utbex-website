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
            <div className="flex flex-wrap gap-2 mt-3">
                {evidence.map((item, i) => (
                    <button
                        key={i}
                        onClick={() => handleClick(item)}
                        className="inline-flex items-center gap-1.5 text-[11px] font-medium text-utbex-maroon/80 
                                   hover:text-utbex-maroon bg-utbex-maroon/5 hover:bg-utbex-maroon/10 
                                   px-3 py-1.5 rounded-full transition-colors duration-200 cursor-pointer"
                    >
                        <span className="text-xs">
                            {item.type === 'certificate' ? '📜' : item.type === 'documentation' ? '📷' : '📰'}
                        </span>
                        {item.label}
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
