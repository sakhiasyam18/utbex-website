"use client";

/**
 * components/providers/HeroVisibilityContext.tsx
 * ----------------------------------------------------------------------
 * Context Provider untuk mendeteksi apakah pengunjung sudah men-scroll
 * melewati bagian Hero (bagian paling atas website) atau belum.
 * 
 * Cara kerjanya:
 * 1. Menggunakan Intersection Observer API bawaan browser untuk memantau 
 *    elemen dengan id="hero".
 * 2. Ketika Hero hanya terlihat kurang dari 10% di layar, state `pastHero` 
 *    berubah menjadi `true`.
 * 3. State ini kemudian digunakan oleh komponen lain (Navigation, LayoutShift) 
 *    untuk:
 *    - Menampilkan sidebar navigasi (Navigation.tsx).
 *    - Menggeser konten ke kanan untuk memberi ruang sidebar (LayoutShift.tsx).
 * 
 * Mengapa menggunakan satu Observer bersama (shared)?
 * - Sebelumnya, Navigation dan LayoutShift masing-masing punya Observer sendiri,
 *   yang berarti ada 2 Observer berjalan bersamaan untuk memantau elemen yang sama.
 *   Sekarang hanya ada 1 Observer → lebih hemat memori dan CPU.
 */
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
