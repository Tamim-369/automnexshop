'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { Button } from '../Button';
import { Star } from 'lucide-react';
import { useState } from 'react';

interface WriteReviewFormProps {
    designSystem: Partial<IDesignSystem>;
    onSubmit?: (review: { rating: number; comment: string }) => void;
    onCancel?: () => void;
}

export default function WriteReviewForm({
    designSystem,
    onSubmit,
    onCancel,
}: WriteReviewFormProps) {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [comment, setComment] = useState('');
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.md || '0.5rem';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (rating === 0) {
            alert('Please select a rating');
            return;
        }
        onSubmit?.({ rating, comment });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Rating */}
            <div>
                <label className="block text-sm font-medium mb-3" style={{ color: colors?.foreground }}>
                    Your Rating
                </label>
                <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoveredRating(star)}
                            onMouseLeave={() => setHoveredRating(0)}
                            className="transition-transform hover:scale-110"
                        >
                            <Star
                                className="h-10 w-10"
                                fill={star <= (hoveredRating || rating) ? colors?.accent : 'none'}
                                style={{
                                    color: star <= (hoveredRating || rating) ? colors?.accent : colors?.border,
                                }}
                            />
                        </button>
                    ))}
                </div>
                {rating > 0 && (
                    <p className="text-sm mt-2" style={{ color: colors?.mutedForeground }}>
                        You rated this product {rating} out of 5 stars
                    </p>
                )}
            </div>

            {/* Comment */}
            <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors?.foreground }}>
                    Your Review
                </label>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your experience with this product..."
                    required
                    rows={6}
                    className="w-full px-4 py-3 focus:outline-none focus:ring-2 transition-all resize-none"
                    style={{
                        borderRadius: roundness,
                        backgroundColor: colors?.background,
                        border: `1px solid ${colors?.border}`,
                        color: colors?.foreground,
                    }}
                />
                <p className="text-xs mt-2" style={{ color: colors?.mutedForeground }}>
                    Minimum 50 characters ({comment.length}/50)
                </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
                <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    roundness="md"
                    colors={designSystem.button?.primary}
                    disabled={comment.length < 50}
                    className="flex-1"
                >
                    Submit Review
                </Button>
                <Button
                    type="button"
                    variant="outline"
                    size="md"
                    roundness="md"
                    colors={designSystem.button?.outline}
                    onClick={onCancel}
                >
                    Cancel
                </Button>
            </div>
        </form>
    );
}
