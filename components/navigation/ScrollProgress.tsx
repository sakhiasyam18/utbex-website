"use client";

import { useActiveSection } from "./useActiveSection";
import { navigationLinks } from "./navigationLinks";
import { m as motion } from "framer-motion";
import { usePastHero } from "@/components/providers/HeroVisibilityContext";

export function ScrollProgress() {
    const { activeSection, setActiveSection } = useActiveSection();
    const pastHero = usePastHero();

    if (!pastHero) return null;

    return (
        <aside className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-4 bg-white/40 backdrop-blur-md p-4 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-white/50 transition-opacity duration-500">
            {navigationLinks.map((link, index) => {
                const isActive = activeSection === link.id || (!activeSection && index === 0);
                const numberStr = (index + 1).toString().padStart(2, '0');

                return (
                    <button
                        key={link.id}
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveSection(link.id);
                            const el = document.getElementById(link.id);
                            if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="group flex items-center gap-3 w-full transition-all duration-300"
                        aria-label={`Go to ${link.label}`}
                    >
                        {/* Number */}
                        <span className={`text-[10px] font-bold tracking-wider transition-colors duration-300 ${
                            isActive ? 'text-utbex-maroon' : 'text-utbex-text-secondary/50 group-hover:text-utbex-dark/70'
                        }`}>
                            {numberStr}
                        </span>

                        {/* Label */}
                        <span className={`text-[10px] uppercase tracking-[0.2em] w-0 overflow-hidden opacity-0 group-hover:w-[120px] group-hover:opacity-100 transition-all duration-300 whitespace-nowrap text-left ${
                            isActive ? 'text-utbex-maroon font-bold' : 'text-utbex-dark/80 font-semibold'
                        }`}>
                            {link.label}
                        </span>

                        {/* Dot */}
                        <span className="relative flex items-center justify-center w-4 h-4 shrink-0">
                            <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                                isActive ? 'bg-utbex-maroon' : 'bg-transparent border border-utbex-text-secondary/40 group-hover:border-utbex-dark/60'
                            }`} />
                            {isActive && (
                                <motion.span
                                    layoutId="activeDotOutline"
                                    className="absolute inset-0 rounded-full border border-utbex-maroon/30"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </span>
                    </button>
                );
            })}
        </aside>
    );
}
