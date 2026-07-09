// components/section/footer/data/footerNavigation.ts

import { FooterNavItem } from "../types/footer";

/**
 * Primary navigation links per 03_FOOTER_LAYOUT_SYSTEM.md:
 * — Maximum five items.
 * — One or two words only.
 * — No dropdowns, no secondary navigation.
 * — Every link must have a purpose.
 */
export const footerNavigation: FooterNavItem[] = [
  {
    id: "nav-home",
    label: "Beranda",
    href: "#",
  },
  {
    id: "nav-about",
    label: "Tentang Kami",
    href: "#about",
  },
  {
    id: "nav-portfolio",
    label: "Jejak Kolaborasi",
    href: "#portfolio",
  },
  {
    id: "nav-contact",
    label: "Mari Berdiskusi",
    href: "mailto:hello@utbex.id",
  },
];
