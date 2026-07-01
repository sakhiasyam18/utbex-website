import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface NavigationBackdropProps {
    isOpen: boolean;
    onClose: () => void;
}

export function NavigationBackdrop({ isOpen, onClose }: NavigationBackdropProps) {
    // Handle escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-utbex-dark/5 backdrop-blur-sm z-40"
                    onClick={onClose}
                    aria-hidden="true"
                />
            )}
        </AnimatePresence>
    );
}
