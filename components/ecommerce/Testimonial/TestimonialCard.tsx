'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
    designSystem: Partial<IDesignSystem>;
    testimonial: {
        name: string;
        role?: string;
        avatar?: string;
        rating: number;
        comment: string;
    };
    variant?: 'default' | 'minimal' | 'card';
}

export default function TestimonialCard({
    designSystem,
    testimonial,
    variant = 'default',
}: TestimonialCardProps) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.lg || '0.75rem';

    if (variant === 'minimal') {
        return (
            <div className="text-center">
                <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className="h-5 w-5"
                            fill={i < testimonial.rating ? colors?.accent : 'none'}
                            style={{ color: i < testimonial.rating ? colors?.accent : colors?.border }}
                        />
                    ))}
                </div>
                <p
                    className="text-lg italic mb-4"
                    style={{ color: colors?.foreground }}
                >
                    "{testimonial.comment}"
                </p>
                <p className="font-semibold" style={{ color: colors?.foreground }}>
                    {testimonial.name}
                </p>
                {testimonial.role && (
                    <p className="text-sm" style={{ color: colors?.mutedForeground }}>
                        {testimonial.role}
                    </p>
                )}
            </div>
        );
    }

    if (variant === 'card') {
        return (
            <div
                className="p-6"
                style={{
                    backgroundColor: colors?.card,
                    borderRadius: roundness,
                    border: `1px solid ${colors?.border}`,
                }}
            >
                <Quote
                    className="h-8 w-8 mb-4"
                    style={{ color: colors?.primary, opacity: 0.3 }}
                />
                <p
                    className="text-base mb-6"
                    style={{ color: colors?.cardForeground }}
                >
                    {testimonial.comment}
                </p>
                <div className="flex items-center gap-3">
                    {testimonial.avatar && (
                        <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                    )}
                    <div className="flex-1">
                        <p className="font-semibold" style={{ color: colors?.foreground }}>
                            {testimonial.name}
                        </p>
                        {testimonial.role && (
                            <p className="text-sm" style={{ color: colors?.mutedForeground }}>
                                {testimonial.role}
                            </p>
                        )}
                    </div>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="h-4 w-4"
                                fill={i < testimonial.rating ? colors?.accent : 'none'}
                                style={{ color: i < testimonial.rating ? colors?.accent : colors?.border }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex gap-4">
            {testimonial.avatar && (
                <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
            )}
            <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                    <p className="font-semibold" style={{ color: colors?.foreground }}>
                        {testimonial.name}
                    </p>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="h-4 w-4"
                                fill={i < testimonial.rating ? colors?.accent : 'none'}
                                style={{ color: i < testimonial.rating ? colors?.accent : colors?.border }}
                            />
                        ))}
                    </div>
                </div>
                {testimonial.role && (
                    <p className="text-sm mb-2" style={{ color: colors?.mutedForeground }}>
                        {testimonial.role}
                    </p>
                )}
                <p style={{ color: colors?.foreground }}>
                    {testimonial.comment}
                </p>
            </div>
        </div>
    );
}
