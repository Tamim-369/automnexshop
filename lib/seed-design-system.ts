import connectDB from './mongodb';
import DesignSystem from '../models/DesignSystem';

export const defaultDesignSystem = {
  name: 'Default Modern',
  colors: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    tertiary: '#ec4899',
    accent: '#f59e0b',
    background: '#ffffff',
    foreground: '#0f172a',
    muted: '#f1f5f9',
    mutedForeground: '#64748b',
    card: '#ffffff',
    cardForeground: '#0f172a',
    border: '#e2e8f0',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  button: {
    primary: {
      background: '#3b82f6',
      foreground: '#ffffff',
      hover: '#2563eb',
    },
    secondary: {
      background: '#8b5cf6',
      foreground: '#ffffff',
      hover: '#7c3aed',
    },
    outline: {
      border: '#e2e8f0',
      foreground: '#0f172a',
      hover: '#f1f5f9',
    },
    ghost: {
      foreground: '#0f172a',
      hover: '#f1f5f9',
    },
  },
  roundness: {
    none: '0px',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  typography: {
    fontFamily: {
      heading: 'Inter, sans-serif',
      body: 'Inter, sans-serif',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  },
  isActive: true,
};

export async function seedDesignSystem() {
  try {
    await connectDB();
    
    const existing = await DesignSystem.findOne({ name: 'Default Modern' });
    
    if (!existing) {
      await DesignSystem.create(defaultDesignSystem);
      console.log('✅ Default design system seeded successfully');
    } else {
      console.log('ℹ️  Default design system already exists');
    }
  } catch (error) {
    console.error('❌ Error seeding design system:', error);
    throw error;
  }
}
