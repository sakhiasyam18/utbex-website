// src/sections/impact/motion/impactMotion.ts

export const EASE_STANDARD = [0.16, 1, 0.3, 1] as const;
export const DURATION_BASE = 1.0;
export const COUNTER_DURATION = 2.0;

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
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

export const scaleReveal = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.2,
            ease: EASE_STANDARD,
        },
    },
};