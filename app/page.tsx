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
  const { designSystem, loading, error } = useDesignSystem();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !designSystem) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md p-8">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Design System Not Found</h1>
          <p className="text-gray-600 mb-6">
            Please seed the database first by running:
          </p>
          <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-6">
            curl -X POST http://localhost:3000/api/design-system/seed
          </div>
          <p className="text-sm text-gray-500">
            Or run: <code className="bg-gray-200 px-2 py-1 rounded">npm run seed</code>
          </p>
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
      {/* Quick Dashboard Link */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="/dashboard"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-full shadow-lg transition-all hover:scale-105"
        >
          <span>🎨</span>
          <span>Customize Store</span>
        </a>
      </div>

      {/* Navbar */}
      <NavbarVariant2
        designSystem={designSystem}
        isUserLoggedIn={false}
        cartItemCount={3}
        wishlistCount={5}
        brandName="ModernShop"
        categories={['Electronics', 'Fashion', 'Home', 'Sports', 'Beauty', 'Books']}
      />

      {/* Quick Links Bar */}
      <div className="bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-center gap-6 text-sm">
            <a href="/shop" className="hover:underline">Shop All</a>
            <a href="/shop?sort=newest" className="hover:underline">New Arrivals</a>
            <a href="/shop?sale=true" className="hover:underline">Sale</a>
            <a href="/dashboard" className="hover:underline">Customize Store</a>
          </div>
        </div>
      </div>

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
          onCategoryClick={(name) => (window.location.href = `/shop?category=${name.toLowerCase()}`)}
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
          onProductClick={(id) => (window.location.href = `/product/${id}`)}
          renderProduct={(product) => (
            <div className="w-64" onClick={() => (window.location.href = `/product/${product.id}`)}>
              <ProductCardVariant1
                designSystem={designSystem}
                product={product}
                onAddToCart={(id) => {
                  alert('Added to cart!');
                  console.log('Add to cart:', id);
                }}
                onToggleWishlist={(id) => {
                  alert('Added to wishlist!');
                  console.log('Toggle wishlist:', id);
                }}
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

      {/* Footer */}
      <FooterVariant1
        designSystem={designSystem}
        brandName="ModernShop"
        description="Your trusted online shopping destination for quality products at great prices."
        links={[
          {
            title: 'Shop',
            items: [
              { label: 'All Products', href: '/shop' },
              { label: 'Best Sellers', href: '/shop?sort=featured' },
              { label: 'New Arrivals', href: '/shop?sort=newest' },
              { label: 'Sale', href: '/shop?sale=true' },
            ],
          },
          {
            title: 'Support',
            items: [
              { label: 'Contact Us', href: '/contact' },
              { label: 'FAQs', href: '/faq' },
              { label: 'Shipping Info', href: '/shipping' },
              { label: 'Returns', href: '/returns' },
            ],
          },
          {
            title: 'Company',
            items: [
              { label: 'About Us', href: '/about' },
              { label: 'Careers', href: '/careers' },
              { label: 'Dashboard', href: '/dashboard' },
              { label: 'Profile', href: '/profile' },
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
