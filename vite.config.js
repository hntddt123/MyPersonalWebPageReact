/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  preview: {
    port: 3000,
    strictPort: true,
    host: 'localhost',
  },
  server: {
    https: false,
    port: 3000,
    strictPort: true,
    host: 'localhost',
  },
  build: {
    minify: 'esbuild'
  }
});
