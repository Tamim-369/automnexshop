import { seedDesignSystem } from '../lib/seed-design-system';

async function main() {
    console.log('🌱 Seeding database...');

    try {
        await seedDesignSystem();
        console.log('✅ Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
}

main();
