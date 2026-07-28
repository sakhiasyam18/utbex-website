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
    const imageY = useTransform(scrollYProgress, [0, 1], [-15, 15]);

    return (
        <div ref={entryRef} className="relative">
            {/* Desktop: 2-col layout alternating sides */}
            <div className={`flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-0 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                {/* Timeline node — centered on desktop via absolute positioning */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1 z-20">
                    <TimelineNode year={milestone.year} isInView={isInView} />
                </div>

                {/* Mobile: node inline */}
                <div className="lg:hidden flex items-center gap-4 mb-4">
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
                    className={`w-full lg:w-[calc(50%-60px)] ${isEven ? 'lg:pr-10' : 'lg:pl-10'}`}
                >
                    {/* Tag label - desktop only */}
                    <span className={`hidden lg:inline-block text-[10px] font-bold tracking-[0.18em] uppercase mb-3 transition-colors duration-300 ${isInView ? 'text-utbex-maroon' : 'text-utbex-text-secondary/50'}`}>
                        {milestone.tag}
                    </span>

                    {/* Title */}
                    <h3 className={`text-xl md:text-2xl lg:text-3xl font-black tracking-tight leading-snug mb-3 transition-colors duration-500 ${isInView ? 'text-utbex-dark' : 'text-utbex-dark/60'}`}>
                        {milestone.title}
                    </h3>

                    {/* Story */}
                    <p className="text-sm md:text-base text-utbex-text-secondary leading-relaxed mb-3">
                        {milestone.story}
                    </p>

                    {/* Evidence links */}
                    {milestone.evidence && milestone.evidence.length > 0 && (
                        <TimelineEvidence evidence={milestone.evidence} />
                    )}
                </motion.div>

                {/* Image side — with glassmorphism frame */}
                {milestone.image && (
                    <motion.div
                        ref={imageRef}
                        variants={imageReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        className={`w-full lg:w-[calc(50%-60px)] mt-2 lg:mt-0`}
                    >
                        {/* Glass container */}
                        <div className="relative group">
                            {/* Glassmorphism outer frame */}
                            <div className="absolute -inset-2 sm:-inset-3 rounded-[1.25rem] bg-white/40 backdrop-blur-sm border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] -z-10 transition-all duration-500 group-hover:shadow-[0_16px_48px_rgba(139,0,0,0.08)] group-hover:border-utbex-maroon/10" />
                            
                            {/* Image */}
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                                <motion.div
                                    className="absolute inset-0"
                                    style={{ y: imageY }}
                                >
                                    <Image
                                        src={milestone.image}
                                        alt={milestone.imageAlt || milestone.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 45vw"
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                        quality={80}
                                    />
                                </motion.div>

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                            </div>

                            {/* Glass caption bar at bottom of image */}
                            <div className="absolute bottom-0 inset-x-0 mx-1 mb-1 px-4 py-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-white/50 shadow-sm z-10 flex items-center gap-3 transition-all duration-300 group-hover:bg-white/85">
                                <div className="w-1.5 h-1.5 rounded-full bg-utbex-maroon flex-shrink-0" />
                                <p className="text-[10px] sm:text-[11px] font-medium text-utbex-dark/80 leading-tight truncate">
                                    {milestone.imageAlt}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
