'use client';

import { useState, useRef, useEffect } from 'react';

interface ResizablePanelProps {
    leftPanel: React.ReactNode;
    rightPanel: React.ReactNode;
    minWidth?: number;
    maxWidth?: number;
    defaultWidth?: number;
}

export default function ResizablePanel({
    leftPanel,
    rightPanel,
    minWidth = 280,
    maxWidth = 600,
    defaultWidth = 320,
}: ResizablePanelProps) {
    const [leftWidth, setLeftWidth] = useState(defaultWidth);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging || !containerRef.current) return;

            const containerRect = containerRef.current.getBoundingClientRect();
            const newWidth = e.clientX - containerRect.left;

            if (newWidth >= minWidth && newWidth <= maxWidth) {
                setLeftWidth(newWidth);
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.body.style.cursor = 'col-resize';
            document.body.style.userSelect = 'none';
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
        };
    }, [isDragging, minWidth, maxWidth]);

    return (
        <div ref={containerRef} className="flex flex-1 overflow-hidden relative">
            {/* Left Panel */}
            <div
                style={{ width: `${leftWidth}px` }}
                className="flex-shrink-0 overflow-hidden"
            >
                {leftPanel}
            </div>

            {/* Resizer */}
            <div
                onMouseDown={() => setIsDragging(true)}
                className="w-1 bg-gray-800 hover:bg-blue-500 cursor-col-resize transition-colors relative group flex-shrink-0"
            >
                {/* Visual indicator on hover */}
                <div className="absolute inset-y-0 -left-1 -right-1 group-hover:bg-blue-500/20" />
            </div>

            {/* Right Panel */}
            <div className="flex-1 overflow-hidden">
                {rightPanel}
            </div>
        </div>
    );
}
