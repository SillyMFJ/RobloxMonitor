import React from 'react';

const StatsPanel = ({ game }) => {
  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const stats = [
    { label: 'Active Players', value: formatNumber(game.players), icon: '👥', color: '#4CAF50' },
    { label: 'Total Visits', value: formatNumber(game.visits), icon: '👁️', color: '#2196F3' },
    { label: 'Upvotes', value: formatNumber(game.upvotes), icon: '👍', color: '#8BC34A' },
    { label: 'Downvotes', value: formatNumber(game.downvotes), icon: '👎', color: '#F44336' },
    { label: 'Rating', value: `${game.rating}%`, icon: '⭐', color: '#FFC107' },
    { label: 'Favorites', value: formatNumber(game.favorites), icon: '❤️', color: '#E91E63' },
  ];

  return (
    <div className="stats-panel">
      <h2 className="section-title">Primary Statistics</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ borderLeftColor: stat.color }}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsPanel;
