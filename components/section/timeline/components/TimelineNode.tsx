// components/section/timeline/components/TimelineNode.tsx
"use client";

import { m as motion } from "framer-motion";

interface TimelineNodeProps {
    year: string;
    isInView: boolean;
}

export default function TimelineNode({ year, isInView }: TimelineNodeProps) {
    return (
        <div className="flex flex-col items-center gap-2.5 relative z-10">
            {/* Year label — glassmorphism pill */}
            <motion.div
                className={`px-3 py-1 rounded-full text-xs font-black tracking-[0.1em] tabular-nums transition-all duration-500 ${
                    isInView
                        ? "bg-utbex-maroon text-white shadow-[0_4px_16px_rgba(139,0,0,0.3)]"
                        : "bg-white/80 backdrop-blur-sm text-utbex-text-secondary/50 border border-black/[0.06] shadow-sm"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
                {year}
            </motion.div>

            {/* Node dot */}
            <div className="relative">
                <motion.div
                    className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-500 ${
                        isInView
                            ? "bg-utbex-maroon border-utbex-maroon shadow-[0_0_16px_rgba(139,0,0,0.35)]"
                            : "bg-utbex-canvas border-utbex-text-secondary/20"
                    }`}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={isInView ? { scale: [0.5, 1.4, 1], opacity: 1 } : { scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
                {/* Pulse ring when in view */}
                {isInView && (
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-utbex-maroon/30"
                        initial={{ scale: 1, opacity: 0.6 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        transition={{ duration: 1.8, ease: "easeOut", repeat: Infinity, repeatDelay: 3 }}
                    />
                )}
            </div>
        </div>
    );
}
