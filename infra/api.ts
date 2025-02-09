import { credentials, db } from "./db";
import { domain } from "./dns";
import { allSecrets } from "./secrets";

export const urls = new sst.Linkable("Urls", {
  properties: {
    api: "https://api." + domain,
    auth: "https://auth." + domain,
    site: $dev ? "http://localhost:4321" : "https://www." + domain,
  },
});

export const api = new sst.cloudflare.Worker("Api", {
  url: true,
  link: [urls, credentials, db, ...allSecrets],
  handler: "packages/api/src/api.ts",
  domain: "api." + domain,
});

export const outputs = {
  url: api.url,
}
