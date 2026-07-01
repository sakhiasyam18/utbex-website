// components/navigation/hooks/useActiveSection.ts
"use client";

import { useEffect, useState } from "react";
import { navigationLinks } from "../data/navigationLinks";

export function useActiveSection() {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const observers = new Map<string, IntersectionObserverEntry>();

        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                observers.set(entry.target.id, entry);
            });

            let currentActive = null;
            let maxVisibleRatio = 0;

            Array.from(observers.values()).forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > maxVisibleRatio) {
                    maxVisibleRatio = entry.intersectionRatio;
                    currentActive = entry.target.id;
                }
            });

            if (currentActive) {
                setActiveSection(currentActive);
            }
        };

        const observer = new IntersectionObserver(callback, {
            root: null,
            rootMargin: "-20% 0px -40% 0px",
            threshold: [0, 0.25, 0.5, 0.75, 1.0]
        });

        navigationLinks.forEach(link => {
            const id = link.href.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    return { activeSection };
}
