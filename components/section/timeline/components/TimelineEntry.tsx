// components/section/timeline/components/TimelineEntry.tsx
"use client";

import { useRef } from "react";
import { m as motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { TimelineMilestone } from "../types/timeline";
import { entryReveal, imageReveal } from "../motion/timelineMotion";
import TimelineNode from "./TimelineNode";
import TimelineEvidence from "./TimelineEvidence";

interface TimelineEntryProps {
    milestone: TimelineMilestone;
    index: number;
    isEven: boolean;
}

export default function TimelineEntry({ milestone, index, isEven }: TimelineEntryProps) {
    const entryRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(entryRef, { once: false, margin: "-30% 0px -30% 0px" });

    // Parallax on images
    const { scrollYProgress } = useScroll({
        target: imageRef,
        offset: ["start end", "end start"],
    });
    const imageY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

    return (
        <div ref={entryRef} className="relative">
            {/* Desktop: 2-col layout alternating sides */}
            <div className={`flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-0 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                {/* Timeline node — centered on desktop via absolute positioning */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-2 z-20">
                    <TimelineNode year={milestone.year} isInView={isInView} />
                </div>

                {/* Mobile: node inline */}
                <div className="lg:hidden flex items-center gap-4 mb-2">
                    <TimelineNode year={milestone.year} isInView={isInView} />
                    <span className={`text-[10px] font-bold tracking-[0.18em] uppercase transition-colors duration-300 ${isInView ? 'text-utbex-maroon' : 'text-utbex-text-secondary/50'}`}>
                        {milestone.tag}
                    </span>
                </div>

                {/* Content side */}
                <motion.div
                    variants={entryReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className={`w-full lg:w-[calc(50%-60px)] ${isEven ? 'lg:pr-8' : 'lg:pl-8'} ${isEven ? '' : 'lg:text-left'}`}
                >
                    <span className={`hidden lg:inline-block text-[10px] font-bold tracking-[0.18em] uppercase mb-3 transition-colors duration-300 ${isInView ? 'text-utbex-maroon' : 'text-utbex-text-secondary/50'}`}>
                        {milestone.tag}
                    </span>
                    <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold tracking-tight leading-snug mb-3 transition-colors duration-500 ${isInView ? 'text-utbex-dark' : 'text-utbex-dark/60'}`}>
                        {milestone.title}
                    </h3>
                    <p className="text-sm md:text-base text-utbex-text-secondary leading-relaxed mb-2">
                        {milestone.story}
                    </p>

                    {/* Evidence links */}
                    {milestone.evidence && milestone.evidence.length > 0 && (
                        <TimelineEvidence evidence={milestone.evidence} />
                    )}
                </motion.div>

                {/* Image side */}
                {milestone.image && (
                    <motion.div
                        ref={imageRef}
                        variants={imageReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        className={`w-full lg:w-[calc(50%-60px)] mt-4 lg:mt-0 ${isEven ? '' : ''}`}
                    >
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)] group">
                            <motion.div
                                className="absolute inset-0"
                                style={{ y: imageY }}
                            >
                                <Image
                                    src={milestone.image}
                                    alt={milestone.imageAlt || milestone.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 45vw"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                                    quality={80}
                                />
                            </motion.div>
                            {/* Subtle gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
