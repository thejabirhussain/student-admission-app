import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// vite.config.js
export default {
  server: {
    host: '0.0.0.0', // Bind to 0.0.0.0 to allow external access
    port: 5173,      // Specify the port (default for Vite)
  },
};
