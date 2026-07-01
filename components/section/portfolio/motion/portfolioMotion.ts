// src/sections/portfolio/motion/portfolioMotion.ts

export const EASE_STANDARD = [0.16, 1, 0.3, 1] as const;
export const DURATION_BASE = 0.8;
export const STAGGER_DELAY = 0.15;

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: STAGGER_DELAY,
            delayChildren: 0.1,
        },
    },
};

export const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: DURATION_BASE,
            ease: EASE_STANDARD,
        },
    },
};