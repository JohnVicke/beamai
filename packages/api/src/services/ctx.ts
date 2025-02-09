import { Auth } from "./auth";
import { Database } from "./db";

export interface ServiceContext {
  db: Database
  auth: Auth
}
