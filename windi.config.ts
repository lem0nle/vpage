import { defineConfig } from 'vite-plugin-windicss'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  extract: {
    include: ['_vpage/**', 'docs/**', 'examples/**', 'src/**', 'index.html'],
  },
  fontFamily: {
    sans: '"Noto Sans", "Noto Sans SC", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },
  plugins: [typography()],
})
