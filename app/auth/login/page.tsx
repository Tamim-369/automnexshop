'use client';

import { useDesignSystem } from '@/hooks/useDesignSystem';
import LoginForm from '@/components/ecommerce/Auth/LoginForm';

export default function LoginPage() {
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
            <LoginForm
                designSystem={designSystem}
                onLogin={(email, password) => console.log('Login:', email, password)}
                onForgotPassword={() => console.log('Forgot password')}
                onSignUp={() => (window.location.href = '/auth/signup')}
            />
        </div>
    );
}
