// components/section/timeline/components/TimelineHeader.tsx
"use client";

import { m as motion } from "framer-motion";
import { headerReveal } from "../motion/timelineMotion";

interface TimelineHeaderProps {
    label: string;
    headline: string;
    description: string;
}

export default function TimelineHeader({ label, headline, description }: TimelineHeaderProps) {
    return (
        <motion.div
            variants={headerReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16 md:mb-24"
        >
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-utbex-maroon/70 mb-4 block">
                — {label}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-utbex-dark tracking-tight leading-[1.15] mb-4">
                {headline}
            </h2>
            <p className="text-base sm:text-lg text-utbex-text-secondary max-w-xl mx-auto leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}
