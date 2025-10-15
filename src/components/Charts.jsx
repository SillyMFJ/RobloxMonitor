import React, { useState } from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: 'rgba(15, 23, 42, 0.95)',
        border: '2px solid rgba(96, 165, 250, 0.5)',
        borderRadius: '12px',
        padding: '12px 16px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)'
      }}>
        <p style={{ color: '#60a5fa', fontWeight: 'bold', marginBottom: '8px' }}>{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color, margin: '4px 0', fontWeight: '600' }}>
            {entry.name}: {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const Charts = ({ dailyData, hourlyData, tenMinData }) => {
  const [activeChart, setActiveChart] = useState('hourly');

  const chartConfig = {
    daily: {
      title: 'Daily Analytics (Past 30 Days)',
      data: dailyData,
      dataKey: 'date',
      lines: [
        { key: 'players', name: 'Players', color: '#60a5fa', gradient: true }
      ]
    },
    hourly: {
      title: 'Hourly Analytics (Past 24 Hours)',
      data: hourlyData,
      dataKey: 'time',
      lines: [
        { key: 'players', name: 'Players', color: '#a78bfa', gradient: true }
      ]
    },
    tenMin: {
      title: '10-Minute Intervals (Past 12 Hours)',
      data: tenMinData,
      dataKey: 'time',
      lines: [
        { key: 'players', name: 'Players', color: '#34d399', gradient: true }
      ]
    }
  };

  const config = chartConfig[activeChart];

  return (
    <div className="charts-container">
      <div className="chart-header">
        <h2 className="section-title">📊 Live Analytics</h2>
        <div className="chart-tabs">
          <button 
            className={`chart-tab ${activeChart === 'daily' ? 'active' : ''}`}
            onClick={() => setActiveChart('daily')}
          >
            📅 Daily
          </button>
          <button 
            className={`chart-tab ${activeChart === 'hourly' ? 'active' : ''}`}
            onClick={() => setActiveChart('hourly')}
          >
            🕐 Hourly
          </button>
          <button 
            className={`chart-tab ${activeChart === 'tenMin' ? 'active' : ''}`}
            onClick={() => setActiveChart('tenMin')}
          >
            ⚡ Real-time
          </button>
        </div>
      </div>
      
      <div className="chart-content">
        <h3 className="chart-title">{config.title}</h3>
        <ResponsiveContainer width="100%" height={450}>
          <AreaChart 
            data={config.data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              {config.lines.map((line) => (
                <linearGradient key={`gradient-${line.key}`} id={`color-${line.key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={line.color} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={line.color} stopOpacity={0.1}/>
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(96, 165, 250, 0.1)" />
            <XAxis 
              dataKey={config.dataKey} 
              angle={-45}
              textAnchor="end"
              height={80}
              interval="preserveStartEnd"
              stroke="#94a3b8"
              tick={{ fill: '#94a3b8', fontSize: 12 }}
            />
            <YAxis 
              stroke="#94a3b8"
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="circle"
            />
            {config.lines.map((line) => (
              <Area
                key={line.key}
                type="monotone"
                dataKey={line.key}
                name={line.name}
                stroke={line.color}
                strokeWidth={3}
                fill={`url(#color-${line.key})`}
                animationDuration={1000}
                dot={{ r: 4, fill: line.color, strokeWidth: 2, stroke: '#0a0e27' }}
                activeDot={{ r: 6, stroke: line.color, strokeWidth: 2 }}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
