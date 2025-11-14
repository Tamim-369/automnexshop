'use client';

import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '../Button';
import { IDesignSystem } from '@/models/DesignSystem';

interface ProductCardVariant3Props {
    designSystem: Partial<IDesignSystem>;
    product: {
        id: string;
        name: string;
        price: number;
        image: string;
        badge?: string;
        rating?: number;
    };
    onAddToCart?: (id: string) => void;
    layout?: 'horizontal' | 'vertical';
}

export default function ProductCardVariant3({
    designSystem,
    product,
    onAddToCart,
    layout = 'vertical',
}: ProductCardVariant3Props) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.xl || '1rem';

    if (layout === 'horizontal') {
        return (
            <div
                className="flex gap-4 p-4 hover:shadow-md transition-shadow"
                style={{
                    backgroundColor: colors?.card,
                    borderRadius: roundness,
                    border: `1px solid ${colors?.border}`,
                }}
            >
                {/* Image */}
                <div
                    className="w-32 h-32 flex-shrink-0 overflow-hidden"
                    style={{ borderRadius: roundness }}
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        {product.badge && (
                            <span
                                className="inline-block px-2 py-1 text-xs font-semibold rounded-full mb-2"
                                style={{
                                    backgroundColor: colors?.accent,
                                    color: '#ffffff',
                                }}
                            >
                                {product.badge}
                            </span>
                        )}
                        <h3
                            className="font-semibold text-lg mb-1"
                            style={{ color: colors?.cardForeground }}
                        >
                            {product.name}
                        </h3>
                        {product.rating && (
                            <div className="flex items-center gap-1">
                                <Star
                                    className="h-4 w-4"
                                    fill={colors?.accent}
                                    style={{ color: colors?.accent }}
                                />
                                <span className="text-sm font-medium">{product.rating}</span>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center justify-between">
                        <span
                            className="text-2xl font-bold"
                            style={{ color: colors?.primary }}
                        >
                            ${product.price.toFixed(2)}
                        </span>
                        <Button
                            variant="primary"
                            size="sm"
                            roundness="full"
                            colors={designSystem.button?.primary}
                            onClick={() => onAddToCart?.(product.id)}
                        >
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Add
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className="overflow-hidden hover:shadow-lg transition-shadow"
            style={{
                backgroundColor: colors?.card,
                borderRadius: roundness,
            }}
        >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
                {product.badge && (
                    <div
                        className="absolute top-4 left-4 px-3 py-1 text-sm font-bold text-white rounded-full shadow-lg"
                        style={{ backgroundColor: colors?.accent }}
                    >
                        {product.badge}
                    </div>
                )}
            </div>

            {/* Info */}
            <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                    <h3
                        className="font-semibold text-base flex-1 line-clamp-2"
                        style={{ color: colors?.cardForeground }}
                    >
                        {product.name}
                    </h3>
                    {product.rating && (
                        <div className="flex items-center gap-1 ml-2">
                            <Star
                                className="h-4 w-4"
                                fill={colors?.accent}
                                style={{ color: colors?.accent }}
                            />
                            <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-between">
                    <span
                        className="text-2xl font-bold"
                        style={{ color: colors?.primary }}
                    >
                        ${product.price.toFixed(2)}
                    </span>
                    <Button
                        variant="primary"
                        size="icon"
                        roundness="full"
                        colors={designSystem.button?.primary}
                        onClick={() => onAddToCart?.(product.id)}
                    >
                        <ShoppingCart className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
