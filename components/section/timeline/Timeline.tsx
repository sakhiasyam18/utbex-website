// components/section/timeline/Timeline.tsx
"use client";

import { useRef } from "react";
import { timelineMilestones, timelineHeader } from "./data/timelineData";
import TimelineHeader from "./components/TimelineHeader";
import TimelineEntry from "./components/TimelineEntry";

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
                    {/* Timeline Entries - No gaps, so the SVG lines connect seamlessly */}
                    <div className="flex flex-col relative z-10">
                        {timelineMilestones.map((milestone, index) => (
                            <TimelineEntry
                                key={milestone.id}
                                milestone={milestone}
                                index={index}
                                isEven={index % 2 === 0}
                                isLast={index === timelineMilestones.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
