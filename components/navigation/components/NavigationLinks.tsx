import Link from "next/link";
import { motion } from "framer-motion";
import { navigationLinks } from "../data/navigationLinks";
import { NavigationIndicator } from "./NavigationIndicator";
import { linkHoverVariants } from "../motion/navigationHover";

interface NavigationLinksProps {
    activeSection: string | null;
}

export function NavigationLinks({ activeSection }: NavigationLinksProps) {
    return (
        <div className="hidden md:flex items-center space-x-8 font-medium z-10 relative">
            {navigationLinks.map((link) => {
                const isActive = activeSection === link.id;
                
                return (
                    <motion.div 
                        key={link.id}
                        variants={linkHoverVariants}
                        initial="idle"
                        whileHover="hover"
                        className="relative"
                    >
                        <Link 
                            href={link.href} 
                            className={`text-sm tracking-wide transition-colors duration-300 ${
                                isActive ? 'text-utbex-dark font-semibold' : 'text-utbex-text-secondary hover:text-utbex-dark'
                            }`}
                        >
                            {link.label}
                        </Link>
                        {isActive && <NavigationIndicator />}
                    </motion.div>
                );
            })}
        </div>
    );
}
