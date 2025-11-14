'use client';

import { useDesignSystem } from '@/hooks/useDesignSystem';
import SignupForm from '@/components/ecommerce/Auth/SignupForm';

export default function SignupPage() {
    const { designSystem, loading } = useDesignSystem();

    if (loading || !designSystem) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center p-4"
            style={{ backgroundColor: designSystem.colors?.muted }}
        >
            <SignupForm
                designSystem={designSystem}
                onSignup={(name, email, password) => console.log('Signup:', name, email, password)}
                onLogin={() => (window.location.href = '/auth/login')}
            />
        </div>
    );
}
