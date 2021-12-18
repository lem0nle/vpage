import {
  h,
  shallowReactive,
  shallowRef,
  computed,
  createSSRApp,
  ComponentOptions,
} from 'vue'
import { createHead, useHead } from '@vueuse/head'
import { resolveLayoutComponent } from './layout'
import { PageContext, providePageContext } from '../lib/context'

export async function createApp(ctx: PageContext) {
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
      : (context.pageExports.Layout as ComponentOptions | undefined),
  )

  const App = {
    setup() {
      providePageContext(context)
      useHead(frontmatter)
      return () =>
        layout.value
          ? h(
              layout.value,
              {},
              {
                default: () => h(context.Page, context.pageProps),
              },
            )
          : h(context.Page, context.pageProps)
    },
  }
  const app = createSSRApp(App)

  const head = createHead()
  app.use(head)

  return { app, head, context, frontmatter, layout }
}
