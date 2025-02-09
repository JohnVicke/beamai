export const secret = {
  BetterAuthSecret: new sst.Secret("BetterAuthSecret"),
  D1Token: new sst.Secret("D1Token")
}

export const allSecrets = Object.values(secret)
