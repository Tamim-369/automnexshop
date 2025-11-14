'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { SlidersHorizontal } from 'lucide-react';
import { Button } from '../Button';

interface ShopHeaderProps {
    designSystem: Partial<IDesignSystem>;
    totalProducts: number;
    onToggleFilters?: () => void;
    sortOptions: Array<{ label: string; value: string }>;
    currentSort: string;
    onSortChange: (sort: string) => void;
}

export default function ShopHeader({
    designSystem,
    totalProducts,
    onToggleFilters,
    sortOptions,
    currentSort,
    onSortChange,
}: ShopHeaderProps) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.md || '0.5rem';

    return (
        <div
            className="flex flex-wrap items-center justify-between gap-4 p-4"
            style={{
                backgroundColor: colors?.card,
                borderRadius: roundness,
                border: `1px solid ${colors?.border}`,
            }}
        >
            <div>
                <p className="text-sm" style={{ color: colors?.mutedForeground }}>
                    Showing <span className="font-semibold" style={{ color: colors?.foreground }}>{totalProducts}</span> products
                </p>
            </div>

            <div className="flex items-center gap-3">
                <select
                    value={currentSort}
                    onChange={(e) => onSortChange(e.target.value)}
                    className="px-4 py-2 text-sm focus:outline-none focus:ring-2 transition-all"
                    style={{
                        borderRadius: roundness,
                        backgroundColor: colors?.background,
                        border: `1px solid ${colors?.border}`,
                        color: colors?.foreground,
                    }}
                >
                    {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <Button
                    variant="outline"
                    size="md"
                    roundness="md"
                    colors={designSystem.button?.outline}
                    onClick={onToggleFilters}
                    className="lg:hidden"
                >
                    <SlidersHorizontal className="h-5 w-5" />
                </Button>
            </div>
        </div>
    );
}
