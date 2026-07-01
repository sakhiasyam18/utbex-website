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
                        className="text-5xl md:text-6xl font-extrabold text-utbex-dark mb-3"
                    />
                    <span className="text-sm md:text-base font-semibold text-utbex-text-secondary uppercase tracking-wider">
                        {stat.label}
                    </span>
                </motion.div>
            ))}
        </motion.div>
    );
}