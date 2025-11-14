# Component Library Documentation

## 🎨 Design Philosophy

Each component is inspired by popular e-commerce brands:
- **Amazon**: Clean, functional, information-dense
- **Shopify**: Modern, minimalist, conversion-focused
- **Nike**: Bold, image-heavy, brand-forward
- **ASOS**: Trendy, fashion-forward, mobile-first
- **Apple**: Premium, spacious, elegant

## 📦 Component Variants

### Navbar (3 Variants)

#### NavbarVariant1 - Minimal & Clean (Amazon-inspired)
- Simple search-focused design
- Minimal distractions
- Mobile hamburger menu
- Cart with badge counter

#### NavbarVariant2 - Feature-Rich (Shopify-inspired)
- Top announcement bar
- Category navigation
- Wishlist + Cart
- Mobile-responsive menu
- Multiple action buttons

#### NavbarVariant3 - Bold & Branded (Nike-inspired)
- Colored background
- Integrated search
- Large brand presence
- Prominent CTA buttons

### Product Cards (3 Variants)

#### ProductCardVariant1 - Classic (Amazon-inspired)
- Hover effects with "Add to Cart"
- Wishlist heart icon
- Star ratings with review count
- Discount badges
- Original price strikethrough

#### ProductCardVariant2 - Overlay Actions (ASOS-inspired)
- Quick view on hover
- Overlay action buttons
- Category tags
- Stock status badges
- Minimal product info

#### ProductCardVariant3 - Flexible Layout (Apple-inspired)
- Horizontal or vertical layouts
- Clean, spacious design
- Star ratings
- Badge support
- Premium feel

### Banners (3 Variants)

#### BannerVariant1 - Hero (Nike-inspired)
- Full-width hero
- Gradient overlays
- Large typography
- Strong CTAs
- Background images

#### BannerVariant2 - Split Layout (Apple-inspired)
- Image + content split
- Clean, minimal design
- Flexible image position
- Spacious padding

#### BannerVariant3 - Grid Banners (Shopify-inspired)
- Multiple promotional banners
- Grid layout
- Hover effects
- Individual CTAs

### Features (3 Variants)

#### FeatureVariant1 - Card Grid (Amazon-inspired)
- Individual cards
- Icon + title + description
- Border styling
- Centered layout

#### FeatureVariant2 - Inline (Minimal)
- Horizontal layout
- Compact design
- Icon + text side-by-side
- Border top/bottom

#### FeatureVariant3 - Gradient Icons (Premium)
- Gradient backgrounds
- Large circular icons
- Centered text
- Muted background section

### Category Grid (3 Variants)

#### Grid - Standard (Amazon-inspired)
- Equal-sized cards
- Product counts
- Hover effects
- 2-4 column responsive

#### Featured - Hero Layout (Nike-inspired)
- Large featured category
- Smaller supporting categories
- Overlay text on images
- Dramatic visuals

#### Minimal - Circular (ASOS-inspired)
- Circular category images
- Clean, simple
- 6 columns on desktop
- Name only, no counts

### Product Slider

- Horizontal scrolling
- Navigation arrows
- Smooth animations
- Custom product rendering
- Responsive breakpoints

### Deal Section

#### DealVariant1 - Countdown Timer
- Large hero layout
- Live countdown (hours, minutes, seconds)
- Gradient or image background
- Urgency-focused design
- Prominent CTA

### Cart Components

#### CartItem
- Product image
- Quantity controls (+/-)
- Price calculation
- Remove button
- Variant display

#### CartSummary
- Subtotal, shipping, tax
- Discount display
- Total calculation
- Checkout button
- Security badge

### Footer (2 Variants)

#### FooterVariant1 - Comprehensive
- Brand section
- Multiple link columns
- Social media icons
- Copyright notice
- Full-featured

#### FooterVariant2 - Newsletter Focus
- Newsletter subscription
- Email input + CTA
- Dark background
- Minimal links
- Modern design

### Other Components

#### SearchBar (3 variants)
- Default, Filled, Outlined
- Clear button
- Search icon
- Customizable placeholder

#### TestimonialCard (3 variants)
- Default, Minimal, Card
- Star ratings
- Avatar support
- Role/title display

#### CategoryCard (3 variants)
- Default, Minimal, Overlay
- Product counts
- Hover effects
- Flexible styling

#### Badge
- Multiple variants (primary, secondary, success, warning, error, info)
- Size options (sm, md, lg)
- Roundness control

#### Button
- Variants: primary, secondary, outline, ghost, destructive
- Sizes: sm, md, lg, icon
- Roundness: none, sm, md, lg, xl, full
- Custom color support

## 🎯 Usage Examples

### Basic Product Card
```tsx
<ProductCardVariant1
  designSystem={designSystem}
  product={{
    id: '1',
    name: 'Product Name',
    price: 99.99,
    originalPrice: 129.99,
    image: '/product.jpg',
    rating: 4.5,
    reviews: 123,
  }}
  onAddToCart={(id) => handleAddToCart(id)}
  onToggleWishlist={(id) => handleWishlist(id)}
  isInWishlist={false}
/>
```

### Product Slider
```tsx
<ProductSlider
  designSystem={designSystem}
  title="Trending Products"
  products={products}
  renderProduct={(product) => (
    <ProductCardVariant1
      designSystem={designSystem}
      product={product}
    />
  )}
/>
```

### Category Grid
```tsx
<CategoryGrid
  designSystem={designSystem}
  title="Shop by Category"
  categories={categories}
  variant="featured"
  onCategoryClick={(name) => navigate(`/category/${name}`)}
/>
```

## 🎨 Design System Props

All components accept a `designSystem` prop with:

```typescript
{
  colors: {
    primary, secondary, tertiary, accent,
    background, foreground, muted, mutedForeground,
    card, cardForeground, border,
    success, warning, error, info
  },
  button: {
    primary: { background, foreground, hover },
    secondary: { background, foreground, hover },
    outline: { border, foreground, hover },
    ghost: { foreground, hover }
  },
  roundness: { none, sm, md, lg, xl, full },
  spacing: { xs, sm, md, lg, xl },
  typography: { fontFamily, fontSize },
  shadows: { sm, md, lg, xl }
}
```

## 🚀 Best Practices

1. **Always use the design system**: Pass the `designSystem` prop to maintain consistency
2. **Responsive by default**: All components are mobile-first
3. **Accessibility**: Components include proper ARIA labels and keyboard navigation
4. **Performance**: Images use lazy loading, sliders use smooth scrolling
5. **Customization**: Override styles via className when needed

## 🎭 Mixing Variants

You can mix and match variants to create unique layouts:

```tsx
// Bold navbar + minimal categories + classic products
<NavbarVariant3 />
<CategoryGrid variant="minimal" />
<ProductCardVariant1 />
```

This gives you 3 × 3 × 3 = 27 different combinations just for the main sections!
