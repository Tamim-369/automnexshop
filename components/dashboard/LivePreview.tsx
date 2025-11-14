'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import {
    NavbarVariant2,
    BannerVariant1,
    FeatureVariant2,
    ProductCardVariant1,
    FooterVariant1,
} from '@/components/ecommerce';
import { Truck, Shield, CreditCard, Headphones } from 'lucide-react';

interface LivePreviewProps {
    designSystem: Partial<IDesignSystem>;
    mode: 'desktop' | 'tablet' | 'mobile';
}

export default function LivePreview({ designSystem, mode }: LivePreviewProps) {
    const features = [
        { icon: Truck, title: 'Free Shipping', description: 'On orders over $50' },
        { icon: Shield, title: 'Secure Payment', description: '100% protected' },
        { icon: CreditCard, title: 'Easy Returns', description: '30-day guarantee' },
        { icon: Headphones, title: '24/7 Support', description: 'Dedicated support' },
    ];

    const sampleProduct = {
        id: '1',
        name: 'Premium Wireless Headphones',
        price: 299.99,
        originalPrice: 399.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
        rating: 4.8,
        reviews: 1234,
    };

    const getContainerWidth = () => {
        switch (mode) {
            case 'mobile':
                return 'max-w-[375px]';
            case 'tablet':
                return 'max-w-[768px]';
            default:
                return 'w-full';
        }
    };

    return (
        <div className={`${getContainerWidth()} mx-auto bg-white rounded-lg shadow-2xl overflow-hidden`}>
            <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                {/* Navbar Preview */}
                <NavbarVariant2
                    designSystem={designSystem}
                    isUserLoggedIn={false}
                    cartItemCount={3}
                    wishlistCount={5}
                    brandName="YourStore"
                    categories={['Electronics', 'Fashion', 'Home', 'Sports']}
                />

                {/* Banner Preview */}
                <div className="p-4">
                    <BannerVariant1
                        designSystem={designSystem}
                        title="Summer Sale 2024"
                        subtitle="Limited Time"
                        description="Up to 50% off on selected items"
                        ctaText="Shop Now"
                        backgroundImage="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80"
                    />
                </div>

                {/* Features Preview */}
                <div className="p-4">
                    <FeatureVariant2 designSystem={designSystem} features={features} />
                </div>

                {/* Product Card Preview */}
                <div className="p-4">
                    <h3 className="text-xl font-bold mb-4" style={{ color: designSystem.colors?.foreground }}>
                        Product Preview
                    </h3>
                    <div className="max-w-xs">
                        <ProductCardVariant1
                            designSystem={designSystem}
                            product={sampleProduct}
                            onAddToCart={() => { }}
                            onToggleWishlist={() => { }}
                        />
                    </div>
                </div>

                {/* Footer Preview */}
                <FooterVariant1
                    designSystem={designSystem}
                    brandName="YourStore"
                    description="Your trusted online shopping destination"
                    links={[
                        {
                            title: 'Shop',
                            items: [
                                { label: 'All Products', href: '#' },
                                { label: 'New Arrivals', href: '#' },
                            ],
                        },
                        {
                            title: 'Support',
                            items: [
                                { label: 'Contact Us', href: '#' },
                                { label: 'FAQs', href: '#' },
                            ],
                        },
                    ]}
                    socialLinks={{
                        facebook: '#',
                        twitter: '#',
                        instagram: '#',
                    }}
                />
            </div>
        </div>
    );
}
