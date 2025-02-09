import { cors } from "hono/cors";
import { createApp } from "./app";
import { initMiddleware } from "./middleware/init";

const app = createApp()

app.use("*", initMiddleware())
app.use("*", cors())

app.on(["POST", "GET"], "/api/auth/**", (c) => {
  const { auth } = c.get("services")
  return auth.handler(c.req.raw)
});


const handler = {
  fetch: (req: Request, env: any, ctx: ExecutionContext) => {
    return app.fetch(req, env, ctx);
  },
}

export default handler;
