import { getPage } from 'vite-plugin-ssr/client'
import '../browser/main.ts'
import { createApp } from './app'

async function hydrate() {
  const ctx = await getPage()
  const { app } = await createApp(ctx as never)
  app.mount('#app')
}

hydrate()
