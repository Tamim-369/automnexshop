'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

const buttonVariants = cva(
    'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                primary: '',
                secondary: '',
                outline: 'border-2',
                ghost: '',
                destructive: 'bg-red-500 text-white hover:bg-red-600',
            },
            size: {
                sm: 'h-9 px-3 text-sm',
                md: 'h-11 px-6 text-base',
                lg: 'h-13 px-8 text-lg',
                icon: 'h-10 w-10',
            },
            roundness: {
                none: 'rounded-none',
                sm: 'rounded-sm',
                md: 'rounded-md',
                lg: 'rounded-lg',
                xl: 'rounded-xl',
                full: 'rounded-full',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
            roundness: 'md',
        },
    }
);

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    colors?: {
        background?: string;
        foreground?: string;
        hover?: string;
        border?: string;
    };
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, roundness, colors, style, ...props }, ref) => {
        const customStyle = colors
            ? {
                backgroundColor: variant === 'outline' || variant === 'ghost' ? 'transparent' : colors.background,
                color: colors.foreground,
                borderColor: variant === 'outline' ? colors.border : undefined,
                ...style,
            }
            : style;

        return (
            <button
                className={cn(buttonVariants({ variant, size, roundness, className }))}
                ref={ref}
                style={customStyle}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
