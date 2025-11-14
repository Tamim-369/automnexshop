'use client';

import { IDesignSystem } from '@/models/DesignSystem';

interface CategoryCardProps {
    designSystem: Partial<IDesignSystem>;
    category: {
        name: string;
        image: string;
        productCount?: number;
    };
    onClick?: () => void;
    variant?: 'default' | 'minimal' | 'overlay';
}

export default function CategoryCard({
    designSystem,
    category,
    onClick,
    variant = 'default',
}: CategoryCardProps) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.lg || '0.75rem';

    if (variant === 'minimal') {
        return (
            <button
                onClick={onClick}
                className="group text-center"
            >
                <div
                    className="w-full aspect-square mb-3 overflow-hidden"
                    style={{
                        borderRadius: roundness,
                        border: `2px solid ${colors?.border}`,
                    }}
                >
                    <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <h3
                    className="font-semibold"
                    style={{ color: colors?.foreground }}
                >
                    {category.name}
                </h3>
                {category.productCount !== undefined && (
                    <p className="text-sm" style={{ color: colors?.mutedForeground }}>
                        {category.productCount} products
                    </p>
                )}
            </button>
        );
    }

    if (variant === 'overlay') {
        return (
            <button
                onClick={onClick}
                className="group relative overflow-hidden"
                style={{
                    borderRadius: roundness,
                    minHeight: '250px',
                }}
            >
                <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">
                        {category.name}
                    </h3>
                    {category.productCount !== undefined && (
                        <p className="text-white/80 text-sm">
                            {category.productCount} products
                        </p>
                    )}
                </div>
            </button>
        );
    }

    return (
        <button
            onClick={onClick}
            className="group overflow-hidden hover:shadow-lg transition-shadow"
            style={{
                backgroundColor: colors?.card,
                borderRadius: roundness,
                border: `1px solid ${colors?.border}`,
            }}
        >
            <div className="aspect-[4/3] overflow-hidden">
                <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-4">
                <h3
                    className="font-semibold text-lg"
                    style={{ color: colors?.cardForeground }}
                >
                    {category.name}
                </h3>
                {category.productCount !== undefined && (
                    <p className="text-sm mt-1" style={{ color: colors?.mutedForeground }}>
                        {category.productCount} products
                    </p>
                )}
            </div>
        </button>
    );
}
