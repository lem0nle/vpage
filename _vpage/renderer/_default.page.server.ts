import { renderToNodeStream } from '@vue/server-renderer'
import { renderHeadToString } from '@vueuse/head'
import {
  dangerouslySkipEscape,
  escapeInject,
  PageContextBuiltIn,
} from 'vite-plugin-ssr'
import { createApp } from './app'

export async function render(ctx: PageContextBuiltIn & { _pageId: string }) {
  const { app, head } = createApp(ctx)

  const stream = renderToNodeStream(app)
  const { headTags, htmlAttrs, bodyAttrs } = renderHeadToString(head)

  const documentHtml = escapeInject`<!DOCTYPE html>
  <html lang="en"${htmlAttrs}>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ffffff">
    ${dangerouslySkipEscape(headTags)}
  </head>
  <body class="antialiased"${bodyAttrs}>
    <div id="app">${stream}</div>
  </body>
  </html>
  `

  return {
    documentHtml,
    pageContext: {},
  }
}
