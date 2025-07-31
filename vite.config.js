import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-first-version/', // Replace with your actual repo name
  build: {
    outDir: 'dist', // Vite uses 'dist' by default, not 'build'
  }
})
