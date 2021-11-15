import { Ref, ComponentOptions } from 'vue'
import {
  useClientRouter,
  PageContextBuiltInClient,
} from 'vite-plugin-ssr/client/router'
import '../browser/main.ts'
import { createApp } from './app'
import { resolveLayoutComponent } from './layout'

let pageContext: PageContextBuiltInClient & { _pageId: string }
let pageLayout: Ref<ComponentOptions | undefined>

useClientRouter({
  async render(ctx: PageContextBuiltInClient & { _pageId: string }) {
    if (!pageContext) {
      // first time render, hydrate
      const { app, context, layout } = await createApp(ctx)
      pageContext = context as PageContextBuiltInClient & { _pageId: string }
      pageLayout = layout
      app.mount('#app')
    } else {
      const frontmatter = ctx.pageExports.frontmatter as
        | Record<string, string>
        | undefined
      pageLayout.value = frontmatter?.layout
        ? await resolveLayoutComponent(frontmatter.layout, ctx._pageId)
        : undefined
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
