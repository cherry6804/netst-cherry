import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      // No need to externalize local modules unless absolutely necessary
      external: [],
    },
  },
});
