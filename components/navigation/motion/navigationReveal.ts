// components/navigation/motion/navigationReveal.ts

import { Variants } from "framer-motion";
import { slowTransition } from "./navigationMotion";

export const navigationRevealVariants: Variants = {
    hidden: {
        opacity: 0,
        y: -10,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            ...slowTransition,
            delay: 0.2,
        }
    }
};
