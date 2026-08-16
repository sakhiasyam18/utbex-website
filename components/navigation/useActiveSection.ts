"use client";

/**
 * components/navigation/useActiveSection.ts
 * ----------------------------------------------------------------------
 * Custom React Hook untuk mendeteksi seksi mana yang sedang aktif 
 * berdasarkan posisi scroll pengunjung.
 * 
 * Cara kerjanya:
 * 1. Hook ini memantau event 'scroll' dan mengecek posisi vertikal 
 *    setiap elemen <section> terhadap titik 30% dari atas viewport.
 * 2. Seksi yang "menutupi" titik 30% tersebut dianggap sebagai seksi aktif.
 * 3. Jika pengunjung sudah berada di paling bawah halaman, secara otomatis
 *    seksi terakhir (Kontak) akan ditandai sebagai aktif.
 * 
 * Fitur Anti-Konflik (ignoreScrollRef):
 * - Saat pengunjung mengklik menu navigasi, halaman akan di-scroll otomatis
 *   ke seksi tujuan. Selama proses scroll otomatis ini (1 detik),
 *   deteksi scroll manual dimatikan sementara agar tidak terjadi "perang"
 *   antara klik menu dan deteksi scroll (yang bisa menyebabkan loncatan).
 * 
 * Optimasi Performa:
 * - Menggunakan requestAnimationFrame agar pengecekan hanya dilakukan 
 *   satu kali per frame (60fps), bukan setiap pixel scroll.
 * - Listener scroll menggunakan opsi `{ passive: true }` untuk performa optimal.
 */
import { useEffect, useState, useRef } from "react";
import { navigationLinks } from "./navigationLinks";

export function useActiveSection() {
    const [activeSection, setActiveSectionState] = useState<string | null>(null);
    const ignoreScrollRef = useRef(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const setActiveSection = (id: string) => {
        setActiveSectionState(id);
        ignoreScrollRef.current = true;
        
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            ignoreScrollRef.current = false;
        }, 1000);
    };

    useEffect(() => {
        let ticking = false;

        const updateActiveSection = () => {
            if (ignoreScrollRef.current) {
                ticking = false;
                return;
            }

            let currentActive: string | null = null;
            // The point on the screen that determines which section is "active".
            // 30% from the top of the viewport works well for most layouts.
            const triggerPoint = window.innerHeight * 0.3;

            // Check if user is at the absolute bottom of the page
            const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;

            if (isAtBottom) {
                const lastLink = navigationLinks[navigationLinks.length - 1];
                currentActive = lastLink.href.replace('#', '');
            } else {
                navigationLinks.forEach(link => {
                    const id = link.href.replace('#', '');
                    const element = document.getElementById(id);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        // Check if the trigger point is inside this element's vertical bounds
                        if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
                            currentActive = id;
                        }
                    }
                });
            }

            if (currentActive) {
                setActiveSectionState(currentActive);
            }
            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateActiveSection);
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        
        // Initial check, wait a bit for DOM to settle
        setTimeout(updateActiveSection, 100);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return { activeSection, setActiveSection };
}
