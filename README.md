# ITEA 🌟

PWA (Progressive Web App) responsivo para conectar pessoas com necessidades específicas a espaços, eventos e comunidades inclusivas.

## 📱 Sobre o Projeto

O **ITEA** é uma organização fictícia focada em apoio ao autismo, desenvolvida como trabalho acadêmico para estudantes do ensino médio. O aplicativo oferece uma plataforma completa para:

- 🏢 **Estabelecimentos**: Busque locais adaptados e acessíveis com sistema de selos de qualidade
- 🎭 **Eventos**: Descubra eventos inclusivos e atividades na sua região
- 🤝 **Comunidades**: Conecte-se com grupos de apoio e compartilhe experiências

## ✨ Funcionalidades

### Telas Principais

1. **Home Institucional** - Landing page com informações sobre a organização
2. **Login** - Autenticação de usuários
3. **Cadastro** - Registro de novos usuários
4. **Dashboard** - Painel principal com acesso às 3 funcionalidades principais
5. **Estabelecimentos** - Busca com filtros avançados (selo, adaptações, atendimento)
6. **Eventos** - Calendário de eventos inclusivos
7. **Comunidades** - Grupos de apoio e discussão

### Características

- ✅ Design responsivo (mobile-first)
- ✅ PWA instalável
- ✅ Navegação inferior fixa no mobile
- ✅ Sistema de autenticação com MongoDB
- ✅ Backend API com Express.js
- ✅ Filtros avançados com drawer mobile
- ✅ Identidade visual consistente (azul, verde, laranja)
- ✅ Totalmente em português brasileiro
- ✅ Acessibilidade focada
- ✅ ChatBot com IA integrado
- ✅ Modais informativos para serviços

## 🎨 Identidade Visual

**Cores da marca:**
- Azul (#2563eb) - Primária
- Verde (#22c55e) - Eventos
- Laranja (#f97316) - Comunidades

**Logo:** ITEA com ícones representando:
- Comunidade
- Recursos
- Apoio
- Inovação

## 🛠️ Stack Tecnológica

### Frontend
- **React 18.3** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.9** - Superset do JavaScript com tipagem estática
- **Vite 5.4** - Build tool e dev server de alta performance
- **Tailwind CSS 4.1** - Framework CSS utility-first
- **shadcn/ui** - Componentes UI baseados em Radix UI
- **Radix UI** - Biblioteca de componentes acessíveis e não-estilizados
- **Motion (Framer Motion)** - Biblioteca de animações
- **Lucide React** - Ícones SVG
- **Sonner** - Sistema de notificações toast
- **React Hook Form** - Gerenciamento de formulários
- **Context API** - Gerenciamento de estado global (autenticação)

### Backend
- **Node.js** - Runtime JavaScript
- **Express 5.1** - Framework web para Node.js
- **MongoDB 6.20** - Banco de dados NoSQL
- **MongoDB Atlas** - Serviço de banco de dados em nuvem
- **Mongoose** - ODM para MongoDB (via driver nativo)

### Bibliotecas e Ferramentas
- **class-variance-authority** - Gerenciamento de variantes de classes
- **clsx** + **tailwind-merge** - Utilitários para classes CSS
- **next-themes** - Gerenciamento de temas (dark/light mode)
- **react-day-picker** - Seletor de datas
- **recharts** - Gráficos e visualizações
- **embla-carousel-react** - Carrossel de imagens
- **cmdk** - Command menu component
- **vaul** - Drawer component
- **input-otp** - Input para códigos OTP

### Desenvolvimento
- **TypeScript** - Tipagem estática
- **PostCSS** + **Autoprefixer** - Processamento de CSS
- **ESLint** (implícito via Vite) - Linter de código

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn
- Conta no MongoDB Atlas (para banco de dados)

### Instalação

1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd project
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
```bash
# Crie o arquivo server/.env
MONGO_URI=sua-uri-do-mongodb-atlas
PORT=4000
```

4. Inicie o servidor backend
```bash
npm run server
```

5. Em outro terminal, inicie o frontend
```bash
npm run dev
```

6. Acesse a aplicação
- Frontend: http://localhost:5173
- Backend API: http://localhost:4000

## 📋 Fluxo de Navegação

```
Home → Login/Cadastro → Dashboard → [Estabelecimentos | Eventos | Comunidades]
                                           ↓
                                     Busca com Filtros
```

## 🔐 Autenticação

O sistema utiliza autenticação com backend real:
- **Backend API** - Express.js rodando na porta 4000
- **Banco de Dados** - MongoDB Atlas (cloud)
- **Persistência** - Dados de usuários salvos no MongoDB
- **Endpoints**:
  - `POST /api/register` - Cadastro de novos usuários
  - `POST /api/login` - Autenticação de usuários
  - `PUT /api/profile/:email` - Atualização de perfil
  - `GET /api/users` - Listagem de usuários (dev)

## 📊 Dados Mock

O app utiliza dados fictícios para demonstração:
- 450+ estabelecimentos simulados
- 120+ eventos
- 80+ comunidades
- Sistema de selos (Bronze, Prata, Ouro)

## 🎯 Objetivos do Projeto

- Demonstrar um PWA completo e funcional
- Apresentar boas práticas de UX/UI para inclusão
- Servir como referência para projetos acadêmicos
- Inspirar soluções de acessibilidade digital

## 📱 Responsividade

- **Mobile**: Menu inferior fixo, filtros em drawer
- **Desktop**: Navegação superior, filtros em sidebar
- **Adaptável**: Layout otimizado para todos os tamanhos de tela

## 🌐 Valores Brasileiros

- Moeda: Real (R$)
- Data: Formato DD/MM/AAAA
- Idioma: Português Brasileiro
- Endereços: Formato brasileiro

## 🚀 Deploy na Vercel

### Pré-requisitos

1. Conta na [Vercel](https://vercel.com)
2. Conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
3. Git configurado no projeto

### Passo a Passo

#### 1. Preparar o Repositório

```bash
# Certifique-se de que o projeto está em um repositório Git
git init  # se ainda não tiver
git add .
git commit -m "Preparar para deploy"
```

#### 2. Conectar com a Vercel

**Opção A: Via CLI (Recomendado)**

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Fazer login
vercel login

# Deploy (primeira vez)
vercel

# Deploy de produção
vercel --prod
```

**Opção B: Via Dashboard Web**

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Add New Project"
3. Conecte seu repositório Git (GitHub, GitLab, Bitbucket)
4. Configure o projeto:
   - **Framework Preset**: Vite
   - **Root Directory**: `.` (raiz do projeto)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

#### 3. Configurar Variáveis de Ambiente ⚠️ **OBRIGATÓRIO**

**Este passo é ESSENCIAL! Sem isso, a API não funcionará e você receberá erro 500.**

Na Vercel, adicione a variável de ambiente `MONGO_URI`:

1. Acesse **Settings** → **Environment Variables**
2. Clique em **Add New**
3. Preencha:
   - **Key**: `MONGO_URI`
   - **Value**: Sua connection string do MongoDB Atlas
     ```
     mongodb+srv://usuario:senha@cluster.mongodb.net/?appName=Cluster0
     ```
   - **Environments**: Marque TODAS as opções:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
4. Clique em **Save**

**Como obter a Connection String:**
1. Acesse [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Clique em **Connect** no seu cluster
3. Selecione **Connect your application**
4. Copie a connection string
5. Substitua `<password>` pela sua senha real
6. Substitua `<username>` pelo seu usuário

**⚠️ Importante:**
- Substitua `usuario` e `senha` pelas suas credenciais reais do MongoDB Atlas
- Certifique-se de que o IP está liberado no MongoDB Atlas:
  - Vá em **Network Access** no MongoDB Atlas
  - Clique em **Add IP Address**
  - Selecione **Allow Access from Anywhere** (ou adicione `0.0.0.0/0`)
- **Após adicionar a variável, faça um REDEPLOY** (Deployments → ⋯ → Redeploy)

📖 **Guia completo**: Veja `CONFIGURAR_VERCEL.md` para instruções detalhadas

#### 4. Ajustar Nome do Banco de Dados

O código está configurado para usar o banco `itea`. Se você quiser usar outro nome:

1. Edite `api/mongo.js`
2. Altere a linha: `const db = client.db("itea");`

#### 5. Verificar Deploy

Após o deploy, você receberá uma URL como:
```
https://seu-projeto.vercel.app
```

Teste os endpoints:
- `https://seu-projeto.vercel.app/api/health` - Deve retornar `{"ok":true}`
- `https://seu-projeto.vercel.app/api/users` - Lista de usuários (se houver)

### Estrutura de API Routes

O projeto usa serverless functions da Vercel:

```
api/
├── mongo.js          # Conexão com MongoDB (cache)
├── health.js         # GET /api/health
├── users.js          # GET /api/users
├── register.js       # POST /api/register
├── login.js          # POST /api/login
└── profile/
    └── [email].js    # PUT /api/profile/:email
```

### Troubleshooting

**Erro: "MONGO_URI não está definida"**
- Verifique se a variável de ambiente `MONGO_URI` está configurada na Vercel
- Certifique-se de que está configurada para todos os ambientes (Production, Preview, Development)

**Erro: "Connection timeout"**
- Verifique se o IP está liberado no MongoDB Atlas
- Adicione `0.0.0.0/0` temporariamente para testar

**Erro: "Build failed"**
- Verifique os logs de build na Vercel
- Certifique-se de que todas as dependências estão no `package.json`

**API não funciona em produção**
- Verifique se as rotas estão em `/api/`
- Teste diretamente: `https://seu-projeto.vercel.app/api/health`

### Comandos Úteis

```bash
# Ver logs do deploy
vercel logs

# Ver variáveis de ambiente
vercel env ls

# Adicionar variável de ambiente via CLI
vercel env add MONGO_URI

# Deploy apenas frontend (sem API)
vercel --prod --force
```

---

**Desenvolvido com ❤️ para promover inclusão e acessibilidade**
