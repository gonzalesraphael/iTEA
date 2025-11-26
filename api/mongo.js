const { MongoClient, ServerApiVersion } = require("mongodb");

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error("❌ MONGO_URI não está definida nas variáveis de ambiente");
    console.error("Configure a variável MONGO_URI na Vercel: Settings → Environment Variables");
    throw new Error("MONGO_URI não está definida. Configure na Vercel: Settings → Environment Variables");
  }

  // Ensure database name is in URI
  let mongoUri = uri;
  if (!mongoUri.includes("/itea")) {
    mongoUri = mongoUri.replace(/\?/, "/itea?");
  }

  const client = new MongoClient(mongoUri, {
    serverApi: ServerApiVersion.v1,
    tls: true,
  });

  await client.connect();
  const db = client.db("itea");

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

module.exports = { connectToDatabase };

