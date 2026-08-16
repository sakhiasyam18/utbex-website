/**
 * components/section/portfolio/components/PortfolioModal.tsx
 * ----------------------------------------------------------------------
 * Komponen modal (pop-up) untuk menampilkan detail lengkap dari sebuah proyek.
 * 
 * Animasi Keluar-Masuk (AnimatePresence):
 * - Menggunakan `<AnimatePresence>` dari Framer Motion agar modal bisa 
 *   di-animasikan saat "dihapus" (unmounted) dari DOM (properti `exit`).
 * 
 * Aksesibilitas (A11y):
 * - Menggunakan atribut `role="dialog"` dan `aria-modal="true"`.
 * - Latar belakang abu-abu transparan berfungsi ganda: menonjolkan modal
 *   dan jika diklik akan menutup modal (`setSelectedProject(null)`).
 * - Mencegah klik tembus menggunakan `e.stopPropagation()` pada container utama modal.
 */
"use client";

import { m as motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ProjectData, categoryColor } from "../data/portfolioData";

interface PortfolioModalProps {
  selectedProject: ProjectData | null;
  setSelectedProject: (project: ProjectData | null) => void;
}

export function PortfolioModal({ selectedProject, setSelectedProject }: PortfolioModalProps) {
  return (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-w-2xl w-full bg-[#060006] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-colors"
              aria-label="Tutup"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>

            {/* Image Area */}
            <div className="relative w-full h-[35vh] sm:h-[45vh] bg-white/5">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060006] to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-6 flex items-center gap-3">
                <span className={`text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full border backdrop-blur-md ${categoryColor[selectedProject.categoryTag] || "bg-white/10 text-white/70 border-white/10"}`}>
                  {selectedProject.categoryTag}
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 overflow-y-auto scrollbar-hide">
              <h3 id="modal-title" className="text-2xl sm:text-3xl font-black text-white leading-tight mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-white/70 leading-relaxed mb-8 text-sm sm:text-base">
                {selectedProject.story}
              </p>

              {/* Meta details */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div>
                  <p className="text-[10px] font-bold text-white/40 mb-1 tracking-widest uppercase">Lokasi & Tahun</p>
                  <p className="text-sm text-white/90 font-bold">{selectedProject.location} · {selectedProject.year}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/40 mb-1 tracking-widest uppercase">Dampak / Bukti</p>
                  <p className="text-sm text-white/90 font-bold">{selectedProject.evidence}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
