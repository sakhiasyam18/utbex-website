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
  label: "WHY WE EXIST",

  headline: "Growing Communities Through Innovation.",

  story: [
    // Reality
    "In villages and small cities across Indonesia, good ideas often stay ideas. Talented people are missing the tools, mentors, and networks to turn them into something real.",
    // Opportunity + Action
    "UTBEX exists to close that gap. We connect students, young entrepreneurs, and local innovators with mentoring, training, and the partners who can help them grow.",
    // Impact + Future
    "Community by community, we are watching curiosity turn into capability, and small efforts grow into lasting change.",
  ],

  quote: {
    text: "UTBEX did not just teach us how to run a business. They believed in us first.",
    source: "Community Partner",
    affiliation: "East Java",
  },

  cta: {
    label: "Discover Our Journey",
    href: "/journey",
  },
};
