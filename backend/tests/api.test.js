// Testes das rotas da API (cadastro, login, criptografar e descriptografar).
// Rodar com: npm test

// Configuração só para os testes: banco em memória e uma chave de teste.
// Precisa vir ANTES de importar o app.
process.env.DB_STORAGE = ':memory:';
process.env.JWT_SECRET = 'chave-usada-somente-nos-testes-automatizados';

const test = require('node:test');
const assert = require('node:assert');
const app = require('../src/server');
const sequelize = require('../src/database');
const CipherKey = require('../src/models/CipherKey');

let servidor;
let url;
let token;

// Função de ajuda: faz um POST em JSON e devolve { status, body }
async function post(rota, dados, comToken = true) {
  const headers = { 'Content-Type': 'application/json' };
  if (comToken) headers.Authorization = `Bearer ${token}`;

  const resposta = await fetch(url + rota, {
    method: 'POST',
    headers,
    body: JSON.stringify(dados),
  });
  return { status: resposta.status, body: await resposta.json() };
}

// Antes de tudo: cria as tabelas e liga o servidor numa porta livre
test.before(async () => {
  await sequelize.sync();
  servidor = app.listen(0);
  url = `http://localhost:${servidor.address().port}/api`;
});

test.after(async () => {
  servidor.close();
  await sequelize.close();
});

test('cadastra um usuário novo', async () => {
  const r = await post('/register', { username: 'jack', password: 'perola123' }, false);
  assert.strictEqual(r.status, 201);
});

test('não deixa cadastrar o mesmo usuário duas vezes', async () => {
  const r = await post('/register', { username: 'jack', password: 'outra' }, false);
  assert.strictEqual(r.status, 409);
});

test('recusa login com senha errada', async () => {
  const r = await post('/login', { username: 'jack', password: 'errada' }, false);
  assert.strictEqual(r.status, 401);
});

test('faz login e recebe um token JWT', async () => {
  const r = await post('/login', { username: 'jack', password: 'perola123' }, false);
  assert.strictEqual(r.status, 200);
  assert.ok(r.body.token);
  token = r.body.token;
});

test('rotas protegidas recusam pedidos sem token', async () => {
  const r = await post('/encrypt', { message: 'oi', passo: 1 }, false);
  assert.strictEqual(r.status, 401);
});

test('criptografa e salva o hash no banco como "não usado"', async () => {
  const r = await post('/encrypt', { message: 'Tesouro na ilha', passo: 5 });
  assert.strictEqual(r.status, 200);

  // o hash usa só letras e números
  assert.match(r.body.hash, /^[a-z0-9]+$/);

  const registro = await CipherKey.findOne({ where: { hash: r.body.hash } });
  assert.strictEqual(registro.passo, 5);
  assert.strictEqual(registro.usado, false);
});

test('descriptografa uma vez e depois recusa o mesmo hash', async () => {
  const cifrado = await post('/encrypt', { message: 'Mapa secreto', passo: -4 });
  const dados = { encryptedMessage: cifrado.body.encryptedMessage, hash: cifrado.body.hash };

  const primeiraVez = await post('/decrypt', dados);
  assert.strictEqual(primeiraVez.status, 200);
  assert.strictEqual(primeiraVez.body.decryptedMessage, 'Mapa secreto');

  const segundaVez = await post('/decrypt', dados);
  assert.strictEqual(segundaVez.status, 403);
});

test('recusa um hash que não existe', async () => {
  const r = await post('/decrypt', { encryptedMessage: 'abc', hash: 'naoexiste' });
  assert.strictEqual(r.status, 404);
});

test('mesmo com 5 pedidos ao mesmo tempo, o hash só funciona uma vez', async () => {
  const cifrado = await post('/encrypt', { message: 'Uso unico', passo: 2 });
  const dados = { encryptedMessage: cifrado.body.encryptedMessage, hash: cifrado.body.hash };

  // dispara 5 descriptografias juntas, sem esperar uma terminar
  const respostas = await Promise.all([1, 2, 3, 4, 5].map(() => post('/decrypt', dados)));
  const deramCerto = respostas.filter((r) => r.status === 200);

  assert.strictEqual(deramCerto.length, 1);
});
