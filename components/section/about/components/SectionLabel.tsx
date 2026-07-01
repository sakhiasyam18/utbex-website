// src/sections/about/components/SectionLabel.tsx
// Small, uppercase, brand accent, wide letter spacing[cite: 3, 6].

'use client';

import { motion } from 'framer-motion';
import { fadeUpVariant } from '../motion/aboutMotion';

interface SectionLabelProps {
    text: string;
}

export const SectionLabel = ({ text }: SectionLabelProps) => {
    return (
        <motion.div variants={fadeUpVariant} className="mb-6">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                {text}
            </span>
        </motion.div>
    );
};