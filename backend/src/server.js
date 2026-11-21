const path = require('path');

// Carrega as variáveis do arquivo backend/.env (recurso nativo do Node 20.12+)
try {
  process.loadEnvFile(path.join(__dirname, '..', '.env'));
} catch {
  // Sem .env: segue com as variáveis do sistema (o auth.js avisa se faltar a chave)
}

const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const sequelize = require('./database');
const User = require('./models/User');
const CipherKey = require('./models/CipherKey');
const { caesarCipher } = require('./utils/caesar');
const { authMiddleware, JWT_SECRET } = require('./middlewares/auth');

const app = express();
app.use(cors());
app.use(express.json());

// 1. Cadastro de Usuário
app.post('/api/register', async (req, res) => {
  try {
    const username = req.body.username?.trim();
    const password = req.body.password;

    if (!username || !password) {
      return res.status(400).json({ error: 'Informe usuário e senha.' });
    }

    const exists = await User.findOne({ where: { username } });
    if (exists) {
      return res.status(409).json({ error: 'Usuário já cadastrado.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, password: hashedPassword });

    return res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
  } catch (err) {
    return res.status(500).json({ error: 'Erro interno ao cadastrar usuário.' });
  }
});

// 2. Login com JWT
app.post('/api/login', async (req, res) => {
  try {
    const username = req.body.username?.trim();
    const password = req.body.password;

    if (!username || !password) {
      return res.status(400).json({ error: 'Informe usuário e senha.' });
    }

    const user = await User.findOne({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Usuário ou senha inválidos.' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
      expiresIn: '2h',
    });

    return res.json({ token, username: user.username });
  } catch (err) {
    return res.status(500).json({ error: 'Erro interno no login.' });
  }
});

// 3. Criptografar (Rota Protegida por JWT)
app.post('/api/encrypt', authMiddleware, async (req, res) => {
  try {
    const { message, passo } = req.body;
    const shift = parseInt(passo, 10);

    if (!message || Number.isNaN(shift)) {
      return res.status(400).json({ error: 'Informe a mensagem e um passo numérico válido.' });
    }

    const encryptedMessage = caesarCipher(message, shift);
    // Gera um hash único alfanumérico (chave privada)
    const hash = crypto.randomBytes(16).toString('hex');

    await CipherKey.create({ hash, passo: shift, usado: false });

    return res.json({ encryptedMessage, hash });
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao criptografar mensagem.' });
  }
});

// 4. Descriptografar (Rota Protegida por JWT + Uso Único do Hash)
app.post('/api/decrypt', authMiddleware, async (req, res) => {
  try {
    const encryptedMessage = req.body.encryptedMessage;
    const hash = req.body.hash?.trim();

    if (!encryptedMessage || !hash) {
      return res.status(400).json({ error: 'Informe a mensagem criptografada e o hash.' });
    }

    // Uso único: marca o hash como usado SÓ SE ele ainda não foi usado.
    // É um único comando no banco (UPDATE ... WHERE hash = ? AND usado = false),
    // então dois pedidos ao mesmo tempo não conseguem usar o mesmo hash.
    const [linhasAlteradas] = await CipherKey.update(
      { usado: true },
      { where: { hash, usado: false } }
    );

    if (linhasAlteradas === 0) {
      // Nada foi alterado: ou o hash não existe, ou já tinha sido usado
      const existe = await CipherKey.findOne({ where: { hash } });
      if (!existe) {
        return res.status(404).json({ error: 'Hash inválido ou não encontrado.' });
      }
      return res.status(403).json({ error: 'Este hash já foi utilizado e não é mais válido.' });
    }

    // Descriptografa aplicando o passo invertido
    const keyRecord = await CipherKey.findOne({ where: { hash } });
    const decryptedMessage = caesarCipher(encryptedMessage, -keyRecord.passo);

    return res.json({ decryptedMessage });
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao descriptografar mensagem.' });
  }
});

// Só liga o servidor quando rodamos "npm start".
// Nos testes o arquivo é importado (require) e o próprio teste liga o app.
if (require.main === module) {
  const PORT = process.env.PORT || 3001;

  sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`Backend rodando em http://localhost:${PORT}`);
    });
  });
}

module.exports = app;
