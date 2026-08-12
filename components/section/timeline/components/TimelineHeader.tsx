// components/section/timeline/components/TimelineHeader.tsx
"use client";

import { m as motion, Variants } from "framer-motion";
const headerReveal: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};
interface TimelineHeaderProps {
    label: string;
    headline: string;
    description: string;
}

export default function TimelineHeader({ label, headline, description }: TimelineHeaderProps) {
    return (
        <motion.header
            variants={headerReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16 md:mb-24 max-w-3xl mx-auto"
        >
            <span className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase text-utbex-maroon/70 mb-5">
                — {label}
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-utbex-dark tracking-tighter leading-[0.95] mb-5">
                {headline}
            </h2>
            <p className="text-base sm:text-lg text-utbex-text-secondary max-w-xl mx-auto leading-relaxed">
                {description}
            </p>

            {/* Decorative divider */}
            <div className="mt-8 flex items-center justify-center gap-3" aria-hidden="true">
                <div className="w-8 h-px bg-utbex-maroon/20" />
                <div className="w-2 h-2 rounded-full bg-utbex-maroon/30" />
                <div className="w-8 h-px bg-utbex-maroon/20" />
            </div>
        </motion.header>
    );
}
