import path from 'path'
import { defineConfig } from 'vite'
// plugins
import SSR from 'vite-plugin-ssr/plugin'
import Vue from '@vitejs/plugin-vue'
import VMark from '@yxonic/vmark/vite'
import WindiCSS from 'vite-plugin-windicss'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

const base = process.env.BASE_URL || '/'

export default defineConfig({
  base,
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}/`,
      vpage: `${path.resolve(__dirname, '_vpage/lib')}/`,
    },
  },
  plugins: [
    SSR(),
    Vue(),
    VMark(),
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
    Icons({
      autoInstall: true,
    }),
  ],
})
