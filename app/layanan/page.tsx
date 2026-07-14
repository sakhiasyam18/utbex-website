import { HeroSection } from "../../components/page-2/HeroSection";
import { WhatWeDoSection } from "../../components/page-2/WhatWeDoSection";
import { JourneySection } from "../../components/page-2/JourneySection";
import { EcosystemSection } from "../../components/page-2/EcosystemSection";
import { ImpactSection } from "../../components/page-2/ImpactSection";
import { GallerySection } from "../../components/page-2/GallerySection";
import { ContactSection } from "../../components/page-2/ContactSection";

export default function Page2() {
  return (
    <div className="w-full max-w-[1920px] mx-auto">
      <HeroSection />
      <WhatWeDoSection />
      <JourneySection />
      <EcosystemSection />
      <ImpactSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}
