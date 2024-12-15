import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true, // Automatically open the app in the browser on startup
    port: 5173, // Use the same port as your running project (5173)
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: Set up an alias for the src folder for easier imports
    }
  },
  build: {
    outDir: 'dist', // Optional: Customize the output directory (default is 'dist')
  }
});
