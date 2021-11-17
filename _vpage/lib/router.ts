import { Ref, ComponentOptions } from 'vue'
import {
  useClientRouter,
  PageContextBuiltInClient,
} from 'vite-plugin-ssr/client/router'
import '../browser/main.ts'
import { createApp } from '../renderer/app'
import { resolveLayoutComponent } from '../renderer/layout'

let pageContext: PageContextBuiltInClient & {
  _pageId: string
  pageProps: Record<string, unknown>
}
let pageLayout: Ref<ComponentOptions | undefined>

interface UseRouterConfig {
  onTransitionStart?: () => void
  onTransitionEnd?: () => void
  prefetchLinks?: boolean
}

export function useRouter(config?: UseRouterConfig) {
  useClientRouter({
    async render(
      ctx: PageContextBuiltInClient & {
        _pageId: string
        pageProps: Record<string, unknown>
      },
    ) {
      if (!pageContext) {
        // first time render, hydrate
        const { app, context, layout } = await createApp(ctx)
        pageContext = context as PageContextBuiltInClient & {
          _pageId: string
          pageProps: Record<string, unknown>
        }
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
    ...config,
  })
}
