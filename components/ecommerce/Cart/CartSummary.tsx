'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { Button } from '../Button';

interface CartSummaryProps {
    designSystem: Partial<IDesignSystem>;
    subtotal: number;
    shipping?: number;
    tax?: number;
    discount?: number;
    onCheckout?: () => void;
    isEmpty?: boolean;
}

export default function CartSummary({
    designSystem,
    subtotal,
    shipping = 0,
    tax = 0,
    discount = 0,
    onCheckout,
    isEmpty = false,
}: CartSummaryProps) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.lg || '0.75rem';
    const total = subtotal + shipping + tax - discount;

    return (
        <div
            className="p-6"
            style={{
                backgroundColor: colors?.card,
                borderRadius: roundness,
                border: `1px solid ${colors?.border}`,
            }}
        >
            <h2
                className="text-xl font-bold mb-6"
                style={{ color: colors?.cardForeground }}
            >
                Order Summary
            </h2>

            <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                    <span style={{ color: colors?.mutedForeground }}>Subtotal</span>
                    <span style={{ color: colors?.foreground }}>${subtotal.toFixed(2)}</span>
                </div>
                {shipping > 0 && (
                    <div className="flex justify-between">
                        <span style={{ color: colors?.mutedForeground }}>Shipping</span>
                        <span style={{ color: colors?.foreground }}>${shipping.toFixed(2)}</span>
                    </div>
                )}
                {tax > 0 && (
                    <div className="flex justify-between">
                        <span style={{ color: colors?.mutedForeground }}>Tax</span>
                        <span style={{ color: colors?.foreground }}>${tax.toFixed(2)}</span>
                    </div>
                )}
                {discount > 0 && (
                    <div className="flex justify-between">
                        <span style={{ color: colors?.success }}>Discount</span>
                        <span style={{ color: colors?.success }}>-${discount.toFixed(2)}</span>
                    </div>
                )}
            </div>

            <div
                className="flex justify-between text-lg font-bold mb-6 pt-4 border-t"
                style={{ borderColor: colors?.border }}
            >
                <span style={{ color: colors?.foreground }}>Total</span>
                <span style={{ color: colors?.primary }}>${total.toFixed(2)}</span>
            </div>

            <Button
                variant="primary"
                size="lg"
                roundness="md"
                colors={designSystem.button?.primary}
                className="w-full"
                onClick={onCheckout}
                disabled={isEmpty}
            >
                Proceed to Checkout
            </Button>

            <div className="mt-4 text-center">
                <p className="text-xs" style={{ color: colors?.mutedForeground }}>
                    Secure checkout powered by Stripe
                </p>
            </div>
        </div>
    );
}
