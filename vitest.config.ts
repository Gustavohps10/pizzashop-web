import path from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig, UserConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()] as UserConfig['plugins'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    environment: 'happy-dom',
  },
})
