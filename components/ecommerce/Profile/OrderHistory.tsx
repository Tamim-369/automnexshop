'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import Badge from '../Badge/Badge';
import { Package, ChevronRight } from 'lucide-react';

interface OrderHistoryProps {
    designSystem: Partial<IDesignSystem>;
    orders: Array<{
        id: string;
        date: string;
        total: number;
        status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
        items: number;
    }>;
    onViewOrder?: (id: string) => void;
}

export default function OrderHistory({
    designSystem,
    orders,
    onViewOrder,
}: OrderHistoryProps) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.md || '0.5rem';

    const getStatusVariant = (status: string) => {
        switch (status) {
            case 'delivered':
                return 'success';
            case 'shipped':
                return 'info';
            case 'pending':
                return 'warning';
            case 'cancelled':
                return 'error';
            default:
                return 'primary';
        }
    };

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold" style={{ color: colors?.foreground }}>
                Order History
            </h2>

            {orders.map((order) => (
                <button
                    key={order.id}
                    onClick={() => onViewOrder?.(order.id)}
                    className="w-full p-6 flex items-center justify-between hover:opacity-80 transition-opacity"
                    style={{
                        backgroundColor: colors?.card,
                        borderRadius: roundness,
                        border: `1px solid ${colors?.border}`,
                    }}
                >
                    <div className="flex items-center gap-4">
                        <div
                            className="w-12 h-12 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: colors?.muted }}
                        >
                            <Package className="h-6 w-6" style={{ color: colors?.primary }} />
                        </div>
                        <div className="text-left">
                            <p className="font-semibold" style={{ color: colors?.foreground }}>
                                Order #{order.id}
                            </p>
                            <p className="text-sm" style={{ color: colors?.mutedForeground }}>
                                {order.date} • {order.items} items
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <p className="font-bold text-lg" style={{ color: colors?.primary }}>
                                ${order.total.toFixed(2)}
                            </p>
                            <Badge
                                designSystem={designSystem}
                                variant={getStatusVariant(order.status) as any}
                                size="sm"
                            >
                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </Badge>
                        </div>
                        <ChevronRight className="h-5 w-5" style={{ color: colors?.mutedForeground }} />
                    </div>
                </button>
            ))}
        </div>
    );
}
