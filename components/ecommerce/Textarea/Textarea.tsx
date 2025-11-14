'use client';

import { IDesignSystem } from '@/models/DesignSystem';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    designSystem: Partial<IDesignSystem>;
    label?: string;
    error?: string;
    helperText?: string;
}

export default function Textarea({
    designSystem,
    label,
    error,
    helperText,
    className = '',
    ...props
}: TextareaProps) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.md || '0.5rem';

    return (
        <div className={className}>
            {label && (
                <label className="block text-sm font-medium mb-2" style={{ color: colors?.foreground }}>
                    {label}
                </label>
            )}
            <textarea
                className="w-full px-4 py-3 focus:outline-none focus:ring-2 transition-all resize-none"
                style={{
                    borderRadius: roundness,
                    backgroundColor: colors?.background,
                    border: `1px solid ${error ? colors?.error : colors?.border}`,
                    color: colors?.foreground,
                }}
                {...props}
            />
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
