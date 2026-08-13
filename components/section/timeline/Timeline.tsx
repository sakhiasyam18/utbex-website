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
            className="relative w-full bg-[#F8F6F3] py-14 md:py-32 lg:py-40 overflow-hidden"
        >
            {/* ── Ambient Background Glow ── */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                {/* Top-right warm maroon glow */}
                <div className="absolute -top-32 -right-32 w-[700px] h-[700px] bg-utbex-maroon/[0.04] rounded-full blur-[140px]" />
                {/* Bottom-left soft purple glow */}
                <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-purple-900/[0.03] rounded-full blur-[120px]" />
                {/* Center breathable warm wash */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-utbex-maroon/[0.02] rounded-full blur-[180px]" />
                {/* Noise texture for depth */}
                <div className="absolute inset-0 opacity-[0.025] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
                {/* Header Section */}
                <TimelineHeader
                    label={timelineHeader.label}
                    headline={timelineHeader.headline}
                    description={timelineHeader.description}
                />

                {/* Timeline Journey Container */}
                <div className="relative mt-10 md:mt-24 max-w-5xl mx-auto">
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
