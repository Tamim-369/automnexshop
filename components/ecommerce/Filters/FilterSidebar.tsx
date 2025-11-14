'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { Button } from '../Button';
import { X, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

interface FilterSidebarProps {
    designSystem: Partial<IDesignSystem>;
    onApply?: (filters: any) => void;
    onClear?: () => void;
}

export default function FilterSidebar({
    designSystem,
    onApply,
    onClear,
}: FilterSidebarProps) {
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.md || '0.5rem';

    const categories = ['Electronics', 'Fashion', 'Home', 'Sports', 'Beauty'];
    const brands = ['Brand A', 'Brand B', 'Brand C', 'Brand D'];

    const toggleSelection = (item: string, list: string[], setter: Function) => {
        if (list.includes(item)) {
            setter(list.filter((i) => i !== item));
        } else {
            setter([...list, item]);
        }
    };

    return (
        <div
            className="p-6"
            style={{
                backgroundColor: colors?.card,
                borderRadius: roundness,
                border: `1px solid ${colors?.border}`,
            }}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold flex items-center gap-2" style={{ color: colors?.foreground }}>
                    <SlidersHorizontal className="h-5 w-5" />
                    Filters
                </h3>
                <button
                    onClick={onClear}
                    className="text-sm hover:underline"
                    style={{ color: colors?.primary }}
                >
                    Clear All
                </button>
            </div>

            {/* Price Range */}
            <div className="mb-6">
                <h4 className="font-medium mb-3" style={{ color: colors?.foreground }}>
                    Price Range
                </h4>
                <div className="flex items-center gap-3 mb-2">
                    <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                        className="w-full px-3 py-2 text-sm focus:outline-none focus:ring-2"
                        style={{
                            borderRadius: roundness,
                            backgroundColor: colors?.background,
                            border: `1px solid ${colors?.border}`,
                            color: colors?.foreground,
                        }}
                    />
                    <span style={{ color: colors?.mutedForeground }}>to</span>
                    <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                        className="w-full px-3 py-2 text-sm focus:outline-none focus:ring-2"
                        style={{
                            borderRadius: roundness,
                            backgroundColor: colors?.background,
                            border: `1px solid ${colors?.border}`,
                            color: colors?.foreground,
                        }}
                    />
                </div>
            </div>

            {/* Categories */}
            <div className="mb-6">
                <h4 className="font-medium mb-3" style={{ color: colors?.foreground }}>
                    Categories
                </h4>
                <div className="space-y-2">
                    {categories.map((category) => (
                        <label key={category} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(category)}
                                onChange={() => toggleSelection(category, selectedCategories, setSelectedCategories)}
                                className="w-4 h-4"
                            />
                            <span className="text-sm" style={{ color: colors?.foreground }}>
                                {category}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Brands */}
            <div className="mb-6">
                <h4 className="font-medium mb-3" style={{ color: colors?.foreground }}>
                    Brands
                </h4>
                <div className="space-y-2">
                    {brands.map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={selectedBrands.includes(brand)}
                                onChange={() => toggleSelection(brand, selectedBrands, setSelectedBrands)}
                                className="w-4 h-4"
                            />
                            <span className="text-sm" style={{ color: colors?.foreground }}>
                                {brand}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Apply Button */}
            <Button
                variant="primary"
                size="md"
                roundness="md"
                colors={designSystem.button?.primary}
                onClick={() => onApply?.({ priceRange, selectedCategories, selectedBrands })}
                className="w-full"
            >
                Apply Filters
            </Button>
        </div>
    );
}
