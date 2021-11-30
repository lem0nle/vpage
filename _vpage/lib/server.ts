import { renderToNodeStream, renderToString } from '@vue/server-renderer'
import { createSSRApp } from 'vue'
import { escapeInject } from 'vite-plugin-ssr'
import { parseHTML } from 'linkedom'
import { useHead } from '@vueuse/head'
import { PageContext } from './context'
import { createApp } from '../renderer/app'

export function setupServerRenderer(html: string) {
  async function render(ctx: PageContext) {
    const { app, head, frontmatter } = await createApp(ctx)

    // produce head with a fake app
    const App = {
      setup() {
        useHead(frontmatter)
        return () => ''
      },
    }
    const fakeApp = createSSRApp(App)
    fakeApp.use(head)
    await renderToString(fakeApp)

    // update index.html head
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
