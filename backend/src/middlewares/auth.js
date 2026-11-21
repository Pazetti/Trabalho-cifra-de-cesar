const jwt = require('jsonwebtoken');

// A chave do JWT fica no arquivo .env (que NÃO vai para o GitHub).
// Se alguém pegar a chave, consegue criar tokens falsos, por isso ela não fica no código.
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET || JWT_SECRET.length < 32) {
  console.error('Erro: defina JWT_SECRET no arquivo backend/.env (mínimo 32 caracteres).');
  console.error('Dica: copie o arquivo .env.example para .env e troque o valor da chave.');
  process.exit(1);
}

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Token não fornecido.' });
  }

  const [, token] = authHeader.split(' ');
  if (!token) {
    return res.status(401).json({ error: 'Formato de token inválido.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    return next();
  } catch {
    return res.status(401).json({ error: 'Token inválido ou expirado. Faça login novamente.' });
  }
}

module.exports = { authMiddleware, JWT_SECRET };
