import React from 'react';

const PeakPlayerStats = ({ peakPlayers }) => {
  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const peaks = [
    { label: 'All Time', value: peakPlayers.allTime, color: '#FF6B6B' },
    { label: 'Past 30 Days', value: peakPlayers.past30Days, color: '#4ECDC4' },
    { label: 'Past 7 Days', value: peakPlayers.past7Days, color: '#45B7D1' },
    { label: 'Past 24 Hours', value: peakPlayers.past24Hours, color: '#96CEB4' },
  ];

  return (
    <div className="peak-stats">
      <h2 className="section-title">Peak Player Count</h2>
      <div className="peak-grid">
        {peaks.map((peak, index) => (
          <div key={index} className="peak-card" style={{ backgroundColor: peak.color }}>
            <div className="peak-label">{peak.label}</div>
            <div className="peak-value">{formatNumber(peak.value)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeakPlayerStats;
