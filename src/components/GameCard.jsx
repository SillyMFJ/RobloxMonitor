import React from 'react';

const GameCard = ({ game, thumbnail }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="game-card">
      {thumbnail && (
        <a 
          href={`https://www.roblox.com/games/${game.universeId}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="thumbnail-link"
        >
          <img src={thumbnail} alt={game.name} className="game-thumbnail" />
        </a>
      )}
      <div className="game-info">
        <h1 className="game-title">{game.name}</h1>
        <div className="game-meta">
          <div className="meta-item">
            <span className="meta-label">Creator:</span>
            <span className="meta-value">{game.creator}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Genre:</span>
            <span className="meta-value">{game.genre}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Created:</span>
            <span className="meta-value">{formatDate(game.created)}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Last Updated:</span>
            <span className="meta-value">{formatDate(game.updated)}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Max Players:</span>
            <span className="meta-value">{game.maxPlayers}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
