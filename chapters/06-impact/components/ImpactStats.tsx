// src/sections/impact/components/ImpactStats.tsx

"use client";

import { motion } from 'framer-motion';
import { impactContent } from '../data/impactContent';
import { staggerContainer, fadeInUp } from '../motion/impactMotion';
import { ImpactCounter } from './ImpactCounter';

export function ImpactStats() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-8 lg:gap-16 border-b border-utbex-dark/10 pb-16 mb-16"
        >
            {impactContent.stats.map((stat) => (
                <motion.div key={stat.id} variants={fadeInUp} className="flex flex-col">
                    <ImpactCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        /* DS 03: Bold (700) for large editorial numbers — never ExtraBold */
                        className="text-5xl md:text-6xl font-bold text-utbex-dark mb-3"
                    />
                    {/* DS 03: Secondary labels — quiet, warm gray, medium weight. Not uppercase-heavy. */}
                    <span className="text-sm md:text-base font-medium text-utbex-text-secondary tracking-wide">
                        {stat.label}
                    </span>
                </motion.div>
            ))}
        </motion.div>
    );
}