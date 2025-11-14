'use client';

import { Home, Package, ShoppingCart, BarChart3, Settings, Palette } from 'lucide-react';

interface DashboardSidebarProps {
    activePage: string;
    onPageChange: (page: string) => void;
}

export default function DashboardSidebar({ activePage, onPageChange }: DashboardSidebarProps) {
    const menuItems = [
        { id: 'customize', label: 'Customize', icon: Palette },
        { id: 'products', label: 'Products', icon: Package },
        { id: 'orders', label: 'Orders', icon: ShoppingCart },
        { id: 'analytics', label: 'Analytics', icon: BarChart3 },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    return (
        <div className="w-64 bg-gray-950 border-r border-gray-800 flex flex-col">
            {/* Logo */}
            <div className="p-6 border-b border-gray-800">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <Home className="h-5 w-5 text-white" />
                    </div>
                    <div>
                        <h1 className="font-bold text-white">AutomNex</h1>
                        <p className="text-xs text-gray-400">Dashboard</p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4">
                <div className="space-y-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activePage === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => onPageChange(item.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800'
                                    }`}
                            >
                                <Icon className="h-5 w-5" />
                                {item.label}
                            </button>
                        );
                    })}
                </div>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-gray-800">
                <div className="flex items-center gap-3 px-4 py-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">U</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">User</p>
                        <p className="text-xs text-gray-400 truncate">user@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
