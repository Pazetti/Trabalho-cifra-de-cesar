// Testes da função da Cifra de César.
// Rodar com: npm test
const test = require('node:test');
const assert = require('node:assert');
const { caesarCipher } = require('../src/utils/caesar');

test('desloca letras para frente com passo positivo', () => {
  assert.strictEqual(caesarCipher('abc', 3), 'def');
});

test('desloca para trás com passo negativo', () => {
  assert.strictEqual(caesarCipher('def', -3), 'abc');
});

test('dá a volta no alfabeto (a-z, A-Z, 0-9 = 62 caracteres)', () => {
  // depois do '9' (último caractere) volta para o 'a'
  assert.strictEqual(caesarCipher('9', 1), 'a');
  // passo 62 dá uma volta completa: fica igual
  assert.strictEqual(caesarCipher('Teste123', 62), 'Teste123');
});

test('mantém espaços e pontuação como estão', () => {
  assert.strictEqual(caesarCipher('a b!', 1), 'b c!');
});

test('criptografar e depois descriptografar devolve o texto original', () => {
  const original = 'Ataque as 9h no Porto 42';
  const cifrado = caesarCipher(original, 17);
  assert.notStrictEqual(cifrado, original);
  assert.strictEqual(caesarCipher(cifrado, -17), original);
});
