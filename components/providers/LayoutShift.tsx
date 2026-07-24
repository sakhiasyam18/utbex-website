"use client";

// components/providers/LayoutShift.tsx
// Uses shared HeroVisibilityContext — no own IntersectionObserver.
import { usePastHero } from "./HeroVisibilityContext";

export function LayoutShift({ children }: { children: React.ReactNode }) {
  const pastHero = usePastHero();

  return (
    <main
      className={`flex-grow transition-[padding] duration-300 ease-in-out ${
        pastHero ? "lg:pl-72 xl:pl-80 pt-16 lg:pt-0" : "pt-0"
      }`}
    >
      {children}
    </main>
  );
}
