# FullStack Project 💻

Projeto Full Stack para cadastro e gerenciamento de usuários, utilizando React no frontend, Node.js/Express no backend e banco de dados MongoDB com Prisma ORM.

## Tecnologias Utilizadas

- **Frontend:** React, Axios, Vite
- **Backend:** Node.js, Express, Prisma ORM
- **Banco de Dados:** MongoDB Atlas
- **Deploy:** Render (Web Service e Static Site)

---

## Estrutura do Projeto

```
FullStack-Project/
├── API/                # Backend Node.js/Express
│   ├── server.js
│   ├── package.json
│   ├── prisma/
│   └── ...
├── Front/
│   └── cadastro_usuarios/   # Frontend React
│       ├── src/
│       ├── package.json
│       └── ...
└── README.md
```

---

## Como rodar localmente

### Pré-requisitos

- Node.js 18+
- Conta no MongoDB Atlas (ou string de conexão MongoDB)

### 1. Backend (API) ⚙️

```bash
cd API
npm install
# Configure o arquivo .env com sua DATABASE_URL do MongoDB
npx prisma generate
npx prisma db push
npm start
```

### 2. Frontend (React) 🌐

```bash
cd Front/cadastro_usuarios
npm install
# Configure o arquivo .env com a URL da API:
# VITE_API_URL=http://localhost:3000
npm run dev
```

<img width="1317" height="919" alt="Image"  src="https://github.com/user-attachments/assets/188f503a-bd97-428d-a12c-9377484124d5" />


###Acesse o frontend ➡️  [Link](https://fullstack-project-1-teaa.onrender.com)

---

## Deploy na Render

### Backend (API)

1. Crie um novo Web Service na Render apontando para a pasta `API` do seu repositório.
2. Configure as variáveis de ambiente:
   - `DATABASE_URL` (string de conexão do MongoDB)
   - `FRONTEND_URL` (URL do frontend Render)
3. O comando de start deve ser: `npm start`

### Frontend (React)

1. Crie um novo Static Site na Render apontando para a pasta `Front/cadastro_usuarios`.
2. Configure a variável de ambiente:
   - `VITE_API_URL` (URL do backend Render)
3. O comando de build deve ser: `npm run build`
4. O diretório de publicação é: `dist`

---

## Funcionalidades

- Cadastro de usuários
- Listagem de usuários
- Atualização de usuários
- Remoção de usuários

---

## Scripts úteis

### Backend

- `npm start` — Inicia o servidor Express
- `npx prisma generate` — Gera o client Prisma
- `npx prisma db push` — Aplica o schema no banco
- `npx prisma studio` — Interface visual para o banco

### Frontend

- `npm run dev` — Inicia o servidor de desenvolvimento React
- `npm run build` — Gera build de produção

---

## Autor

Gabriel Rezende

---

## Licença

MIT
