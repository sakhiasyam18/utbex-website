// src/sections/hero/components/FloatingEvidence.tsx

"use client";

import { motion } from 'framer-motion';
import { Award, Megaphone, Lightbulb, TrendingUp, LucideIcon } from 'lucide-react';
import { EvidenceCardData } from '../types/hero';
import { floatAnimation } from '../motion/heroMotion';
import { cx } from '../utils/heroHelpers';

const iconMap: Record<string, LucideIcon> = {
    Award,
    Megaphone,
    Lightbulb,
    TrendingUp,
};

interface FloatingEvidenceProps {
    data: EvidenceCardData;
    index: number;
}

export function FloatingEvidence({ data, index }: FloatingEvidenceProps) {
    const Icon = iconMap[data.iconName] || Award;
    const delay = 0.4 + index * 0.15;

    return (
        <motion.div
            variants={floatAnimation(delay)}
            initial="hidden"
            animate={["visible", "floating"]}
            className={cx(
                "absolute z-30 hidden sm:flex transform-gpu",
                data.positionClass
            )}
        >
            <div className="flex items-center gap-4 bg-white/90 backdrop-blur-2xl p-4 rounded-2xl shadow-xl shadow-neutral-900/5 border border-white/80 cursor-default ring-1 ring-black/5">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-utbex-maroon/10 to-utbex-maroon/5 text-utbex-maroon">
                    <Icon className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                </div>
                <div className="flex flex-col pr-2">
                    <span className="text-sm font-semibold text-utbex-dark tracking-tight">{data.title}</span>
                    <span className="text-xs font-medium text-neutral-500">{data.subtitle}</span>
                </div>
            </div>
        </motion.div>
    );
}