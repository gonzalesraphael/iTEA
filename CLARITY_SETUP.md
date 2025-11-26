# 📊 Configurar Microsoft Clarity

O Microsoft Clarity é uma ferramenta gratuita de analytics e heatmaps que ajuda a entender como os usuários interagem com seu site.

## 🚀 Como Configurar

### 1. Criar Conta e Projeto no Clarity

1. Acesse [https://clarity.microsoft.com](https://clarity.microsoft.com)
2. Faça login com sua conta Microsoft (ou crie uma)
3. Clique em **"Create Project"** ou **"Adicionar um novo projeto"**
4. Preencha:
   - **Project Name**: ITEA (ou o nome que preferir)
   - **Website URL**: https://i-tea.vercel.app
   - **Industry**: Selecione a categoria apropriada
5. Clique em **"Create"** ou **"Criar"**
6. **Escolha a opção: "Instalar Manualmente"** ou **"Instalar Usando NPM"**
7. Copie o **Project ID** que será exibido (é uma string alfanumérica)

### 2. Configurar no Projeto

Este projeto usa a **instalação via React** (equivalente à opção NPM do Clarity), que é mais adequada para projetos React.

#### Configurar Variável de Ambiente

**Para Produção (Vercel):**

1. Acesse Vercel Dashboard → Settings → Environment Variables
2. Clique em **Add New**
3. Preencha:
   - **Key**: `VITE_CLARITY_PROJECT_ID`
   - **Value**: Cole o Project ID que você copiou do Clarity
   - **Environments**: Marque todas as opções:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
4. Clique em **Save**

**Para Desenvolvimento Local (Opcional):**

1. Crie um arquivo `.env` na raiz do projeto:
   ```bash
   VITE_CLARITY_PROJECT_ID=seu-project-id-aqui
   ```
2. Reinicie o servidor de desenvolvimento (`npm run dev`)

### 3. Verificar se Está Funcionando

1. **Faça deploy do projeto** (se ainda não fez)
   ```bash
   git add .
   git commit -m "Adicionar Microsoft Clarity"
   git push
   ```

2. **Aguarde o deploy na Vercel** (1-2 minutos)

3. **Acesse seu site** em produção: https://i-tea.vercel.app

4. **No dashboard do Clarity:**
   - Retorne ao painel do Clarity
   - Clique em **"Verificar"** ou **"Verify"** (se disponível)
   - Aguarde alguns minutos (pode levar até 1 hora)
   - Você verá dados começando a aparecer

5. **Verificar no Console do Navegador (Opcional):**
   - Abra o DevTools (F12)
   - Vá em Console
   - Você não deve ver avisos sobre Clarity não configurado
   - Pode ver mensagens do Clarity carregando (normal)

## 📋 O que o Clarity Rastreia

- **Heatmaps**: Onde os usuários clicam e fazem scroll
- **Session Recordings**: Gravações de sessões dos usuários
- **Insights**: Análises automáticas de comportamento
- **Funnels**: Análise de conversão
- **Performance**: Métricas de desempenho

## 🔒 Privacidade

O Clarity é GDPR compliant e:
- Não rastreia informações pessoais identificáveis (PII)
- Respeita configurações de privacidade do navegador
- Permite opt-out para usuários

## 🛠️ Desabilitar em Desenvolvimento (Opcional)

Se quiser desabilitar o Clarity em desenvolvimento local, edite `src/components/Clarity.tsx`:

```typescript
useEffect(() => {
  // Desabilitar em desenvolvimento
  if (import.meta.env.DEV) {
    return;
  }
  
  // ... resto do código
}, []);
```

## 📊 Acessar o Dashboard

Após configurar, acesse:
- [https://clarity.microsoft.com](https://clarity.microsoft.com)
- Faça login
- Selecione seu projeto
- Veja os dados e análises

## 🎯 Próximos Passos

1. Configure o Project ID
2. Faça deploy
3. Aguarde alguns minutos para os dados começarem a aparecer
4. Explore o dashboard do Clarity para insights sobre o comportamento dos usuários

---

**Dúvidas?** Consulte a [documentação oficial do Clarity](https://docs.microsoft.com/en-us/clarity/)

