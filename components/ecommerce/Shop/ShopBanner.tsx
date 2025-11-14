'use client';

import { IDesignSystem } from '@/models/DesignSystem';

interface ShopBannerProps {
    designSystem: Partial<IDesignSystem>;
    title: string;
    description?: string;
    image?: string;
    variant?: 'default' | 'minimal' | 'gradient';
}

export default function ShopBanner({
    designSystem,
    title,
    description,
    image,
    variant = 'default',
}: ShopBannerProps) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.lg || '0.75rem';

    if (variant === 'minimal') {
        return (
            <div className="py-8">
                <h1 className="text-4xl font-bold mb-2" style={{ color: colors?.foreground }}>
                    {title}
                </h1>
                {description && (
                    <p className="text-lg" style={{ color: colors?.mutedForeground }}>
                        {description}
                    </p>
                )}
            </div>
        );
    }

    if (variant === 'gradient') {
        return (
            <div
                className="p-12 text-center"
                style={{
                    borderRadius: roundness,
                    background: `linear-gradient(135deg, ${colors?.primary} 0%, ${colors?.secondary} 100%)`,
                }}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
                {description && <p className="text-xl text-white/90">{description}</p>}
            </div>
        );
    }

    return (
        <div
            className="relative overflow-hidden"
            style={{
                borderRadius: roundness,
                minHeight: '300px',
            }}
        >
            {image ? (
                <>
                    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
                </>
            ) : (
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(135deg, ${colors?.primary} 0%, ${colors?.secondary} 100%)`,
                    }}
                />
            )}
            <div className="relative z-10 flex items-center h-full p-12">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
                    {description && <p className="text-xl text-white/90 max-w-2xl">{description}</p>}
                </div>
            </div>
        </div>
    );
}
