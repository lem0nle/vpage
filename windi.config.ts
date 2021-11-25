import { defineConfig } from 'vite-plugin-windicss'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  safelist: 'prose prose-lg prose-blue',
  extract: {
    include: ['_vpage/**', 'examples/**', 'src/**', 'index.html'],
  },
  fontFamily: {
    sans: '"Noto Sans", "Noto Sans SC", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },
  plugins: [typography()],
})
