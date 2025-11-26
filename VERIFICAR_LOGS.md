# 🔍 Como Verificar Logs na Vercel

## Passo a Passo

1. **Acesse o Dashboard da Vercel**
   - https://vercel.com
   - Faça login
   - Selecione o projeto **i-tea**

2. **Vá para Deployments**
   - No menu lateral, clique em **Deployments**
   - Clique no último deployment (o mais recente)

3. **Acesse os Logs da Função**
   - Role para baixo até **Functions**
   - Clique em `api/test-connection` (ou `api/login` se for o erro de login)
   - Você verá os **Logs** da função

4. **Procure por Mensagens de Erro**
   - Procure por linhas que começam com `❌` ou `ERROR`
   - Procure por mensagens como:
     - `MONGO_URI não está definida`
     - `Erro ao conectar ao MongoDB`
     - `authentication failed`
     - `timeout`

## O que Procurar nos Logs

### Se ver: `❌ MONGO_URI não está definida`
**Solução:** A variável não está configurada ou não foi aplicada
- Vá em Settings → Environment Variables
- Verifique se `MONGO_URI` está lá
- Certifique-se de que está marcada para **Production**
- Faça um **redeploy**

### Se ver: `authentication failed`
**Solução:** Usuário ou senha incorretos
- Verifique a connection string
- Certifique-se de que a senha está correta
- Se a senha tem caracteres especiais, codifique-os (ex: `@` → `%40`)

### Se ver: `timeout` ou `ECONNREFUSED`
**Solução:** Problema com IP whitelist
- Verifique se `0.0.0.0/0` está no Network Access do MongoDB Atlas
- Aguarde alguns minutos após adicionar

### Se ver: `Cannot find module` ou erro de importação
**Solução:** Problema com dependências
- Verifique se `mongodb` está no `package.json`
- A Vercel deve instalar automaticamente, mas pode precisar de redeploy

## Copiar os Logs

1. Selecione todo o texto dos logs
2. Copie (Ctrl+C / Cmd+C)
3. Cole aqui para eu analisar

## Screenshot

Se preferir, tire um screenshot dos logs e compartilhe. Isso ajuda muito a identificar o problema!

