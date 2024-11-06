import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['./src/main.tsx'], // Add the relative path to main.tsx
    },
  },
});
