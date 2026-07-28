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
                className={`text-[10px] font-black tracking-[0.2em] uppercase transition-colors duration-500 ${
                    isInView ? "text-utbex-maroon" : "text-utbex-text-secondary/40"
                }`}
            >
                {year}
            </span>

            {/* Node dot */}
            <motion.div
                className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                    isInView
                        ? "bg-utbex-maroon border-utbex-maroon shadow-[0_0_12px_rgba(139,0,0,0.3)]"
                        : "bg-utbex-canvas border-utbex-text-secondary/20"
                }`}
                animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
        </div>
    );
}
