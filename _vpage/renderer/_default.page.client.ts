import '../browser/main.ts'

import { createSSRApp, h } from 'vue'
import { getPage } from 'vite-plugin-ssr/client'

hydrate()

async function hydrate() {
  const pageContext = await getPage()
  const { Page } = pageContext
  const app = createSSRApp({
    render: () => h(Page),
  })
  app.mount('#app')
}
