"use client";

import {  m as motion  } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";
import { GradientText } from "../ui/GradientText";

import Image from "next/image";

const GALLERY_IMAGES = [
  { src: "/images/pelatihan-digital-marketing-dan-packaging-utbex.avif", caption: "Pelatihan Digital Marketing & Packaging", year: "2023" },
  { src: "/images/foto-bersama-arik-dwi-asmara-utbex-dengan-pemerintah.avif", caption: "Kolaborasi dengan Pemerintah Daerah", year: "2023" },
  { src: "/images/awarding-inotek-award-ceremony-2023-utbex.avif", caption: "INOTEK Award Ceremony", year: "2023" },
  { src: "/images/utbex-pelatihan-manajemen-umkm-dengan-arik-dwi-asmara.avif", caption: "Pelatihan Manajemen UMKM", year: "2022" },
  { src: "/images/foto-bersama-arif-dwi-asmara-utbex.avif", caption: "Komunitas UMKM Bantur", year: "2024" },
];

export function GallerySection() {
  return (
    <AnimatedSection className="px-6 sm:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Perjalanan dalam <br />
            <GradientText>Lensa</GradientText>
          </h2>
          <p className="text-white/60 max-w-sm text-right hidden sm:block">
            Momen-momen yang terekam selama proses memberdayakan UMKM dan komunitas kreatif di berbagai desa.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((item, index) => {
            // Create a masonry look by varying the heights and spans
            let spanClass = "col-span-1 aspect-square";
            if (index === 0) spanClass = "md:col-span-2 aspect-video";
            if (index === 3) spanClass = "lg:col-span-2 aspect-video lg:aspect-auto";

            return (
              <motion.div 
                key={index}
                className={`relative rounded-3xl overflow-hidden group cursor-pointer ${spanClass}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-white font-medium">{item.caption}</p>
                  <p className="text-white/70 text-sm">Desa Inovasi, {item.year}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-8 py-3 rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/5 transition-all">
            Muat Lebih Banyak
          </button>
        </div>

      </div>
    </AnimatedSection>
  );
}
