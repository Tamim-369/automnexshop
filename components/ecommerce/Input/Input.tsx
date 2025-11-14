'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    designSystem: Partial<IDesignSystem>;
    label?: string;
    error?: string;
    icon?: LucideIcon;
    helperText?: string;
}

export default function Input({
    designSystem,
    label,
    error,
    icon: Icon,
    helperText,
    className = '',
    ...props
}: InputProps) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.md || '0.5rem';

    return (
        <div className={className}>
            {label && (
                <label className="block text-sm font-medium mb-2" style={{ color: colors?.foreground }}>
                    {label}
                </label>
            )}
            <div className="relative">
                {Icon && (
                    <Icon
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5"
                        style={{ color: colors?.mutedForeground }}
                    />
                )}
                <input
                    className="w-full pr-4 py-3 focus:outline-none focus:ring-2 transition-all"
                    style={{
                        paddingLeft: Icon ? '2.5rem' : '1rem',
                        borderRadius: roundness,
                        backgroundColor: colors?.background,
                        border: `1px solid ${error ? colors?.error : colors?.border}`,
                        color: colors?.foreground,
                    }}
                    {...props}
                />
            </div>
            {error && (
                <p className="text-sm mt-1" style={{ color: colors?.error }}>
                    {error}
                </p>
            )}
            {helperText && !error && (
                <p className="text-xs mt-1" style={{ color: colors?.mutedForeground }}>
                    {helperText}
                </p>
            )}
        </div>
    );
}
