// src/sections/about/components/AboutGallery.tsx
// Documentary images, natural lighting, soft shadow, large radius[cite: 3].

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AboutGalleryImage } from '../types/about';
import { imageFadeVariant } from '../motion/aboutMotion';
import { cn } from '../utils/aboutHelpers';

interface AboutGalleryProps {
    images: AboutGalleryImage[];
}

export const AboutGallery = ({ images }: AboutGalleryProps) => {
    const primaryImage = images.find((img) => img.isPrimary);
    const supportingImages = images.filter((img) => !img.isPrimary);

    return (
        <div className="relative w-full h-full flex flex-col gap-6">
            {primaryImage && (
                <motion.div
                    variants={imageFadeVariant}
                    className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-sm group"
                >
                    <Image
                        src={primaryImage.src}
                        alt={primaryImage.alt}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, 40vw"
                        priority
                    />
                </motion.div>
            )}

            <div className="grid grid-cols-2 gap-4">
                {supportingImages.map((img, index) => (
                    <motion.div
                        key={img.id}
                        variants={imageFadeVariant}
                        className={cn(
                            "relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm group",
                            index > 1 ? "hidden md:block" : ""
                        )}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                            sizes="(max-width: 768px) 50vw, 20vw"
                            loading="lazy"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};