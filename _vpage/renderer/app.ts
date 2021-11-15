import { PageContextBuiltIn } from 'vite-plugin-ssr'
import { h, shallowReactive, shallowRef, computed, createSSRApp } from 'vue'
import { createHead, useHead } from '@vueuse/head'
import { resolveLayoutComponent } from './layout'

export async function createApp(
  ctx: Pick<PageContextBuiltIn, 'Page' | 'pageExports'> & { _pageId: string },
) {
  const context = shallowReactive(ctx)
  const frontmatter = computed(
    () =>
      ({
        title: 'VPage',
        ...(context.pageExports.frontmatter as
          | Record<string, string>
          | undefined),
      } as Record<string, string>),
  )
  const layout = shallowRef(
    frontmatter.value.layout
      ? await resolveLayoutComponent(frontmatter.value.layout, context._pageId)
      : undefined,
  )

  const App = {
    setup() {
      useHead(frontmatter)
      return () =>
        layout.value
          ? h(layout.value, {}, { default: () => h(context.Page) })
          : h(context.Page)
    },
  }
  const app = createSSRApp(App)

  const head = createHead()
  app.use(head)

  return { app, head, context, frontmatter, layout }
}
