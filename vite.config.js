import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['3756-2409-40e0-101d-86c1-b825-5d56-6870-fed6.ngrok-free.app'],
  }
})
