import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    sourcemap: false, 
  },
  server: {
    sourcemapIgnoreList: (path) => path.endsWith('.map') ? false : true,
  }
});
