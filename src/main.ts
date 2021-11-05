import { defineComponent, h } from 'vue'
import { RouterView } from 'vue-router'
import { ViteSSG } from 'vite-ssg'
// plugins
import routes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
// style
import 'virtual:windi.css'
import 'prism-theme-vars/base.css'
import 'prism-theme-vars/themes/vitesse-light.css'

const App = defineComponent({
  render() {
    return h(RouterView)
  },
})

export const createApp = ViteSSG(App, {
  base: import.meta.env.BASE_URL,
  routes: setupLayouts(routes),
})
