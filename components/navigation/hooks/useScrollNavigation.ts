// components/navigation/hooks/useScrollNavigation.ts
"use client";

import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export function useScrollNavigation() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            if (latest > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        });
    }, [scrollY]);

    return { isScrolled };
}
