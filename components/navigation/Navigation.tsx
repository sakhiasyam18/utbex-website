"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollNavigation } from "./hooks/useScrollNavigation";
import { useActiveSection } from "./hooks/useActiveSection";
import { navigationRevealVariants } from "./motion/navigationReveal";
import { NavigationLogo } from "./components/NavigationLogo";
import { NavigationLinks } from "./components/NavigationLinks";
import { NavigationCTA } from "./components/NavigationCTA";
import { NavigationGlass } from "./components/NavigationGlass";
import { NavigationDrawer } from "./components/NavigationDrawer";
import { NavigationBackdrop } from "./components/NavigationBackdrop";

export function Navigation() {
    const { isScrolled } = useScrollNavigation();
    const { activeSection } = useActiveSection();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            <motion.header
                variants={navigationRevealVariants}
                initial="hidden"
                animate="visible"
                className="fixed top-4 md:top-6 lg:top-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
            >
                <div className="relative w-full max-w-[1280px] pointer-events-auto">
                    {/* Glass Surface */}
                    <NavigationGlass isScrolled={isScrolled} />

                    {/* Navigation Content */}
                    <div className="relative px-6 py-3 md:px-8 md:py-4 flex items-center justify-between">
                        <NavigationLogo />
                        <NavigationLinks activeSection={activeSection} />
                        <div className="flex items-center space-x-4">
                            <NavigationCTA />
                            
                            {/* Mobile Hamburger Button */}
                            <button
                                onClick={() => setIsDrawerOpen(true)}
                                className="md:hidden p-2 -mr-2 text-utbex-text-secondary hover:text-utbex-dark transition-colors z-10 relative"
                                aria-label="Open menu"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="4" y1="8" x2="20" y2="8"></line>
                                    <line x1="4" y1="16" x2="20" y2="16"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Drawer */}
            <NavigationBackdrop isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
            <NavigationDrawer 
                isOpen={isDrawerOpen} 
                onClose={() => setIsDrawerOpen(false)} 
                activeSection={activeSection} 
            />
        </>
    );
}
