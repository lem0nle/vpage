import { defineConfig } from 'vite-plugin-windicss'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  preflight: {
    safelist: 'h1 h2 h3 p ul ol li img hr',
  },
  extract: {
    include: [
      '{_vpage,docs,examples,src}/**/*.{jsx,tsx,html,vue,md}',
      'index.html',
    ],
  },
  fontFamily: {
    sans: '"Noto Sans", "Noto Sans SC", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },
  plugins: [typography()],
})
