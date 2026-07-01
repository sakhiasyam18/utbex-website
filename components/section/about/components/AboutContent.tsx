// src/sections/about/components/AboutContent.tsx
// Headline, Story, Description, CTA, Quote[cite: 4].

'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AboutContentData } from '../types/about';
import { SectionLabel } from './SectionLabel';
import { QuoteBlock } from './QuoteBlock';
import { staggerContainer, fadeUpVariant } from '../motion/aboutMotion';

export const AboutContent = ({ data }: { data: AboutContentData }) => {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center max-w-2xl"
        >
            <SectionLabel text={data.label} />

            <motion.h2
                variants={fadeUpVariant}
                className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900 leading-[1.1] mb-8"
            >
                {data.headline}
            </motion.h2>

            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed font-light">
                {data.story.map((paragraph, index) => (
                    <motion.p key={index} variants={fadeUpVariant}>
                        {paragraph}
                    </motion.p>
                ))}
            </div>

            <QuoteBlock data={data.quote} />

            <motion.div variants={fadeUpVariant} className="mt-12">
                <button className="group flex items-center gap-3 text-neutral-900 font-medium pb-2 border-b border-transparent hover:border-neutral-900 transition-colors duration-300">
                    {data.ctaText}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
            </motion.div>
        </motion.div>
    );
};