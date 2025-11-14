'use client';

import { useDesignSystem } from '@/hooks/useDesignSystem';
import { NavbarVariant2, FooterVariant1 } from '@/components/ecommerce';
import UserProfile from '@/components/ecommerce/Profile/UserProfile';
import OrderHistory from '@/components/ecommerce/Profile/OrderHistory';

export default function ProfilePage() {
    const { designSystem, loading } = useDesignSystem();

    if (loading || !designSystem) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    const user = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1 (555) 123-4567',
        address: '123 Main St, New York, NY 10001',
        memberSince: 'January 2024',
    };

    const orders = [
        {
            id: 'ORD-001',
            date: 'November 10, 2024',
            total: 299.99,
            status: 'delivered' as const,
            items: 2,
        },
        {
            id: 'ORD-002',
            date: 'November 5, 2024',
            total: 449.99,
            status: 'shipped' as const,
            items: 1,
        },
        {
            id: 'ORD-003',
            date: 'October 28, 2024',
            total: 129.99,
            status: 'delivered' as const,
            items: 3,
        },
    ];

    return (
        <div style={{ backgroundColor: designSystem.colors?.background, minHeight: '100vh' }}>
            <NavbarVariant2
                designSystem={designSystem}
                isUserLoggedIn={true}
                cartItemCount={3}
                wishlistCount={5}
                brandName="ModernShop"
                categories={['Electronics', 'Fashion', 'Home', 'Sports']}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold mb-8" style={{ color: designSystem.colors?.foreground }}>
                    My Account
                </h1>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                        <UserProfile
                            designSystem={designSystem}
                            user={user}
                            onEdit={() => console.log('Edit profile')}
                        />
                    </div>

                    <div className="lg:col-span-2">
                        <OrderHistory
                            designSystem={designSystem}
                            orders={orders}
                            onViewOrder={(id) => console.log('View order:', id)}
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
