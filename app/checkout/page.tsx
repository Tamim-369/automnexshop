'use client';

import { useDesignSystem } from '@/hooks/useDesignSystem';
import { NavbarVariant2, FooterVariant1, Breadcrumb, CartSummary } from '@/components/ecommerce';
import CheckoutForm from '@/components/ecommerce/Checkout/CheckoutForm';

export default function CheckoutPage() {
    const { designSystem, loading } = useDesignSystem();

    if (loading || !designSystem) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    const cartTotal = 1049.97;
    const shipping = 10;
    const tax = cartTotal * 0.1;

    return (
        <div style={{ backgroundColor: designSystem.colors?.background, minHeight: '100vh' }}>
            <NavbarVariant2
                designSystem={designSystem}
                isUserLoggedIn={false}
                cartItemCount={2}
                wishlistCount={5}
                brandName="ModernShop"
                categories={['Electronics', 'Fashion', 'Home', 'Sports']}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <Breadcrumb
                        designSystem={designSystem}
                        items={[{ label: 'Cart', href: '/cart' }, { label: 'Checkout' }]}
                    />
                </div>

                <h1 className="text-3xl font-bold mb-8" style={{ color: designSystem.colors?.foreground }}>
                    Checkout
                </h1>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <CheckoutForm
                            designSystem={designSystem}
                            onSubmit={(data) => console.log('Order placed:', data)}
                        />
                    </div>

                    <div>
                        <CartSummary
                            designSystem={designSystem}
                            subtotal={cartTotal}
                            shipping={shipping}
                            tax={tax}
                            onCheckout={() => console.log('Processing payment...')}
                            isEmpty={false}
                        />
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
                        items: [{ label: 'All Products', href: '#' }],
                    },
                ]}
                socialLinks={{ facebook: '#', twitter: '#', instagram: '#' }}
            />
        </div>
    );
}
