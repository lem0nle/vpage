import { getPage } from 'vite-plugin-ssr/client'
import '../browser/main.ts'
import { createApp } from '../renderer/app'

export async function hydrate() {
  const ctx = await getPage()
  const { app } = await createApp(ctx as never)
  app.mount('#app')
}
