// components/section/timeline/Timeline.tsx
"use client";

import { useRef } from "react";
import { timelineMilestones, timelineHeader } from "./data/timelineContent";
import TimelineHeader from "./components/TimelineHeader";
import TimelineEntry from "./components/TimelineEntry";
import TimelineProgressLine from "./components/TimelineProgressLine";

export default function Timeline() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section
            id="timeline"
            ref={sectionRef}
            className="relative w-full bg-utbex-light py-24 md:py-32 lg:py-40 overflow-hidden"
        >
            {/* Subtle warm gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(139,0,0,0.03)_0%,_transparent_60%)]" aria-hidden="true" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
                {/* Header Section */}
                <TimelineHeader
                    label={timelineHeader.label}
                    headline={timelineHeader.headline}
                    description={timelineHeader.description}
                />

                {/* Timeline Journey Container */}
                <div className="relative mt-16 md:mt-24 max-w-5xl mx-auto">
                    {/* SVG-like Progress Line that fills on scroll (Desktop only) */}
                    <TimelineProgressLine />

                    {/* Timeline Entries */}
                    <div className="flex flex-col gap-20 md:gap-28 lg:gap-32 relative z-10">
                        {timelineMilestones.map((milestone, index) => (
                            <TimelineEntry
                                key={milestone.id}
                                milestone={milestone}
                                index={index}
                                isEven={index % 2 === 0}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
