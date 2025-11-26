const { connectToDatabase } = require("./mongo");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method === "GET") {
    try {
      // Verificar se MONGO_URI está definida
      const hasMongoUri = !!process.env.MONGO_URI;
      const mongoUriPreview = hasMongoUri 
        ? process.env.MONGO_URI.substring(0, 20) + "..." 
        : "NÃO DEFINIDA";

      // Tentar conectar
      const { db } = await connectToDatabase();
      
      // Testar uma query simples
      const collections = await db.listCollections().toArray();
      const usersCount = await db.collection("users").countDocuments();

      res.status(200).json({
        success: true,
        message: "Conexão com MongoDB estabelecida com sucesso!",
        details: {
          mongoUriConfigured: hasMongoUri,
          mongoUriPreview: mongoUriPreview,
          database: db.databaseName,
          collections: collections.map(c => c.name),
          usersCount: usersCount
        }
      });
    } catch (err) {
      console.error("Erro no teste de conexão:", err);
      const errorMessage = err.message || String(err);
      
      res.status(500).json({
        success: false,
        error: errorMessage,
        details: {
          mongoUriConfigured: !!process.env.MONGO_URI,
          mongoUriPreview: process.env.MONGO_URI 
            ? process.env.MONGO_URI.substring(0, 20) + "..." 
            : "NÃO DEFINIDA",
          stack: process.env.NODE_ENV === "development" ? err.stack : undefined
        },
        troubleshooting: {
          checkMongoUri: "Verifique se MONGO_URI está configurada na Vercel",
          checkIpWhitelist: "Verifique se 0.0.0.0/0 está no Network Access do MongoDB Atlas",
          checkConnectionString: "Verifique se a connection string está correta (com senha substituída)",
          checkDatabaseName: "O código usa o banco 'itea' por padrão"
        }
      });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

