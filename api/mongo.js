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

  // Log para debug (sem expor a senha)
  console.log("🔌 Tentando conectar ao MongoDB...");
  console.log("URI preview:", uri.substring(0, 30) + "...");

  // Ensure database name is in URI
  let mongoUri = uri;
  
  // Se a URI já tem um database name, não adicionar
  // Verifica se tem / após o host e antes do ?
  const hasDbInUri = /mongodb\+srv:\/\/[^/]+\/[^?]+/.test(mongoUri);
  
  if (!hasDbInUri) {
    // Adiciona o nome do banco antes do ? ou no final
    if (mongoUri.includes("?")) {
      mongoUri = mongoUri.replace(/\?/, "/itea?");
    } else {
      mongoUri = mongoUri + "/itea";
    }
    console.log("📝 Database name adicionado à URI: /itea");
  } else {
    console.log("✅ Database name já presente na URI");
  }

  try {
    const client = new MongoClient(mongoUri, {
      serverApi: ServerApiVersion.v1,
      tls: true,
    });

    console.log("🔄 Conectando...");
    await client.connect();
    console.log("✅ Conectado ao MongoDB!");

    const db = client.db("itea");
    console.log("📊 Usando database:", db.databaseName);

    // Testar a conexão fazendo uma query simples
    await db.admin().ping();
    console.log("✅ Ping bem-sucedido!");

    cachedClient = client;
    cachedDb = db;

    return { client, db };
  } catch (error) {
    console.error("❌ Erro ao conectar ao MongoDB:", error.message);
    console.error("Tipo do erro:", error.name);
    
    // Mensagens de erro mais específicas
    if (error.message.includes("authentication failed")) {
      throw new Error("Falha na autenticação. Verifique usuário e senha na connection string.");
    } else if (error.message.includes("timeout") || error.message.includes("ECONNREFUSED")) {
      throw new Error("Timeout na conexão. Verifique o IP whitelist no MongoDB Atlas (deve ter 0.0.0.0/0).");
    } else if (error.message.includes("ENOTFOUND") || error.message.includes("DNS")) {
      throw new Error("Não foi possível resolver o hostname. Verifique a connection string.");
    } else {
      throw new Error(`Erro de conexão: ${error.message}`);
    }
  }
}

module.exports = { connectToDatabase };

