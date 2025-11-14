'use client';

import { Button } from '../Button';
import { IDesignSystem } from '@/models/DesignSystem';
import { ArrowRight } from 'lucide-react';

interface BannerVariant1Props {
    designSystem: Partial<IDesignSystem>;
    title: string;
    subtitle?: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
    backgroundImage?: string;
    overlay?: boolean;
}

export default function BannerVariant1({
    designSystem,
    title,
    subtitle,
    description,
    ctaText = 'Shop Now',
    ctaLink,
    backgroundImage,
    overlay = true,
}: BannerVariant1Props) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.xl || '1rem';

    return (
        <div
            className="relative overflow-hidden"
            style={{
                borderRadius: roundness,
                minHeight: '400px',
            }}
        >
            {/* Background */}
            {backgroundImage ? (
                <>
                    <img
                        src={backgroundImage}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {overlay && (
                        <div className="absolute inset-0 bg-black bg-opacity-40" />
                    )}
                </>
            ) : (
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(135deg, ${colors?.primary} 0%, ${colors?.secondary} 100%)`,
                    }}
                />
            )}

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-2xl">
                        {subtitle && (
                            <p
                                className="text-sm font-semibold uppercase tracking-wider mb-4"
                                style={{ color: backgroundImage ? '#ffffff' : colors?.background }}
                            >
                                {subtitle}
                            </p>
                        )}
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                            style={{ color: backgroundImage ? '#ffffff' : colors?.background }}
                        >
                            {title}
                        </h1>
                        {description && (
                            <p
                                className="text-lg md:text-xl mb-8"
                                style={{
                                    color: backgroundImage ? '#ffffff' : colors?.background,
                                    opacity: 0.9,
                                }}
                            >
                                {description}
                            </p>
                        )}
                        <Button
                            variant="primary"
                            size="lg"
                            roundness="full"
                            colors={designSystem.button?.primary}
                            onClick={() => ctaLink && (window.location.href = ctaLink)}
                        >
                            {ctaText}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
