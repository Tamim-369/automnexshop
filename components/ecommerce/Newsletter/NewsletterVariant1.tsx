'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { Mail } from 'lucide-react';
import { useState } from 'react';

interface NewsletterVariant1Props {
    designSystem: Partial<IDesignSystem>;
    title?: string;
    description?: string;
    onSubscribe?: (email: string) => void;
}

export default function NewsletterVariant1({
    designSystem,
    title = 'Subscribe to our newsletter',
    description = 'Get the latest updates and exclusive offers',
    onSubscribe,
}: NewsletterVariant1Props) {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.md || '0.5rem';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);
        await onSubscribe?.(email);
        setEmail('');
        setIsSubmitting(false);
    };

    return (
        <div
            className="p-8 md:p-12"
            style={{
                backgroundColor: colors?.muted,
                borderRadius: roundness,
            }}
        >
            <div className="max-w-2xl mx-auto text-center">
                <Mail
                    className="h-12 w-12 mx-auto mb-4"
                    style={{ color: colors?.primary }}
                />
                <h2
                    className="text-2xl md:text-3xl font-bold mb-3"
                    style={{ color: colors?.foreground }}
                >
                    {title}
                </h2>
                <p
                    className="text-base mb-6"
                    style={{ color: colors?.mutedForeground }}
                >
                    {description}
                </p>

                <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="flex-1 px-4 py-3 focus:outline-none focus:ring-2 transition-all"
                        style={{
                            borderRadius: roundness,
                            backgroundColor: colors?.background,
                            border: `1px solid ${colors?.border}`,
                            color: colors?.foreground,
                        }}
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-3 font-medium transition-all disabled:opacity-50"
                        style={{
                            borderRadius: roundness,
                            backgroundColor: colors?.primary,
                            color: '#ffffff',
                        }}
                    >
                        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                    </button>
                </form>
            </div>
        </div>
    );
}
