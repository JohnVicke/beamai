import { drizzle } from "drizzle-orm/d1";
import { Resource } from "sst";

export function createDb() {
  return drizzle(Resource.Database)
}

export type Database = ReturnType<typeof createDb>
