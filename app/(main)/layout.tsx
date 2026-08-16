// app/(main)/layout.tsx
import { Navigation } from "@/components/navigation";
import { HeroVisibilityProvider } from "@/components/providers/HeroVisibilityContext";
import { LayoutShift } from "@/components/providers/LayoutShift";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { FramerMotionProvider } from "@/components/providers/FramerMotionProvider";
import { ScrollProgress } from "@/components/navigation/ScrollProgress";

/**
 * File app/(main)/layout.tsx
 * ----------------------------------------------------------------------
 * Layout tingkat komponen untuk rute utama (Landing Page UTBEX).
 * Layout ini membungkus seluruh konten dengan serangkaian Provider (konteks)
 * yang mengatur efek visual, scroll halus, serta sistem navigasi.
 */
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* 
        LenisProvider: Menangani logic 'smooth scrolling' secara global 
        menggunakan library Lenis agar scroll terasa premium. 
      */}
      <LenisProvider>
        
        {/* 
          HeroVisibilityProvider: Menyediakan state konteks (Context) untuk mengetahui
          apakah bagian Hero (paling atas) sedang terlihat atau tidak.
          Sangat berguna bagi komponen Navigasi untuk mengganti warnanya saat di-scroll.
        */}
        <HeroVisibilityProvider>
          
          {/* 
            FramerMotionProvider: Memastikan animasi dari Framer Motion 
            berjalan optimal dalam ekosistem Next.js.
          */}
          <FramerMotionProvider>
            
            {/* Navigasi Utama (Side Menu / Top Bar) */}
            <Navigation />
            
            {/* Progress Bar (indikator baca/scroll) di pojok atau tepi atas */}
            <ScrollProgress />
            
            {/* 
              LayoutShift: Pembungkus akhir komponen utama (children) 
              agar posisinya responsif terhadap ruang navigasi.
            */}
            <LayoutShift>{children}</LayoutShift>
            
          </FramerMotionProvider>
        </HeroVisibilityProvider>
      </LenisProvider>
    </>
  );
}
