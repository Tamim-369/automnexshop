'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { Search, X } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
    designSystem: Partial<IDesignSystem>;
    placeholder?: string;
    onSearch?: (query: string) => void;
    variant?: 'default' | 'filled' | 'outlined';
}

export default function SearchBar({
    designSystem,
    placeholder = 'Search products...',
    onSearch,
    variant = 'default',
}: SearchBarProps) {
    const [query, setQuery] = useState('');
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.md || '0.5rem';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch?.(query);
    };

    const handleClear = () => {
        setQuery('');
        onSearch?.('');
    };

    const getStyles = () => {
        switch (variant) {
            case 'filled':
                return {
                    backgroundColor: colors?.muted,
                    border: 'none',
                };
            case 'outlined':
                return {
                    backgroundColor: 'transparent',
                    border: `2px solid ${colors?.border}`,
                };
            default:
                return {
                    backgroundColor: colors?.background,
                    border: `1px solid ${colors?.border}`,
                };
        }
    };

    return (
        <form onSubmit={handleSubmit} className="relative w-full">
            <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5"
                style={{ color: colors?.mutedForeground }}
            />
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                className="w-full pl-12 pr-12 py-3 focus:outline-none focus:ring-2 transition-all"
                style={{
                    ...getStyles(),
                    borderRadius: roundness,
                    color: colors?.foreground,
                }}
            />
            {query && (
                <button
                    type="button"
                    onClick={handleClear}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-opacity-80 transition-colors"
                    style={{ backgroundColor: colors?.muted }}
                >
                    <X className="h-4 w-4" style={{ color: colors?.mutedForeground }} />
                </button>
            )}
        </form>
    );
}
