const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config({ path: require("path").join(__dirname, ".env") });

const app = express();
app.use(cors());
app.use(express.json());

let uri = process.env.MONGO_URI;
if (!uri) {
  console.error("MONGO_URI not set in server/.env");
  process.exit(1);
}
// Ensure database name is in URI
if (!uri.includes("/incluimais")) {
  uri = uri.replace(/\?/, "/incluimais?");
}

const client = new MongoClient(uri, { 
  serverApi: ServerApiVersion.v1,
  tls: true,
});
let db;

async function init() {
  await client.connect();
  db = client.db("incluimais");
  console.log("Mongo connected");
}

init().catch((e) => {
  console.error("Mongo connection error", e);
  process.exit(1);
});

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

// List users (dev only)
app.get("/api/users", async (_req, res) => {
  try {
    const users = await db.collection("users").find().toArray();
    users.forEach((u) => delete u.senha);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar usuários", details: String(err) });
  }
});

// Register
app.post("/api/register", async (req, res) => {
  const { nome, email, senha, telefone, idade, genero } = req.body || {};
  if (!nome || !email || !senha) {
    return res.status(400).json({ error: "Campos obrigatórios ausentes" });
  }
  try {
    const existing = await db.collection("users").findOne({ email });
    if (existing) return res.status(409).json({ error: "Email já cadastrado" });
    const result = await db.collection("users").insertOne({ nome, email, senha, telefone, idade, genero });
    res.status(201).json({ _id: result.insertedId, nome, email, telefone, idade, genero });
  } catch (err) {
    res.status(500).json({ error: "Erro ao registrar usuário", details: String(err) });
  }
});

// Login (for demo only; do NOT store plain password in prod)
app.post("/api/login", async (req, res) => {
  const { email, senha } = req.body || {};
  if (!email || !senha) return res.status(400).json({ error: "Email e senha são obrigatórios" });
  try {
    const user = await db.collection("users").findOne({ email, senha });
    if (!user) return res.status(401).json({ error: "Credenciais inválidas" });
    delete user.senha;
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Erro interno", details: String(err) });
  }
});

// Update profile by email
app.put("/api/profile/:email", async (req, res) => {
  const { email } = req.params;
  const { nome, telefone, idade, genero } = req.body || {};
  try {
    const result = await db.collection("users").updateOne(
      { email },
      { $set: { nome, telefone, idade, genero } },
    );
    if (result.matchedCount === 0) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Erro interno", details: String(err) });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));


