import { useState, useCallback } from 'react';
import PirateAnimation from './components/pirate/PirateAnimation';
import './App.css';

const API_URL = 'http://localhost:3001/api';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [screen, setScreen] = useState(token ? 'encrypt' : 'login');
  const [feedback, setFeedback] = useState({ type: '', text: '' });

  // Auth
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Criptografia
  const [message, setMessage] = useState('');
  const [passo, setPasso] = useState('');
  const [pendingEncrypt, setPendingEncrypt] = useState(null);
  const [encryptResult, setEncryptResult] = useState(null);
  const [animatingMode, setAnimatingMode] = useState(null);

  // Descriptografia
  const [encryptedInput, setEncryptedInput] = useState('');
  const [hashInput, setHashInput] = useState('');
  const [pendingDecrypt, setPendingDecrypt] = useState('');
  const [decryptedResult, setDecryptedResult] = useState('');

  const clearFeedback = () => setFeedback({ type: '', text: '' });

  const copyText = (text, label) => {
    navigator.clipboard.writeText(text);
    setFeedback({ type: 'success', text: `${label} copiado para o diário de bordo!` });
  };

  const handleAnimationComplete = useCallback(() => {
    if (animatingMode === 'encrypt' && pendingEncrypt) {
      setEncryptResult(pendingEncrypt);
      setPendingEncrypt(null);
    }
    if (animatingMode === 'decrypt' && pendingDecrypt) {
      setDecryptedResult(pendingDecrypt);
      setPendingDecrypt('');
    }
    setAnimatingMode(null);
  }, [animatingMode, pendingEncrypt, pendingDecrypt]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    setScreen('login');
    setAnimatingMode(null);
    setEncryptResult(null);
    setDecryptedResult('');
    clearFeedback();
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    clearFeedback();
    try {
      const res = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) return setFeedback({ type: 'error', text: data.error });

      setFeedback({ type: 'success', text: 'Marujo alistado! Faça login para embarcar.' });
      setScreen('login');
    } catch {
      setFeedback({ type: 'error', text: 'Não foi possível conectar ao servidor. Verifique se o backend está rodando na porta 3001.' });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    clearFeedback();
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) return setFeedback({ type: 'error', text: data.error });

      localStorage.setItem('token', data.token);
      setToken(data.token);
      setScreen('encrypt');
    } catch {
      setFeedback({ type: 'error', text: 'Não foi possível conectar ao servidor. Verifique se o backend está rodando na porta 3001.' });
    }
  };

  const handleEncrypt = async (e) => {
    e.preventDefault();
    clearFeedback();
    setEncryptResult(null);

    try {
      const res = await fetch(`${API_URL}/encrypt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ message, passo }),
      });
      const data = await res.json();

      if (res.status === 401) {
        handleLogout();
        return setFeedback({ type: 'error', text: data.error || 'Sessão expirada. Faça login novamente.' });
      }
      if (!res.ok) return setFeedback({ type: 'error', text: data.error });

      setPendingEncrypt(data);
      setAnimatingMode('encrypt');
    } catch {
      setFeedback({ type: 'error', text: 'Erro de conexão com o backend (porta 3001).' });
    }
  };

  const handleDecrypt = async (e) => {
    e.preventDefault();
    clearFeedback();
    setDecryptedResult('');

    try {
      const res = await fetch(`${API_URL}/decrypt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ encryptedMessage: encryptedInput, hash: hashInput }),
      });
      const data = await res.json();

      if (res.status === 401) {
        handleLogout();
        return setFeedback({ type: 'error', text: data.error || 'Sessão expirada. Faça login novamente.' });
      }
      if (!res.ok) return setFeedback({ type: 'error', text: `☠️ ${data.error}` });

      setPendingDecrypt(data.decryptedMessage);
      setAnimatingMode('decrypt');
    } catch {
      setFeedback({ type: 'error', text: 'Erro de conexão com o backend (porta 3001).' });
    }
  };

  return (
    <div className="container">
      <header>
        <div className="badge">🏴‍☠️ Cifra dos Sete Mares</div>
        <h1>Tesouro de César</h1>
        {token && (
          <nav>
            <button
              onClick={() => { setScreen('encrypt'); setAnimatingMode(null); clearFeedback(); }}
              className={screen === 'encrypt' ? 'active' : ''}
            >
              🔒 Trancar no Baú
            </button>
            <button
              onClick={() => { setScreen('decrypt'); setAnimatingMode(null); clearFeedback(); }}
              className={screen === 'decrypt' ? 'active' : ''}
            >
              🗝️ Abrir Baú
            </button>
            <button onClick={handleLogout} className="logout">Abandonar Navio</button>
          </nav>
        )}
      </header>

      {feedback.text && <div key={feedback.text} className={`alert ${feedback.type}`}>{feedback.text}</div>}

      {/* TELA 1: LOGIN */}
      {screen === 'login' && (
        <form onSubmit={handleLogin} className="card">
          <h2>⚓ Acesso ao Convés</h2>
          <input
            type="text"
            placeholder="Nome do Pirata (usuário)"
            value={username}
            onChange={(e) => { setUsername(e.target.value); clearFeedback(); }}
            required
          />
          <input
            type="password"
            placeholder="Senha Secreta"
            value={password}
            onChange={(e) => { setPassword(e.target.value); clearFeedback(); }}
            required
          />
          <button type="submit">Subir a Bordo</button>
          <p className="switch">
            Novo na tripulação? <span onClick={() => { setScreen('register'); clearFeedback(); }}>Alistar-se</span>
          </p>
        </form>
      )}

      {/* TELA 2: CADASTRO */}
      {screen === 'register' && (
        <form onSubmit={handleRegister} className="card">
          <h2>📜 Alistar Novo Marujo</h2>
          <input
            type="text"
            placeholder="Escolha seu apelido pirata"
            value={username}
            onChange={(e) => { setUsername(e.target.value); clearFeedback(); }}
            required
          />
          <input
            type="password"
            placeholder="Crie sua senha secreta"
            value={password}
            onChange={(e) => { setPassword(e.target.value); clearFeedback(); }}
            required
          />
          <button type="submit">Assinar com Tinta</button>
          <p className="switch">
            Já é da tripulação? <span onClick={() => { setScreen('login'); clearFeedback(); }}>Fazer Login</span>
          </p>
        </form>
      )}

      {/* TELA 3: CRIPTOGRAFAR */}
      {screen === 'encrypt' && (
        <div className="card">
          <h2>🔒 Esconder Mensagem no Baú</h2>
          <form onSubmit={handleEncrypt}>
            <textarea
              placeholder="Escreva o segredo do mapa (a-z, A-Z, 0-9)..."
              value={message}
              onChange={(e) => { setMessage(e.target.value); setEncryptResult(null); clearFeedback(); }}
              required
            />
            <input
              type="number"
              placeholder="Passo da Cifra (ex: 3 ou -5)"
              value={passo}
              onChange={(e) => { setPasso(e.target.value); setEncryptResult(null); clearFeedback(); }}
              required
            />
            <button type="submit" disabled={animatingMode === 'encrypt'}>
              {animatingMode === 'encrypt' ? 'Enviando garrafa ao mar...' : 'Trancar no Baú e Lançar Chave'}
            </button>
          </form>

          {animatingMode === 'encrypt' && (
            <PirateAnimation mode="encrypt" onComplete={handleAnimationComplete} />
          )}

          {encryptResult && !animatingMode && (
            <div className="result-box parchment-result">
              <div className="result-header">
                <strong>📜 Mensagem Criptografada (no Baú):</strong>
                <button type="button" className="copy-btn" onClick={() => copyText(encryptResult.encryptedMessage, 'Mensagem')}>
                  Copiar
                </button>
              </div>
              <code>{encryptResult.encryptedMessage}</code>

              <div className="result-header">
                <strong>🍾 Chave na Garrafa (Hash - uso único):</strong>
                <button type="button" className="copy-btn" onClick={() => copyText(encryptResult.hash, 'Hash')}>
                  Copiar
                </button>
              </div>
              <code>{encryptResult.hash}</code>
            </div>
          )}
        </div>
      )}

      {/* TELA 4: DESCRIPTOGRAFAR */}
      {screen === 'decrypt' && (
        <div className="card">
          <h2>🗝️ Resgatar Garrafa e Abrir Baú</h2>
          <form onSubmit={handleDecrypt}>
            <textarea
              placeholder="Cole a mensagem criptografada..."
              value={encryptedInput}
              onChange={(e) => { setEncryptedInput(e.target.value); setDecryptedResult(''); clearFeedback(); }}
              required
            />
            <input
              type="text"
              placeholder="Insira o hash encontrado na garrafa"
              value={hashInput}
              onChange={(e) => { setHashInput(e.target.value); setDecryptedResult(''); clearFeedback(); }}
              required
            />
            <button type="submit" disabled={animatingMode === 'decrypt'}>
              {animatingMode === 'decrypt' ? 'Destrancando o baú...' : 'Usar Chave e Abrir Baú'}
            </button>
          </form>

          {animatingMode === 'decrypt' && (
            <PirateAnimation mode="decrypt" onComplete={handleAnimationComplete} />
          )}

          {decryptedResult && !animatingMode && (
            <div className="result-box parchment-result">
              <div className="result-header">
                <strong>✨ Segredo Revelado (Texto Claro):</strong>
                <button type="button" className="copy-btn" onClick={() => copyText(decryptedResult, 'Texto claro')}>
                  Copiar
                </button>
              </div>
              <code>{decryptedResult}</code>
            </div>
          )}
        </div>
      )}
    </div>
  );
}