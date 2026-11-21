# 🏴‍☠️ Tesouro de César: Cifra de César com tema pirata

Sistema web que criptografa e descriptografa mensagens com a **Cifra de César**.
Cada criptografia gera um **hash de uso único** (a "chave na garrafa") que fica salvo no banco.

- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Banco de dados:** SQLite (via Sequelize)
- **Autenticação:** JWT + senhas com hash bcrypt

---

## 🚀 Como executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) **20.12 ou superior** (usamos `process.loadEnvFile`, nativo do Node).

### Passo 1: Configurar o backend
```bash
cd backend
npm install
```
Crie o arquivo `backend/.env` copiando o exemplo:
```bash
cp .env.example .env
```
Abra o `.env` e troque o valor de `JWT_SECRET` por uma chave aleatória (mínimo 32 caracteres).
Para gerar uma:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
> Sem o `.env` o servidor **não sobe** e mostra uma mensagem explicando o que fazer.
> O `.env` não vai para o GitHub (está no `.gitignore`), porque quem tiver a chave consegue criar tokens falsos.

### Passo 2: Iniciar o backend (Terminal 1)
```bash
npm start
```
Você verá `Backend rodando em http://localhost:3001`. O banco `database.sqlite` é criado automaticamente.

### Passo 3: Iniciar o frontend (Terminal 2)
```bash
cd frontend
npm install
npm run dev
```
Acesse o link exibido no terminal (geralmente `http://localhost:5173`).

---

## 🧪 Testes automatizados
```bash
cd backend
npm test
```
Os testes usam o `node:test` (já vem com o Node) e um banco **em memória**, então não mexem no `database.sqlite`.

| Arquivo | O que testa |
|---|---|
| `tests/caesar.test.js` | Passo positivo e negativo, volta no alfabeto, espaços e pontuação, ida e volta |
| `tests/api.test.js` | Cadastro, login, rota sem token, hash salvo como "não usado", uso único, hash inexistente e 5 pedidos simultâneos com o mesmo hash |

---

## ✅ Onde cada requisito está

| Requisito | Onde |
|---|---|
| Telas de Login, Cadastro, Criptografar e Descriptografar | `frontend/src/App.jsx` |
| Login validado no banco (senha com hash bcrypt) | `backend/src/server.js`, rota `/api/login` |
| JWT protegendo as rotas | `backend/src/middlewares/auth.js` |
| Campos de mensagem e passo (positivo ou negativo) | Tela "Trancar no Baú" |
| Cifra com a-z, A-Z e 0-9 | `backend/src/utils/caesar.js` |
| Hash exibido após criptografar e salvo com o passo | Rota `/api/encrypt` + tabela `CipherKeys` |
| Coluna `usado` (true/false) | `backend/src/models/CipherKey.js` |
| Hash de uso único | Rota `/api/decrypt`: um único `UPDATE ... WHERE usado = false` |
| Erro para hash inválido ou já usado | Rota `/api/decrypt` (404 e 403) |

### Sobre o JWT: autenticidade, integridade e confidencialidade
- **Autenticidade e integridade:** o token é **assinado** com a chave `JWT_SECRET` (algoritmo HS256).
  Se alguém alterar qualquer parte do token, a assinatura não bate e o servidor recusa.
  Só quem tem a chave consegue gerar um token válido.
- **Confidencialidade:** o conteúdo de um JWT assinado pode ser lido por qualquer um (é só base64).
  Por isso o token guarda **apenas o id e o nome do usuário**, nunca a senha ou outros dados sensíveis.
  Para esconder também o tráfego, o sistema deve rodar com **HTTPS** em produção.
  O token também **expira em 2 horas**, o que limita o estrago se ele vazar.

---

## 🧭 Fluxo sugerido para testar na interface
1. Acesse **Alistar-se** (Cadastro) e crie um usuário e senha.
2. Faça **Login** (o token JWT é guardado e enviado automaticamente no cabeçalho `Authorization`).
3. Em **Trancar no Baú** (Criptografar), digite uma mensagem e um passo (ex: `3` ou `-5`).
4. Assista à animação e copie a **Mensagem Criptografada** e o **Hash**.
5. Vá em **Abrir Baú** (Descriptografar), cole a mensagem e o hash para revelar o texto original.
6. Tente de novo com o **mesmo hash**: o sistema recusa, porque ele é de uso único.
