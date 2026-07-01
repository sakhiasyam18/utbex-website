// src/sections/about/components/AboutVisual.tsx
// Layout for images only. Desktop two-column[cite: 3, 4].

import { AboutGallery } from './AboutGallery';
import { AboutGalleryImage } from '../types/about';

export const AboutVisual = ({ images }: { images: AboutGalleryImage[] }) => {
    return (
        <div className="w-full h-full flex flex-col justify-center">
            <AboutGallery images={images} />
        </div>
    );
};