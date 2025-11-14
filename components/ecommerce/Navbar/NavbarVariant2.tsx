'use client';

import { ShoppingCart, User, Heart, Menu, X } from 'lucide-react';
import { Button } from '../Button';
import { IDesignSystem } from '@/models/DesignSystem';
import { useState } from 'react';

interface NavbarVariant2Props {
    designSystem: Partial<IDesignSystem>;
    isUserLoggedIn?: boolean;
    cartItemCount?: number;
    wishlistCount?: number;
    logo?: string;
    brandName?: string;
    categories?: string[];
}

export default function NavbarVariant2({
    designSystem,
    isUserLoggedIn = false,
    cartItemCount = 0,
    wishlistCount = 0,
    logo,
    brandName = 'Store',
    categories = ['Electronics', 'Fashion', 'Home', 'Sports'],
}: NavbarVariant2Props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const colors = designSystem.colors;

    return (
        <nav
            className="w-full"
            style={{
                backgroundColor: colors?.background,
            }}
        >
            {/* Top Bar */}
            <div
                className="border-b"
                style={{
                    borderColor: colors?.border,
                    backgroundColor: colors?.muted,
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-10 text-sm">
                        <span style={{ color: colors?.mutedForeground }}>
                            Free shipping on orders over $50
                        </span>
                        <div className="flex items-center gap-4">
                            <button
                                className="hover:underline"
                                style={{ color: colors?.mutedForeground }}
                            >
                                Track Order
                            </button>
                            <button
                                className="hover:underline"
                                style={{ color: colors?.mutedForeground }}
                            >
                                Help
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <div className="border-b" style={{ borderColor: colors?.border }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            {logo && <img src={logo} alt={brandName} className="h-10 w-10" />}
                            <span
                                className="text-2xl font-bold"
                                style={{ color: colors?.primary }}
                            >
                                {brandName}
                            </span>
                        </div>

                        {/* Desktop Categories */}
                        <div className="hidden lg:flex items-center gap-6">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className="font-medium hover:opacity-80 transition-opacity"
                                    style={{ color: colors?.foreground }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                            {isUserLoggedIn ? (
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    roundness="full"
                                    colors={designSystem.button?.ghost}
                                >
                                    <User className="h-5 w-5" />
                                </Button>
                            ) : (
                                <Button
                                    variant="outline"
                                    size="sm"
                                    roundness="full"
                                    colors={designSystem.button?.outline}
                                >
                                    Login
                                </Button>
                            )}

                            <Button
                                variant="ghost"
                                size="icon"
                                roundness="full"
                                colors={designSystem.button?.ghost}
                                className="relative"
                            >
                                <Heart className="h-5 w-5" />
                                {wishlistCount > 0 && (
                                    <span
                                        className="absolute -top-1 -right-1 h-5 w-5 rounded-full text-xs flex items-center justify-center font-semibold"
                                        style={{
                                            backgroundColor: colors?.error,
                                            color: '#ffffff',
                                        }}
                                    >
                                        {wishlistCount}
                                    </span>
                                )}
                            </Button>

                            <Button
                                variant="primary"
                                size="icon"
                                roundness="full"
                                colors={designSystem.button?.primary}
                                className="relative"
                            >
                                <ShoppingCart className="h-5 w-5" />
                                {cartItemCount > 0 && (
                                    <span
                                        className="absolute -top-1 -right-1 h-5 w-5 rounded-full text-xs flex items-center justify-center font-semibold"
                                        style={{
                                            backgroundColor: colors?.accent,
                                            color: '#ffffff',
                                        }}
                                    >
                                        {cartItemCount}
                                    </span>
                                )}
                            </Button>

                            <Button
                                variant="ghost"
                                size="icon"
                                roundness="md"
                                colors={designSystem.button?.ghost}
                                className="lg:hidden"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div
                    className="lg:hidden border-b"
                    style={{
                        backgroundColor: colors?.background,
                        borderColor: colors?.border,
                    }}
                >
                    <div className="px-4 py-4 space-y-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className="block w-full text-left px-4 py-2 rounded-md hover:bg-opacity-80"
                                style={{
                                    color: colors?.foreground,
                                    backgroundColor: colors?.muted,
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
