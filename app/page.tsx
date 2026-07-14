//app/page.tsx
import Hero from "../components/section/hero/Hero";
import { About } from "../components/section/about";
import { Impact } from "../components/section/impact";
import { Portfolio } from "../components/section/portfolio";
import { Footer } from "../components/section/footer";
import { GlobalAtmosphere } from "../components/atmosphere/GlobalAtmosphere";
import Image from "next/image";

export default function Home() {
  return (
    // relative — establishes the positioning context for GlobalAtmosphere (absolute inset-0 -z-10)
    // All sections are transparent — the continuous atmosphere is always visible beneath them
    <div className="relative flex flex-col min-h-screen">
      <GlobalAtmosphere />
      <Hero />
      <About />
      
      {/* Cinematic Chapter Divider 01 */}
      <div className="relative w-full aspect-[21/9] lg:aspect-[24/9] overflow-hidden my-12">
        <Image 
          src="/images/pelatihan-digital-marketing-dan-packaging-utbex-dengan-arif-dwi-asmara.avif" 
          alt="Documentary transition: Community Workshop" 
          fill 
          className="object-cover"
        />
      </div>

      <Portfolio />

      {/* Cinematic Chapter Divider 02 */}
      <div 
        className="relative w-full aspect-[9/10] md:aspect-[21/9] lg:aspect-[24/9] overflow-hidden my-12 sm:my-20 bg-fixed bg-cover bg-[center_25%]"
        style={{ backgroundImage: "url('/images/utbex-foto-bersama-pemerintah-arif-dwi-asmara.avif')" }}
      >
      </div>

      <Impact />
      <Footer />
    </div>
  );
}
