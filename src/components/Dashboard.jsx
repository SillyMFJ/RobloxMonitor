import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';
import StatsPanel from './StatsPanel';
import PeakPlayerStats from './PeakPlayerStats';
import Charts from './Charts';
import { extractPlaceId, getUniverseIdFromPlaceId, getGameThumbnail, getRealGameData } from '../services/robloxApi';

const Dashboard = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gameUrl, setGameUrl] = useState('');
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const defaultGames = [
    'https://www.roblox.com/games/133120777017776/The-Church-Of-Spawnism',
    'https://www.roblox.com/games/7041939546/Catalog-Avatar-Creator'
  ];

  useEffect(() => {
    loadDefaultGames();
    
    const interval = setInterval(() => {
      refreshAllGames();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const loadDefaultGames = async () => {
    setLoading(true);
    const loadedGames = [];
    
    for (const url of defaultGames) {
      const gameData = await loadGame(url);
      if (gameData) {
        loadedGames.push(gameData);
      }
    }
    
    setGames(loadedGames);
    setLoading(false);
  };

  const loadGame = async (url) => {
    try {
      console.log('Loading game from URL:', url);
      
      const placeId = extractPlaceId(url);
      console.log('Extracted placeId:', placeId);
      
      if (!placeId) {
        console.error('Invalid URL - could not extract placeId');
        alert('Invalid Roblox game URL');
        return null;
      }

      console.log('Getting universeId for placeId:', placeId);
      const universeId = await getUniverseIdFromPlaceId(placeId);
      console.log('Got universeId:', universeId);
      
      if (!universeId) {
        console.error('Failed to get universeId');
        alert('Failed to get universe ID for this game');
        return null;
      }

      console.log('Fetching game data and thumbnail...');
      const [gameData, thumbnail] = await Promise.all([
        getRealGameData(universeId),
        getGameThumbnail(universeId)
      ]);

      gameData.thumbnail = thumbnail;
      gameData.url = url;
      gameData.placeId = placeId;

      console.log('Game loaded successfully:', gameData.name);
      return gameData;
    } catch (error) {
      console.error('Error loading game:', error);
      console.error('Error stack:', error.stack);
      console.error('Error response:', error.response?.data);
      alert(`Failed to load game: ${error.message}`);
      return null;
    }
  };

  const handleAddGame = async (e) => {
    e.preventDefault();
    if (!gameUrl.trim()) return;

    setLoading(true);
    const gameData = await loadGame(gameUrl);
    if (gameData) {
      setGames([...games, gameData]);
      setGameUrl('');
    }
    setLoading(false);
  };

  const handleRemoveGame = (universeId) => {
    setGames(games.filter(g => g.universeId !== universeId));
  };

  const refreshAllGames = async () => {
    console.log('Refreshing all games...');
    const updatedGames = [];
    
    for (const game of games) {
      try {
        const universeId = await getUniverseIdFromPlaceId(game.placeId);
        if (universeId) {
          const [gameData, thumbnail] = await Promise.all([
            getRealGameData(universeId),
            getGameThumbnail(universeId)
          ]);
          gameData.thumbnail = thumbnail;
          gameData.url = game.url;
          gameData.placeId = game.placeId;
          updatedGames.push(gameData);
        }
      } catch (error) {
        console.error('Error refreshing game:', error);
        updatedGames.push(game);
      }
    }
    
    setGames(updatedGames);
    setLastUpdate(new Date());
    console.log('Games refreshed at:', new Date().toLocaleTimeString());
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1 className="dashboard-title">🎮 Roblox Game Analytics Monitor</h1>
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <span style={{ color: '#34d399', fontSize: '0.9rem', fontWeight: '600' }}>
            🟢 Live Updates • Last refreshed: {lastUpdate.toLocaleTimeString()}
          </span>
        </div>
        <form onSubmit={handleAddGame} className="add-game-form">
          <input
            type="text"
            placeholder="Enter Roblox game URL..."
            value={gameUrl}
            onChange={(e) => setGameUrl(e.target.value)}
            className="game-url-input"
          />
          <button type="submit" className="add-game-btn" disabled={loading}>
            {loading ? 'Loading...' : 'Add Game'}
          </button>
          <button 
            type="button" 
            className="refresh-btn" 
            onClick={refreshAllGames}
            disabled={loading}
            title="Refresh all games"
          >
            🔄
          </button>
        </form>
      </header>

      {loading && games.length === 0 && (
        <div className="loading">Loading games...</div>
      )}

      {games.map((game) => (
        <div key={game.universeId} className="game-section">
          <button 
            className="remove-game-btn"
            onClick={() => handleRemoveGame(game.universeId)}
          >
            ✕
          </button>
          
          <GameCard game={game} thumbnail={game.thumbnail} />
          <StatsPanel game={game} />
          <PeakPlayerStats peakPlayers={game.peakPlayers} />
          <Charts 
            dailyData={game.dailyData}
            hourlyData={game.hourlyData}
            tenMinData={game.tenMinData}
          />
        </div>
      ))}

      {games.length === 0 && !loading && (
        <div className="empty-state">
          <p>No games loaded. Add a game using the URL input above.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
