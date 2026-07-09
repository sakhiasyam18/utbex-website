// components/section/footer/types/footer.ts

/**
 * Type definitions for the Footer section (Chapter Four).
 *
 * Per 05_FOOTER_TECHNICAL_SYSTEM.md:
 * — Never hardcode content.
 * — All shapes must be CMS-ready.
 * — Components only render these shapes.
 */

export interface FooterClosingContent {
  /** Short uppercase label, e.g. "THE CONVERSATION BEGINS" */
  label: string;
  /** Primary editorial headline — highest visual priority */
  headline: string;
  /** Supporting paragraph, maximum three lines */
  description: string;
}

export interface FooterContactItem {
  /** Accessible label, e.g. "Email address" */
  label: string;
  /** Human-readable value, e.g. "hello@utbex.id" */
  value: string;
  /** Optional href for mailto: or tel: links */
  href?: string;
}

export interface FooterContactContent {
  items: FooterContactItem[];
}

export interface FooterNavItem {
  id: string;
  /** One or two words maximum per spec */
  label: string;
  href: string;
}

export interface FooterSocialItem {
  id: string;
  platform: string;
  href: string;
  /** Accessible label for screen readers */
  ariaLabel: string;
}

export interface FooterContent {
  closing: FooterClosingContent;
  contact: FooterContactContent;
  copyright: string;
}
