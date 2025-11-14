'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../Button';
import { useState, useRef, useEffect } from 'react';

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    originalPrice?: number;
    rating?: number;
}

interface ProductSliderProps {
    designSystem: Partial<IDesignSystem>;
    title: string;
    products: Product[];
    variant?: 'default' | 'cards' | 'minimal';
    onProductClick?: (id: string) => void;
    renderProduct?: (product: Product) => React.ReactNode;
}

export default function ProductSlider({
    designSystem,
    title,
    products,
    variant = 'default',
    onProductClick,
    renderProduct,
}: ProductSliderProps) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.lg || '0.75rem';
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        const ref = scrollRef.current;
        if (ref) {
            ref.addEventListener('scroll', checkScroll);
            return () => ref.removeEventListener('scroll', checkScroll);
        }
    }, [products]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth * 0.8;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const DefaultProductCard = ({ product }: { product: Product }) => (
        <div
            className="flex-shrink-0 w-64 cursor-pointer group"
            onClick={() => onProductClick?.(product.id)}
        >
            <div
                className="overflow-hidden mb-3"
                style={{ borderRadius: roundness }}
            >
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                />
            </div>
            <h3
                className="font-semibold mb-1 line-clamp-2"
                style={{ color: colors?.foreground }}
            >
                {product.name}
            </h3>
            <div className="flex items-center gap-2">
                <span
                    className="text-lg font-bold"
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
    );

    return (
        <div className="relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2
                    className="text-2xl md:text-3xl font-bold"
                    style={{ color: colors?.foreground }}
                >
                    {title}
                </h2>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        roundness="full"
                        colors={designSystem.button?.outline}
                        onClick={() => scroll('left')}
                        disabled={!canScrollLeft}
                        className="disabled:opacity-30"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        roundness="full"
                        colors={designSystem.button?.outline}
                        onClick={() => scroll('right')}
                        disabled={!canScrollRight}
                        className="disabled:opacity-30"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </Button>
                </div>
            </div>

            {/* Slider */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {products.map((product) =>
                    renderProduct ? (
                        <div key={product.id} className="flex-shrink-0">
                            {renderProduct(product)}
                        </div>
                    ) : (
                        <DefaultProductCard key={product.id} product={product} />
                    )
                )}
            </div>
        </div>
    );
}
