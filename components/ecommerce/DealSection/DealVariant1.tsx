'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { Button } from '../Button';
import { Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

interface DealVariant1Props {
    designSystem: Partial<IDesignSystem>;
    title: string;
    description?: string;
    endTime: Date;
    image?: string;
    ctaText?: string;
    onCtaClick?: () => void;
}

export default function DealVariant1({
    designSystem,
    title,
    description,
    endTime,
    image,
    ctaText = 'Shop Now',
    onCtaClick,
}: DealVariant1Props) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.xl || '1rem';
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = endTime.getTime() - now;

            if (distance < 0) {
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [endTime]);

    return (
        <div
            className="relative overflow-hidden"
            style={{
                borderRadius: roundness,
                minHeight: '400px',
            }}
        >
            {/* Background */}
            {image ? (
                <>
                    <img
                        src={image}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
                </>
            ) : (
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(135deg, ${colors?.error} 0%, ${colors?.accent} 100%)`,
                    }}
                />
            )}

            {/* Content */}
            <div className="relative z-10 h-full flex items-center p-8 md:p-12">
                <div className="max-w-xl">
                    <div className="flex items-center gap-2 mb-4">
                        <Clock className="h-5 w-5 text-white" />
                        <span className="text-white font-semibold">Limited Time Offer</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {title}
                    </h2>

                    {description && (
                        <p className="text-white/90 text-lg mb-6">
                            {description}
                        </p>
                    )}

                    {/* Countdown */}
                    <div className="flex gap-4 mb-8">
                        {[
                            { label: 'Hours', value: timeLeft.hours },
                            { label: 'Minutes', value: timeLeft.minutes },
                            { label: 'Seconds', value: timeLeft.seconds },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm min-w-[80px]"
                            >
                                <div className="text-3xl font-bold text-white">
                                    {String(item.value).padStart(2, '0')}
                                </div>
                                <div className="text-xs text-white/70 uppercase mt-1">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <Button
                        variant="primary"
                        size="lg"
                        roundness="full"
                        colors={{
                            background: '#ffffff',
                            foreground: colors?.primary || '#000000',
                            hover: '#f0f0f0',
                        }}
                        onClick={onCtaClick}
                    >
                        {ctaText}
                    </Button>
                </div>
            </div>
        </div>
    );
}
