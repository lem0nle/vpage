import { createSSRApp, h, shallowReactive } from 'vue'
import {
  useClientRouter,
  PageContextBuiltInClient,
} from 'vite-plugin-ssr/client/router'
import '../browser/main.ts'

let pageContext: PageContextBuiltInClient

useClientRouter({
  render(ctx: PageContextBuiltInClient) {
    if (!pageContext) {
      // first time render, hydrate
      pageContext = shallowReactive(ctx)
      const app = createSSRApp({
        setup() {
          return () => h(pageContext.Page)
        },
      })
      app.mount('#app')
    } else {
      Object.assign(pageContext, ctx)
    }
  },
  ensureHydration: true,
  prefetchLinks: true,
  onTransitionStart: () => {
    // ignore for now
  },
  onTransitionEnd: () => {
    // ignore for now
  },
})
