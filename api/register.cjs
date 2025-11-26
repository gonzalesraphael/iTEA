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
    const { nome, email, senha, telefone, idade, genero } = req.body || {};
    
    if (!nome || !email || !senha) {
      return res.status(400).json({ error: "Campos obrigatórios ausentes" });
    }

    try {
      const { db } = await connectToDatabase();
      const existing = await db.collection("users").findOne({ email });
      
      if (existing) {
        return res.status(409).json({ error: "Email já cadastrado" });
      }

      const result = await db.collection("users").insertOne({
        nome,
        email,
        senha,
        telefone,
        idade,
        genero,
      });

      res.status(201).json({
        _id: result.insertedId,
        nome,
        email,
        telefone,
        idade,
        genero,
      });
    } catch (err) {
      res.status(500).json({ error: "Erro ao registrar usuário", details: String(err) });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

