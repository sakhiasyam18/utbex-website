"use client";

/**
 * components/providers/LayoutShift.tsx
 * ----------------------------------------------------------------------
 * Komponen pembungkus <main> yang secara dinamis menggeser konten ke kanan
 * saat sidebar navigasi muncul (khusus pada layar desktop XL ke atas).
 * 
 * Cara kerjanya:
 * - Membaca state `pastHero` dari HeroVisibilityContext.
 * - Jika pengunjung sudah melewati bagian Hero → tambahkan padding-left 320px (xl:pl-80)
 *   agar konten tidak tertimpa oleh sidebar navigasi yang muncul di sisi kiri.
 * - Transisi padding menggunakan cubic-bezier agar perpindahannya terasa halus.
 */
import { usePastHero } from "./HeroVisibilityContext";

export function LayoutShift({ children }: { children: React.ReactNode }) {
  const pastHero = usePastHero();

  return (
    <main className={`flex-grow transition-[padding] duration-[380ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${pastHero ? "xl:pl-80" : ""}`}>
      {children}
    </main>
  );
}
