import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const basePath = '/greatfortheplanet/'

function normalizeBasePathPlugin() {
  const bareBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath

  const redirectBareBasePath = (req, res, next) => {
    if (!req.url || req.url !== bareBasePath) {
      next()
      return
    }

    res.statusCode = 302
    res.setHeader('Location', `${basePath}${req.url.slice(bareBasePath.length)}`)
    res.end()
  }

  return {
    name: 'normalize-base-path',
    configureServer(server) {
      server.middlewares.use(redirectBareBasePath)
    },
    configurePreviewServer(server) {
      server.middlewares.use(redirectBareBasePath)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [react(), normalizeBasePathPlugin()],
})