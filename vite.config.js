import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    strictPort: true,
    host: '0.0.0.0',
    https: false,
  },
  plugins: [react()],
})
