# 🔍 Como Verificar se o Clarity Está Funcionando

## ⚡ Verificação Rápida (Imediata)

### 1. Console do Navegador

1. Acesse seu site: https://i-tea.vercel.app
2. Abra o DevTools (F12 ou Ctrl+Shift+I)
3. Vá na aba **Console**
4. Digite:
   ```javascript
   window.clarity
   ```

**Resultados:**
- ✅ **Se retornar uma função/objeto**: Clarity está carregado e funcionando!
- ❌ **Se retornar `undefined`**: Clarity não está carregado (verifique a configuração)

### 2. Verificar Network Requests

1. No DevTools, vá na aba **Network**
2. Recarregue a página (F5)
3. Procure por requisições para:
   - `clarity.ms` ou `clarity.ms/tag/`
   - Se aparecer, o Clarity está tentando carregar ✅

### 3. Verificar Variável de Ambiente

No console do navegador, digite:
```javascript
// Verificar se a variável está disponível (apenas em dev)
console.log(import.meta.env.VITE_CLARITY_PROJECT_ID)
```

**Nota:** Em produção, essa variável não estará acessível por segurança, mas o Clarity ainda funcionará se estiver configurada na Vercel.

## 📊 Verificação no Dashboard do Clarity

### Tempo de Espera

**⚠️ IMPORTANTE:** O Clarity demora para processar e exibir dados:

| Tempo | O que Esperar |
|-------|---------------|
| **0-15 min** | Status: "Verificando instalação" |
| **15-30 min** | Primeira detecção de tráfego |
| **30 min - 1h** | Primeiras sessões aparecem |
| **2-4 horas** | Heatmaps e gravações disponíveis |
| **24-48 horas** | Dados completos e insights |

### Como Verificar no Dashboard

1. Acesse [https://clarity.microsoft.com](https://clarity.microsoft.com)
2. Faça login
3. Selecione seu projeto
4. Veja o status:
   - **"Verificando..."** = Normal nas primeiras horas
   - **"Ativo"** = Funcionando corretamente ✅
   - **"Não detectado"** = Problema de configuração ❌

## 🐛 Troubleshooting

### Problema: `window.clarity` retorna `undefined`

**Possíveis causas:**
1. Variável `VITE_CLARITY_PROJECT_ID` não configurada na Vercel
2. Deploy não foi feito após configurar a variável
3. Project ID incorreto

**Solução:**
1. Verifique na Vercel: Settings → Environment Variables
2. Certifique-se de que `VITE_CLARITY_PROJECT_ID` está configurada
3. Faça um redeploy

### Problema: Dashboard mostra "Não detectado" após 1 hora

**Possíveis causas:**
1. Script não está carregando
2. Project ID incorreto
3. Site não está recebendo tráfego

**Solução:**
1. Verifique o console do navegador (veja seção acima)
2. Verifique se há erros no Network tab
3. Acesse o site algumas vezes para gerar tráfego
4. Aguarde mais tempo (pode levar até 2 horas)

### Problema: Dados não aparecem após 24 horas

**Possíveis causas:**
1. Site não está recebendo tráfego suficiente
2. Bloqueadores de anúncio estão bloqueando o Clarity
3. Configuração incorreta

**Solução:**
1. Acesse o site várias vezes de diferentes navegadores
2. Desative bloqueadores de anúncio temporariamente para testar
3. Verifique os logs na Vercel para erros

## ✅ Checklist de Verificação

- [ ] Variável `VITE_CLARITY_PROJECT_ID` configurada na Vercel
- [ ] Deploy feito após configurar a variável
- [ ] `window.clarity` retorna função/objeto no console
- [ ] Requisições para `clarity.ms` aparecem no Network tab
- [ ] Dashboard do Clarity mostra status "Verificando" ou "Ativo"
- [ ] Aguardou pelo menos 30 minutos após primeiro acesso

## 💡 Dica

Se você quiser testar imediatamente se está funcionando:

1. Abra o site em produção
2. Abra o console (F12)
3. Digite: `window.clarity('event', 'test')`
4. Se não der erro, o Clarity está funcionando! ✅

---

**Lembre-se:** O Clarity precisa de tempo para processar os dados. Seja paciente! 😊

