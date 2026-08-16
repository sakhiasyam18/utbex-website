/**
 * File app/(main)/page.tsx
 * ----------------------------------------------------------------------
 * Ini adalah halaman beranda utama (Home/Landing Page) website UTBEX.
 * Semua seksi utama (Hero, About, Timeline, Portfolio, dst.) dirakit di sini.
 */

// Import Hero secara normal (synchronous) karena ini adalah bagian pertama 
// yang dilihat pengunjung saat website dimuat (Above The Fold).
import Hero from "@/components/section/hero/Hero";
import dynamic from "next/dynamic";

// Komponen-komponen di bawah ini di-import secara dinamis (Lazy Loading)
// untuk meningkatkan kecepatan rendering halaman. Komponen baru akan diunduh
// oleh browser saat pengunjung mulai men-scroll ke bawah (mendekati elemen tersebut).
const About = dynamic(() => import("@/components/section/about/About"));
const Timeline = dynamic(() => import("@/components/section/timeline/Timeline"));
const Portfolio = dynamic(() => import("@/components/section/portfolio/Portfolio"));
const Impact = dynamic(() => import("@/components/section/impact/Impact"));
const Keunggulan = dynamic(() => import("@/components/section/keunggulan/Keunggulan"));
const CTA = dynamic(() => import("@/components/section/cta/CTA"));
const Footer = dynamic(() => import("@/components/section/footer/Footer").then(mod => mod.Footer));

import { EditorialBreather } from "@/components/section/breather/EditorialBreather";
import { GlobalAtmosphere } from "@/components/atmosphere/GlobalAtmosphere";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 
        GlobalAtmosphere: Memberikan efek visual pencahayaan statis (ambient) 
        tipis di latar belakang kanvas utama.
      */}
      <GlobalAtmosphere />
      
      {/* 
        Urutan Komponen Pembentuk Halaman Landing Page
        ----------------------------------------------------------------------
        Catatan untuk Developer (terutama yang terbiasa dengan PHP/Laravel):
        Konsep pemanggilan tag di bawah ini (<Hero />, <About />, dst.) 
        mirip dengan fitur '@include' atau komponen Blade pada Laravel. 
        
        Setiap seksi UI dipisah ke dalam folder masing-masing di dalam 
        direktori 'components/section/' agar kode tetap modular, bersih, 
        dan mudah di-maintenance (tidak menumpuk di satu file).
      */}
      <Hero />
      <About />
      <Keunggulan />
      <Timeline />
      <Portfolio />
      <EditorialBreather />
      <Impact />
      <CTA />
      <Footer />
    </div>
  );
}
