import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/RobloxMonitor/',
  server: {
    proxy: {
      '/api/games': {
        target: 'https://games.roblox.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/games/, '/v1'),
        secure: false,
        headers: {
          'Accept': 'application/json',
        },
      },
      '/api/thumbnails': {
        target: 'https://thumbnails.roblox.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/thumbnails/, '/v1'),
        secure: false,
        headers: {
          'Accept': 'application/json',
        },
      },
      '/api/universes': {
        target: 'https://apis.roblox.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/universes/, ''),
        secure: false,
        headers: {
          'Accept': 'application/json',
        },
      },
    },
  },
})
