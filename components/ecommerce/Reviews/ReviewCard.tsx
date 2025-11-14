'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { Star, ThumbsUp } from 'lucide-react';

interface ReviewCardProps {
    designSystem: Partial<IDesignSystem>;
    review: {
        id: string;
        author: string;
        rating: number;
        date: string;
        comment: string;
        helpful: number;
        verified?: boolean;
    };
    onHelpful?: (id: string) => void;
}

export default function ReviewCard({
    designSystem,
    review,
    onHelpful,
}: ReviewCardProps) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.md || '0.5rem';

    return (
        <div
            className="p-6"
            style={{
                backgroundColor: colors?.card,
                borderRadius: roundness,
                border: `1px solid ${colors?.border}`,
            }}
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold" style={{ color: colors?.foreground }}>
                            {review.author}
                        </span>
                        {review.verified && (
                            <span
                                className="text-xs px-2 py-0.5 rounded"
                                style={{
                                    backgroundColor: colors?.success + '20',
                                    color: colors?.success,
                                }}
                            >
                                Verified Purchase
                            </span>
                        )}
                    </div>
                    <p className="text-sm" style={{ color: colors?.mutedForeground }}>
                        {review.date}
                    </p>
                </div>
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className="h-4 w-4"
                            fill={i < review.rating ? colors?.accent : 'none'}
                            style={{ color: i < review.rating ? colors?.accent : colors?.border }}
                        />
                    ))}
                </div>
            </div>

            {/* Comment */}
            <p className="mb-4" style={{ color: colors?.foreground }}>
                {review.comment}
            </p>

            {/* Helpful */}
            <button
                onClick={() => onHelpful?.(review.id)}
                className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
                style={{ color: colors?.mutedForeground }}
            >
                <ThumbsUp className="h-4 w-4" />
                <span>Helpful ({review.helpful})</span>
            </button>
        </div>
    );
}
