// src/sections/about/components/QuoteBlock.tsx
// Single quote, minimal, elegant[cite: 4, 6].

'use client';

import { motion } from 'framer-motion';
import { fadeUpVariant } from '../motion/aboutMotion';
import { QuoteData } from '../types/about';

export const QuoteBlock = ({ data }: { data: QuoteData }) => {
    return (
        <motion.blockquote
            variants={fadeUpVariant}
            className="mt-12 border-l-2 border-neutral-300 pl-6"
        >
            <p className="text-xl font-medium leading-relaxed text-neutral-800 italic">
                "{data.text}"
            </p>
            <footer className="mt-4 text-sm font-medium text-neutral-500">
                &mdash; {data.source}
            </footer>
        </motion.blockquote>
    );
};