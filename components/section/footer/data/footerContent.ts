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
    label: "THE CONVERSATION BEGINS",

    headline: "Every meaningful collaboration\nbegins with a conversation.",

    description:
      "We are ready when you are. Reach out and let us explore what is possible together.",
  },

  contact: {
    items: [
      {
        label: "Email address",
        value: "hello@utbex.id",
        href: "mailto:hello@utbex.id",
      },
      {
        label: "Location",
        value: "Indonesia",
      },
    ],
  },

  copyright: "© 2026 UTBEX Indonesia. All rights reserved.",
};
