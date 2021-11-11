import { createSSRApp, h } from 'vue'
import { renderToNodeStream } from '@vue/server-renderer'
import { escapeInject, PageContextBuiltIn } from 'vite-plugin-ssr'

export function render(ctx: PageContextBuiltIn) {
  const { Page, pageExports } = ctx

  const app = createSSRApp({
    render: () => h(Page),
  })
  const stream = renderToNodeStream(app)

  // TODO: also try parse from documentProps; accurate type defs
  const title =
    (pageExports.frontmatter as Record<string, string>)?.title || 'VPage'

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
