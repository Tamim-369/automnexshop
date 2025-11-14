'use client';

import { Button } from '../Button';
import { IDesignSystem } from '@/models/DesignSystem';

interface BannerVariant2Props {
    designSystem: Partial<IDesignSystem>;
    title: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
    image?: string;
    imagePosition?: 'left' | 'right';
}

export default function BannerVariant2({
    designSystem,
    title,
    description,
    ctaText = 'Explore',
    ctaLink,
    image,
    imagePosition = 'right',
}: BannerVariant2Props) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.lg || '0.75rem';

    return (
        <div
            className="overflow-hidden"
            style={{
                backgroundColor: colors?.muted,
                borderRadius: roundness,
            }}
        >
            <div className="max-w-7xl mx-auto">
                <div
                    className={`grid md:grid-cols-2 gap-8 items-center ${imagePosition === 'left' ? 'md:flex-row-reverse' : ''
                        }`}
                >
                    {/* Content */}
                    <div className={`p-8 md:p-12 ${imagePosition === 'left' ? 'md:order-2' : ''}`}>
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-4"
                            style={{ color: colors?.foreground }}
                        >
                            {title}
                        </h2>
                        {description && (
                            <p
                                className="text-lg mb-6"
                                style={{ color: colors?.mutedForeground }}
                            >
                                {description}
                            </p>
                        )}
                        <Button
                            variant="primary"
                            size="lg"
                            roundness="md"
                            colors={designSystem.button?.primary}
                            onClick={() => ctaLink && (window.location.href = ctaLink)}
                        >
                            {ctaText}
                        </Button>
                    </div>

                    {/* Image */}
                    <div className={`relative h-64 md:h-96 ${imagePosition === 'left' ? 'md:order-1' : ''}`}>
                        {image ? (
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div
                                className="w-full h-full"
                                style={{
                                    background: `linear-gradient(135deg, ${colors?.primary} 0%, ${colors?.secondary} 100%)`,
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
