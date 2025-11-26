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

---

**Desenvolvido com ❤️ para promover inclusão e acessibilidade**
