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
7. Copie o **Project ID** que será exibido no código (é uma string alfanumérica)
   - Exemplo: `uc9w2ptauj` (este é o seu Project ID)

### 2. Configurar no Projeto

Este projeto usa a **instalação via NPM** do Clarity, que é a abordagem recomendada para apps React porque mantém o carregamento dentro do ciclo de vida do React e facilita o uso de variáveis de ambiente.

#### Instalar Dependência

```bash
npm install @microsoft/clarity
```

O componente `components/Clarity.tsx` importa a biblioteca e chama `clarity.init(<PROJECT_ID>)` assim que a aplicação é carregada.

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

#### ⏱️ Tempo de Processamento

**Importante:** O Clarity pode demorar para mostrar dados:

- **Primeira detecção**: 5-15 minutos após o primeiro acesso
- **Dados básicos**: 30 minutos a 1 hora
- **Heatmaps e gravações**: 2-4 horas após ter tráfego suficiente
- **Insights completos**: 24-48 horas

Isso é normal! O Clarity precisa processar as sessões antes de exibir os dados.

#### Verificação Imediata (Console do Navegador)

1. **Acesse seu site em produção**: https://i-tea.vercel.app
2. **Abra o DevTools** (F12 ou Ctrl+Shift+I)
3. **Vá na aba Console**
4. **Procure por:**
   - ✅ **Bom sinal**: Mensagens do Clarity carregando (normal)
   - ✅ **Bom sinal**: `clarity` disponível no objeto `window`
   - ❌ **Problema**: Aviso sobre "Project ID não configurado"

**Teste rápido no Console:**
```javascript
// Digite no console do navegador:
window.clarity
// Se retornar uma função ou objeto, o Clarity está carregado! ✅
```

#### Verificação no Dashboard do Clarity

1. **Acesse**: [https://clarity.microsoft.com](https://clarity.microsoft.com)
2. **Faça login** e selecione seu projeto
3. **Procure por:**
   - Status de instalação (pode mostrar "Verificando..." inicialmente)
   - Contador de sessões (pode estar em 0 inicialmente)
   - Mensagem "Aguardando dados" (normal nas primeiras horas)

#### O que Esperar

**Primeiras 15-30 minutos:**
- Status pode mostrar "Verificando instalação"
- Contador de sessões pode estar em 0
- Isso é normal!

**Após 30 minutos - 1 hora:**
- Primeiras sessões começam a aparecer
- Contador de sessões aumenta
- Status muda para "Ativo"

**Após 2-4 horas:**
- Heatmaps começam a aparecer
- Gravações de sessão ficam disponíveis
- Insights básicos aparecem

**Após 24-48 horas:**
- Dados completos disponíveis
- Análises mais detalhadas
- Padrões de comportamento visíveis

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

