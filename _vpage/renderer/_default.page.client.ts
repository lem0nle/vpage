import { shallowReactive } from 'vue'
import {
  useClientRouter,
  PageContextBuiltInClient,
} from 'vite-plugin-ssr/client/router'
import '../browser/main.ts'
import { createApp } from './app'

let pageContext: PageContextBuiltInClient & { _pageId: string }

useClientRouter({
  render(ctx: PageContextBuiltInClient & { _pageId: string }) {
    if (!pageContext) {
      // first time render, hydrate
      pageContext = shallowReactive(ctx)
      const { app } = createApp(pageContext)
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
