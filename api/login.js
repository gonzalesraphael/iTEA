const { connectToDatabase } = require("./mongo");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method === "POST") {
    const { email, senha } = req.body || {};
    
    if (!email || !senha) {
      return res.status(400).json({ error: "Email e senha são obrigatórios" });
    }

    try {
      const { db } = await connectToDatabase();
      const user = await db.collection("users").findOne({ email, senha });
      
      if (!user) {
        return res.status(401).json({ error: "Credenciais inválidas" });
      }

      delete user.senha;
      res.status(200).json(user);
    } catch (err) {
      console.error("Erro no login:", err);
      const errorMessage = err.message || String(err);
      // Não expor detalhes sensíveis em produção
      const isMongoError = errorMessage.includes("MONGO_URI") || errorMessage.includes("connection");
      res.status(500).json({ 
        error: isMongoError 
          ? "Erro de configuração do servidor. Contate o administrador." 
          : "Erro interno", 
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined
      });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

