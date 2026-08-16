"use client";

/**
 * components/providers/LenisProvider.tsx
 * ----------------------------------------------------------------------
 * Provider untuk Smooth Scrolling menggunakan library Lenis.
 * 
 * Apa itu Lenis?
 * Lenis adalah library open-source yang membuat scroll halaman terasa
 * sangat halus dan premium (seperti website Apple atau awwwards.com),
 * menggantikan perilaku scroll "kasar" bawaan browser.
 * 
 * Teknik Optimasi:
 * - Inisialisasi ditunda 100ms (setTimeout) agar tidak memblokir 
 *   proses hydration (rendering awal) Next.js.
 * - `lerp: 0.1` → faktor interpolasi. Semakin kecil nilainya, 
 *   semakin halus/lambat efek scroll-nya. (0.1 = sweet spot).
 * - `syncTouch: false` → dimatikan agar tidak konflik dengan 
 *   momentum scroll bawaan iOS/Safari.
 * - Cleanup yang bersih: saat komponen di-unmount, Lenis dan 
 *   requestAnimationFrame akan dihancurkan untuk mencegah memory leak.
 */
import { useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: Lenis;
    let rafId: number;
    
    // Defer initialization to avoid blocking main thread on hydration
    const timeoutId = setTimeout(() => {
      lenis = new Lenis({
        lerp: 0.1,         // was 0.08 — slightly faster, less work per frame
        smoothWheel: true,
        syncTouch: false,  // disabled — avoid conflicting with iOS native scroll momentum
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
