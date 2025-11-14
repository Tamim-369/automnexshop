'use client';

import { useState, useEffect } from 'react';
import { IDesignSystem } from '@/models/DesignSystem';

export function useDesignSystem() {
  const [designSystem, setDesignSystem] = useState<Partial<IDesignSystem> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDesignSystem();
  }, []);

  const fetchDesignSystem = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/design-system');
      
      if (!response.ok) {
        throw new Error('Failed to fetch design system');
      }

      const data = await response.json();
      setDesignSystem(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching design system:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateDesignSystem = async (updates: Partial<IDesignSystem>) => {
    try {
      const response = await fetch('/api/design-system', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: designSystem?._id,
          ...updates,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update design system');
      }

      const data = await response.json();
      setDesignSystem(data);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    }
  };

  return {
    designSystem,
    loading,
    error,
    refetch: fetchDesignSystem,
    updateDesignSystem,
  };
}
