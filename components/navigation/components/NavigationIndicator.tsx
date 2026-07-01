import { motion } from "framer-motion";

export function NavigationIndicator() {
    return (
        <motion.div
            layoutId="active-indicator"
            className="absolute -bottom-2 left-1/2 w-[3px] h-[3px] bg-utbex-maroon/70 rounded-full -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", ease: [0.25, 0.1, 0.25, 1], duration: 0.5 }}
        />
    );
}
