'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

interface FooterVariant1Props {
    designSystem: Partial<IDesignSystem>;
    brandName?: string;
    logo?: string;
    description?: string;
    links?: {
        title: string;
        items: { label: string; href: string }[];
    }[];
    socialLinks?: {
        facebook?: string;
        twitter?: string;
        instagram?: string;
        youtube?: string;
    };
}

export default function FooterVariant1({
    designSystem,
    brandName = 'Store',
    logo,
    description = 'Your trusted online shopping destination',
    links = [],
    socialLinks = {},
}: FooterVariant1Props) {
    const colors = designSystem.colors;

    return (
        <footer
            className="w-full border-t"
            style={{
                backgroundColor: colors?.background,
                borderColor: colors?.border,
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            {logo && <img src={logo} alt={brandName} className="h-8 w-8" />}
                            <span
                                className="text-xl font-bold"
                                style={{ color: colors?.foreground }}
                            >
                                {brandName}
                            </span>
                        </div>
                        <p
                            className="text-sm mb-6"
                            style={{ color: colors?.mutedForeground }}
                        >
                            {description}
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.facebook && (
                                <a
                                    href={socialLinks.facebook}
                                    className="p-2 rounded-full hover:opacity-80 transition-opacity"
                                    style={{ backgroundColor: colors?.muted }}
                                >
                                    <Facebook className="h-5 w-5" style={{ color: colors?.foreground }} />
                                </a>
                            )}
                            {socialLinks.twitter && (
                                <a
                                    href={socialLinks.twitter}
                                    className="p-2 rounded-full hover:opacity-80 transition-opacity"
                                    style={{ backgroundColor: colors?.muted }}
                                >
                                    <Twitter className="h-5 w-5" style={{ color: colors?.foreground }} />
                                </a>
                            )}
                            {socialLinks.instagram && (
                                <a
                                    href={socialLinks.instagram}
                                    className="p-2 rounded-full hover:opacity-80 transition-opacity"
                                    style={{ backgroundColor: colors?.muted }}
                                >
                                    <Instagram className="h-5 w-5" style={{ color: colors?.foreground }} />
                                </a>
                            )}
                            {socialLinks.youtube && (
                                <a
                                    href={socialLinks.youtube}
                                    className="p-2 rounded-full hover:opacity-80 transition-opacity"
                                    style={{ backgroundColor: colors?.muted }}
                                >
                                    <Youtube className="h-5 w-5" style={{ color: colors?.foreground }} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Links */}
                    {links.map((section, index) => (
                        <div key={index}>
                            <h3
                                className="font-semibold mb-4"
                                style={{ color: colors?.foreground }}
                            >
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        <a
                                            href={item.href}
                                            className="text-sm hover:underline"
                                            style={{ color: colors?.mutedForeground }}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div
                    className="mt-12 pt-8 border-t text-center text-sm"
                    style={{
                        borderColor: colors?.border,
                        color: colors?.mutedForeground,
                    }}
                >
                    © {new Date().getFullYear()} {brandName}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
