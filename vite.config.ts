import path from 'path'
import { defineConfig } from 'vite'
// plugins
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [Vue(), Pages()],
})
