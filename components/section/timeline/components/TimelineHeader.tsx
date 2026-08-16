// components/section/timeline/components/TimelineHeader.tsx
"use client";

/**
 * TimelineHeader Component
 * ----------------------------------------------------------------------
 * Menampilkan judul (headline) dan deskripsi pembuka untuk seksi Timeline.
 * 
 * Ornamen Visual:
 * - Label dengan gaya pil (pill shape) glassmorphism.
 * - Pembatas (divider) di bawah deskripsi dengan animasi titik "pulse" (berdenyut) 
 *   di tengahnya untuk menambah kesan dinamis dan hidup.
 */
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
            {/* Glassmorphism label pill */}
            <span className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase text-utbex-maroon/80 mb-6 px-5 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-utbex-maroon/10 shadow-[0_2px_12px_rgba(139,0,0,0.06)]">
                — {label}
            </span>

            {/* Headline with subtle gradient */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] mb-6 bg-gradient-to-br from-utbex-dark via-utbex-dark to-utbex-maroon/80 bg-clip-text text-transparent">
                {headline}
            </h2>

            {/* Description in a soft glass card */}
            <div className="inline-block bg-white/40 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/60 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.6),_0_4px_16px_rgba(0,0,0,0.04)]">
                <p className="text-base sm:text-lg text-utbex-text-secondary max-w-xl mx-auto leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Decorative divider with pulse */}
            <div className="mt-8 flex items-center justify-center gap-3" aria-hidden="true">
                <div className="w-10 h-px bg-gradient-to-r from-transparent to-utbex-maroon/25" />
                <motion.div
                    className="w-2.5 h-2.5 rounded-full bg-utbex-maroon/30 shadow-[0_0_8px_rgba(139,0,0,0.2)]"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="w-10 h-px bg-gradient-to-l from-transparent to-utbex-maroon/25" />
            </div>
        </motion.header>
    );
}
