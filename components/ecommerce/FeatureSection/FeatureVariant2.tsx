'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { LucideIcon } from 'lucide-react';

interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface FeatureVariant2Props {
    designSystem: Partial<IDesignSystem>;
    features: Feature[];
}

export default function FeatureVariant2({
    designSystem,
    features,
}: FeatureVariant2Props) {
    const colors = designSystem.colors;

    return (
        <div
            className="py-6 border-y"
            style={{ borderColor: colors?.border }}
        >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div key={index} className="flex items-center gap-3">
                            <Icon className="h-10 w-10 flex-shrink-0" style={{ color: colors?.primary }} />
                            <div>
                                <h3
                                    className="font-semibold text-sm"
                                    style={{ color: colors?.foreground }}
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    className="text-xs"
                                    style={{ color: colors?.mutedForeground }}
                                >
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
