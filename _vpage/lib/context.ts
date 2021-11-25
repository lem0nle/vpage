import { PageContextBuiltIn } from 'vite-plugin-ssr'
import { provide, inject, InjectionKey, readonly } from 'vue'
import { assert } from './utils'

export type PageContext = Pick<PageContextBuiltIn, 'Page' | 'pageExports'> & {
  _pageId: string
  pageProps: Record<string, unknown>
  url: string
  urlParsed: {
    origin: string
    pathname: string
    search: string | null
    hash: string | null
  }
}

const pageContextSymbol: InjectionKey<Readonly<PageContext>> = Symbol()

export function providePageContext(ctx: PageContext) {
  provide(pageContextSymbol, readonly(ctx))
}
export function usePageContext() {
  const ctx = inject(pageContextSymbol)
  assert(ctx !== undefined)
  return ctx
}
