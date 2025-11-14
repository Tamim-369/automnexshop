'use client';

import { IDesignSystem } from '@/models/DesignSystem';

interface Category {
    name: string;
    image: string;
    productCount?: number;
}

interface CategoryGridProps {
    designSystem: Partial<IDesignSystem>;
    title?: string;
    categories: Category[];
    onCategoryClick?: (name: string) => void;
    variant?: 'grid' | 'featured' | 'minimal';
}

export default function CategoryGrid({
    designSystem,
    title = 'Shop by Category',
    categories,
    onCategoryClick,
    variant = 'grid',
}: CategoryGridProps) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.lg || '0.75rem';

    if (variant === 'featured') {
        return (
            <div>
                {title && (
                    <h2
                        className="text-2xl md:text-3xl font-bold mb-8 text-center"
                        style={{ color: colors?.foreground }}
                    >
                        {title}
                    </h2>
                )}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Featured large category */}
                    {categories[0] && (
                        <button
                            onClick={() => onCategoryClick?.(categories[0].name)}
                            className="md:col-span-2 md:row-span-2 relative group overflow-hidden"
                            style={{
                                borderRadius: roundness,
                                minHeight: '400px',
                            }}
                        >
                            <img
                                src={categories[0].image}
                                alt={categories[0].name}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="relative z-10 h-full flex flex-col justify-end p-6">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    {categories[0].name}
                                </h3>
                                {categories[0].productCount && (
                                    <p className="text-white/80">
                                        {categories[0].productCount} products
                                    </p>
                                )}
                            </div>
                        </button>
                    )}

                    {/* Other categories */}
                    {categories.slice(1).map((category, index) => (
                        <button
                            key={index}
                            onClick={() => onCategoryClick?.(category.name)}
                            className="relative group overflow-hidden"
                            style={{
                                borderRadius: roundness,
                                minHeight: '190px',
                            }}
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="relative z-10 h-full flex flex-col justify-end p-4">
                                <h3 className="text-lg font-bold text-white">
                                    {category.name}
                                </h3>
                                {category.productCount && (
                                    <p className="text-sm text-white/80">
                                        {category.productCount}
                                    </p>
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    if (variant === 'minimal') {
        return (
            <div>
                {title && (
                    <h2
                        className="text-2xl md:text-3xl font-bold mb-8"
                        style={{ color: colors?.foreground }}
                    >
                        {title}
                    </h2>
                )}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => onCategoryClick?.(category.name)}
                            className="group text-center"
                        >
                            <div
                                className="w-full aspect-square mb-3 overflow-hidden"
                                style={{
                                    borderRadius: '50%',
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
                                className="font-medium text-sm"
                                style={{ color: colors?.foreground }}
                            >
                                {category.name}
                            </h3>
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div>
            {title && (
                <h2
                    className="text-2xl md:text-3xl font-bold mb-8"
                    style={{ color: colors?.foreground }}
                >
                    {title}
                </h2>
            )}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => onCategoryClick?.(category.name)}
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
                            {category.productCount && (
                                <p className="text-sm mt-1" style={{ color: colors?.mutedForeground }}>
                                    {category.productCount} products
                                </p>
                            )}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
