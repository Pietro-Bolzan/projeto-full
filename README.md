# Projeto Fullstack - Cadastro de Usuários

Este projeto é uma aplicação Fullstack composta por uma API (Node.js/Express) e um Frontend (React/Vite), utilizando Prisma ORM e MongoDB.

.....
## 🚀 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (v18 ou superior)
- [Git](https://git-scm.com/)
- Uma string de conexão com o MongoDB (Atlas ou Local)

.....
## 🛠️ Instalação e Configuração

Siga os passos abaixo para rodar o projeto localmente.

.....
### 1. Configurando o Backend (API)

Abra o terminal na pasta raiz do projeto e entre na pasta da API:

cd api
npm install

.....
### 2. Configuração de Variáveis de Ambiente:

Crie um arquivo chamado .env dentro da pasta api. O conteúdo deve seguir o modelo abaixo:

DATABASE_URL="mongodb+srv://SEU_USUARIO:SUA_SENHA@cluster.mongodb.net/SEU_BANCO"
PORT=3000

.....
### 3. Gere o cliente do Prisma e inicie o servidor:

npx prisma generate
npm run dev

.....
### 4. Configurando o Frontend (Web)

Abra um novo terminal (mantenha o da API rodando), volte à raiz do projeto e entre na pasta web:

cd web
npm install


Inicie a aplicação React:

npm run dev

O terminal mostrará o link local para acessar a aplicação.

.....
## 📂 Estrutura do Projeto:

api/ - Código do servidor Backend (Node.js + Express + Prisma).
web/ - Código do Frontend (React + Vite).

.....
## 💻 Tecnologias Utilizadas:

- Frontend: React, Vite, CSS
- Backend: Node.js, Express
- Banco de Dados: MongoDB
- ORM: Prisma

```bash
