import BackgroundEffects from "./components/BackgroundEffects";
import AboutVisual from "./components/AboutVisual";
import AboutContent from "./components/AboutContent";
import { aboutContent } from "./data/aboutContent";
import { aboutGallery } from "./data/aboutGallery";
//app/src/components/sections/about/About.tsx

/**
 * About — Chapter Two of the UTBEX story.
 *
 * Entry point only: no hardcoded content, no business logic. All copy and
 * imagery come from the data layer (aboutContent.ts / aboutGallery.ts) so
 * this section stays CMS-ready.
 *
 * Layout: desktop is a two-column editorial split (image left, story
 * right). Mobile reverses the visual order so photography leads while the
 * DOM order keeps the story first for reading/heading hierarchy — image
 * order is handled purely with CSS `order` utilities, so no JS branching
 * is needed and the layout never causes CLS.
 */
export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-headline"
      className="relative overflow-hidden py-24 sm:py-32 w-full bg-utbex-light"
    >
      <BackgroundEffects />

      {/* Match Hero width and padding seamlessly */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-start">
          <div className="order-1">
            <AboutVisual gallery={aboutGallery} />
          </div>

          <div className="order-2 lg:sticky lg:top-32 lg:pt-8">
            <AboutContent content={aboutContent} />
          </div>
        </div>
      </div>
    </section>
  );
}
