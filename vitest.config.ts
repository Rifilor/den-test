import {defineConfig} from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [Vue()],
    test: {
        include: ['**/*.test.ts'],
        globals: true,
        environment: 'jsdom',
      },
})