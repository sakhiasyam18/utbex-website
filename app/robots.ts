import { MetadataRoute } from 'next';

/**
 * File robots.ts
 * ----------------------------------------------------------------------
 * Mengatur instruksi untuk web crawler (seperti Googlebot, Bingbot) tentang
 * halaman mana saja yang boleh dan tidak boleh diakses (di-crawl) pada web UTBEX.
 * Output-nya akan menghasilkan file robots.txt di root direktori website.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      // Berlaku untuk semua crawler (*)
      userAgent: '*',
      // Mengizinkan seluruh rute publik untuk di-crawl
      allow: '/',
      // Mencegah akses ke rute privat (jika ada) demi keamanan
      disallow: '/private/',
    },
    // Mengarahkan crawler ke lokasi sitemap resmi untuk mempercepat proses indeks
    sitemap: 'https://utbex.id/sitemap.xml',
  };
}
