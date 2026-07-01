// src/sections/about/motion/aboutMotion.ts

export const EASE_STANDARD = [0.16, 1, 0.3, 1] as const;
export const DURATION_BASE = 1.0;
export const STAGGER_DELAY = 0.15;

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: STAGGER_DELAY,
            delayChildren: 0.2,
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

export const imageReveal = {
    hidden: { opacity: 0, scale: 0.96, y: 32 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: EASE_STANDARD,
        },
    },
};