'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { cn } from '@/lib/utils';

interface BadgeProps {
    designSystem: Partial<IDesignSystem>;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    size?: 'sm' | 'md' | 'lg';
    roundness?: 'sm' | 'md' | 'lg' | 'full';
}

export default function Badge({
    designSystem,
    children,
    variant = 'primary',
    size = 'md',
    roundness = 'full',
}: BadgeProps) {
    const colors = designSystem.colors;

    const getVariantColor = () => {
        switch (variant) {
            case 'primary':
                return colors?.primary;
            case 'secondary':
                return colors?.secondary;
            case 'success':
                return colors?.success;
            case 'warning':
                return colors?.warning;
            case 'error':
                return colors?.error;
            case 'info':
                return colors?.info;
            default:
                return colors?.primary;
        }
    };

    const getSizeClasses = () => {
        switch (size) {
            case 'sm':
                return 'px-2 py-0.5 text-xs';
            case 'md':
                return 'px-3 py-1 text-sm';
            case 'lg':
                return 'px-4 py-1.5 text-base';
            default:
                return 'px-3 py-1 text-sm';
        }
    };

    const getRoundnessValue = () => {
        switch (roundness) {
            case 'sm':
                return designSystem.roundness?.sm || '0.25rem';
            case 'md':
                return designSystem.roundness?.md || '0.5rem';
            case 'lg':
                return designSystem.roundness?.lg || '0.75rem';
            case 'full':
                return designSystem.roundness?.full || '9999px';
            default:
                return designSystem.roundness?.full || '9999px';
        }
    };

    return (
        <span
            className={cn('inline-flex items-center font-semibold', getSizeClasses())}
            style={{
                backgroundColor: getVariantColor(),
                color: '#ffffff',
                borderRadius: getRoundnessValue(),
            }}
        >
            {children}
        </span>
    );
}
