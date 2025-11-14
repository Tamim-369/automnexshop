'use client';

import { useState } from 'react';
import { useDesignSystem } from '@/hooks/useDesignSystem';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import ThemeEditor from '@/components/dashboard/ThemeEditor';
import ComponentSelector from '@/components/dashboard/ComponentSelector';
import LivePreview from '@/components/dashboard/LivePreview';
import ResizablePanel from '@/components/dashboard/ResizablePanel';
import { Save, ChevronLeft, ChevronRight } from 'lucide-react';

export default function DashboardPage() {
    const { designSystem, loading, updateDesignSystem } = useDesignSystem();
    const [activePage, setActivePage] = useState('customize');
    const [showCustomizer, setShowCustomizer] = useState(true);
    const [activeTab, setActiveTab] = useState<'theme' | 'components'>('theme');
    const [previewMode, setPreviewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
    const [hasChanges, setHasChanges] = useState(false);

    if (loading || !designSystem) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-gray-400">Loading Dashboard...</p>
                </div>
            </div>
        );
    }

    const handleSave = async () => {
        try {
            await updateDesignSystem(designSystem);
            setHasChanges(false);
            alert('✅ Design saved successfully!');
        } catch (error) {
            alert('❌ Failed to save design');
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex">
            <DashboardSidebar activePage={activePage} onPageChange={setActivePage} />

            <div className="flex-1 flex flex-col">
                <div className="border-b border-gray-800 bg-gray-950">
                    <div className="flex items-center justify-between px-6 py-4">
                        <div className="flex items-center gap-4">
                            <h1 className="text-xl font-semibold text-white">
                                {activePage === 'customize' ? 'Store Customization' : 'Dashboard'}
                            </h1>
                            {hasChanges && (
                                <span className="px-2 py-1 bg-yellow-500/10 text-yellow-500 text-xs rounded border border-yellow-500/20">
                                    Unsaved
                                </span>
                            )}
                        </div>

                        <div className="flex items-center gap-3">
                            {activePage === 'customize' && (
                                <>
                                    <button
                                        onClick={() => setShowCustomizer(!showCustomizer)}
                                        className="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors flex items-center gap-2"
                                    >
                                        {showCustomizer ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                        {showCustomizer ? 'Hide' : 'Show'} Editor
                                    </button>
                                    <button
                                        onClick={handleSave}
                                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                                    >
                                        <Save className="h-4 w-4" />
                                        Save
                                    </button>
                                </>
                            )}
                            <a
                                href="/"
                                target="_blank"
                                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors"
                            >
                                View Store →
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-hidden">
                    {activePage === 'customize' && showCustomizer ? (
                        <ResizablePanel
                            defaultWidth={320}
                            minWidth={280}
                            maxWidth={600}
                            leftPanel={
                                <div className="h-full bg-gray-950 flex flex-col">
                                    <div className="flex border-b border-gray-800">
                                        <button
                                            onClick={() => setActiveTab('theme')}
                                            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'theme'
                                                ? 'text-blue-500 border-b-2 border-blue-500'
                                                : 'text-gray-400 hover:text-gray-300'
                                                }`}
                                        >
                                            Theme
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('components')}
                                            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'components'
                                                ? 'text-blue-500 border-b-2 border-blue-500'
                                                : 'text-gray-400 hover:text-gray-300'
                                                }`}
                                        >
                                            Components
                                        </button>
                                    </div>

                                    <div className="flex-1 overflow-y-auto">
                                        {activeTab === 'theme' && (
                                            <ThemeEditor
                                                designSystem={designSystem}
                                                onChange={(updates) => {
                                                    Object.assign(designSystem, updates);
                                                    setHasChanges(true);
                                                }}
                                            />
                                        )}
                                        {activeTab === 'components' && (
                                            <ComponentSelector onChange={() => setHasChanges(true)} />
                                        )}
                                    </div>
                                </div>
                            }
                            rightPanel={
                                <div className="h-full bg-gray-900 flex flex-col">
                                    <div className="flex items-center justify-between px-6 py-3 border-b border-gray-800 bg-gray-950">
                                        <div className="flex gap-2">
                                            {(['desktop', 'tablet', 'mobile'] as const).map((mode) => (
                                                <button
                                                    key={mode}
                                                    onClick={() => setPreviewMode(mode)}
                                                    className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${previewMode === mode
                                                        ? 'bg-blue-600 text-white'
                                                        : 'bg-gray-800 text-gray-400 hover:text-gray-300'
                                                        }`}
                                                >
                                                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex-1 overflow-auto p-6 flex items-start justify-center">
                                        <LivePreview designSystem={designSystem} mode={previewMode} />
                                    </div>
                                </div>
                            }
                        />
                    ) : activePage === 'customize' ? (
                        <div className="h-full bg-gray-900 flex flex-col">
                            <div className="flex items-center justify-between px-6 py-3 border-b border-gray-800 bg-gray-950">
                                <div className="flex gap-2">
                                    {(['desktop', 'tablet', 'mobile'] as const).map((mode) => (
                                        <button
                                            key={mode}
                                            onClick={() => setPreviewMode(mode)}
                                            className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${previewMode === mode
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-800 text-gray-400 hover:text-gray-300'
                                                }`}
                                        >
                                            {mode.charAt(0).toUpperCase() + mode.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex-1 overflow-auto p-6 flex items-start justify-center">
                                <LivePreview designSystem={designSystem} mode={previewMode} />
                            </div>
                        </div>
                    ) : (
                        <div className="h-full p-8">
                            <div className="max-w-4xl">
                                <h2 className="text-2xl font-bold mb-4">
                                    {activePage === 'products' && 'Products'}
                                    {activePage === 'orders' && 'Orders'}
                                    {activePage === 'analytics' && 'Analytics'}
                                    {activePage === 'settings' && 'Settings'}
                                </h2>
                                <p className="text-gray-400">Coming soon...</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
