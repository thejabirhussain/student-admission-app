// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // Add the React plugin
  server: {
    host: '0.0.0.0', // Bind to 0.0.0.0 for Render
    port: 5173,      // Specify the port (default for Vite)
    allowedHosts: [
      'student-admission-app-2-0.onrender.com', // Allow your Render host
      'localhost', // Optional: allow localhost for local development
    ],
  },
});
