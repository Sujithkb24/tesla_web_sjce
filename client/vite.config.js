import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    react(), tailwindcss()
  ],
  server: {
    host: '0.0.0.0', // Make it accessible to all devices in your network
  },
  base:process.env.VITE_BASE_PATH || "/",
   build: {
    outDir: 'build'
  }
})
