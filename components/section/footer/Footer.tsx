// components/section/footer/Footer.tsx
// REVISION 01: Divider removed — whitespace is the separator.
// REVISION 03: Vertical rhythm improved — closing breathes more, utility row is quieter.
// REVISION 08: Copyright given more space above to let the page breathe before ending.

import BackgroundGradient from "./components/BackgroundGradient";
import FooterClosing from "./components/FooterClosing";
import FooterNavigation from "./components/FooterNavigation";
import FooterContact from "./components/FooterContact";
import FooterSocial from "./components/FooterSocial";
import FooterCopyright from "./components/FooterCopyright";

import { footerContent } from "./data/footerContent";
import { footerNavigation } from "./data/footerNavigation";
import { footerSocial } from "./data/footerSocial";

/**
 * Footer — Chapter Four: The Quiet Ending.
 *
 * Section orchestrator. No business logic. No hardcoded content.
 * All layers are composed strictly according to the documentation system.
 *
 * Reading flow (per 03_FOOTER_LAYOUT_SYSTEM.md, never change):
 *   Closing Statement
 *   ↓
 *   Navigation
 *   ↓
 *   Contact
 *   ↓
 *   Social
 *   ↓
 *   Copyright
 */
export default function Footer() {
  return (
    <footer
      id="contact"
      aria-label="UTBEX Footer — Contact and Navigation"
      className="relative overflow-hidden w-full"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* ── Closing Statement — visual anchor, maximum breathing room ── */}
        <div className="pt-20 sm:pt-40 pb-20 sm:pb-28">
          <FooterClosing content={footerContent.closing} />
        </div>

        {/* ── Navigation + Contact + Social — progressively quieter ── */}
        {/* No divider. Whitespace is the only separator. */}
        <div className="pb-14 sm:pb-16 flex flex-col items-center gap-5">
          <FooterNavigation items={footerNavigation} />
          <FooterContact content={footerContent.contact} />
          <FooterSocial items={footerSocial} />
        </div>

        {/* ── Copyright — final quiet element, given space to disappear into ── */}
        <div className="pt-6 pb-10 sm:pb-12">
          <FooterCopyright text={footerContent.copyright} />
        </div>

      </div>
    </footer>
  );
}
