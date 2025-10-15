# Deployment Instructions

## GitHub Pages Setup

Your Roblox Game Analytics Monitor has been pushed to GitHub! To deploy it to GitHub Pages:

### 1. Enable GitHub Pages

1. Go to https://github.com/SillyMFJ/RobloxMonitor/settings/pages
2. Under "Build and deployment":
   - Source: Select **"GitHub Actions"**
3. Click Save

### 2. Automatic Deployment

The GitHub Actions workflow is already set up and will automatically deploy your site when you push to the `main` branch.

- The workflow file is located at `.github/workflows/deploy.yml`
- It will build the project and deploy to GitHub Pages automatically

### 3. Access Your Site

Once deployed, your site will be available at:
**https://sillymfj.github.io/RobloxMonitor/**

### 4. Manual Deployment (Alternative)

If you prefer to deploy manually without GitHub Actions:

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

## Live Features

✅ **Improved Charts**: Beautiful gradient charts with custom tooltips
✅ **Live Updates**: Automatic refresh every 60 seconds
✅ **Manual Refresh**: Click the 🔄 button to refresh immediately
✅ **Real-time Data**: Tracks player count, visits, votes, and more

## Default Games

The app monitors these games by default:
1. **Catalog Avatar Creator** - https://www.roblox.com/games/7041939546
2. **The Church Of Spawnism** - https://www.roblox.com/games/133120777017776

You can add more games using the URL input at the top!

## Development

To run locally:

```bash
npm install
npm run dev
```

To build for production:

```bash
npm run build
```

## Technical Stack

- **React 18** - UI Framework
- **Vite 5** - Build Tool
- **Recharts** - Chart Library
- **Axios** - HTTP Client
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD

## API Usage

The app uses Roblox's public APIs:
- `apis.roblox.com` - Universe ID conversion
- `games.roblox.com` - Game details and stats
- `thumbnails.roblox.com` - Game thumbnails

All API calls are proxied through Vite's dev server to avoid CORS issues during development.

## Notes

⚠️ **Production Note**: The proxy configuration only works in development. For production, the app makes direct API calls to Roblox. If you encounter CORS issues in production, you may need to implement a backend proxy server.

---

Created with ❤️ by SillyMFJ
