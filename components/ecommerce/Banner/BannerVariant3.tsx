'use client';

import { Button } from '../Button';
import { IDesignSystem } from '@/models/DesignSystem';

interface BannerVariant3Props {
    designSystem: Partial<IDesignSystem>;
    banners: Array<{
        title: string;
        subtitle?: string;
        ctaText?: string;
        ctaLink?: string;
        image?: string;
    }>;
}

export default function BannerVariant3({
    designSystem,
    banners,
}: BannerVariant3Props) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.md || '0.5rem';

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {banners.map((banner, index) => (
                <div
                    key={index}
                    className="relative overflow-hidden group cursor-pointer"
                    style={{
                        borderRadius: roundness,
                        minHeight: '300px',
                    }}
                >
                    {/* Background */}
                    {banner.image ? (
                        <>
                            <img
                                src={banner.image}
                                alt={banner.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
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
                    <div className="relative z-10 h-full flex flex-col justify-end p-6">
                        {banner.subtitle && (
                            <p className="text-sm font-medium text-white/80 mb-2">
                                {banner.subtitle}
                            </p>
                        )}
                        <h3 className="text-2xl font-bold text-white mb-4">
                            {banner.title}
                        </h3>
                        {banner.ctaText && (
                            <Button
                                variant="outline"
                                size="sm"
                                roundness="md"
                                colors={{
                                    border: '#ffffff',
                                    foreground: '#ffffff',
                                    hover: 'rgba(255, 255, 255, 0.1)',
                                }}
                                onClick={() => banner.ctaLink && (window.location.href = banner.ctaLink)}
                            >
                                {banner.ctaText}
                            </Button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
