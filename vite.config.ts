import path from 'path'
import { defineConfig } from 'vite'
// plugins
import SSR from 'vite-plugin-ssr/plugin'
import Vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import Prism from 'markdown-it-prism'
import LinkAttributes from 'markdown-it-link-attributes'
import WindiCSS from 'vite-plugin-windicss'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  base: process.env.BASE_URL || '/',
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}/`,
      vpage: `${path.resolve(__dirname, '_vpage/lib')}/`,
    },
  },
  plugins: [
    SSR(),
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
        md.use(LinkAttributes, {
          pattern: /^https?:\/\//,
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
    }),
    WindiCSS(),
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/\/node_modules\//, /\/.git\//],
      resolvers: [IconsResolver()],
      dirs: [
        'src/components',
        // include all demo components
        'examples/**/components',
      ],
    }),
    Icons(),
  ],
})
