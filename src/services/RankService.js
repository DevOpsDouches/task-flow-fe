// frontend/src/services/RankService.js

const TODO_SERVICE_URL = process.env.REACT_APP_TODO_SERVICE_URL || 'http://localhost:3002';

export const RankService = {
  /**
   * Get user's rank information with progress
   */
  async getRankInfo(userId, token) {
    try {
      const response = await fetch(`${TODO_SERVICE_URL}/api/ranks/info`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Get rank info error:', error);
      return {
        success: false,
        message: 'Failed to get rank information'
      };
    }
  },

  /**
   * Get user's rank upgrade history
   */
  async getRankHistory(userId, token) {
    try {
      const response = await fetch(`${TODO_SERVICE_URL}/api/ranks/history`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Get rank history error:', error);
      return {
        success: false,
        message: 'Failed to get rank history'
      };
    }
  },

  /**
   * Get leaderboard
   */
  async getLeaderboard(limit = 10) {
    try {
      const response = await fetch(`${TODO_SERVICE_URL}/api/ranks/leaderboard?limit=${limit}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Get leaderboard error:', error);
      return {
        success: false,
        message: 'Failed to get leaderboard'
      };
    }
  }
};
