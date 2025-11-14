'use client';

import { ShoppingCart, Eye } from 'lucide-react';
import { Button } from '../Button';
import { IDesignSystem } from '@/models/DesignSystem';

interface ProductCardVariant2Props {
    designSystem: Partial<IDesignSystem>;
    product: {
        id: string;
        name: string;
        price: number;
        image: string;
        category?: string;
        inStock?: boolean;
    };
    onAddToCart?: (id: string) => void;
    onQuickView?: (id: string) => void;
}

export default function ProductCardVariant2({
    designSystem,
    product,
    onAddToCart,
    onQuickView,
}: ProductCardVariant2Props) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.md || '0.5rem';

    return (
        <div
            className="group relative overflow-hidden"
            style={{
                backgroundColor: colors?.card,
                borderRadius: roundness,
                border: `2px solid ${colors?.border}`,
            }}
        >
            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />

                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                    <Button
                        variant="primary"
                        size="icon"
                        roundness="full"
                        colors={designSystem.button?.primary}
                        onClick={() => onAddToCart?.(product.id)}
                    >
                        <ShoppingCart className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="secondary"
                        size="icon"
                        roundness="full"
                        colors={designSystem.button?.secondary}
                        onClick={() => onQuickView?.(product.id)}
                    >
                        <Eye className="h-5 w-5" />
                    </Button>
                </div>

                {/* Stock Badge */}
                {!product.inStock && (
                    <div
                        className="absolute top-3 right-3 px-3 py-1 text-sm font-semibold text-white rounded-full"
                        style={{ backgroundColor: colors?.error }}
                    >
                        Out of Stock
                    </div>
                )}

                {/* Category Tag */}
                {product.category && (
                    <div
                        className="absolute top-3 left-3 px-3 py-1 text-xs font-medium rounded-full"
                        style={{
                            backgroundColor: colors?.muted,
                            color: colors?.mutedForeground,
                        }}
                    >
                        {product.category}
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="p-4 text-center">
                <h3
                    className="font-medium text-sm mb-2 line-clamp-1"
                    style={{ color: colors?.cardForeground }}
                >
                    {product.name}
                </h3>
                <p
                    className="text-2xl font-bold"
                    style={{ color: colors?.primary }}
                >
                    ${product.price.toFixed(2)}
                </p>
            </div>
        </div>
    );
}
