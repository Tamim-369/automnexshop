# 🚀 Quick Start

## Get Running in 3 Steps

### 1️⃣ Install & Setup
```bash
npm install
```

### 2️⃣ Start MongoDB & Seed
```bash
# Make sure MongoDB is running on localhost:27017
# Then seed the design system:
npm run dev

# In another terminal:
curl -X POST http://localhost:3000/api/design-system/seed
```

### 3️⃣ View Your Site
Open http://localhost:3000 🎉

## What You Get

✨ **A fully functional e-commerce landing page** with:

- **Modern Navbar** with categories, search, cart (3 items), wishlist (5 items)
- **Hero Banner** with summer sale promotion
- **Trust Badges** (Free shipping, Secure payment, Easy returns, 24/7 support)
- **8 Categories** in a featured grid layout (Electronics, Fashion, Home, Sports, Beauty, Books, Toys, Automotive)
- **Flash Sale** with live countdown timer
- **Trending Products** slider (6 products)
- **New Arrivals** slider (6 products)
- **Newsletter** subscription section
- **Comprehensive Footer** with links and social media

## 🎨 Component Variants Available

| Component | Variants | Inspired By |
|-----------|----------|-------------|
| Navbar | 3 | Amazon, Shopify, Nike |
| Product Card | 3 | Amazon, ASOS, Apple |
| Banner | 3 | Nike, Apple, Shopify |
| Features | 3 | Various |
| Category Grid | 3 | Amazon, Nike, ASOS |
| Footer | 2 | Standard, Newsletter |

**Total combinations**: 3 × 3 × 3 × 3 × 3 × 2 = **486 unique layouts!**

## 🔧 Customize Design

```typescript
// Update colors
const { updateDesignSystem } = useDesignSystem();

await updateDesignSystem({
  colors: {
    ...designSystem.colors,
    primary: '#FF0000',    // Your brand color
    secondary: '#00FF00',  // Secondary color
  }
});
```

## 📁 Project Structure

```
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout
│   └── api/
│       └── design-system/    # Design system API
├── components/
│   └── ecommerce/            # All components
│       ├── Navbar/           # 3 variants
│       ├── ProductCard/      # 3 variants
│       ├── Banner/           # 3 variants
│       ├── FeatureSection/   # 3 variants
│       ├── CategoryGrid/     # 3 variants
│       ├── ProductSlider/    # Horizontal slider
│       ├── DealSection/      # Countdown timer
│       ├── Footer/           # 2 variants
│       └── ...               # More components
├── models/
│   └── DesignSystem.ts       # MongoDB schema
├── lib/
│   ├── mongodb.ts            # Database connection
│   └── seed-design-system.ts # Seed data
└── hooks/
    └── useDesignSystem.ts    # Design system hook
```

## 🎯 Next Steps

1. **Add more pages**: Product detail, Cart, Checkout
2. **Connect real data**: Replace mock data with API calls
3. **Add authentication**: User login/signup
4. **Implement cart**: Shopping cart functionality
5. **Payment integration**: Stripe, PayPal, etc.
6. **Admin panel**: Manage products and design system

## 💡 Pro Tips

- Mix and match component variants for unique designs
- All components are fully responsive
- Design system is stored in MongoDB for easy updates
- Use the `useDesignSystem` hook to access/update design tokens
- Check `COMPONENTS.md` for detailed component documentation

## 🐛 Troubleshooting

**MongoDB connection error?**
- Make sure MongoDB is running: `mongod`
- Check `.env.local` has correct URI

**Design system not loading?**
- Run the seed command: `curl -X POST http://localhost:3000/api/design-system/seed`
- Check MongoDB is accessible

**Components not styled?**
- Verify `app/globals.css` is imported in `layout.tsx`
- Check Tailwind CSS is configured

## 📚 Documentation

- `README.md` - Full project documentation
- `COMPONENTS.md` - Component library reference
- `SETUP.md` - Detailed setup guide
- `QUICKSTART.md` - This file!

Happy building! 🎉
