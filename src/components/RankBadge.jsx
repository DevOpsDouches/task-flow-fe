// frontend/src/components/RankBadge.jsx
import React from 'react';
import { Award, Trophy, Crown, Gem, Star, Medal } from 'lucide-react';

const RANK_ICONS = {
  iron: Medal,
  silver: Star,
  gold: Trophy,
  diamond: Gem,
  platinum: Crown,
  todo_master: Award
};

const RANK_GRADIENTS = {
  iron: 'from-gray-400 to-gray-600',
  silver: 'from-gray-300 to-gray-500',
  gold: 'from-yellow-400 to-yellow-600',
  diamond: 'from-cyan-400 to-blue-500',
  platinum: 'from-gray-200 to-gray-400',
  todo_master: 'from-red-500 to-red-700'
};

const RANK_GLOW = {
  iron: 'shadow-gray-500/50',
  silver: 'shadow-gray-400/50',
  gold: 'shadow-yellow-500/50',
  diamond: 'shadow-cyan-500/50',
  platinum: 'shadow-gray-300/50',
  todo_master: 'shadow-red-500/70'
};

export function RankBadge({ rank, size = 'md', showLabel = true, animated = false }) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28'
  };

  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 32,
    xl: 48
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  const Icon = RANK_ICONS[rank.current] || Medal;
  const gradient = RANK_GRADIENTS[rank.current] || RANK_GRADIENTS.iron;
  const glow = RANK_GLOW[rank.current] || RANK_GLOW.iron;

  return (
    <div className="flex items-center space-x-3">
      <div 
        className={`
          ${sizeClasses[size]} 
          bg-gradient-to-br ${gradient} 
          rounded-full 
          flex items-center justify-center 
          shadow-lg ${glow}
          ${animated ? 'animate-pulse-glow' : ''}
          transition-all duration-300
        `}
      >
        <Icon className="text-white" size={iconSizes[size]} />
      </div>
      
      {showLabel && (
        <div>
          <p className={`font-bold ${textSizes[size]} text-gray-800`}>
            {rank.displayName}
          </p>
          <p className="text-xs text-gray-500">
            {rank.totalCompleted} tasks completed
          </p>
        </div>
      )}
    </div>
  );
}
