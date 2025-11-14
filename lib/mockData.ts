// Mock data for the entire e-commerce site

export const products = [
    {
        id: '1',
        name: 'Premium Wireless Headphones',
        price: 299.99,
        originalPrice: 399.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
        rating: 4.8,
        reviews: 1234,
        category: 'Electronics',
        brand: 'AudioTech',
        inStock: true,
        description: 'Experience premium sound quality with active noise cancellation and 30-hour battery life.',
    },
    {
        id: '2',
        name: 'Smart Watch Series 7',
        price: 449.99,
        originalPrice: 549.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
        rating: 4.9,
        reviews: 2156,
        category: 'Electronics',
        brand: 'TechPro',
        inStock: true,
        description: 'Advanced fitness tracking with heart rate monitor and GPS.',
    },
    {
        id: '3',
        name: 'Premium Leather Backpack',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
        rating: 4.7,
        reviews: 856,
        category: 'Fashion',
        brand: 'StyleCo',
        inStock: true,
        description: 'Handcrafted leather backpack with laptop compartment.',
    },
    {
        id: '4',
        name: 'Running Shoes Pro',
        price: 89.99,
        originalPrice: 129.99,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
        rating: 4.6,
        reviews: 643,
        category: 'Sports',
        brand: 'SportMax',
        inStock: true,
        description: 'Lightweight running shoes with superior cushioning.',
    },
    {
        id: '5',
        name: 'Portable Bluetooth Speaker',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80',
        rating: 4.5,
        reviews: 432,
        category: 'Electronics',
        brand: 'AudioTech',
        inStock: true,
        description: 'Waterproof speaker with 12-hour battery life.',
    },
    {
        id: '6',
        name: 'Professional Camera Lens',
        price: 899.99,
        image: 'https://images.unsplash.com/photo-1606980707146-b3a0c2c8238f?w=800&q=80',
        rating: 4.9,
        reviews: 321,
        category: 'Electronics',
        brand: 'PhotoPro',
        inStock: true,
        description: 'Professional 50mm f/1.8 lens for stunning portraits.',
    },
];

export const categories = [
    {
        name: 'Electronics',
        image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80',
        productCount: 1234,
        href: '/shop?category=electronics',
    },
    {
        name: 'Fashion',
        image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
        productCount: 856,
        href: '/shop?category=fashion',
    },
    {
        name: 'Home & Living',
        image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80',
        productCount: 642,
        href: '/shop?category=home',
    },
    {
        name: 'Sports',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
        productCount: 423,
        href: '/shop?category=sports',
    },
    {
        name: 'Beauty',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
        productCount: 789,
        href: '/shop?category=beauty',
    },
    {
        name: 'Books',
        image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&q=80',
        productCount: 567,
        href: '/shop?category=books',
    },
];

export const navLinks = {
    shop: '/shop',
    cart: '/cart',
    checkout: '/checkout',
    profile: '/profile',
    login: '/auth/login',
    signup: '/auth/signup',
    dashboard: '/dashboard',
    home: '/',
};

export const footerLinks = [
    {
        title: 'Shop',
        items: [
            { label: 'All Products', href: '/shop' },
            { label: 'New Arrivals', href: '/shop?sort=newest' },
            { label: 'Best Sellers', href: '/shop?sort=featured' },
            { label: 'Sale', href: '/shop?sale=true' },
        ],
    },
    {
        title: 'Support',
        items: [
            { label: 'Contact Us', href: '/contact' },
            { label: 'FAQs', href: '/faq' },
            { label: 'Shipping Info', href: '/shipping' },
            { label: 'Returns', href: '/returns' },
        ],
    },
    {
        title: 'Company',
        items: [
            { label: 'About Us', href: '/about' },
            { label: 'Careers', href: '/careers' },
            { label: 'Press', href: '/press' },
            { label: 'Blog', href: '/blog' },
        ],
    },
];

export const socialLinks = {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
};
