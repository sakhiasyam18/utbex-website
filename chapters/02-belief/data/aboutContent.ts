//src/sections/about/data/aboutContent.ts
import { AboutContentData } from "../types/about";

/**
 * Copy follows the storytelling formula locked in 05_ABOUT_CONTENT_SYSTEM.md:
 * Reality -> Opportunity -> Action -> Impact -> Future.
 *
 * Words we avoid (per spec): best, leading, number one, world class, amazing,
 * revolutionary, outstanding, game changer, unlimited, professional solutions.
 *
 * Replace this copy with CMS-sourced content when available; no component
 * should need to change to support that.
 */
export const aboutContent: AboutContentData = {
  label: "Tentang UTBEX",

  headline: "Perubahan Besar Selalu Dimulai dari Langkah Kecil.",

  story: [
    // Reality
    "UTBEX lahir dari keyakinan bahwa perubahan tidak harus selalu dimulai dari sesuatu yang besar.",
    // Opportunity + Action
    "Bersama desa, UMKM, komunitas, dan berbagai mitra, kami membangun ruang untuk belajar, berkolaborasi, dan menciptakan solusi yang tumbuh dari kebutuhan.",
    // Impact + Future
    "Bagi kami, keberhasilan bukan hanya tentang menyelesaikan sebuah program, tetapi tentang memastikan dampaknya terus dirasakan setelah perjalanan itu dimulai.",
  ],

  quote: {
    text: "UTBEX tidak hanya mengajari kami cara menjalankan bisnis. Mereka lebih dulu percaya pada kami.",
    source: "Mitra Komunitas",
    affiliation: "Jawa Timur",
  },

  cta: {
    label: "Jelajahi Cerita Kami",
    href: "/journey",
  },
};
