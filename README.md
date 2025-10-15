# 🎮 Roblox Game Analytics Monitor

A comprehensive React application for monitoring and analyzing Roblox game statistics in real-time.

## Features

- **Game Information Display**
  - Game thumbnail (clickable to open game page)
  - Game name, creator, genre
  - Creation and last update dates
  - Maximum players per server

- **Primary Statistics**
  - Active Players
  - Total Visits
  - Upvotes & Downvotes
  - Rating Percentage
  - Favorites Count
  - Average Playtime

- **Peak Player Analytics**
  - All-time peak
  - Past 30 days peak
  - Past 7 days peak
  - Past 24 hours peak

- **Interactive Charts**
  - Daily analytics (Past 30 days)
  - Hourly analytics (Past 24 hours)
  - 10-minute interval analytics (Past 12 hours)

- **Multi-Game Support**
  - Monitor multiple games simultaneously
  - Add/remove games dynamically
  - Pre-loaded with example games

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Dependencies are already installed. If you need to reinstall:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Usage

1. **Default Games**: The app loads two example games on startup:
   - The Church Of Spawnism
   - Catalog Avatar Creator

2. **Add New Game**: 
   - Copy any Roblox game URL (e.g., `https://www.roblox.com/games/GAME_ID/Game-Name`)
   - Paste it into the input field at the top
   - Click "Add Game"

3. **Remove Game**: 
   - Click the red "✕" button in the top-right corner of any game section

4. **View Charts**: 
   - Switch between Daily, Hourly, and 10-Minute views using the chart tabs

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Recharts** - Data visualization library
- **Axios** - HTTP client for API requests
- **Roblox API** - Game data source

## API Integration

The app integrates with Roblox's public APIs:
- `games.roblox.com/v1/games` - Game details
- `thumbnails.roblox.com/v1/games/icons` - Game thumbnails

Note: Some statistics (like player counts, visits, etc.) use mock data for demonstration purposes. For production use, you would need to integrate with Roblox's authenticated APIs or use a third-party analytics service.

## Project Structure

```
reactapp/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx       # Main dashboard container
│   │   ├── GameCard.jsx        # Game info display
│   │   ├── StatsPanel.jsx      # Statistics grid
│   │   ├── PeakPlayerStats.jsx # Peak player counts
│   │   └── Charts.jsx          # Analytics charts
│   ├── services/
│   │   └── robloxApi.js        # API integration
│   ├── App.jsx                 # Root component
│   ├── App.css                 # Global styles
│   └── main.jsx                # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.
