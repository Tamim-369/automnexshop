'use client';

import { ShoppingCart, User, Search } from 'lucide-react';
import { Button } from '../Button';
import { IDesignSystem } from '@/models/DesignSystem';

interface NavbarVariant3Props {
    designSystem: Partial<IDesignSystem>;
    isUserLoggedIn?: boolean;
    cartItemCount?: number;
    logo?: string;
    brandName?: string;
    userName?: string;
}

export default function NavbarVariant3({
    designSystem,
    isUserLoggedIn = false,
    cartItemCount = 0,
    logo,
    brandName = 'Store',
    userName,
}: NavbarVariant3Props) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.lg || '0.75rem';

    return (
        <nav
            className="w-full shadow-md"
            style={{
                backgroundColor: colors?.primary,
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    {/* Logo & Search Combined */}
                    <div className="flex items-center gap-6 flex-1">
                        <div className="flex items-center gap-2">
                            {logo && <img src={logo} alt={brandName} className="h-12 w-12" />}
                            <span className="text-2xl font-bold text-white">
                                {brandName}
                            </span>
                        </div>

                        <div className="hidden md:flex flex-1 max-w-2xl">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="What are you looking for?"
                                    className="w-full px-6 py-3 pr-12 focus:outline-none focus:ring-2"
                                    style={{
                                        borderRadius: roundness,
                                        backgroundColor: 'white',
                                    }}
                                />
                                <button
                                    className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2"
                                    style={{
                                        borderRadius: roundness,
                                        backgroundColor: colors?.accent,
                                    }}
                                >
                                    <Search className="h-5 w-5 text-white" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* User Actions */}
                    <div className="flex items-center gap-4">
                        {isUserLoggedIn ? (
                            <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-white bg-opacity-10">
                                <User className="h-5 w-5 text-white" />
                                <span className="text-white font-medium">{userName || 'Account'}</span>
                            </div>
                        ) : (
                            <Button
                                variant="secondary"
                                size="md"
                                roundness="lg"
                                colors={designSystem.button?.secondary}
                                className="hidden md:inline-flex"
                            >
                                Sign In
                            </Button>
                        )}

                        <button
                            className="relative px-4 py-2 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-all"
                            style={{ borderRadius: roundness }}
                        >
                            <ShoppingCart className="h-6 w-6 text-white" />
                            {cartItemCount > 0 && (
                                <span
                                    className="absolute -top-2 -right-2 h-6 w-6 rounded-full text-xs flex items-center justify-center font-bold"
                                    style={{
                                        backgroundColor: colors?.accent,
                                        color: '#ffffff',
                                    }}
                                >
                                    {cartItemCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
