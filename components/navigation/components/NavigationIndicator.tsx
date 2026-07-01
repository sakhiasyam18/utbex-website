import { motion } from "framer-motion";

export function NavigationIndicator() {
    return (
        <motion.div
            layoutId="active-indicator"
            className="absolute -bottom-1.5 left-1/2 w-1 h-1 bg-utbex-maroon rounded-full -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
        />
    );
}
