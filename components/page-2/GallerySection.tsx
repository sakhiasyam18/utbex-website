"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";
import { GradientText } from "../ui/GradientText";

// Dummy image placeholders matching the documentary vibe
const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80",
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
          {GALLERY_IMAGES.map((src, index) => {
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
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${src})` }}
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-white font-medium">Dokumentasi Pelatihan</p>
                  <p className="text-white/70 text-sm">Desa Inovasi, 2023</p>
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
