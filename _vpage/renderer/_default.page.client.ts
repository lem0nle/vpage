import {
  createSSRApp,
  h,
  computed,
  shallowReactive,
  defineAsyncComponent,
} from 'vue'
import {
  useClientRouter,
  PageContextBuiltInClient,
} from 'vite-plugin-ssr/client/router'
import '../browser/main.ts'
import { resolveLayoutComponent } from './layout'

let pageContext: PageContextBuiltInClient & { _pageId: string }

useClientRouter({
  render(ctx: PageContextBuiltInClient & { _pageId: string }) {
    if (!pageContext) {
      // first time render, hydrate
      pageContext = shallowReactive(ctx)
      const frontmatter = computed(
        () => pageContext.pageExports.frontmatter as Record<string, string>,
      )
      const app = createSSRApp({
        setup() {
          return () =>
            frontmatter.value.layout
              ? h(
                  defineAsyncComponent(() =>
                    resolveLayoutComponent(
                      frontmatter.value.layout,
                      pageContext._pageId,
                    ),
                  ),
                  {},
                  { default: () => h(pageContext.Page) },
                )
              : h(pageContext.Page)
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
