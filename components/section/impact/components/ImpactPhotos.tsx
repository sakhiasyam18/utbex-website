// components/section/impact/components/ImpactPhotos.tsx
import Image from "next/image";
import { m as motion } from "framer-motion";
import { staggerContainer, staggerChild } from "@/components/ui/motion";

// Reusable component for the photo cards to reduce duplication
const PhotoCard = ({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) => (
  <motion.figure
    variants={staggerChild}
    className="relative aspect-square sm:aspect-[4/5] rounded-[2rem] overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-black/5 bg-white p-1"
  >
    <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <figcaption className="absolute bottom-5 left-5 right-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <p className="text-[10px] font-bold text-white uppercase tracking-widest bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full inline-block border border-white/20 shadow-sm">
          {label}
        </p>
      </figcaption>
    </div>
  </motion.figure>
);

export const ImpactPhotos = () => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-0 perspective-[1200px]"
  >
    {/* Column 1 */}
    <div className="space-y-4 sm:space-y-6 transform-gpu rotate-y-[6deg] rotate-x-[3deg] translate-y-4">
      <PhotoCard
        src="/images/mockup-utbex-papan-poster-ekslusif.avif"
        alt="UTBEX.id Workshop Poster"
        label="UTBEX.id"
      />
      <PhotoCard
        src="/images/sertifikat-merek-utbex.avif"
        alt="Sertifikat Merek UTBEX"
        label="Sertifikat Merek"
      />
    </div>

    {/* Column 2 */}
    <div className="space-y-4 sm:space-y-6 transform-gpu -rotate-y-[6deg] -rotate-x-[3deg] -translate-y-8">
      <PhotoCard
        src="/images/mockup-stempel-utbex.avif"
        alt="Stempel PT. Utbex Inovasi Indonesia"
        label="PT. Utbex Inovasi Indonesia"
      />
      <PhotoCard
        src="/images/sertifikat-haki-utbex.avif"
        alt="Sertifikat HAKI UTBEX"
        label="HAKI"
      />
    </div>
  </motion.div>
);
