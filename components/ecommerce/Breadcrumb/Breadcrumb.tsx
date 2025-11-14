'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    designSystem: Partial<IDesignSystem>;
    items: BreadcrumbItem[];
    showHome?: boolean;
}

export default function Breadcrumb({
    designSystem,
    items,
    showHome = true,
}: BreadcrumbProps) {
    const colors = designSystem.colors;

    return (
        <nav className="flex items-center gap-2 text-sm">
            {showHome && (
                <>
                    <a
                        href="/"
                        className="flex items-center gap-1 hover:opacity-70 transition-opacity"
                        style={{ color: colors?.mutedForeground }}
                    >
                        <Home className="h-4 w-4" />
                        <span>Home</span>
                    </a>
                    <ChevronRight className="h-4 w-4" style={{ color: colors?.border }} />
                </>
            )}

            {items.map((item, index) => {
                const isLast = index === items.length - 1;

                return (
                    <div key={index} className="flex items-center gap-2">
                        {item.href && !isLast ? (
                            <a
                                href={item.href}
                                className="hover:opacity-70 transition-opacity"
                                style={{ color: colors?.mutedForeground }}
                            >
                                {item.label}
                            </a>
                        ) : (
                            <span
                                className="font-medium"
                                style={{ color: isLast ? colors?.foreground : colors?.mutedForeground }}
                            >
                                {item.label}
                            </span>
                        )}
                        {!isLast && (
                            <ChevronRight className="h-4 w-4" style={{ color: colors?.border }} />
                        )}
                    </div>
                );
            })}
        </nav>
    );
}
