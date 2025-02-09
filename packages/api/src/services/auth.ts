import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { Resource } from "sst";
import { Database } from "../services/db";

export function createAuthClient(db: Database) {
  const auth = betterAuth({
    secret: Resource.BetterAuthSecret.value,
    emailAndPassword: { enabled: true },
    session: {
      cookieCache: {
        enabled: true,
        maxAge: 5 * 60 // 5 minutes
      }
    },
    database: drizzleAdapter(db, {
      provider: "sqlite",
      usePlural: true,
    })
  })

  return auth
}

export type Auth = ReturnType<typeof createAuthClient>
