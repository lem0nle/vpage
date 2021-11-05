import path from 'path'
import { defineConfig } from 'vite'
// plugins
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
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
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      headEnabled: true,
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
    Icons(),

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
    Pages({
      extensions: ['vue', 'md'],
      pagesDir: [
        { dir: 'src/pages', baseRoute: '' },
        // include demo pages
        { dir: 'examples/personal/pages', baseRoute: 'demo/personal' },
        { dir: 'examples/project/pages', baseRoute: 'demo/project' },
      ],
    }),
    Layouts({
      layoutsDir: 'src/layouts',
    }),
  ],
})
