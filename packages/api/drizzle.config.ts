import { defineConfig } from "drizzle-kit";
import { Resource } from "sst";

export default defineConfig({
  dialect: "sqlite",
  schema: "./src/schema",
  driver: "d1-http",
  dbCredentials: {
    accountId: Resource.DatabaseCredentials.accountId,
    databaseId: Resource.DatabaseCredentials.id,
    token: Resource.D1Token.value
  }
})
