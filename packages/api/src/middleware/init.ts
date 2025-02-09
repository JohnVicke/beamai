import { MiddlewareHandler } from "hono";
import { createDb } from "../services/db";
import { createAuthClient } from "../services/auth";

export function initMiddleware(): MiddlewareHandler {
  return async function middleware(c, next) {

    const db = createDb();
    const auth = createAuthClient(db);

    c.set("services", { db, auth });

    return next();
  }
}
