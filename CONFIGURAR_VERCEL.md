# 🔧 Configurar Variáveis de Ambiente na Vercel

## ⚠️ Problema: Erro 500 ao fazer login

Se você está recebendo erro 500 ao tentar fazer login na Vercel, é porque a variável de ambiente `MONGO_URI` não está configurada.

## 📋 Passo a Passo para Configurar

### 1. Acesse o Dashboard da Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login na sua conta
3. Selecione seu projeto (i-tea)

### 2. Configure a Variável de Ambiente

1. No menu lateral, clique em **Settings**
2. Clique em **Environment Variables** (no menu esquerdo)
3. Clique no botão **Add New**
4. Preencha:
   - **Key**: `MONGO_URI`
   - **Value**: Cole sua connection string do MongoDB Atlas
     ```
     mongodb+srv://usuario:senha@cluster.mongodb.net/?appName=Cluster0
     ```
   - **Environments**: Marque TODAS as opções:
     - ✅ Production
     - ✅ Preview  
     - ✅ Development
5. Clique em **Save**

### 3. Obter a Connection String do MongoDB Atlas

Se você não tem a connection string:

1. Acesse [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Faça login
3. Clique em **Connect** no seu cluster
4. Selecione **Connect your application**
5. Copie a connection string (ela começa com `mongodb+srv://`)
6. Substitua `<password>` pela sua senha do MongoDB
7. Substitua `<username>` pelo seu usuário

**Exemplo:**
```
mongodb+srv://dosgonzalesraphael_db_user:xV1IKKQDBa7ZMoBG@cluster0.5rsdqdv.mongodb.net/?appName=Cluster0
```

### 4. Verificar IP Whitelist no MongoDB Atlas

⚠️ **IMPORTANTE**: A Vercel usa IPs dinâmicos. Você precisa:

1. No MongoDB Atlas, vá em **Network Access**
2. Clique em **Add IP Address**
3. Clique em **Allow Access from Anywhere** (ou adicione `0.0.0.0/0`)
4. Clique em **Confirm**

Isso permite que a Vercel se conecte ao MongoDB de qualquer IP.

### 5. Fazer Redeploy

Após configurar a variável de ambiente:

1. Na Vercel, vá em **Deployments**
2. Clique nos três pontos (⋯) do último deployment
3. Selecione **Redeploy**
4. Ou faça um novo commit e push:
   ```bash
   git commit --allow-empty -m "Trigger redeploy"
   git push
   ```

### 6. Testar

Após o redeploy, teste:

1. **Health check**: https://i-tea.vercel.app/api/health
   - Deve retornar: `{"ok":true}`

2. **Login**: Tente fazer login na aplicação
   - Deve funcionar agora!

## 🔍 Verificar se Está Configurado

### Via Dashboard Vercel

1. Settings → Environment Variables
2. Verifique se `MONGO_URI` aparece na lista
3. Verifique se está marcada para Production

### Via CLI

```bash
# Instalar Vercel CLI (se não tiver)
npm i -g vercel

# Ver variáveis de ambiente
vercel env ls

# Ver valor de uma variável específica (não mostra o valor por segurança)
vercel env ls | grep MONGO_URI
```

## 🐛 Troubleshooting

### Erro: "MONGO_URI não está definida"

**Solução:**
- Verifique se a variável está configurada na Vercel
- Verifique se está marcada para **Production**
- Faça um redeploy após adicionar a variável

### Erro: "Connection timeout"

**Solução:**
- Verifique o IP whitelist no MongoDB Atlas
- Adicione `0.0.0.0/0` para permitir qualquer IP
- Aguarde alguns minutos após adicionar o IP

### Erro: "Authentication failed"

**Solução:**
- Verifique se a senha na connection string está correta
- Verifique se o usuário tem permissões no MongoDB Atlas
- Tente criar um novo usuário no MongoDB Atlas

### Erro: "Database name not found"

**Solução:**
- O código usa o banco `itea` por padrão
- Se você quiser usar outro nome, edite `api/mongo.js`:
  ```javascript
  const db = client.db("seu-banco-aqui");
  ```

## 📝 Checklist

Antes de testar, verifique:

- [ ] Variável `MONGO_URI` configurada na Vercel
- [ ] Variável marcada para Production, Preview e Development
- [ ] IP whitelist configurado no MongoDB Atlas (0.0.0.0/0)
- [ ] Connection string está correta (com senha substituída)
- [ ] Redeploy feito após configurar a variável
- [ ] Teste o endpoint `/api/health` primeiro

## 🎯 Próximos Passos

Após configurar:

1. Teste o login na aplicação
2. Teste o cadastro de novos usuários
3. Verifique se os dados estão sendo salvos no MongoDB Atlas

---

**Dúvidas?** Verifique os logs na Vercel: Deployments → Clique no deployment → Functions → Veja os logs

