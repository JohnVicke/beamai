import { MiddlewareHandler } from "hono";
import { AppEnv } from "../app";

export function authMiddleware(): MiddlewareHandler<AppEnv> {
  return async function middleware(c, next) {
    const { auth } = c.get("services")

    const result = await auth.api.getSession({
      headers: c.req.raw.headers
    })


    if (!result?.session) {
      return c.json({ error: "Unauthorized" }, 401)
    }

    return next();
  }
}
