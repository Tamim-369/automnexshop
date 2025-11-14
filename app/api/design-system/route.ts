import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import DesignSystem from '@/models/DesignSystem';

export async function GET() {
  try {
    await connectDB();
    const activeDesignSystem = await DesignSystem.findOne({ isActive: true });
    
    if (!activeDesignSystem) {
      return NextResponse.json(
        { error: 'No active design system found' },
        { status: 404 }
      );
    }

    return NextResponse.json(activeDesignSystem);
  } catch (error) {
    console.error('Error fetching design system:', error);
    return NextResponse.json(
      { error: 'Failed to fetch design system' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    
    // Deactivate all existing design systems
    await DesignSystem.updateMany({}, { isActive: false });
    
    // Create new design system
    const designSystem = await DesignSystem.create({
      ...body,
      isActive: true,
    });

    return NextResponse.json(designSystem, { status: 201 });
  } catch (error) {
    console.error('Error creating design system:', error);
    return NextResponse.json(
      { error: 'Failed to create design system' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Design system ID is required' },
        { status: 400 }
      );
    }

    const designSystem = await DesignSystem.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!designSystem) {
      return NextResponse.json(
        { error: 'Design system not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(designSystem);
  } catch (error) {
    console.error('Error updating design system:', error);
    return NextResponse.json(
      { error: 'Failed to update design system' },
      { status: 500 }
    );
  }
}
