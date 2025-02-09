/// <reference path="./.sst/platform/config.d.ts" />
//
import fs from "fs";

export default $config({
  app(input) {
    return {
      name: "beamai",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "cloudflare",
    };
  },
  async run() {
    const outputs = {};
    for (const value of fs.readdirSync("./infra/")) {
      const result = await import("./infra/" + value);
      if (result.outputs) Object.assign(outputs, result.outputs);
    }
    return outputs;

  },
});
