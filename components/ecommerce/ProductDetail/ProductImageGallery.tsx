'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductImageGalleryProps {
    designSystem: Partial<IDesignSystem>;
    images: string[];
}

export default function ProductImageGallery({
    designSystem,
    images,
}: ProductImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0);
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.lg || '0.75rem';

    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div
                className="relative aspect-square overflow-hidden group"
                style={{
                    borderRadius: roundness,
                    border: `1px solid ${colors?.border}`,
                }}
            >
                <img
                    src={images[selectedImage]}
                    alt="Product"
                    className="w-full h-full object-cover"
                />

                {images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ boxShadow: designSystem.shadows?.md }}
                        >
                            <ChevronLeft className="h-5 w-5" style={{ color: colors?.foreground }} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ boxShadow: designSystem.shadows?.md }}
                        >
                            <ChevronRight className="h-5 w-5" style={{ color: colors?.foreground }} />
                        </button>
                    </>
                )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            className="aspect-square overflow-hidden transition-all"
                            style={{
                                borderRadius: roundness,
                                border: `2px solid ${selectedImage === index ? colors?.primary : colors?.border}`,
                                opacity: selectedImage === index ? 1 : 0.6,
                            }}
                        >
                            <img
                                src={image}
                                alt={`Product ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
