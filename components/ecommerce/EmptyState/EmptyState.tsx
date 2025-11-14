'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { LucideIcon } from 'lucide-react';
import { Button } from '../Button';

interface EmptyStateProps {
    designSystem: Partial<IDesignSystem>;
    icon: LucideIcon;
    title: string;
    description: string;
    actionLabel?: string;
    onAction?: () => void;
}

export default function EmptyState({
    designSystem,
    icon: Icon,
    title,
    description,
    actionLabel,
    onAction,
}: EmptyStateProps) {
    const colors = designSystem.colors;

    return (
        <div className="text-center py-16 px-4">
            <div
                className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{
                    backgroundColor: colors?.muted,
                }}
            >
                <Icon className="h-10 w-10" style={{ color: colors?.mutedForeground }} />
            </div>

            <h3
                className="text-xl font-semibold mb-2"
                style={{ color: colors?.foreground }}
            >
                {title}
            </h3>

            <p
                className="text-sm mb-6 max-w-md mx-auto"
                style={{ color: colors?.mutedForeground }}
            >
                {description}
            </p>

            {actionLabel && onAction && (
                <Button
                    variant="primary"
                    size="md"
                    roundness="md"
                    colors={designSystem.button?.primary}
                    onClick={onAction}
                >
                    {actionLabel}
                </Button>
            )}
        </div>
    );
}
