/**
 * components/section/footer/data/footerNavigation.ts
 * ----------------------------------------------------------------------
 * File data penyimpan tautan navigasi Footer.
 * 
 * Catatan: 
 * Saat ini array `footerNavigation` tidak digunakan secara langsung 
 * (di-comment / dikosongkan) karena navigasi di `FooterColumns.tsx` 
 * sudah di-*hardcode* untuk mempercepat sinkronisasi Scroll-Spy (Anchor Links) 
 * dengan struktur satu-halaman (Single Page).
 */

export interface FooterNavItem {
  id: string;
  label: string;
  href: string;
}

export const footerNavigation: FooterNavItem[] = [
  //   {
  //     id: "nav-home",
  //     label: "Beranda",
  //     href: "#hero",
  //   },
  //   {
  //     id: "nav-about",
  //     label: "Tentang Kami",
  //     href: "#about",
  //   },
  //   {
  //     id: "nav-portfolio",
  //     label: "Jejak Kolaborasi",
  //     href: "#portfolio",
  //   },
  //   {
  //     id: "nav-impact",
  //     label: "Dampak",
  //     href: "#impact",
  //   },
  //   {
  //     id: "nav-contact",
  //     label: "Mari Berdiskusi",
  //     href: "/layanan",
  //   },
];
