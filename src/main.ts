import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
// plugins
import routes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
// style
import 'virtual:windi.css'
import 'prism-theme-vars/base.css'
import 'prism-theme-vars/themes/vitesse-light.css'

export const createApp = ViteSSG(App, { routes: setupLayouts(routes) })
