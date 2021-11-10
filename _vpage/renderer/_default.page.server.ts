import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import {
  dangerouslySkipEscape,
  escapeInject,
  PageContextBuiltIn,
} from 'vite-plugin-ssr'

export async function render(ctx: PageContextBuiltIn) {
  const { Page, pageExports } = ctx

  const app = createSSRApp({
    render: () => h(Page),
  })
  const appHtml = await renderToString(app)

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
    <div id="app">${dangerouslySkipEscape(appHtml)}</div>
  </body>
  </html>
  `

  return {
    documentHtml,
    pageContext: {},
  }
}
