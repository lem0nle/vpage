import { renderToNodeStream } from '@vue/server-renderer'
import { escapeInject } from 'vite-plugin-ssr'
import { parseHTML } from 'linkedom'
import { PageContext } from './context'
import { createApp } from '../renderer/app'

export function setupServerRenderer(html: string) {
  async function render(ctx: PageContext) {
    const { app, head } = await createApp(ctx)

    const { document } = parseHTML(html)
    head.updateDOM(document)
    const htmlWithHead = document.toString()

    const stream = renderToNodeStream(app)

    const stringArray = htmlWithHead.split('<!-- vpage-content -->')
    Object.assign(stringArray, { raw: stringArray })
    return {
      documentHtml: escapeInject(
        stringArray as unknown as TemplateStringsArray,
        stream,
      ),
      pageContext: {
        urlParsedServer: ctx.urlParsed,
      },
    }
  }

  return { render, passToClient: ['pageProps', 'urlParsedServer'] }
}
