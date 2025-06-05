
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080
  },
  // optimizeDeps: { // Можно убрать, если нет проблем с lucide-react
  //   exclude: ['lucide-react'],
  // },
});
