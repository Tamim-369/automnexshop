import { NextResponse } from 'next/server';
import { seedDesignSystem } from '@/lib/seed-design-system';

export async function POST() {
  try {
    await seedDesignSystem();
    return NextResponse.json({ message: 'Design system seeded successfully' });
  } catch (error) {
    console.error('Error seeding design system:', error);
    return NextResponse.json(
      { error: 'Failed to seed design system' },
      { status: 500 }
    );
  }
}
