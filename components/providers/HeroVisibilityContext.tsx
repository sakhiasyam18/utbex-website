"use client";

// components/providers/HeroVisibilityContext.tsx
// Single IntersectionObserver shared by Navigation and LayoutShift.
// Previously both components had their own observer — now only ONE runs.

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

const HeroVisibilityContext = createContext(false);

export function HeroVisibilityProvider({ children }: { children: ReactNode }) {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show nav when hero is < 10% visible
        setPastHero(!entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  return (
    <HeroVisibilityContext.Provider value={pastHero}>
      {children}
    </HeroVisibilityContext.Provider>
  );
}

export function usePastHero() {
  return useContext(HeroVisibilityContext);
}
