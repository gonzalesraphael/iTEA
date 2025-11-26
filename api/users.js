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
      const { db } = await connectToDatabase();
      const users = await db.collection("users").find().toArray();
      users.forEach((u) => delete u.senha);
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: "Erro ao buscar usuários", details: String(err) });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

