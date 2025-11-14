# Quick Setup Guide

## 1. Install Dependencies
```bash
npm install
```

## 2. Setup MongoDB
Make sure MongoDB is running locally or update `.env.local` with your MongoDB URI:
```
MONGODB_URI=mongodb://localhost:27017/ecommerce
```

## 3. Seed the Database
You have two options:

### Option A: Using the API route (after starting dev server)
```bash
# Terminal 1: Start dev server
npm run dev

# Terminal 2: Seed database
curl -X POST http://localhost:3000/api/design-system/seed
```

### Option B: Using the seed script
```bash
npm install -D tsx
npm run seed
```

## 4. Start Development Server
```bash
npm run dev
```

Visit http://localhost:3000 to see your e-commerce site!

## What You'll See

✨ **Modern E-commerce Landing Page** with:
- Feature-rich navbar with categories and cart
- Hero banner with call-to-action
- Trust badges (shipping, payment, returns, support)
- Featured category grid with large hero category
- Flash sale countdown timer
- Trending products slider
- New arrivals slider
- Newsletter subscription section
- Comprehensive footer with links and social media

## Customization

All design tokens (colors, roundness, spacing, etc.) are stored in MongoDB and can be updated via the API:

```typescript
// In your component
const { updateDesignSystem } = useDesignSystem();

await updateDesignSystem({
  colors: {
    ...designSystem.colors,
    primary: '#your-color',
  },
});
```

## Available Components

Each component has multiple variants (2-5 per component):

- **Navbar**: 3 variants (minimal, feature-rich, bold)
- **Product Cards**: 3 variants (classic, overlay, flexible)
- **Banners**: 3 variants (hero, split, grid)
- **Features**: 3 variants (cards, inline, gradient)
- **Category Grid**: 3 variants (grid, featured, minimal)
- **Footer**: 2 variants (comprehensive, newsletter)
- **Cart**: Item and Summary components
- **Others**: Search, Testimonials, Badges, Buttons, etc.

## Next Steps

1. Connect to a real product database
2. Implement authentication
3. Add shopping cart functionality
4. Set up payment processing
5. Create product detail pages
6. Add checkout flow

Enjoy building! 🚀
