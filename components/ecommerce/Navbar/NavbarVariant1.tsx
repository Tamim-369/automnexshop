'use client';

import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { Button } from '../Button';
import { IDesignSystem } from '@/models/DesignSystem';

interface NavbarVariant1Props {
    designSystem: Partial<IDesignSystem>;
    isUserLoggedIn?: boolean;
    cartItemCount?: number;
    logo?: string;
    brandName?: string;
    searchEnabled?: boolean;
}

export default function NavbarVariant1({
    designSystem,
    isUserLoggedIn = false,
    cartItemCount = 0,
    logo,
    brandName = 'Store',
    searchEnabled = true,
}: NavbarVariant1Props) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.md || '0.5rem';

    return (
        <nav
            className="w-full border-b"
            style={{
                backgroundColor: colors?.background,
                borderColor: colors?.border,
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="icon"
                            roundness="md"
                            colors={designSystem.button?.ghost}
                            className="lg:hidden"
                        >
                            <Menu className="h-6 w-6" />
                        </Button>
                        <div className="flex items-center gap-2">
                            {logo && <img src={logo} alt={brandName} className="h-8 w-8" />}
                            <span
                                className="text-xl font-bold"
                                style={{ color: colors?.foreground }}
                            >
                                {brandName}
                            </span>
                        </div>
                    </div>

                    {/* Search Bar */}
                    {searchEnabled && (
                        <div className="hidden md:flex flex-1 max-w-md mx-8">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full px-4 py-2 pl-10 border focus:outline-none focus:ring-2"
                                    style={{
                                        borderRadius: roundness,
                                        borderColor: colors?.border,
                                        backgroundColor: colors?.muted,
                                    }}
                                />
                                <Search
                                    className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5"
                                    style={{ color: colors?.mutedForeground }}
                                />
                            </div>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            roundness="md"
                            colors={designSystem.button?.ghost}
                        >
                            <User className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            roundness="md"
                            colors={designSystem.button?.ghost}
                            className="relative"
                        >
                            <ShoppingCart className="h-5 w-5" />
                            {cartItemCount > 0 && (
                                <span
                                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full text-xs flex items-center justify-center font-semibold"
                                    style={{
                                        backgroundColor: colors?.error,
                                        color: '#ffffff',
                                    }}
                                >
                                    {cartItemCount}
                                </span>
                            )}
                        </Button>
                        {!isUserLoggedIn && (
                            <Button
                                variant="primary"
                                size="sm"
                                roundness="md"
                                colors={designSystem.button?.primary}
                            >
                                Sign In
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
