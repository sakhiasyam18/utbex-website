// components/section/timeline/components/TimelineNode.tsx
"use client";

import { m as motion } from "framer-motion";

interface TimelineNodeProps {
    year: string;
    isInView: boolean;
}

export default function TimelineNode({ year, isInView }: TimelineNodeProps) {
    return (
        <div className="flex flex-col items-center gap-2 relative z-10">
            {/* Year label */}
            <span
                className={`text-xs sm:text-sm font-black tracking-[0.15em] tabular-nums transition-colors duration-500 ${
                    isInView ? "text-utbex-maroon" : "text-utbex-text-secondary/40"
                }`}
            >
                {year}
            </span>

            {/* Node dot with ring */}
            <div className="relative">
                <motion.div
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                        isInView
                            ? "bg-utbex-maroon border-utbex-maroon shadow-[0_0_16px_rgba(139,0,0,0.35)]"
                            : "bg-utbex-canvas border-utbex-text-secondary/20"
                    }`}
                    animate={isInView ? { scale: [1, 1.3, 1] } : {}}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
                {/* Pulse ring when in view */}
                {isInView && (
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-utbex-maroon/30"
                        initial={{ scale: 1, opacity: 0.6 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut", repeat: Infinity, repeatDelay: 2 }}
                    />
                )}
            </div>
        </div>
    );
}
