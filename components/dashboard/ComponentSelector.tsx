'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface ComponentSelectorProps {
    onChange: () => void;
}

export default function ComponentSelector({ onChange }: ComponentSelectorProps) {
    const [selectedComponent, setSelectedComponent] = useState<string>('navbar');
    const [selectedVariant, setSelectedVariant] = useState<Record<string, number>>({
        navbar: 1,
        productCard: 1,
        banner: 1,
        features: 1,
        categoryGrid: 1,
        footer: 1,
    });

    const components = [
        {
            id: 'navbar',
            name: 'Navigation Bar',
            variants: [
                { id: 1, name: 'Minimal & Clean', style: 'Amazon-inspired' },
                { id: 2, name: 'Feature-Rich', style: 'Shopify-inspired' },
                { id: 3, name: 'Bold & Branded', style: 'Nike-inspired' },
            ],
        },
        {
            id: 'productCard',
            name: 'Product Cards',
            variants: [
                { id: 1, name: 'Classic with Hover', style: 'Amazon-inspired' },
                { id: 2, name: 'Overlay Actions', style: 'ASOS-inspired' },
                { id: 3, name: 'Flexible Layout', style: 'Apple-inspired' },
            ],
        },
        {
            id: 'banner',
            name: 'Hero Banners',
            variants: [
                { id: 1, name: 'Full Hero', style: 'Nike-inspired' },
                { id: 2, name: 'Split Layout', style: 'Apple-inspired' },
                { id: 3, name: 'Grid Banners', style: 'Shopify-inspired' },
            ],
        },
        {
            id: 'features',
            name: 'Feature Section',
            variants: [
                { id: 1, name: 'Card Grid', style: 'Amazon-inspired' },
                { id: 2, name: 'Inline Minimal', style: 'Clean & Simple' },
                { id: 3, name: 'Gradient Icons', style: 'Premium' },
            ],
        },
        {
            id: 'categoryGrid',
            name: 'Category Grid',
            variants: [
                { id: 1, name: 'Standard Grid', style: 'Amazon-inspired' },
                { id: 2, name: 'Featured Hero', style: 'Nike-inspired' },
                { id: 3, name: 'Circular Minimal', style: 'ASOS-inspired' },
            ],
        },
        {
            id: 'footer',
            name: 'Footer',
            variants: [
                { id: 1, name: 'Comprehensive', style: 'Full-featured' },
                { id: 2, name: 'Newsletter Focus', style: 'Modern' },
            ],
        },
    ];

    const handleVariantSelect = (componentId: string, variantId: number) => {
        setSelectedVariant((prev) => ({ ...prev, [componentId]: variantId }));
        onChange();
    };

    const selectedComponentData = components.find((c) => c.id === selectedComponent);

    return (
        <div className="h-full">
            <div className="p-6 border-b border-gray-800">
                <h2 className="text-xl font-bold text-white mb-2">Component Variants</h2>
                <p className="text-sm text-gray-400">Choose the style for each component</p>
            </div>

            <div className="flex h-[calc(100%-100px)]">
                {/* Component List */}
                <div className="w-48 border-r border-gray-800 overflow-y-auto">
                    {components.map((component) => (
                        <button
                            key={component.id}
                            onClick={() => setSelectedComponent(component.id)}
                            className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors ${selectedComponent === component.id
                                    ? 'bg-blue-500/20 text-blue-400 border-r-2 border-blue-500'
                                    : 'text-gray-400 hover:bg-gray-800 hover:text-gray-300'
                                }`}
                        >
                            <span className="text-sm font-medium">{component.name}</span>
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    ))}
                </div>

                {/* Variant Options */}
                <div className="flex-1 p-6 overflow-y-auto">
                    {selectedComponentData && (
                        <>
                            <h3 className="text-lg font-semibold text-white mb-4">
                                {selectedComponentData.name}
                            </h3>
                            <div className="space-y-3">
                                {selectedComponentData.variants.map((variant) => (
                                    <button
                                        key={variant.id}
                                        onClick={() => handleVariantSelect(selectedComponentData.id, variant.id)}
                                        className={`w-full p-4 rounded-lg border-2 transition-all text-left ${selectedVariant[selectedComponentData.id] === variant.id
                                                ? 'border-blue-500 bg-blue-500/10'
                                                : 'border-gray-700 hover:border-gray-600 bg-gray-800/50'
                                            }`}
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h4 className="font-semibold text-white">{variant.name}</h4>
                                                <p className="text-xs text-gray-400 mt-1">{variant.style}</p>
                                            </div>
                                            {selectedVariant[selectedComponentData.id] === variant.id && (
                                                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            Variant {variant.id}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
