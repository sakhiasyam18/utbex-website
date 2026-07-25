"use client";

// components/providers/LayoutShift.tsx
// Uses shared HeroVisibilityContext — no own IntersectionObserver.
import { usePastHero } from "./HeroVisibilityContext";

export function LayoutShift({ children }: { children: React.ReactNode }) {
  const pastHero = usePastHero();

  return (
    <main className="flex-grow">
      {children}
    </main>
  );
}
