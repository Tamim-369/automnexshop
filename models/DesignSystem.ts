import mongoose, { Schema, Document } from 'mongoose';

export interface IDesignSystem extends Document {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
    mutedForeground: string;
    card: string;
    cardForeground: string;
    border: string;
    success: string;
    warning: string;
    error: string;
    info: string;
  };
  button: {
    primary: {
      background: string;
      foreground: string;
      hover: string;
    };
    secondary: {
      background: string;
      foreground: string;
      hover: string;
    };
    outline: {
      border: string;
      foreground: string;
      hover: string;
    };
    ghost: {
      foreground: string;
      hover: string;
    };
  };
  roundness: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  typography: {
    fontFamily: {
      heading: string;
      body: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const DesignSystemSchema: Schema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    colors: {
      primary: { type: String, default: '#3b82f6' },
      secondary: { type: String, default: '#8b5cf6' },
      tertiary: { type: String, default: '#ec4899' },
      accent: { type: String, default: '#f59e0b' },
      background: { type: String, default: '#ffffff' },
      foreground: { type: String, default: '#0f172a' },
      muted: { type: String, default: '#f1f5f9' },
      mutedForeground: { type: String, default: '#64748b' },
      card: { type: String, default: '#ffffff' },
      cardForeground: { type: String, default: '#0f172a' },
      border: { type: String, default: '#e2e8f0' },
      success: { type: String, default: '#10b981' },
      warning: { type: String, default: '#f59e0b' },
      error: { type: String, default: '#ef4444' },
      info: { type: String, default: '#3b82f6' },
    },
    button: {
      primary: {
        background: { type: String, default: '#3b82f6' },
        foreground: { type: String, default: '#ffffff' },
        hover: { type: String, default: '#2563eb' },
      },
      secondary: {
        background: { type: String, default: '#8b5cf6' },
        foreground: { type: String, default: '#ffffff' },
        hover: { type: String, default: '#7c3aed' },
      },
      outline: {
        border: { type: String, default: '#e2e8f0' },
        foreground: { type: String, default: '#0f172a' },
        hover: { type: String, default: '#f1f5f9' },
      },
      ghost: {
        foreground: { type: String, default: '#0f172a' },
        hover: { type: String, default: '#f1f5f9' },
      },
    },
    roundness: {
      none: { type: String, default: '0px' },
      sm: { type: String, default: '0.25rem' },
      md: { type: String, default: '0.5rem' },
      lg: { type: String, default: '0.75rem' },
      xl: { type: String, default: '1rem' },
      full: { type: String, default: '9999px' },
    },
    spacing: {
      xs: { type: String, default: '0.5rem' },
      sm: { type: String, default: '0.75rem' },
      md: { type: String, default: '1rem' },
      lg: { type: String, default: '1.5rem' },
      xl: { type: String, default: '2rem' },
    },
    typography: {
      fontFamily: {
        heading: { type: String, default: 'Inter, sans-serif' },
        body: { type: String, default: 'Inter, sans-serif' },
      },
      fontSize: {
        xs: { type: String, default: '0.75rem' },
        sm: { type: String, default: '0.875rem' },
        base: { type: String, default: '1rem' },
        lg: { type: String, default: '1.125rem' },
        xl: { type: String, default: '1.25rem' },
        '2xl': { type: String, default: '1.5rem' },
        '3xl': { type: String, default: '1.875rem' },
        '4xl': { type: String, default: '2.25rem' },
      },
    },
    shadows: {
      sm: { type: String, default: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
      md: { type: String, default: '0 4px 6px -1px rgb(0 0 0 / 0.1)' },
      lg: { type: String, default: '0 10px 15px -3px rgb(0 0 0 / 0.1)' },
      xl: { type: String, default: '0 20px 25px -5px rgb(0 0 0 / 0.1)' },
    },
    isActive: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.DesignSystem || mongoose.model<IDesignSystem>('DesignSystem', DesignSystemSchema);
