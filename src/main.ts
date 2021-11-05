import { createApp } from 'vue'
import App from './App.vue'
// plugins
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { createHead } from '@vueuse/head'
// style
import 'virtual:windi.css'
import 'prism-theme-vars/base.css'
import 'prism-theme-vars/themes/vitesse-light.css'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes),
})
app.use(router)

const head = createHead()
app.use(head)

app.mount('#app')
