// components/section/footer/data/footerSocial.ts

import { FooterSocialItem } from "../types/footer";

/**
 * Official social channels per 01_FOOTER_BIBLE.md:
 * — Only official channels.
 * — Social media supports credibility, it is not the main attraction.
 * — Do not encourage followers. Do not use promotional copy.
 *
 * Replace placeholder hrefs with official channel URLs when available.
 */
export const footerSocial: FooterSocialItem[] = [
  {
    id: "social-bcn-web",
    platform: "Website",
    href: "https://sites.google.com/view/banturcreativenetwork/beranda",
    ariaLabel: "Bantur Creative Network Website",
  },
  {
    id: "social-bcn-blog",
    platform: "Blog",
    href: "https://banturcreativenetwork.blogspot.com/2025/06/company-profile-bcn-bantur-creative.html",
    ariaLabel: "BCN Blogspot",
  },
  {
    id: "social-facebook",
    platform: "Facebook",
    href: "https://www.facebook.com/UtbexclothingIndonesia/",
    ariaLabel: "UTBEX Indonesia (Halaman Facebook)",
  },
  {
    id: "social-instagram",
    platform: "Instagram",
    href: "https://instagram.com/utbex.id",
    ariaLabel: "UTBEX di Instagram",
  },
  {
    id: "social-tiktok",
    platform: "TikTok",
    href: "https://www.tiktok.com/@utbexindonesiagroup",
    ariaLabel: "UTBEX di TikTok",
  },
  {
    id: "social-threads",
    platform: "Threads",
    href: "https://www.threads.com/@utbexindonesia.group",
    ariaLabel: "UTBEX di Threads",
  },
  {
    id: "social-youtube",
    platform: "YouTube",
    href: "https://www.youtube.com/@utbexindonesia",
    ariaLabel: "UTBEX di YouTube",
  },
  {
    id: "social-whatsapp",
    platform: "WhatsApp",
    href: "https://wa.me/6282252358901",
    ariaLabel: "Konsultasi Gratis via WhatsApp",
  },
];
