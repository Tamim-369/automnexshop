'use client';

import { useDesignSystem } from '@/hooks/useDesignSystem';
import {
    NavbarVariant2,
    FooterVariant1,
    Breadcrumb,
    CartItem,
    CartSummary,
    EmptyState,
} from '@/components/ecommerce';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export default function CartPage() {
    const { designSystem, loading } = useDesignSystem();
    const [cartItems, setCartItems] = useState([
        {
            id: '1',
            name: 'Wireless Headphones',
            price: 299.99,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
            variant: 'Black',
        },
        {
            id: '2',
            name: 'Smart Watch',
            price: 449.99,
            quantity: 2,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
            variant: 'Silver',
        },
    ]);

    if (loading || !designSystem) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 10;
    const tax = subtotal * 0.1;

    const handleUpdateQuantity = (id: string, quantity: number) => {
        setCartItems((items) =>
            items.map((item) => (item.id === id ? { ...item, quantity } : item))
        );
    };

    const handleRemove = (id: string) => {
        setCartItems((items) => items.filter((item) => item.id !== id));
    };

    return (
        <div style={{ backgroundColor: designSystem.colors?.background, minHeight: '100vh' }}>
            <NavbarVariant2
                designSystem={designSystem}
                isUserLoggedIn={false}
                cartItemCount={cartItems.length}
                wishlistCount={5}
                brandName="ModernShop"
                categories={['Electronics', 'Fashion', 'Home', 'Sports']}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <Breadcrumb
                        designSystem={designSystem}
                        items={[{ label: 'Shopping Cart' }]}
                    />
                </div>

                <h1
                    className="text-3xl font-bold mb-8"
                    style={{ color: designSystem.colors?.foreground }}
                >
                    Shopping Cart
                </h1>

                {cartItems.length === 0 ? (
                    <EmptyState
                        designSystem={designSystem}
                        icon={ShoppingCart}
                        title="Your cart is empty"
                        description="Add some products to your cart to get started"
                        actionLabel="Continue Shopping"
                        onAction={() => (window.location.href = '/')}
                    />
                ) : (
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-4">
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    designSystem={designSystem}
                                    item={item}
                                    onUpdateQuantity={handleUpdateQuantity}
                                    onRemove={handleRemove}
                                />
                            ))}
                        </div>

                        <div>
                            <CartSummary
                                designSystem={designSystem}
                                subtotal={subtotal}
                                shipping={shipping}
                                tax={tax}
                                onCheckout={() => (window.location.href = '/checkout')}
                                isEmpty={cartItems.length === 0}
                            />
                        </div>
                    </div>
                )}
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
                socialLinks={{
                    facebook: '#',
                    twitter: '#',
                    instagram: '#',
                }}
            />
        </div>
    );
}
