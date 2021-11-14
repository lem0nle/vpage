import { createSSRApp, h, defineAsyncComponent } from 'vue'
import { renderToNodeStream } from '@vue/server-renderer'
import { escapeInject, PageContextBuiltIn } from 'vite-plugin-ssr'
import { resolveLayoutComponent } from './layout'

export async function render(ctx: PageContextBuiltIn & { _pageId: string }) {
  const { Page, pageExports } = ctx

  const frontmatter = pageExports.frontmatter as Record<string, string>

  const Layout = defineAsyncComponent(() =>
    resolveLayoutComponent(frontmatter.layout, ctx._pageId),
  )
  const App = {
    render: () =>
      frontmatter.layout ? h(Layout, {}, { default: () => h(Page) }) : h(Page),
  }
  const app = createSSRApp(App)
  const stream = renderToNodeStream(app)

  // TODO: also try parse from documentProps; accurate type defs
  const title = frontmatter.title || 'VPage'

  const documentHtml = escapeInject`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ffffff">
    <title>${title}</title>
  </head>
  <body class="antialiased">
    <div id="app">${stream}</div>
  </body>
  </html>
  `

  return {
    documentHtml,
    pageContext: {},
  }
}
