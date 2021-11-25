import { renderToNodeStream } from '@vue/server-renderer'
import { escapeInject } from 'vite-plugin-ssr'
import { JSDOM } from 'jsdom'
import { PageContext } from './context'
import { createApp } from '../renderer/app'

export function setupServerRenderer(html: string) {
  const jsdom = new JSDOM(html)

  async function render(ctx: PageContext) {
    const { app, head } = await createApp(ctx)

    const stream = renderToNodeStream(app)
    head.updateDOM(jsdom.window.document)
    const html = jsdom.serialize()

    const stringArray = html.split('<!-- vpage-content -->')
    Object.assign(stringArray, { raw: stringArray })
    return escapeInject(stringArray as unknown as TemplateStringsArray, stream)
  }

  const passToClient = ['pageProps', 'url', 'urlParsed']

  return {
    render,
    passToClient,
  }
}
