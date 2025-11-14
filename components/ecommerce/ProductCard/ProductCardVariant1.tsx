'use client';

import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '../Button';
import { IDesignSystem } from '@/models/DesignSystem';

interface ProductCardVariant1Props {
    designSystem: Partial<IDesignSystem>;
    product: {
        id: string;
        name: string;
        price: number;
        originalPrice?: number;
        image: string;
        rating?: number;
        reviews?: number;
    };
    onAddToCart?: (id: string) => void;
    onToggleWishlist?: (id: string) => void;
    isInWishlist?: boolean;
}

export default function ProductCardVariant1({
    designSystem,
    product,
    onAddToCart,
    onToggleWishlist,
    isInWishlist = false,
}: ProductCardVariant1Props) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.lg || '0.75rem';
    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    return (
        <div
            className="group relative overflow-hidden transition-all hover:shadow-lg"
            style={{
                backgroundColor: colors?.card,
                borderRadius: roundness,
                border: `1px solid ${colors?.border}`,
            }}
        >
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Discount Badge */}
                {discount > 0 && (
                    <div
                        className="absolute top-3 left-3 px-2 py-1 text-xs font-bold text-white rounded-md"
                        style={{ backgroundColor: colors?.error }}
                    >
                        -{discount}%
                    </div>
                )}

                {/* Wishlist Button */}
                <button
                    onClick={() => onToggleWishlist?.(product.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md hover:scale-110 transition-transform"
                >
                    <Heart
                        className="h-5 w-5"
                        fill={isInWishlist ? colors?.error : 'none'}
                        style={{ color: isInWishlist ? colors?.error : colors?.mutedForeground }}
                    />
                </button>

                {/* Quick Add to Cart - Shows on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                    <Button
                        variant="primary"
                        size="md"
                        roundness="md"
                        colors={designSystem.button?.primary}
                        className="w-full"
                        onClick={() => onAddToCart?.(product.id)}
                    >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                    </Button>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
                <h3
                    className="font-semibold text-base mb-2 line-clamp-2"
                    style={{ color: colors?.cardForeground }}
                >
                    {product.name}
                </h3>

                {/* Rating */}
                {product.rating && (
                    <div className="flex items-center gap-1 mb-2">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <span
                                    key={i}
                                    className="text-sm"
                                    style={{
                                        color: i < Math.floor(product.rating!) ? colors?.accent : colors?.border,
                                    }}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        <span className="text-xs" style={{ color: colors?.mutedForeground }}>
                            ({product.reviews || 0})
                        </span>
                    </div>
                )}

                {/* Price */}
                <div className="flex items-center gap-2">
                    <span
                        className="text-xl font-bold"
                        style={{ color: colors?.primary }}
                    >
                        ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                        <span
                            className="text-sm line-through"
                            style={{ color: colors?.mutedForeground }}
                        >
                            ${product.originalPrice.toFixed(2)}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
