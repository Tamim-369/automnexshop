'use client';

import { useState } from 'react';
import { useDesignSystem } from '@/hooks/useDesignSystem';
import {
    NavbarVariant2,
    FooterVariant1,
    Breadcrumb,
    ProductSlider,
    ProductCardVariant1,
    Modal,
    WriteReviewForm,
} from '@/components/ecommerce';
import ProductImageGallery from '@/components/ecommerce/ProductDetail/ProductImageGallery';
import ProductInfo from '@/components/ecommerce/ProductDetail/ProductInfo';
import ReviewsSection from '@/components/ecommerce/Reviews/ReviewsSection';

export default function ProductPage() {
    const { designSystem, loading } = useDesignSystem();
    const [showReviewModal, setShowReviewModal] = useState(false);

    if (loading || !designSystem) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    const product = {
        name: 'Premium Wireless Headphones',
        price: 299.99,
        originalPrice: 399.99,
        rating: 4.8,
        reviews: 1234,
        description:
            'Experience premium sound quality with our wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for all-day wear.',
        inStock: true,
        sku: 'WH-1000XM5',
        brand: 'AudioTech',
    };

    const images = [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80',
        'https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&q=80',
        'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&q=80',
    ];

    const reviews = [
        {
            id: '1',
            author: 'John Doe',
            rating: 5,
            date: 'November 10, 2024',
            comment: 'Amazing sound quality! Best headphones I\'ve ever owned.',
            helpful: 24,
            verified: true,
        },
        {
            id: '2',
            author: 'Jane Smith',
            rating: 4,
            date: 'November 8, 2024',
            comment: 'Great product, but a bit pricey. Worth it for the quality though.',
            helpful: 12,
            verified: true,
        },
        {
            id: '3',
            author: 'Mike Johnson',
            rating: 5,
            date: 'November 5, 2024',
            comment: 'The noise cancellation is incredible. Perfect for travel!',
            helpful: 18,
        },
    ];

    const similarProducts = [
        {
            id: '2',
            name: 'Wireless Earbuds Pro',
            price: 199.99,
            originalPrice: 249.99,
            image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80',
            rating: 4.7,
            reviews: 856,
        },
        {
            id: '3',
            name: 'Studio Monitor Headphones',
            price: 349.99,
            image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80',
            rating: 4.9,
            reviews: 643,
        },
        {
            id: '4',
            name: 'Sport Wireless Headphones',
            price: 149.99,
            originalPrice: 199.99,
            image: 'https://images.unsplash.com/photo-1577174881658-0f30157d9285?w=500&q=80',
            rating: 4.6,
            reviews: 432,
        },
        {
            id: '5',
            name: 'Premium Over-Ear Headphones',
            price: 279.99,
            image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80',
            rating: 4.8,
            reviews: 521,
        },
    ];

    return (
        <div style={{ backgroundColor: designSystem.colors?.background }}>
            <NavbarVariant2
                designSystem={designSystem}
                isUserLoggedIn={false}
                cartItemCount={3}
                wishlistCount={5}
                brandName="ModernShop"
                categories={['Electronics', 'Fashion', 'Home', 'Sports']}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <Breadcrumb
                        designSystem={designSystem}
                        items={[
                            { label: 'Electronics', href: '/category/electronics' },
                            { label: 'Headphones', href: '/category/headphones' },
                            { label: product.name },
                        ]}
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <ProductImageGallery designSystem={designSystem} images={images} />
                    <ProductInfo
                        designSystem={designSystem}
                        product={product}
                        onAddToCart={(qty) => console.log('Add to cart:', qty)}
                        onAddToWishlist={() => console.log('Add to wishlist')}
                    />
                </div>

                <div className="mb-16">
                    <ReviewsSection
                        designSystem={designSystem}
                        reviews={reviews}
                        averageRating={4.8}
                        totalReviews={1234}
                        onWriteReview={() => setShowReviewModal(true)}
                        onHelpful={(id) => console.log('Helpful:', id)}
                    />
                </div>

                <div className="mb-16">
                    <ProductSlider
                        designSystem={designSystem}
                        title="Similar Products"
                        products={similarProducts}
                        renderProduct={(product) => (
                            <div className="w-64">
                                <ProductCardVariant1
                                    designSystem={designSystem}
                                    product={product}
                                    onAddToCart={(id) => console.log('Add to cart:', id)}
                                    onToggleWishlist={(id) => console.log('Toggle wishlist:', id)}
                                />
                            </div>
                        )}
                    />
                </div>
            </div>

            <Modal
                designSystem={designSystem}
                isOpen={showReviewModal}
                onClose={() => setShowReviewModal(false)}
                title="Write a Review"
                size="md"
            >
                <WriteReviewForm
                    designSystem={designSystem}
                    onSubmit={(review) => {
                        console.log('Review submitted:', review);
                        setShowReviewModal(false);
                        alert('Thank you for your review!');
                    }}
                    onCancel={() => setShowReviewModal(false)}
                />
            </Modal>

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
    );
}
