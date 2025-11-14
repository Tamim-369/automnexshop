'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { Mail } from 'lucide-react';
import { Button } from '../Button';

interface FooterVariant2Props {
    designSystem: Partial<IDesignSystem>;
    brandName?: string;
    newsletterTitle?: string;
    newsletterDescription?: string;
}

export default function FooterVariant2({
    designSystem,
    brandName = 'Store',
    newsletterTitle = 'Subscribe to our newsletter',
    newsletterDescription = 'Get the latest updates and exclusive offers',
}: FooterVariant2Props) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.md || '0.5rem';

    return (
        <footer
            className="w-full"
            style={{
                backgroundColor: colors?.foreground,
            }}
        >
            {/* Newsletter Section */}
            <div
                className="border-b"
                style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {newsletterTitle}
                            </h3>
                            <p className="text-white/70">
                                {newsletterDescription}
                            </p>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-3 flex-1 md:w-80 focus:outline-none focus:ring-2"
                                style={{
                                    borderRadius: roundness,
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    color: '#ffffff',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                }}
                            />
                            <Button
                                variant="primary"
                                size="md"
                                roundness="md"
                                colors={designSystem.button?.primary}
                            >
                                <Mail className="h-5 w-5 md:mr-2" />
                                <span className="hidden md:inline">Subscribe</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/70 text-sm">
                        © {new Date().getFullYear()} {brandName}. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
