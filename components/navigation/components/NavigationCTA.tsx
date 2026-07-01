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
                className="bg-white/40 border-[0.5px] border-utbex-maroon/10 backdrop-blur-md shadow-[0_2px_10px_rgba(139,0,0,0.02)] text-utbex-maroon px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ease-out hover:bg-white/60 hover:shadow-[0_4px_16px_rgba(139,0,0,0.04)]"
            >
                {navigationContent.cta.label}
            </Link>
        </motion.div>
    );
}
