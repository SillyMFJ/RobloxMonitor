# 🎮 Roblox Game Analytics Monitor

A comprehensive React application for monitoring and analyzing Roblox game statistics in real-time with beautiful charts and live updates.

## 🌐 Live Demo

**[View Live Website](https://cosmicrusaderz.github.io/RobloxMonitor/)**

The website is automatically deployed via GitHub Actions and is publicly accessible!

## ✨ Features

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
  - Beautiful gradient charts with custom tooltips
  - Daily analytics (Past 30 days)
  - Hourly analytics (Past 24 hours)
  - Real-time 10-minute interval analytics (Past 12 hours)
  - Smooth animations and hover effects

- **Live Updates**
  - 🟢 Automatic refresh every 60 seconds
  - Manual refresh button (🔄)
  - Real-time player count tracking
  - Live update timestamp display

- **Multi-Game Support**
  - Monitor multiple games simultaneously
  - Add/remove games dynamically
  - Pre-loaded with popular games

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

1. **Visit the Website**: Go to [https://cosmicrusaderz.github.io/RobloxMonitor/](https://cosmicrusaderz.github.io/RobloxMonitor/)

2. **Default Games**: The app loads two popular games on startup:
   - **Catalog Avatar Creator** (87K+ active players)
   - **The Church Of Spawnism**

3. **Add New Game**: 
   - Copy any Roblox game URL (e.g., `https://www.roblox.com/games/GAME_ID/Game-Name`)
   - Paste it into the input field at the top
   - Click "Add Game"

4. **Live Updates**:
   - Data refreshes automatically every 60 seconds
   - Click the 🔄 button for manual refresh

5. **Remove Game**: 
   - Click the red "✕" button in the top-right corner of any game section

6. **View Charts**: 
   - Switch between 📅 Daily, 🕐 Hourly, and ⚡ Real-time views using the chart tabs
   - Hover over chart points to see detailed stats

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Recharts** - Data visualization library
- **Axios** - HTTP client for API requests
- **Roblox API** - Game data source

## 🔌 API Integration

The app integrates with Roblox's public APIs:
- `apis.roblox.com/universes/v1` - Universe ID conversion
- `games.roblox.com/v1/games` - Game details and live player counts
- `thumbnails.roblox.com/v1/games/icons` - Game thumbnails

All data is fetched in real-time from Roblox's official APIs!

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

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

Every push to the `main` branch triggers a new deployment.

**Live URL**: https://cosmicrusaderz.github.io/RobloxMonitor/

## 📸 Screenshots

The app features:
- 🎨 Dark theme with gradient accents
- 📊 Beautiful animated charts
- 🔄 Live data updates
- 📱 Responsive design

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the MIT License.

---

**Created by CosmicCrusaderZ** | [GitHub Repository](https://github.com/CosmicCrusaderZ/RobloxMonitor)
