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
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <BackgroundEffects />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="order-1">
          <AboutVisual gallery={aboutGallery} />
        </div>

        <div className="order-2">
          <AboutContent content={aboutContent} />
        </div>
      </div>
    </section>
  );
}
