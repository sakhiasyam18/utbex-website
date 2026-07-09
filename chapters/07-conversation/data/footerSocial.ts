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
    id: "social-instagram",
    platform: "Instagram",
    href: "https://instagram.com/utbex.id",
    ariaLabel: "UTBEX di Instagram",
  },
  {
    id: "social-linkedin",
    platform: "LinkedIn",
    href: "https://linkedin.com/company/utbex",
    ariaLabel: "UTBEX di LinkedIn",
  },
  {
    id: "social-youtube",
    platform: "YouTube",
    href: "https://youtube.com/@utbex",
    ariaLabel: "UTBEX di YouTube",
  },
];
