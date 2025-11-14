'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { LucideIcon } from 'lucide-react';

interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface FeatureVariant3Props {
    designSystem: Partial<IDesignSystem>;
    features: Feature[];
}

export default function FeatureVariant3({
    designSystem,
    features,
}: FeatureVariant3Props) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.xl || '1rem';

    return (
        <div
            className="p-8 md:p-12"
            style={{
                backgroundColor: colors?.muted,
                borderRadius: roundness,
            }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div key={index} className="text-center">
                            <div
                                className="inline-flex w-20 h-20 rounded-full items-center justify-center mb-4"
                                style={{
                                    background: `linear-gradient(135deg, ${colors?.primary} 0%, ${colors?.secondary} 100%)`,
                                }}
                            >
                                <Icon className="h-10 w-10 text-white" />
                            </div>
                            <h3
                                className="font-bold text-lg mb-2"
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
        </div>
    );
}
