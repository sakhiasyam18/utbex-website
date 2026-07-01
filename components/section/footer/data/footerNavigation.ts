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
    label: "Home",
    href: "#",
  },
  {
    id: "nav-about",
    label: "About",
    href: "#about",
  },
  {
    id: "nav-portfolio",
    label: "Portfolio",
    href: "#portfolio",
  },
  {
    id: "nav-contact",
    label: "Contact",
    href: "mailto:hello@utbex.id",
  },
];
