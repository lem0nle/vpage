import { PageContextBuiltIn } from 'vite-plugin-ssr'
import { defineAsyncComponent, h, computed, createSSRApp } from 'vue'
import { createHead, useHead } from '@vueuse/head'
import { resolveLayoutComponent } from './layout'

export function createApp(
  ctx: Pick<PageContextBuiltIn, 'Page' | 'pageExports'> & { _pageId: string },
) {
  const frontmatter = computed(
    () =>
      ({
        title: 'VPage',
        ...(ctx.pageExports.frontmatter as Record<string, string> | undefined),
      } as Record<string, string>),
  )

  const App = {
    setup() {
      useHead(frontmatter)
      return () =>
        frontmatter.value?.layout
          ? h(
              defineAsyncComponent(() =>
                resolveLayoutComponent(frontmatter.value.layout, ctx._pageId),
              ),
              {},
              { default: () => h(ctx.Page) },
            )
          : h(ctx.Page)
    },
  }
  const app = createSSRApp(App)

  const head = createHead()
  app.use(head)

  return { app, head }
}
