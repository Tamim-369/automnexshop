'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { LucideIcon } from 'lucide-react';

interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface FeatureVariant1Props {
    designSystem: Partial<IDesignSystem>;
    features: Feature[];
}

export default function FeatureVariant1({
    designSystem,
    features,
}: FeatureVariant1Props) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.lg || '0.75rem';

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center p-6"
                        style={{
                            backgroundColor: colors?.card,
                            borderRadius: roundness,
                            border: `1px solid ${colors?.border}`,
                        }}
                    >
                        <div
                            className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                            style={{
                                backgroundColor: colors?.primary,
                                opacity: 0.1,
                            }}
                        >
                            <Icon className="h-8 w-8" style={{ color: colors?.primary }} />
                        </div>
                        <h3
                            className="font-semibold text-lg mb-2"
                            style={{ color: colors?.foreground }}
                        >
                            {feature.title}
                        </h3>
                        <p
                            className="text-sm"
                            style={{ color: colors?.mutedForeground }}
                        >
                            {feature.description}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
