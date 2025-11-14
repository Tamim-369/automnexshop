'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { Button } from '../Button';
import Badge from '../Badge/Badge';
import { Star, Heart, Share2, Minus, Plus } from 'lucide-react';
import { useState } from 'react';

interface ProductInfoProps {
    designSystem: Partial<IDesignSystem>;
    product: {
        name: string;
        price: number;
        originalPrice?: number;
        rating: number;
        reviews: number;
        description: string;
        inStock: boolean;
        sku?: string;
        brand?: string;
    };
    onAddToCart?: (quantity: number) => void;
    onAddToWishlist?: () => void;
}

export default function ProductInfo({
    designSystem,
    product,
    onAddToCart,
    onAddToWishlist,
}: ProductInfoProps) {
    const [quantity, setQuantity] = useState(1);
    const colors = designSystem.colors;
    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    return (
        <div className="space-y-6">
            {/* Brand */}
            {product.brand && (
                <p className="text-sm font-medium" style={{ color: colors?.primary }}>
                    {product.brand}
                </p>
            )}

            {/* Title */}
            <h1 className="text-3xl font-bold" style={{ color: colors?.foreground }}>
                {product.name}
            </h1>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className="h-5 w-5"
                            fill={i < Math.floor(product.rating) ? colors?.accent : 'none'}
                            style={{ color: i < Math.floor(product.rating) ? colors?.accent : colors?.border }}
                        />
                    ))}
                    <span className="ml-2 font-medium" style={{ color: colors?.foreground }}>
                        {product.rating}
                    </span>
                </div>
                <span className="text-sm" style={{ color: colors?.mutedForeground }}>
                    ({product.reviews} reviews)
                </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
                <span className="text-4xl font-bold" style={{ color: colors?.primary }}>
                    ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                    <>
                        <span
                            className="text-xl line-through"
                            style={{ color: colors?.mutedForeground }}
                        >
                            ${product.originalPrice.toFixed(2)}
                        </span>
                        <Badge designSystem={designSystem} variant="error" size="md">
                            -{discount}%
                        </Badge>
                    </>
                )}
            </div>

            {/* Stock Status */}
            <div>
                {product.inStock ? (
                    <Badge designSystem={designSystem} variant="success" size="md">
                        In Stock
                    </Badge>
                ) : (
                    <Badge designSystem={designSystem} variant="error" size="md">
                        Out of Stock
                    </Badge>
                )}
            </div>

            {/* Description */}
            <p className="text-base leading-relaxed" style={{ color: colors?.mutedForeground }}>
                {product.description}
            </p>

            {/* SKU */}
            {product.sku && (
                <p className="text-sm" style={{ color: colors?.mutedForeground }}>
                    SKU: {product.sku}
                </p>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
                <span className="font-medium" style={{ color: colors?.foreground }}>
                    Quantity:
                </span>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        roundness="md"
                        colors={designSystem.button?.outline}
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={!product.inStock}
                    >
                        <Minus className="h-4 w-4" />
                    </Button>
                    <span
                        className="w-16 text-center font-medium text-lg"
                        style={{ color: colors?.foreground }}
                    >
                        {quantity}
                    </span>
                    <Button
                        variant="outline"
                        size="icon"
                        roundness="md"
                        colors={designSystem.button?.outline}
                        onClick={() => setQuantity(quantity + 1)}
                        disabled={!product.inStock}
                    >
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
                <Button
                    variant="primary"
                    size="lg"
                    roundness="md"
                    colors={designSystem.button?.primary}
                    onClick={() => onAddToCart?.(quantity)}
                    disabled={!product.inStock}
                    className="flex-1"
                >
                    Add to Cart
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    roundness="md"
                    colors={designSystem.button?.outline}
                    onClick={onAddToWishlist}
                >
                    <Heart className="h-5 w-5" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    roundness="md"
                    colors={designSystem.button?.outline}
                >
                    <Share2 className="h-5 w-5" />
                </Button>
            </div>
        </div>
    );
}
