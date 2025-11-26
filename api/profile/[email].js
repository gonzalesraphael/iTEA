const { connectToDatabase } = require("../mongo");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "PUT, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method === "PUT") {
    // Na Vercel, parâmetros dinâmicos vêm em req.query
    const email = req.query.email || req.query[0];
    const { nome, telefone, idade, genero } = req.body || {};

    if (!email) {
      return res.status(400).json({ error: "Email é obrigatório" });
    }

    try {
      const { db } = await connectToDatabase();
      const result = await db.collection("users").updateOne(
        { email },
        { $set: { nome, telefone, idade, genero } }
      );

      if (result.matchedCount === 0) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({ error: "Erro interno", details: String(err) });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

