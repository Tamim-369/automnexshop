'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { ProductCardVariant1, ProductCardVariant2, ProductCardVariant3 } from '../index';

interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating?: number;
    reviews?: number;
}

interface ProductGridProps {
    designSystem: Partial<IDesignSystem>;
    products: Product[];
    cardVariant?: 1 | 2 | 3;
    onProductClick?: (id: string) => void;
    onAddToCart?: (id: string) => void;
    onToggleWishlist?: (id: string) => void;
}

export default function ProductGrid({
    designSystem,
    products,
    cardVariant = 1,
    onProductClick,
    onAddToCart,
    onToggleWishlist,
}: ProductGridProps) {
    const renderProductCard = (product: Product) => {
        const commonProps = {
            designSystem,
            product,
            onAddToCart,
            onToggleWishlist,
        };

        switch (cardVariant) {
            case 2:
                return <ProductCardVariant2 {...commonProps} onQuickView={onProductClick} />;
            case 3:
                return <ProductCardVariant3 {...commonProps} layout="vertical" />;
            default:
                return <ProductCardVariant1 {...commonProps} />;
        }
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((product) => (
                <div key={product.id}>{renderProductCard(product)}</div>
            ))}
        </div>
    );
}
