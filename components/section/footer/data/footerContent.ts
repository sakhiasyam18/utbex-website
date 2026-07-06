// components/section/footer/data/footerContent.ts

import { FooterContent } from "../types/footer";

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

    headline: "Membangun perubahan tidak pernah\nmenjadi perjalanan satu pihak.",

    description:
      "Setiap langkah selalu dimulai dari orang-orang yang percaya bahwa masa depan dapat dibentuk bersama. Jika Anda memiliki visi yang sama untuk menciptakan perubahan yang berkelanjutan, kami akan senang memulai percakapan bersama Anda.",
  },

  contact: {
    items: [
      {
        label: "Alamat Email",
        value: "hello@utbex.id",
        href: "mailto:hello@utbex.id",
      },
      {
        label: "Lokasi",
        value: "Indonesia",
      },
    ],
  },

  copyright: "© 2026 UTBEX Indonesia. Hak cipta dilindungi undang-undang.",
};
