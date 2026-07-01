import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { navigationLinks } from "../data/navigationLinks";
import { navigationContent } from "../data/navigationContent";
import { NavigationLogo } from "./NavigationLogo";

interface NavigationDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    activeSection: string | null;
}

export function NavigationDrawer({ isOpen, onClose, activeSection }: NavigationDrawerProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: "100%", opacity: 0.8 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0.8 }}
                    transition={{ type: "tween", ease: [0.25, 0.1, 0.25, 1], duration: 0.4 }}
                    className="fixed top-4 right-4 bottom-4 w-72 bg-white/95 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-3xl p-8 flex flex-col z-50 overflow-hidden"
                >
                    <div className="flex justify-between items-center mb-12">
                        <NavigationLogo />
                        <button 
                            onClick={onClose}
                            className="p-2 -mr-2 text-utbex-text-secondary hover:text-utbex-dark transition-colors"
                            aria-label="Close menu"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-col space-y-6 mb-auto">
                        {navigationLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <Link 
                                    key={link.id}
                                    href={link.href}
                                    onClick={onClose}
                                    className={`text-lg transition-colors ${
                                        isActive ? 'text-utbex-dark font-semibold' : 'text-utbex-text-secondary hover:text-utbex-dark'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="mt-8">
                        <Link 
                            href={navigationContent.cta.href}
                            onClick={onClose}
                            className="block w-full text-center bg-utbex-maroon/5 border border-utbex-maroon/20 text-utbex-maroon py-3 rounded-full font-medium hover:bg-utbex-maroon/10 transition-colors"
                        >
                            {navigationContent.cta.label}
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
