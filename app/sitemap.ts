import { MetadataRoute } from 'next';

/**
 * File sitemap.ts
 * ----------------------------------------------------------------------
 * Ini adalah file yang secara otomatis akan di-generate (dibangun) oleh Next.js 
 * menjadi format XML (sitemap.xml). Sitemap ini berfungsi sebagai "peta" bagi 
 * bot mesin pencari (seperti Googlebot) agar mudah mengenali seluruh struktur URL 
 * pada website UTBEX ini.
 * 
 * Karena UTBEX mengadopsi model Single Page / Landing Page, saat ini hanya ada
 * URL utama (baseUrl) yang didaftarkan.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://utbex.id';

  return [
    {
      // URL Beranda Utama
      url: baseUrl,
      // lastModified akan selalu memberikan timestamp terbaru saat proyek di-build
      lastModified: new Date(),
      // changeFrequency: seberapa sering konten diperkirakan berubah
      changeFrequency: 'weekly',
      // priority: skor prioritas halaman untuk diindeks (1 adalah paling tinggi)
      priority: 1,
    }
  ];
}
