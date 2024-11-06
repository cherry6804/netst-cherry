import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['src/main.tsx'], // Add this path to external modules
    },
  },
});
