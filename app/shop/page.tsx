'use client';

import { useState } from 'react';
import { useDesignSystem } from '@/hooks/useDesignSystem';
import {
    NavbarVariant2,
    FooterVariant1,
    Breadcrumb,
    FilterSidebar,
    Pagination,
} from '@/components/ecommerce';
import ShopBanner from '@/components/ecommerce/Shop/ShopBanner';
import ShopHeader from '@/components/ecommerce/Shop/ShopHeader';
import ProductGrid from '@/components/ecommerce/Shop/ProductGrid';

export default function ShopPage() {
    const { designSystem, loading } = useDesignSystem();
    const [showFilters, setShowFilters] = useState(true);
    const [currentSort, setCurrentSort] = useState('featured');
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({
        priceRange: [0, 1000],
        selectedCategories: [] as string[],
        selectedBrands: [] as string[],
    });

    if (loading || !designSystem) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    const allProducts = Array.from({ length: 24 }, (_, i) => ({
        id: `${i + 1}`,
        name: `Premium Product ${i + 1}`,
        price: Math.floor(Math.random() * 500) + 50,
        originalPrice: Math.random() > 0.5 ? Math.floor(Math.random() * 700) + 100 : undefined,
        image: `https://images.unsplash.com/photo-${1505740420928 + i * 1000}?w=500&q=80`,
        rating: 4 + Math.random(),
        reviews: Math.floor(Math.random() * 1000) + 100,
        category: ['Electronics', 'Fashion', 'Home', 'Sports'][Math.floor(Math.random() * 4)],
        brand: ['Brand A', 'Brand B', 'Brand C', 'Brand D'][Math.floor(Math.random() * 4)],
    }));

    const filteredProducts = allProducts.filter((product) => {
        const priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
        const categoryMatch = filters.selectedCategories.length === 0 || filters.selectedCategories.includes(product.category);
        const brandMatch = filters.selectedBrands.length === 0 || filters.selectedBrands.includes(product.brand);
        return priceMatch && categoryMatch && brandMatch;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (currentSort) {
            case 'price-asc':
                return a.price - b.price;
            case 'price-desc':
                return b.price - a.price;
            case 'rating':
                return (b.rating || 0) - (a.rating || 0);
            case 'newest':
                return parseInt(b.id) - parseInt(a.id);
            default:
                return 0;
        }
    });

    const sortOptions = [
        { label: 'Featured', value: 'featured' },
        { label: 'Price: Low to High', value: 'price-asc' },
        { label: 'Price: High to Low', value: 'price-desc' },
        { label: 'Newest', value: 'newest' },
        { label: 'Best Rating', value: 'rating' },
    ];

    return (
        <div style={{ backgroundColor: designSystem.colors?.background, minHeight: '100vh' }}>
            <NavbarVariant2
                designSystem={designSystem}
                isUserLoggedIn={false}
                cartItemCount={3}
                wishlistCount={5}
                brandName="ModernShop"
                categories={['Electronics', 'Fashion', 'Home', 'Sports']}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-6">
                    <Breadcrumb
                        designSystem={designSystem}
                        items={[{ label: 'Shop', href: '/shop' }, { label: 'All Products' }]}
                    />
                </div>

                <div className="mb-8">
                    <ShopBanner
                        designSystem={designSystem}
                        title="Shop All Products"
                        description="Discover our complete collection of premium products"
                        variant="gradient"
                    />
                </div>

                <div className="flex gap-8">
                    {showFilters && (
                        <aside className="hidden lg:block w-80 flex-shrink-0">
                            <div className="sticky top-8">
                                <FilterSidebar
                                    designSystem={designSystem}
                                    onApply={(newFilters) => setFilters(newFilters)}
                                    onClear={() => setFilters({ priceRange: [0, 1000], selectedCategories: [], selectedBrands: [] })}
                                />
                            </div>
                        </aside>
                    )}

                    <div className="flex-1 min-w-0">
                        <div className="mb-6">
                            <ShopHeader
                                designSystem={designSystem}
                                totalProducts={sortedProducts.length}
                                onToggleFilters={() => setShowFilters(!showFilters)}
                                sortOptions={sortOptions}
                                currentSort={currentSort}
                                onSortChange={setCurrentSort}
                            />
                        </div>

                        <div className="mb-8">
                            <ProductGrid
                                designSystem={designSystem}
                                products={sortedProducts}
                                cardVariant={1}
                                onProductClick={(id) => (window.location.href = `/product/${id}`)}
                                onAddToCart={(id) => console.log('Add to cart:', id)}
                                onToggleWishlist={(id) => console.log('Toggle wishlist:', id)}
                            />
                        </div>

                        <div className="flex justify-center">
                            <Pagination
                                designSystem={designSystem}
                                currentPage={currentPage}
                                totalPages={5}
                                onPageChange={setCurrentPage}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <FooterVariant1
                designSystem={designSystem}
                brandName="ModernShop"
                description="Your trusted online shopping destination"
                links={[
                    {
                        title: 'Shop',
                        items: [
                            { label: 'All Products', href: '#' },
                            { label: 'New Arrivals', href: '#' },
                        ],
                    },
                ]}
                socialLinks={{ facebook: '#', twitter: '#', instagram: '#' }}
            />
        </div>
    );
}
