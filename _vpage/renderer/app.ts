import { PageContextBuiltIn } from 'vite-plugin-ssr'
import { defineAsyncComponent, h, createSSRApp } from 'vue'
import { createHead, useHead } from '@vueuse/head'
import { resolveLayoutComponent } from './layout'

export function createApp(
  ctx: Pick<PageContextBuiltIn, 'Page' | 'pageExports'> & { _pageId: string },
) {
  const { Page, pageExports } = ctx
  const frontmatter = pageExports.frontmatter as
    | Record<string, string>
    | undefined

  const Layout = defineAsyncComponent(() =>
    resolveLayoutComponent(frontmatter?.layout || '_default', ctx._pageId),
  )
  const App = {
    setup() {
      if (frontmatter) {
        useHead(frontmatter)
      }
      return () =>
        frontmatter?.layout
          ? h(Layout, {}, { default: () => h(Page) })
          : h(Page)
    },
  }
  const app = createSSRApp(App)

  const head = createHead()
  app.use(head)

  return { app, head }
}
