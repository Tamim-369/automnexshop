# E-commerce Component Library

A comprehensive, customizable e-commerce component library built with Next.js, TypeScript, Tailwind CSS, and MongoDB.

## Features

- **Design System**: Fully customizable design tokens stored in MongoDB
- **Multiple Component Variants**: Each component has 2-3 different design variants
- **Dynamic Theming**: Colors, roundness, spacing, typography all configurable
- **Type-Safe**: Built with TypeScript for better developer experience
- **Responsive**: All components are mobile-friendly

## Components

### Navigation
- **NavbarVariant1**: Clean minimal navbar with search
- **NavbarVariant2**: Feature-rich navbar with categories and top bar
- **NavbarVariant3**: Bold colored navbar with integrated search

### Product Cards
- **ProductCardVariant1**: Classic card with hover effects and wishlist
- **ProductCardVariant2**: Overlay actions with quick view
- **ProductCardVariant3**: Flexible horizontal/vertical layout with ratings

### Banners
- **BannerVariant1**: Hero banner with gradient overlay
- **BannerVariant2**: Split layout with image and content
- **BannerVariant3**: Grid of promotional banners

### Cart
- **CartItem**: Individual cart item with quantity controls
- **CartSummary**: Order summary with totals and checkout

### Other Components
- **CategoryCard**: Product category display (3 variants)
- **SearchBar**: Search input (3 variants)
- **TestimonialCard**: Customer reviews (3 variants)
- **Badge**: Status and label badges
- **Button**: Customizable button component
- **FooterVariant1**: Comprehensive footer with links
- **FooterVariant2**: Newsletter-focused footer

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up MongoDB:
```bash
# Copy environment variables
cp .env.example .env.local

# Update MONGODB_URI in .env.local
MONGODB_URI=mongodb://localhost:27017/ecommerce
```

3. Seed the default design system:
```bash
# Start your dev server
npm run dev

# In another terminal, seed the database
curl -X POST http://localhost:3000/api/design-system/seed
```

## Usage

### Using Components

```tsx
import { NavbarVariant1, ProductCardVariant1 } from '@/components/ecommerce';
import { useDesignSystem } from '@/hooks/useDesignSystem';

export default function MyPage() {
  const { designSystem, loading } = useDesignSystem();

  if (loading || !designSystem) return <div>Loading...</div>;

  return (
    <>
      <NavbarVariant1
        designSystem={designSystem}
        isUserLoggedIn={true}
        cartItemCount={3}
        brandName="My Store"
      />
      
      <ProductCardVariant1
        designSystem={designSystem}
        product={{
          id: '1',
          name: 'Product Name',
          price: 99.99,
          image: '/product.jpg',
        }}
        onAddToCart={(id) => console.log('Add to cart:', id)}
      />
    </>
  );
}
```

### Customizing Design System

```tsx
const { updateDesignSystem } = useDesignSystem();

// Update colors
await updateDesignSystem({
  colors: {
    ...designSystem.colors,
    primary: '#ff0000',
  },
});

// Update button roundness
await updateDesignSystem({
  roundness: {
    ...designSystem.roundness,
    md: '1rem',
  },
});
```

## Design System Structure

The design system includes:

- **Colors**: Primary, secondary, tertiary, accent, background, foreground, muted, borders, status colors
- **Button Styles**: Primary, secondary, outline, ghost variants
- **Roundness**: none, sm, md, lg, xl, full
- **Spacing**: xs, sm, md, lg, xl
- **Typography**: Font families and sizes
- **Shadows**: sm, md, lg, xl

## API Routes

- `GET /api/design-system` - Get active design system
- `POST /api/design-system` - Create new design system
- `PUT /api/design-system` - Update existing design system
- `POST /api/design-system/seed` - Seed default design system

## Component Props

All components accept:
- `designSystem`: The design system configuration
- Component-specific props (see TypeScript types)

Common props:
- `isUserLoggedIn`: Boolean for user state
- `cartItemCount`: Number of items in cart
- `onAddToCart`: Callback for add to cart action
- `variant`: Component variant selection

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```
