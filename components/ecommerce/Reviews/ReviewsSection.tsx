'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import ReviewCard from './ReviewCard';
import { Button } from '../Button';
import { Star } from 'lucide-react';

interface ReviewsSectionProps {
    designSystem: Partial<IDesignSystem>;
    reviews: Array<{
        id: string;
        author: string;
        rating: number;
        date: string;
        comment: string;
        helpful: number;
        verified?: boolean;
    }>;
    averageRating: number;
    totalReviews: number;
    onWriteReview?: () => void;
    onHelpful?: (id: string) => void;
}

export default function ReviewsSection({
    designSystem,
    reviews,
    averageRating,
    totalReviews,
    onWriteReview,
    onHelpful,
}: ReviewsSectionProps) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.lg || '0.75rem';

    const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => ({
        rating,
        count: reviews.filter((r) => Math.floor(r.rating) === rating).length,
        percentage: (reviews.filter((r) => Math.floor(r.rating) === rating).length / totalReviews) * 100,
    }));

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold" style={{ color: colors?.foreground }}>
                    Customer Reviews
                </h2>
                <Button
                    variant="primary"
                    size="md"
                    roundness="md"
                    colors={designSystem.button?.primary}
                    onClick={onWriteReview}
                >
                    Write a Review
                </Button>
            </div>

            {/* Rating Summary */}
            <div
                className="p-6 grid md:grid-cols-2 gap-8"
                style={{
                    backgroundColor: colors?.muted,
                    borderRadius: roundness,
                }}
            >
                {/* Average Rating */}
                <div className="text-center">
                    <div className="text-5xl font-bold mb-2" style={{ color: colors?.foreground }}>
                        {averageRating.toFixed(1)}
                    </div>
                    <div className="flex items-center justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="h-6 w-6"
                                fill={i < Math.floor(averageRating) ? colors?.accent : 'none'}
                                style={{ color: i < Math.floor(averageRating) ? colors?.accent : colors?.border }}
                            />
                        ))}
                    </div>
                    <p className="text-sm" style={{ color: colors?.mutedForeground }}>
                        Based on {totalReviews} reviews
                    </p>
                </div>

                {/* Rating Distribution */}
                <div className="space-y-2">
                    {ratingDistribution.map(({ rating, count, percentage }) => (
                        <div key={rating} className="flex items-center gap-3">
                            <span className="text-sm w-12" style={{ color: colors?.foreground }}>
                                {rating} star
                            </span>
                            <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: colors?.border }}>
                                <div
                                    className="h-full transition-all"
                                    style={{
                                        width: `${percentage}%`,
                                        backgroundColor: colors?.accent,
                                    }}
                                />
                            </div>
                            <span className="text-sm w-12 text-right" style={{ color: colors?.mutedForeground }}>
                                {count}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-4">
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.id}
                        designSystem={designSystem}
                        review={review}
                        onHelpful={onHelpful}
                    />
                ))}
            </div>
        </div>
    );
}
