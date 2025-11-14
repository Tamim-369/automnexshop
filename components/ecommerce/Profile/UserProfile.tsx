'use client';

import { IDesignSystem } from '@/models/DesignSystem';
import { Button } from '../Button';
import { User, Mail, Phone, MapPin, Edit } from 'lucide-react';

interface UserProfileProps {
    designSystem: Partial<IDesignSystem>;
    user: {
        name: string;
        email: string;
        phone?: string;
        address?: string;
        avatar?: string;
        memberSince: string;
    };
    onEdit?: () => void;
}

export default function UserProfile({
    designSystem,
    user,
    onEdit,
}: UserProfileProps) {
    const colors = designSystem.colors;
    const roundness = designSystem.roundness?.lg || '0.75rem';

    return (
        <div
            className="p-8"
            style={{
                backgroundColor: colors?.card,
                borderRadius: roundness,
                border: `1px solid ${colors?.border}`,
            }}
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                    {user.avatar ? (
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-20 h-20 rounded-full object-cover"
                        />
                    ) : (
                        <div
                            className="w-20 h-20 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: colors?.primary }}
                        >
                            <User className="h-10 w-10 text-white" />
                        </div>
                    )}
                    <div>
                        <h2 className="text-2xl font-bold" style={{ color: colors?.foreground }}>
                            {user.name}
                        </h2>
                        <p className="text-sm" style={{ color: colors?.mutedForeground }}>
                            Member since {user.memberSince}
                        </p>
                    </div>
                </div>
                <Button
                    variant="outline"
                    size="md"
                    roundness="md"
                    colors={designSystem.button?.outline}
                    onClick={onEdit}
                >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                </Button>
            </div>

            {/* Info */}
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" style={{ color: colors?.mutedForeground }} />
                    <span style={{ color: colors?.foreground }}>{user.email}</span>
                </div>
                {user.phone && (
                    <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5" style={{ color: colors?.mutedForeground }} />
                        <span style={{ color: colors?.foreground }}>{user.phone}</span>
                    </div>
                )}
                {user.address && (
                    <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5" style={{ color: colors?.mutedForeground }} />
                        <span style={{ color: colors?.foreground }}>{user.address}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
