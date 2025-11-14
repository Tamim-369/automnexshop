'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    designSystem: Partial<IDesignSystem>;
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({
    designSystem,
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.md || '0.5rem';

    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const showPages = 5;

        if (totalPages <= showPages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
            } else {
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            }
        }

        return pages;
    };

    return (
        <div className="flex items-center justify-center gap-2">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                    borderRadius: roundness,
                    backgroundColor: colors?.muted,
                    color: colors?.foreground,
                }}
            >
                <ChevronLeft className="h-5 w-5" />
            </button>

            {getPageNumbers().map((page, index) => {
                if (page === '...') {
                    return (
                        <span
                            key={`ellipsis-${index}`}
                            className="px-3 py-2"
                            style={{ color: colors?.mutedForeground }}
                        >
                            ...
                        </span>
                    );
                }

                const isActive = page === currentPage;

                return (
                    <button
                        key={page}
                        onClick={() => onPageChange(page as number)}
                        className="px-4 py-2 font-medium transition-all"
                        style={{
                            borderRadius: roundness,
                            backgroundColor: isActive ? colors?.primary : colors?.muted,
                            color: isActive ? '#ffffff' : colors?.foreground,
                        }}
                    >
                        {page}
                    </button>
                );
            })}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                    borderRadius: roundness,
                    backgroundColor: colors?.muted,
                    color: colors?.foreground,
                }}
            >
                <ChevronRight className="h-5 w-5" />
            </button>
        </div>
    );
}
