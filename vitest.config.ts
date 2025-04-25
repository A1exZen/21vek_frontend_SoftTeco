/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: 'src/app/config/vitest/setupTests.ts',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});
