import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/border-beam/',
  resolve: {
    alias: {
      'border-beam': resolve(__dirname, '../src/index.ts'),
    },
  },
});
