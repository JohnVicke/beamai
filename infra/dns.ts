export const domain =
  {
    production: "prod.malmedal.dev",
    dev: "dev.malmedal.dev",
    sandbox: "sandbox.malmedal.dev",
  }[$app.stage] || $app.stage + ".dev.malmedal.dev";


export const zone = cloudflare.getZoneOutput({
  name: "malmedal.dev",
});
