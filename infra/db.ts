export const db = new sst.cloudflare.D1("Database");

export const credentials = new sst.Linkable("DatabaseCredentials", {
  properties: {
    id: db.id,
    accountId: db.nodes.database.accountId,
  }
})
