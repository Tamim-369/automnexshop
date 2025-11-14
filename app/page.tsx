'use client';

import { useDesignSystem } from '@/hooks/useDesignSystem';
import {
  NavbarVariant2,
  BannerVariant1,
  FeatureVariant2,
  CategoryGrid,
  ProductSlider,
  DealVariant1,
  ProductCardVariant1,
  FooterVariant1,
} from '@/components/ecommerce';
import { Truck, Shield, CreditCard, Headphones } from 'lucide-react';

export default function Home() {
  const { designSystem, loading } = useDesignSystem();

  if (loading || !designSystem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Mock data
  const categories = [
    {
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80',
      productCount: 1234,
    },
    {
      name: 'Fashion',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
      productCount: 856,
    },
    {
      name: 'Home & Living',
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80',
      productCount: 642,
    },
    {
      name: 'Sports',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
      productCount: 423,
    },
    {
      name: 'Beauty',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
      productCount: 789,
    },
    {
      name: 'Books',
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&q=80',
      productCount: 567,
    },
    {
      name: 'Toys',
      image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800&q=80',
      productCount: 345,
    },
    {
      name: 'Automotive',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
      productCount: 234,
    },
  ];

  const trendingProducts = [
    {
      id: '1',
      name: 'Wireless Noise Cancelling Headphones',
      price: 299.99,
      originalPrice: 399.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
      rating: 4.8,
      reviews: 1234,
    },
    {
      id: '2',
      name: 'Smart Watch Series 7',
      price: 449.99,
      originalPrice: 549.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
      rating: 4.9,
      reviews: 2156,
    },
    {
      id: '3',
      name: 'Premium Leather Backpack',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
      rating: 4.7,
      reviews: 856,
    },
    {
      id: '4',
      name: 'Minimalist Running Shoes',
      price: 89.99,
      originalPrice: 129.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
      rating: 4.6,
      reviews: 643,
    },
    {
      id: '5',
      name: 'Portable Bluetooth Speaker',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80',
      rating: 4.5,
      reviews: 432,
    },
    {
      id: '6',
      name: 'Professional Camera Lens',
      price: 899.99,
      image: 'https://images.unsplash.com/photo-1606980707146-b3a0c2c8238f?w=500&q=80',
      rating: 4.9,
      reviews: 321,
    },
  ];

  const newArrivals = [
    {
      id: '7',
      name: 'Ergonomic Office Chair',
      price: 349.99,
      image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&q=80',
      rating: 4.8,
      reviews: 234,
    },
    {
      id: '8',
      name: 'Mechanical Keyboard RGB',
      price: 159.99,
      image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80',
      rating: 4.7,
      reviews: 567,
    },
    {
      id: '9',
      name: 'Wireless Gaming Mouse',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
      rating: 4.6,
      reviews: 432,
    },
    {
      id: '10',
      name: 'USB-C Hub Adapter',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&q=80',
      rating: 4.5,
      reviews: 321,
    },
    {
      id: '11',
      name: 'Desk Lamp LED',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80',
      rating: 4.4,
      reviews: 234,
    },
    {
      id: '12',
      name: 'Laptop Stand Aluminum',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
      rating: 4.7,
      reviews: 456,
    },
  ];

  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders over $50',
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: '100% protected',
    },
    {
      icon: CreditCard,
      title: 'Easy Returns',
      description: '30-day guarantee',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated support',
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: designSystem.colors?.background }}>
      {/* Navbar */}
      <NavbarVariant2
        designSystem={designSystem}
        isUserLoggedIn={false}
        cartItemCount={3}
        wishlistCount={5}
        brandName="ModernShop"
        categories={['Electronics', 'Fashion', 'Home', 'Sports', 'Beauty', 'Books']}
      />

      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BannerVariant1
          designSystem={designSystem}
          title="Summer Sale 2024"
          subtitle="Limited Time Offer"
          description="Get up to 50% off on selected items. Free shipping on all orders over $50."
          ctaText="Shop Now"
          backgroundImage="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&q=80"
          overlay={true}
        />
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FeatureVariant2 designSystem={designSystem} features={features} />
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CategoryGrid
          designSystem={designSystem}
          title="Shop by Category"
          categories={categories}
          variant="featured"
          onCategoryClick={(name) => console.log('Category clicked:', name)}
        />
      </div>

      {/* Flash Deal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <DealVariant1
          designSystem={designSystem}
          title="Flash Sale! Up to 70% Off"
          description="Don't miss out on our biggest deals of the season"
          endTime={new Date(Date.now() + 24 * 60 * 60 * 1000)}
          image="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1600&q=80"
          ctaText="Shop Flash Sale"
        />
      </div>

      {/* Trending Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProductSlider
          designSystem={designSystem}
          title="Trending Now"
          products={trendingProducts}
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

      {/* New Arrivals */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProductSlider
          designSystem={designSystem}
          title="New Arrivals"
          products={newArrivals}
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

      {/* Newsletter Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className="p-12 text-center rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${designSystem.colors?.primary} 0%, ${designSystem.colors?.secondary} 100%)`,
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get exclusive deals, new arrivals, and insider-only discounts delivered to your inbox
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2"
              style={{ color: designSystem.colors?.foreground }}
            />
            <button
              className="px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
              style={{
                backgroundColor: designSystem.colors?.accent,
                color: '#ffffff',
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterVariant1
        designSystem={designSystem}
        brandName="ModernShop"
        description="Your trusted online shopping destination for quality products at great prices."
        links={[
          {
            title: 'Shop',
            items: [
              { label: 'All Products', href: '#' },
              { label: 'Best Sellers', href: '#' },
              { label: 'New Arrivals', href: '#' },
              { label: 'Sale', href: '#' },
            ],
          },
          {
            title: 'Support',
            items: [
              { label: 'Contact Us', href: '#' },
              { label: 'FAQs', href: '#' },
              { label: 'Shipping Info', href: '#' },
              { label: 'Returns', href: '#' },
            ],
          },
          {
            title: 'Company',
            items: [
              { label: 'About Us', href: '#' },
              { label: 'Careers', href: '#' },
              { label: 'Press', href: '#' },
              { label: 'Blog', href: '#' },
            ],
          },
        ]}
        socialLinks={{
          facebook: 'https://facebook.com',
          twitter: 'https://twitter.com',
          instagram: 'https://instagram.com',
          youtube: 'https://youtube.com',
        }}
      />
    </div>
  );
}
