// components/navigation/motion/navigationHover.ts

import { Variants } from "framer-motion";

export const linkHoverVariants: Variants = {
    idle: {
        y: 0,
        opacity: 0.8,
    },
    hover: {
        y: -1,
        opacity: 1,
        transition: {
            duration: 0.2,
            ease: "easeOut"
        }
    }
};

export const ctaHoverVariants: Variants = {
    idle: {
        opacity: 0.95,
    },
    hover: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
};
