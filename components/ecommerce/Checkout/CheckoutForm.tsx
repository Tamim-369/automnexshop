'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { Button } from '../Button';
import { CreditCard, MapPin, User } from 'lucide-react';
import { useState } from 'react';

interface CheckoutFormProps {
    designSystem: Partial<IDesignSystem>;
    onSubmit?: (data: any) => void;
}

export default function CheckoutForm({
    designSystem,
    onSubmit,
}: CheckoutFormProps) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: '',
    });

    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.md || '0.5rem';

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit?.(formData);
    };

    const InputField = ({
        label,
        name,
        type = 'text',
        placeholder,
        icon: Icon,
        required = true,
    }: any) => (
        <div>
            <label className="block text-sm font-medium mb-2" style={{ color: colors?.foreground }}>
                {label}
            </label>
            <div className="relative">
                {Icon && (
                    <Icon
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5"
                        style={{ color: colors?.mutedForeground }}
                    />
                )}
                <input
                    type={type}
                    value={formData[name as keyof typeof formData]}
                    onChange={(e) => handleChange(name, e.target.value)}
                    placeholder={placeholder}
                    required={required}
                    className="w-full pr-4 py-3 focus:outline-none focus:ring-2 transition-all"
                    style={{
                        paddingLeft: Icon ? '2.5rem' : '1rem',
                        borderRadius: roundness,
                        backgroundColor: colors?.background,
                        border: `1px solid ${colors?.border}`,
                        color: colors?.foreground,
                    }}
                />
            </div>
        </div>
    );

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information */}
            <div
                className="p-6"
                style={{
                    backgroundColor: colors?.card,
                    borderRadius: roundness,
                    border: `1px solid ${colors?.border}`,
                }}
            >
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: colors?.foreground }}>
                    <User className="h-5 w-5" />
                    Contact Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <InputField label="Full Name" name="fullName" placeholder="John Doe" icon={User} />
                    <InputField label="Email" name="email" type="email" placeholder="john@example.com" />
                    <InputField label="Phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" className="md:col-span-2" />
                </div>
            </div>

            {/* Shipping Address */}
            <div
                className="p-6"
                style={{
                    backgroundColor: colors?.card,
                    borderRadius: roundness,
                    border: `1px solid ${colors?.border}`,
                }}
            >
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: colors?.foreground }}>
                    <MapPin className="h-5 w-5" />
                    Shipping Address
                </h3>
                <div className="space-y-4">
                    <InputField label="Address" name="address" placeholder="123 Main St" icon={MapPin} />
                    <div className="grid md:grid-cols-2 gap-4">
                        <InputField label="City" name="city" placeholder="New York" />
                        <InputField label="ZIP Code" name="zipCode" placeholder="10001" />
                    </div>
                </div>
            </div>

            {/* Payment Information */}
            <div
                className="p-6"
                style={{
                    backgroundColor: colors?.card,
                    borderRadius: roundness,
                    border: `1px solid ${colors?.border}`,
                }}
            >
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: colors?.foreground }}>
                    <CreditCard className="h-5 w-5" />
                    Payment Information
                </h3>
                <div className="space-y-4">
                    <InputField label="Card Number" name="cardNumber" placeholder="1234 5678 9012 3456" icon={CreditCard} />
                    <InputField label="Cardholder Name" name="cardName" placeholder="John Doe" />
                    <div className="grid grid-cols-2 gap-4">
                        <InputField label="Expiry Date" name="expiryDate" placeholder="MM/YY" />
                        <InputField label="CVV" name="cvv" placeholder="123" type="password" />
                    </div>
                </div>
            </div>

            {/* Submit */}
            <Button
                type="submit"
                variant="primary"
                size="lg"
                roundness="md"
                colors={designSystem.button?.primary}
                className="w-full"
            >
                Place Order
            </Button>
        </form>
    );
}
