/**
 * components/section/footer/data/footerContent.ts
 * ----------------------------------------------------------------------
 * File penyimpan *copywriting* (teks utama) untuk berbagai seksi di Footer,
 * seperti pesan penutup, CTA, detail kontak teks, dan baris hak cipta (copyright).
 * 
 * Penggunaan (Usage):
 * - Memisahkan hard-coded text dari komponen presentasional agar lebih mudah 
 *   di-edit oleh Content Writer.
 */

// components/section/footer/data/footerContent.ts
export interface FooterContent {
  closing: {
    label: string;
    headline: string;
    description: string;
    cta: {
      label: string;
      href: string;
    };
  };
  contact: {
    items: { label: string; value: string; href?: string }[];
  };
  copyright: string;
}
/**
 * Footer content follows the emotional closing arc specified in
 * 04_FOOTER_CONTENT_SYSTEM.md.
 *
 * Tone: Quiet. Confident. Human. Hopeful.
 * Never corporate. Never promotional. Never exaggerated.
 *
 * Replace with CMS-sourced content when available;
 * no component change is required to support that.
 */
export const footerContent: FooterContent = {
  closing: {
    label: "KOLABORASI BERIKUTNYA",

    headline: "Mari bangun perubahan\nberikutnya bersama kami.",

    description:
      "Dari desa, untuk Indonesia. Setiap kolaborasi dimulai dari satu percakapan.",
    cta: {
      label: "Mulai Percakapan",
      href: "https://wa.me/6282252358901",
    },
  },

  contact: {
    items: [
      {
        label: "Alamat Email",
        value: "info@utbex.id",
        href: "mailto:info@utbex.id",
      },
      {
        label: "Lokasi",
        value: "Jl. Kyai Rajiman RT.06 RW.02, Bantur, Malang, 65179",
      },
    ],
  },

  copyright: "© 2026 UTBEX Indonesia. Hak cipta dilindungi undang-undang.",
};
