"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: Lenis;
    let rafId: number;
    
    // Defer initialization to avoid blocking main thread on hydration
    const timeoutId = setTimeout(() => {
      lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
        syncTouch: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      
      rafId = requestAnimationFrame(raf);
    }, 100); // 100ms delay is enough to yield to main thread

    return () => {
      clearTimeout(timeoutId);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}
