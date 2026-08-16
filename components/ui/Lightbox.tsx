"use client";

/**
 * components/ui/Lightbox.tsx
 * ----------------------------------------------------------------------
 * Komponen "Lightbox" — popup layar penuh untuk memperbesar gambar.
 * 
 * Cara kerjanya:
 * 1. Saat pengunjung mengklik gambar (misal: sertifikat di Timeline), 
 *    komponen ini muncul menutupi seluruh layar dengan latar belakang gelap transparan.
 * 2. Gambar ditampilkan dalam ukuran besar di tengah layar.
 * 3. Bisa ditutup dengan klik tombol "X", klik area gelap di luar gambar,
 *    atau menekan tombol Escape pada keyboard.
 * 
 * Teknik yang digunakan:
 * - AnimatePresence (Framer Motion): Transisi masuk/keluar yang halus (fade + scale).
 * - useEffect: Mengunci scroll body saat Lightbox terbuka (mencegah halaman di belakangnya ikut scroll).
 * - stopPropagation: Mencegah klik di gambar menutup popup (hanya klik di area gelap yang menutup).
 * 
 * @param isOpen  - Apakah Lightbox sedang terbuka atau tidak.
 * @param src     - Path/URL gambar yang ditampilkan.
 * @param alt     - Teks alternatif gambar (untuk aksesibilitas & SEO).
 * @param caption - (Opsional) Teks keterangan di bawah gambar.
 * @param onClose - Fungsi callback yang dipanggil saat Lightbox ditutup.
 */

import { useEffect } from "react";
import Image from "next/image";
import { m as motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  isOpen: boolean;
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
}

export function Lightbox({ isOpen, src, alt, caption, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            aria-label="Tutup gambar"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Image Container */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-full min-h-[300px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
                quality={95}
              />
            </div>

            {/* Caption */}
            {(caption || alt) && (
              <div className="mt-4 text-center max-w-2xl px-4">
                <p className="text-sm font-medium text-white/90 leading-relaxed">
                  {caption || alt}
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
