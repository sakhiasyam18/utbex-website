// components/section/timeline/components/TimelineNode.tsx
"use client";

/**
 * TimelineNode Component
 * ----------------------------------------------------------------------
 * Lingkaran titik (node) yang menandai titik tahun di lintasan timeline.
 * 
 * Animasi & Desain:
 * - Titik ini akan membesar (pop-up) ketika di-scroll ke dalam layar (`isInView`).
 * - Terdapat efek "Pulse Ring" yang memancar terus menerus ke luar untuk
 *   menandakan bahwa titik ini aktif/sedang dibaca.
 * - Dilengkapi dengan label "Tahun" bergaya Frosted Glass Pill di atasnya.
 */
import { m as motion } from "framer-motion";

interface TimelineNodeProps {
    year: string;
    isInView: boolean;
}

export default function TimelineNode({ year, isInView }: TimelineNodeProps) {
    return (
        <div className="flex flex-col items-center gap-2.5 relative z-10">
            {/* Year label — frosted glass pill with neumorphism */}
            <motion.div
                className={`px-3.5 py-1.5 rounded-full text-xs font-black tracking-[0.1em] tabular-nums transition-all duration-500 ${
                    isInView
                        ? "bg-utbex-maroon text-white shadow-[0_4px_20px_rgba(139,0,0,0.35),_inset_0_1px_0_rgba(255,255,255,0.15)]"
                        : "bg-white/70 backdrop-blur-sm text-utbex-text-secondary/50 border border-white/80 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8),_2px_2px_8px_rgba(0,0,0,0.06)]"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
                <time dateTime={year}>{year}</time>
            </motion.div>

            {/* Node dot with ambient glow */}
            <div className="relative">
                <motion.div
                    className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-500 ${
                        isInView
                            ? "bg-utbex-maroon border-utbex-maroon shadow-[0_0_20px_rgba(139,0,0,0.4),_0_0_6px_rgba(139,0,0,0.6)]"
                            : "bg-[#F8F6F3] border-utbex-text-secondary/20 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.6),_1px_1px_3px_rgba(0,0,0,0.08)]"
                    }`}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={isInView ? { scale: [0.5, 1.4, 1], opacity: 1 } : { scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
                {/* Pulse ring when in view */}
                {isInView && (
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-utbex-maroon/25"
                        initial={{ scale: 1, opacity: 0.6 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        transition={{ duration: 1.8, ease: "easeOut", repeat: Infinity, repeatDelay: 3 }}
                    />
                )}
                {/* Ambient outer ring — always visible for depth */}
                <div className={`absolute -inset-1.5 rounded-full transition-all duration-500 ${
                    isInView 
                        ? 'bg-utbex-maroon/10 blur-sm' 
                        : 'bg-black/[0.02] blur-[2px]'
                }`} />
            </div>
        </div>
    );
}
