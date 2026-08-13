// components/section/timeline/components/TimelineEntry.tsx
"use client";

import { useRef, useState } from "react";
import { m as motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import { TimelineMilestone } from "../data/timelineData";
import TimelineNode from "./TimelineNode";
import TimelineEvidence from "./TimelineEvidence";
import { Lightbox } from "@/components/ui/Lightbox";

const entryReveal: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};
const imageReveal: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
};


interface TimelineEntryProps {
    milestone: TimelineMilestone;
    index: number;
    isEven: boolean;
    isLast?: boolean;
}

export default function TimelineEntry({ milestone, index, isEven, isLast = false }: TimelineEntryProps) {
    const entryRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    // once: true stops observing after first intersection — no ongoing IntersectionObserver cost
    const isInView = useInView(entryRef, { once: true, margin: "-20% 0px -20% 0px" });

    // Generate precise SVG path to weave exactly between nodes
    const isFirst = index === 0;
    let pathD = "";
    if (isFirst) {
        pathD = "M 50 0 L 50 50";
    } else {
        const startX = isEven ? 20 : 80;
        pathD = `M ${startX} 0 C ${startX} 25, 50 25, 50 50`;
    }

    if (isLast) {
        pathD += " L 50 100";
    } else {
        const endX = isEven ? 80 : 20;
        pathD += ` C 50 75, ${endX} 75, ${endX} 100`;
    }

    return (
        <article ref={entryRef} className="relative py-8 md:py-14 lg:py-16">
            {/* Mobile: Vertical connecting line (left side) */}
            <div className="lg:hidden absolute left-[18px] top-0 bottom-0 pointer-events-none" style={{ zIndex: 0 }}>
                {/* Faint track line */}
                <div className="absolute inset-0 w-[2px] bg-black/[0.08]" />
                {/* Animated maroon fill */}
                <motion.div 
                    className="absolute top-0 left-0 w-[2px] bg-utbex-maroon origin-top"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                />
            </div>

            {/* Spiral Curved Line Background (Desktop only) */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none" style={{ zIndex: -5 }}>
                {/* Faint track */}
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                    <path 
                        d={pathD}
                        stroke="rgba(0,0,0,0.06)"
                        strokeWidth="8" 
                        fill="none" 
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>

                {/* Animated Red Line using clipPath to avoid non-uniform scaling bugs */}
                <motion.svg 
                    viewBox="0 0 100 100" 
                    preserveAspectRatio="none" 
                    className="absolute inset-0 w-full h-full"
                    initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
                    whileInView={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
                    viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    <path 
                        d={pathD}
                        stroke="#8B0000"
                        strokeWidth="8" 
                        fill="none" 
                        vectorEffect="non-scaling-stroke"
                    />
                </motion.svg>
            </div>

            {/* Desktop: 2-col layout alternating sides */}
            <div className={`flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-0 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                {/* Timeline node — centered on desktop via absolute positioning */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-40">
                    <TimelineNode year={milestone.year} isInView={isInView} />
                </div>

                {/* Mobile: node inline with connecting line */}
                <div className="lg:hidden flex items-center gap-4 mb-3 pl-1 relative z-10">
                    <TimelineNode year={milestone.year} isInView={isInView} />
                    <span className={`text-[10px] font-bold tracking-[0.18em] uppercase transition-colors duration-300 ${isInView ? 'text-utbex-maroon' : 'text-utbex-text-secondary/50'}`}>
                        {milestone.tag}
                    </span>
                </div>

                {/* ── Content side — Glassmorphism + Neumorphism Card ── */}
                <motion.div
                    variants={entryReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className={`w-full pl-10 lg:pl-0 lg:w-[calc(50%-60px)] ${isEven ? 'lg:pr-10' : 'lg:pl-10'}`}
                >
                    <div className="relative bg-white/50 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/70 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.8),_0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[inset_2px_2px_4px_rgba(255,255,255,0.8),_0_12px_40px_rgba(139,0,0,0.08)] hover:border-utbex-maroon/10 group/card">
                        {/* Tag label — glassmorphism micro-pill */}
                        <span className={`hidden lg:inline-block text-[10px] font-bold tracking-[0.18em] uppercase mb-4 px-3 py-1 rounded-full transition-all duration-500 ${
                            isInView 
                                ? 'bg-utbex-maroon/10 text-utbex-maroon border border-utbex-maroon/15' 
                                : 'bg-white/60 text-utbex-text-secondary/50 border border-black/[0.04]'
                        }`}>
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

                        {/* Subtle ambient glow inside card on hover */}
                        <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-utbex-maroon/[0.03] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />
                    </div>
                </motion.div>

                {/* ── Image side — Glassmorphism frame with Neumorphism ── */}
                {milestone.image && (
                    <motion.figure
                        ref={imageRef}
                        variants={imageReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        className={`w-full pl-10 lg:pl-0 lg:w-[calc(50%-60px)] mt-2 lg:mt-0 m-0`}
                    >
                        {/* Glass container */}
                        <div 
                            className="relative group cursor-pointer"
                            onClick={() => setIsLightboxOpen(true)}
                        >
                            {/* Glassmorphism + Neumorphism outer frame */}
                            <div className="absolute -inset-2 sm:-inset-3 rounded-[1.5rem] bg-white/50 backdrop-blur-sm border border-white/70 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.7),_0_8px_32px_rgba(0,0,0,0.06)] -z-10 transition-all duration-500 group-hover:shadow-[inset_2px_2px_4px_rgba(255,255,255,0.7),_0_16px_48px_rgba(139,0,0,0.1)] group-hover:border-utbex-maroon/15" />
                            
                            {/* Image */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden">
                                <div className="absolute inset-0">
                                    <Image
                                        src={milestone.image}
                                        alt={milestone.imageAlt || milestone.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 45vw"
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                        quality={80}
                                    />
                                </div>

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                                {/* Maroon ambient glow on hover */}
                                <div className="absolute inset-0 bg-utbex-maroon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            </div>

                            {/* Glass caption bar at bottom of image */}
                            <figcaption className="absolute bottom-0 inset-x-0 mx-1 mb-1 px-4 py-2.5 rounded-xl bg-white/60 backdrop-blur-xl border border-white/60 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.6),_0_4px_12px_rgba(0,0,0,0.06)] z-10 flex items-center gap-3 transition-all duration-300 group-hover:bg-white/80 group-hover:shadow-[inset_1px_1px_2px_rgba(255,255,255,0.6),_0_6px_20px_rgba(139,0,0,0.08)]">
                                <div className="w-1.5 h-1.5 rounded-full bg-utbex-maroon shadow-[0_0_6px_rgba(139,0,0,0.3)] flex-shrink-0" aria-hidden="true" />
                                <p className="text-[10px] sm:text-[11px] font-medium text-utbex-dark/80 leading-tight truncate">
                                    {milestone.imageAlt}
                                </p>
                            </figcaption>
                        </div>
                    </motion.figure>
                )}
            </div>

            {milestone.image && (
                <Lightbox
                    isOpen={isLightboxOpen}
                    src={milestone.image}
                    alt={milestone.imageAlt || milestone.title}
                    caption={milestone.title}
                    onClose={() => setIsLightboxOpen(false)}
                />
            )}
        </article>
    );
}
