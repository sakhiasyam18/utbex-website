import Link from "next/link";
import { motion } from "framer-motion";
import { navigationContent } from "../data/navigationContent";
import { ctaHoverVariants } from "../motion/navigationHover";

export function NavigationCTA() {
    return (
        <motion.div
            variants={ctaHoverVariants}
            initial="idle"
            whileHover="hover"
            className="hidden md:block z-10 relative"
        >
            <Link 
                href={navigationContent.cta.href}
                className="bg-white/60 border border-utbex-maroon/10 text-utbex-maroon px-6 py-2.5 rounded-full text-sm font-medium transition-colors hover:bg-white/90"
            >
                {navigationContent.cta.label}
            </Link>
        </motion.div>
    );
}
