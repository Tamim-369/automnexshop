'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '../Button';

interface CartItemProps {
    designSystem: Partial<IDesignSystem>;
    item: {
        id: string;
        name: string;
        price: number;
        quantity: number;
        image: string;
        variant?: string;
    };
    onUpdateQuantity?: (id: string, quantity: number) => void;
    onRemove?: (id: string) => void;
}

export default function CartItem({
    designSystem,
    item,
    onUpdateQuantity,
    onRemove,
}: CartItemProps) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.md || '0.5rem';

    return (
        <div
            className="flex gap-4 p-4"
            style={{
                backgroundColor: colors?.card,
                borderRadius: roundness,
                border: `1px solid ${colors?.border}`,
            }}
        >
            {/* Image */}
            <div
                className="w-24 h-24 flex-shrink-0 overflow-hidden"
                style={{ borderRadius: roundness }}
            >
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Details */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h3
                        className="font-semibold"
                        style={{ color: colors?.cardForeground }}
                    >
                        {item.name}
                    </h3>
                    {item.variant && (
                        <p className="text-sm mt-1" style={{ color: colors?.mutedForeground }}>
                            {item.variant}
                        </p>
                    )}
                </div>

                <div className="flex items-center justify-between">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            roundness="md"
                            colors={designSystem.button?.outline}
                            onClick={() => onUpdateQuantity?.(item.id, Math.max(1, item.quantity - 1))}
                            className="h-8 w-8"
                        >
                            <Minus className="h-4 w-4" />
                        </Button>
                        <span
                            className="w-12 text-center font-medium"
                            style={{ color: colors?.foreground }}
                        >
                            {item.quantity}
                        </span>
                        <Button
                            variant="outline"
                            size="icon"
                            roundness="md"
                            colors={designSystem.button?.outline}
                            onClick={() => onUpdateQuantity?.(item.id, item.quantity + 1)}
                            className="h-8 w-8"
                        >
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Price & Remove */}
                    <div className="flex items-center gap-4">
                        <span
                            className="text-lg font-bold"
                            style={{ color: colors?.primary }}
                        >
                            ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <Button
                            variant="ghost"
                            size="icon"
                            roundness="md"
                            colors={designSystem.button?.ghost}
                            onClick={() => onRemove?.(item.id)}
                            className="h-8 w-8"
                        >
                            <Trash2 className="h-4 w-4" style={{ color: colors?.error }} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
