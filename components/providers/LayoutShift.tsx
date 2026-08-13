"use client";

// components/providers/LayoutShift.tsx
// Uses shared HeroVisibilityContext — no own IntersectionObserver.
import { usePastHero } from "./HeroVisibilityContext";

export function LayoutShift({ children }: { children: React.ReactNode }) {
  const pastHero = usePastHero();

  return (
    <main className={`flex-grow transition-[padding] duration-[380ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${pastHero ? "xl:pl-80" : ""}`}>
      {children}
    </main>
  );
}
