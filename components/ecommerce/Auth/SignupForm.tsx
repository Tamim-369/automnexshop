'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { Button } from '../Button';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

interface SignupFormProps {
    designSystem: Partial<IDesignSystem>;
    onSignup?: (name: string, email: string, password: string) => void;
    onLogin?: () => void;
}

export default function SignupForm({
    designSystem,
    onSignup,
    onLogin,
}: SignupFormProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.md || '0.5rem';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        onSignup?.(name, email, password);
    };

    return (
        <div
            className="w-full max-w-md p-8"
            style={{
                backgroundColor: colors?.card,
                borderRadius: roundness,
                border: `1px solid ${colors?.border}`,
            }}
        >
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: colors?.foreground }}>
                Create Account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: colors?.foreground }}>
                        Full Name
                    </label>
                    <div className="relative">
                        <User
                            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5"
                            style={{ color: colors?.mutedForeground }}
                        />
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                            className="w-full pl-10 pr-4 py-3 focus:outline-none focus:ring-2 transition-all"
                            style={{
                                borderRadius: roundness,
                                backgroundColor: colors?.background,
                                border: `1px solid ${colors?.border}`,
                                color: colors?.foreground,
                            }}
                        />
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: colors?.foreground }}>
                        Email
                    </label>
                    <div className="relative">
                        <Mail
                            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5"
                            style={{ color: colors?.mutedForeground }}
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full pl-10 pr-4 py-3 focus:outline-none focus:ring-2 transition-all"
                            style={{
                                borderRadius: roundness,
                                backgroundColor: colors?.background,
                                border: `1px solid ${colors?.border}`,
                                color: colors?.foreground,
                            }}
                        />
                    </div>
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: colors?.foreground }}>
                        Password
                    </label>
                    <div className="relative">
                        <Lock
                            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5"
                            style={{ color: colors?.mutedForeground }}
                        />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Create a password"
                            required
                            minLength={8}
                            className="w-full pl-10 pr-12 py-3 focus:outline-none focus:ring-2 transition-all"
                            style={{
                                borderRadius: roundness,
                                backgroundColor: colors?.background,
                                border: `1px solid ${colors?.border}`,
                                color: colors?.foreground,
                            }}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                            {showPassword ? (
                                <EyeOff className="h-5 w-5" style={{ color: colors?.mutedForeground }} />
                            ) : (
                                <Eye className="h-5 w-5" style={{ color: colors?.mutedForeground }} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Confirm Password */}
                <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: colors?.foreground }}>
                        Confirm Password
                    </label>
                    <div className="relative">
                        <Lock
                            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5"
                            style={{ color: colors?.mutedForeground }}
                        />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            required
                            className="w-full pl-10 pr-4 py-3 focus:outline-none focus:ring-2 transition-all"
                            style={{
                                borderRadius: roundness,
                                backgroundColor: colors?.background,
                                border: `1px solid ${colors?.border}`,
                                color: colors?.foreground,
                            }}
                        />
                    </div>
                </div>

                {/* Submit */}
                <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    roundness="md"
                    colors={designSystem.button?.primary}
                    className="w-full"
                >
                    Create Account
                </Button>
            </form>

            {/* Login Link */}
            <p className="mt-6 text-center text-sm" style={{ color: colors?.mutedForeground }}>
                Already have an account?{' '}
                <button
                    onClick={onLogin}
                    className="font-medium hover:underline"
                    style={{ color: colors?.primary }}
                >
                    Sign In
                </button>
            </p>
        </div>
    );
}
