import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  
  plugins: [
    react(), tailwindcss()
  ],
  server: {
    host: '0.0.0.0', // Make it accessible to all devices in your network
  },
   build: {
    outDir: 'dist',   // output files will go to client/dist
    emptyOutDir: true,
  },
})
