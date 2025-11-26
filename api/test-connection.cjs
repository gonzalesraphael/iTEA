const { connectToDatabase } = require("./mongo");

module.exports = async (req, res) => {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }

    if (req.method === "GET") {
      console.log("🔍 Iniciando teste de conexão...");
      
      // Verificar se MONGO_URI está definida
      const hasMongoUri = !!process.env.MONGO_URI;
      const mongoUriPreview = hasMongoUri 
        ? process.env.MONGO_URI.substring(0, 30) + "..." 
        : "NÃO DEFINIDA";

      console.log("📋 MONGO_URI configurada:", hasMongoUri);
      console.log("📋 Preview:", mongoUriPreview);

      if (!hasMongoUri) {
        return res.status(500).json({
          success: false,
          error: "MONGO_URI não está configurada",
          details: {
            mongoUriConfigured: false,
            message: "Configure a variável MONGO_URI na Vercel: Settings → Environment Variables"
          },
          troubleshooting: {
            step1: "Acesse Vercel Dashboard → Settings → Environment Variables",
            step2: "Adicione MONGO_URI com sua connection string do MongoDB Atlas",
            step3: "Marque Production, Preview e Development",
            step4: "Faça um redeploy"
          }
        });
      }

      // Tentar conectar
      console.log("🔄 Tentando conectar ao MongoDB...");
      const { db } = await connectToDatabase();
      console.log("✅ Conectado com sucesso!");
      
      // Testar uma query simples
      console.log("📊 Listando coleções...");
      const collections = await db.listCollections().toArray();
      console.log("📊 Coleções encontradas:", collections.length);
      
      console.log("👥 Contando usuários...");
      const usersCount = await db.collection("users").countDocuments();
      console.log("👥 Usuários encontrados:", usersCount);

      res.status(200).json({
        success: true,
        message: "Conexão com MongoDB estabelecida com sucesso!",
        details: {
          mongoUriConfigured: true,
          mongoUriPreview: mongoUriPreview,
          database: db.databaseName,
          collections: collections.map(c => c.name),
          usersCount: usersCount
        }
      });
    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
  } catch (err) {
    console.error("❌ ERRO NO TESTE DE CONEXÃO:");
    console.error("Tipo:", err.name);
    console.error("Mensagem:", err.message);
    console.error("Stack:", err.stack);
    
    const errorMessage = err.message || String(err);
    const hasMongoUri = !!process.env.MONGO_URI;
    
    // Garantir que sempre retornamos uma resposta JSON válida
    try {
      res.status(500).json({
        success: false,
        error: errorMessage,
        errorType: err.name || "UnknownError",
        details: {
          mongoUriConfigured: hasMongoUri,
          mongoUriPreview: hasMongoUri 
            ? process.env.MONGO_URI.substring(0, 30) + "..." 
            : "NÃO DEFINIDA",
        },
        troubleshooting: {
          checkMongoUri: hasMongoUri 
            ? "MONGO_URI está configurada, mas há erro na conexão"
            : "MONGO_URI não está configurada. Configure na Vercel: Settings → Environment Variables",
          checkIpWhitelist: "Verifique se 0.0.0.0/0 está no Network Access do MongoDB Atlas",
          checkConnectionString: "Verifique se a connection string está correta (com senha substituída)",
          checkDatabaseName: "O código usa o banco 'itea' por padrão",
          checkLogs: "Veja os logs na Vercel: Deployments → Functions → Logs"
        }
      });
    } catch (jsonError) {
      // Se falhar ao enviar JSON, tentar texto simples
      console.error("Erro ao enviar resposta JSON:", jsonError);
      res.status(500).send(`Erro: ${errorMessage}`);
    }
  }
};

