import { Ref, ComponentOptions, computed } from 'vue'
import { useClientRouter } from 'vite-plugin-ssr/client/router'
import '../browser/main.ts'
import { createApp } from '../renderer/app'
import { resolveLayoutComponent } from '../renderer/layout'
import { PageContext, usePageContext } from './context'

let pageContext: PageContext
let pageLayout: Ref<ComponentOptions | undefined>

interface SetupClientRouterConfig {
  onTransitionStart?: () => void
  onTransitionEnd?: () => void
  prefetchLinks?: boolean
}

export function setupClientRouter(config?: SetupClientRouterConfig) {
  useClientRouter({
    async render(ctx: PageContext) {
      if (!pageContext) {
        // first time render, hydrate
        const { app, context, layout } = await createApp(ctx)
        pageContext = context
        pageLayout = layout
        app.mount('#app')
      } else {
        const frontmatter = ctx.pageExports.frontmatter as
          | Record<string, string>
          | undefined
        pageLayout.value = frontmatter?.layout
          ? await resolveLayoutComponent(frontmatter.layout, ctx._pageId)
          : undefined
        pageContext.urlParsedServer = undefined
        Object.assign(pageContext, ctx)
      }
    },
    ensureHydration: true,
    prefetchLinks: true,
    ...config,
  })
}

export function useCurrentUrl() {
  const ctx = usePageContext()
  return {
    origin: computed(() => ctx.urlParsedServer?.origin || ctx.urlParsed.origin),
    pathname: computed(() => {
      const pathname = ctx.urlParsedServer?.pathname || ctx.urlParsed.pathname
      if (pathname !== '/' && pathname.endsWith('/'))
        return pathname.slice(0, pathname.length - 1)
      return pathname
    }),
    search: computed(() => ctx.urlParsedServer?.search || ctx.urlParsed.search),
    hash: computed(() => ctx.urlParsed.hash),
  }
}
