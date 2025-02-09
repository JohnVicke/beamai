import { Hono } from "hono"
import { apiReference } from "@scalar/hono-api-reference"
import { openAPISpecs } from "hono-openapi"
import { ServiceContext } from "./services/ctx"


export interface AppEnv {
  Variables: {
    services: ServiceContext
  }
}

export function createApp() {
  const app = new Hono<AppEnv>()

  app.get(
    '/openapi',
    openAPISpecs(app, {
      documentation: {
        info: {
          title: 'Hono API',
          version: '1.0.0',
          description: 'Greeting API',
        },
        servers: [
          { url: 'http://localhost:3000', description: 'Local Server' },
        ],
      },
    })
  )

  app.get(
    '/docs',
    apiReference({
      theme: 'saturn',
      spec: { url: '/openapi' },
    })
  )


  return app
}

export type App = ReturnType<typeof createApp>
