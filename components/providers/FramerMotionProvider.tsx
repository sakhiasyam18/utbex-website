"use client";

/**
 * components/providers/FramerMotionProvider.tsx
 * ----------------------------------------------------------------------
 * Provider global untuk library animasi Framer Motion.
 * 
 * Menggunakan `LazyMotion` dengan mode `domAnimation` untuk mengaktifkan
 * fitur animasi inti Framer Motion secara lazy-loaded (hanya dimuat saat dibutuhkan).
 * Ini mengurangi ukuran bundle JavaScript awal sebesar ~20KB dibanding 
 * menggunakan `<motion.div>` biasa secara langsung.
 * 
 * Catatan: Karena menggunakan LazyMotion, semua komponen anak harus menggunakan
 * `m` (bukan `motion`) saat membuat elemen animasi, contoh:
 *   import { m as motion } from "framer-motion";
 */
import { LazyMotion, domAnimation } from "framer-motion";

export function FramerMotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
