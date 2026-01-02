// frontend/src/components/RankProgressBar.jsx
import React from 'react';

export function RankProgressBar({ progress, currentRank, nextRank, tasksToNext }) {
  if (progress.isMaxRank) {
    return (
      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-700">Max Rank Achieved!</span>
          <span className="text-sm font-bold text-purple-600">100%</span>
        </div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transition-all duration-500 animate-pulse"
            style={{ width: '100%' }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-600">
          Progress to <span className="font-bold text-gray-800">{nextRank}</span>
        </span>
        <span className="text-sm font-bold text-purple-600">{progress.current}%</span>
      </div>
      
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden relative">
        <div 
          className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transition-all duration-500"
          style={{ width: `${progress.current}%` }}
        >
          <div className="h-full w-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>
      </div>
      
      <p className="text-xs text-gray-500 mt-2 text-center">
        {tasksToNext} more {tasksToNext === 1 ? 'task' : 'tasks'} to next rank
      </p>
    </div>
  );
}
