'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface ThemeEditorProps {
    designSystem: Partial<IDesignSystem>;
    onChange: (updates: Partial<IDesignSystem>) => void;
}

export default function ThemeEditor({ designSystem, onChange }: ThemeEditorProps) {
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
        colors: true,
        buttons: false,
        roundness: false,
        spacing: false,
        typography: false,
    });

    const toggleSection = (section: string) => {
        setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    const updateColor = (path: string, value: string) => {
        const keys = path.split('.');
        const updated = { ...designSystem };
        let current: any = updated;

        for (let i = 0; i < keys.length - 1; i++) {
            current[keys[i]] = { ...current[keys[i]] };
            current = current[keys[i]];
        }

        current[keys[keys.length - 1]] = value;
        onChange(updated);
    };

    const ColorPicker = ({ label, value, path }: { label: string; value: string; path: string }) => (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
            <div className="flex gap-3 items-center">
                <input
                    type="color"
                    value={value}
                    onChange={(e) => updateColor(path, e.target.value)}
                    className="w-12 h-12 rounded-lg cursor-pointer border-2 border-gray-700"
                />
                <input
                    type="text"
                    value={value}
                    onChange={(e) => updateColor(path, e.target.value)}
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-blue-500"
                />
            </div>
        </div>
    );

    const Section = ({ title, children, id }: { title: string; children: React.ReactNode; id: string }) => {
        const isExpanded = expandedSections[id];

        return (
            <div className="border-b border-gray-800">
                <button
                    type="button"
                    onClick={() => toggleSection(id)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition-colors text-left"
                >
                    <span className="font-semibold text-white text-sm">{title}</span>
                    {isExpanded ? (
                        <ChevronDown className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    ) : (
                        <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    )}
                </button>
                {isExpanded && (
                    <div className="px-6 py-4 bg-gray-900/30">
                        {children}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="h-full overflow-y-auto">
            <div className="p-6 border-b border-gray-800">
                <h2 className="text-lg font-bold text-white mb-2">Theme Customization</h2>
                <p className="text-xs text-gray-400">Customize every aspect of your store</p>
            </div>

            {/* Colors Section */}
            <Section title="🎨 Colors" id="colors">
                <ColorPicker label="Primary Color" value={designSystem.colors?.primary || '#3b82f6'} path="colors.primary" />
                <ColorPicker label="Secondary Color" value={designSystem.colors?.secondary || '#8b5cf6'} path="colors.secondary" />
                <ColorPicker label="Accent Color" value={designSystem.colors?.accent || '#f59e0b'} path="colors.accent" />
                <ColorPicker label="Background" value={designSystem.colors?.background || '#ffffff'} path="colors.background" />
                <ColorPicker label="Foreground" value={designSystem.colors?.foreground || '#0f172a'} path="colors.foreground" />
                <ColorPicker label="Success" value={designSystem.colors?.success || '#10b981'} path="colors.success" />
                <ColorPicker label="Error" value={designSystem.colors?.error || '#ef4444'} path="colors.error" />
            </Section>

            {/* Button Colors */}
            <Section title="🔘 Button Styles" id="buttons">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">Primary Button</h3>
                <ColorPicker
                    label="Background"
                    value={designSystem.button?.primary?.background || '#3b82f6'}
                    path="button.primary.background"
                />
                <ColorPicker
                    label="Text Color"
                    value={designSystem.button?.primary?.foreground || '#ffffff'}
                    path="button.primary.foreground"
                />
                <ColorPicker
                    label="Hover"
                    value={designSystem.button?.primary?.hover || '#2563eb'}
                    path="button.primary.hover"
                />
            </Section>

            {/* Roundness */}
            <Section title="⭕ Roundness" id="roundness">
                {Object.entries(designSystem.roundness || {}).map(([key, value]) => (
                    <div key={key} className="mb-4">
                        <label className="block text-sm font-medium text-gray-300 mb-2 capitalize">{key}</label>
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => updateColor(`roundness.${key}`, e.target.value)}
                            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-blue-500"
                            placeholder="e.g., 0.5rem"
                        />
                    </div>
                ))}
            </Section>

            {/* Spacing */}
            <Section title="📏 Spacing" id="spacing">
                {Object.entries(designSystem.spacing || {}).map(([key, value]) => (
                    <div key={key} className="mb-4">
                        <label className="block text-sm font-medium text-gray-300 mb-2 capitalize">{key}</label>
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => updateColor(`spacing.${key}`, e.target.value)}
                            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-blue-500"
                            placeholder="e.g., 1rem"
                        />
                    </div>
                ))}
            </Section>

            {/* Typography */}
            <Section title="✍️ Typography" id="typography">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Heading Font</label>
                    <input
                        type="text"
                        value={designSystem.typography?.fontFamily?.heading || 'Inter, sans-serif'}
                        onChange={(e) => updateColor('typography.fontFamily.heading', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Body Font</label>
                    <input
                        type="text"
                        value={designSystem.typography?.fontFamily?.body || 'Inter, sans-serif'}
                        onChange={(e) => updateColor('typography.fontFamily.body', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                </div>
            </Section>
        </div>
    );
}
