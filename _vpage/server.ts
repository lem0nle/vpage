import express from 'express'
import { createPageRenderer } from 'vite-plugin-ssr'

const isProduction = process.env.NODE_ENV === 'production'
const root = `${__dirname}/..`

startServer()

async function startServer() {
  const app = express()

  // serve assets
  let viteDevServer
  if (isProduction) {
    app.use(express.static(`${root}/dist/client`))
  } else {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const vite = require('vite')
    // enable HMR stuff
    viteDevServer = await vite.createServer({
      root,
      server: { middlewareMode: 'ssr' },
    })
    app.use(viteDevServer.middlewares)
  }

  // render pages
  const renderPage = createPageRenderer({ viteDevServer, isProduction, root })

  app.get('*', async (req, res, next) => {
    const url = req.originalUrl

    const { httpResponse } = await renderPage({ url })
    if (!httpResponse) return next()
    const { body, statusCode, contentType } = httpResponse

    res.status(statusCode).type(contentType).send(body)
  })

  const port = process.env.PORT || 3000
  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}
