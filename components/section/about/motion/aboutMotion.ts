// src/sections/about/motion/aboutMotion.ts
// Calm, natural, elegant motion system with Framer Motion[cite: 5].

import { Variants } from 'framer-motion';

export const motionTokens = {
    durationXS: 0.25,
    durationS: 0.45,
    durationM: 0.70,
    durationL: 1.00,
    stagger: 0.08,
};

export const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: motionTokens.durationM,
            ease: [0.21, 0.47, 0.32, 0.98],
        },
    },
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: motionTokens.stagger,
        },
    },
};

export const imageFadeVariant: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: motionTokens.durationL,
            ease: 'easeOut',
        },
    },
};