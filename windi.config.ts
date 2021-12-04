import { defineConfig } from 'vite-plugin-windicss'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  preflight: {
    safelist:
      'h1 h2 h3 p ul ol li img hr blockquote code pre table thead tbody tr th td',
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
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            code: {
              fontWeight: '600',
              color: colors.blue[800],
              padding: '0 0.125rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            'blockquote p:first-of-type::before': {
              content: '""',
            },
            'blockquote p:last-of-type::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [typography()],
})
