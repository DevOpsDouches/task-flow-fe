// frontend/src/components/RankUpgradeModal.jsx
import React, { useEffect, useState } from 'react';
import { X, Sparkles, TrendingUp } from 'lucide-react';
import { RankBadge } from './RankBadge';

export function RankUpgradeModal({ upgrade, onClose }) {
  const [show, setShow] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setTimeout(() => setShow(true), 100);
    
    // Trigger celebration animation
    setTimeout(() => setCelebrate(true), 500);

    // Auto-close after 5 seconds
    const timer = setTimeout(() => {
      handleClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => onClose(), 300);
  };

  if (!upgrade) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div 
        className={`
          glass-white rounded-3xl p-8 max-w-md w-full text-center 
          transform transition-all duration-500
          ${show ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}
        `}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Confetti animation */}
        {celebrate && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 0.5}s`,
                  backgroundColor: ['#FFD700', '#FF6B6B', '#4ECDC4', '#A78BFA'][Math.floor(Math.random() * 4)]
                }}
              />
            ))}
          </div>
        )}

        {/* Icon */}
        <div className="mb-6 relative">
          <div className={`
            inline-block p-4 bg-gradient-to-br from-purple-500 to-indigo-600 
            rounded-2xl 
            ${celebrate ? 'animate-bounce-scale' : ''}
          `}>
            <TrendingUp className="text-white" size={48} />
          </div>
          <div className="absolute -top-2 -right-2 animate-spin-slow">
            <Sparkles className="text-yellow-400" size={32} />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold gradient-text mb-2">
          Rank Upgrade!
        </h2>
        <p className="text-gray-600 mb-6">
          Congratulations on your achievement!
        </p>

        {/* Rank progression */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">From</p>
            <RankBadge 
              rank={{
                current: upgrade.fromRank,
                displayName: upgrade.fromRank.charAt(0).toUpperCase() + upgrade.fromRank.slice(1).replace('_', ' '),
                totalCompleted: 0
              }}
              size="lg"
              showLabel={false}
            />
          </div>

          <div className="text-purple-500">
            <TrendingUp size={32} className="animate-pulse" />
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">To</p>
            <RankBadge 
              rank={{
                current: upgrade.toRank,
                displayName: upgrade.rankInfo.displayName,
                totalCompleted: 0
              }}
              size="lg"
              showLabel={false}
              animated={true}
            />
          </div>
        </div>

        {/* New rank name */}
        <div className="glass-card rounded-xl p-4 mb-6">
          <p className="text-2xl font-bold gradient-text">
            {upgrade.rankInfo.displayName}
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg"
        >
          Awesome!
        </button>
      </div>
    </div>
  );
}
