/** Pilha de moedas de ouro e joias dentro do baú. */
export default function GoldPile() {
  return (
    <svg
      className="chest-gold-pile"
      viewBox="0 0 112 30"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="goldCoinLight" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#fef9c3" />
          <stop offset="55%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#a16207" />
        </radialGradient>
        <linearGradient id="goldMound" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#facc15" />
          <stop offset="60%" stopColor="#ca8a04" />
          <stop offset="100%" stopColor="#713f12" />
        </linearGradient>
      </defs>

      {/* Base da pilha de ouro */}
      <path
        d="M 4 29 Q 18 11 38 14 Q 56 3 76 13 Q 95 10 108 29 Z"
        fill="url(#goldMound)"
      />

      {/* Fileira traseira de moedas */}
      <ellipse cx="22" cy="18" rx="8" ry="4.2" fill="url(#goldCoinLight)" stroke="#854d0e" strokeWidth="0.8" />
      <ellipse cx="38" cy="15" rx="8.5" ry="4.4" fill="url(#goldCoinLight)" stroke="#854d0e" strokeWidth="0.8" />
      <ellipse cx="56" cy="11" rx="9" ry="4.6" fill="url(#goldCoinLight)" stroke="#854d0e" strokeWidth="0.8" />
      <ellipse cx="74" cy="14" rx="8.5" ry="4.4" fill="url(#goldCoinLight)" stroke="#854d0e" strokeWidth="0.8" />
      <ellipse cx="90" cy="18" rx="8" ry="4.2" fill="url(#goldCoinLight)" stroke="#854d0e" strokeWidth="0.8" />

      {/* Fileira do meio de moedas */}
      <ellipse cx="15" cy="23" rx="8" ry="4.3" fill="url(#goldCoinLight)" stroke="#854d0e" strokeWidth="0.8" />
      <ellipse cx="31" cy="21" rx="8.5" ry="4.5" fill="url(#goldCoinLight)" stroke="#854d0e" strokeWidth="0.8" />
      <ellipse cx="48" cy="18" rx="8.5" ry="4.5" fill="url(#goldCoinLight)" stroke="#854d0e" strokeWidth="0.8" />
      <ellipse cx="65" cy="19" rx="8.5" ry="4.5" fill="url(#goldCoinLight)" stroke="#854d0e" strokeWidth="0.8" />
      <ellipse cx="82" cy="21" rx="8.5" ry="4.5" fill="url(#goldCoinLight)" stroke="#854d0e" strokeWidth="0.8" />
      <ellipse cx="97" cy="23" rx="8" ry="4.3" fill="url(#goldCoinLight)" stroke="#854d0e" strokeWidth="0.8" />

      {/* Fileira frontal de moedas */}
      <ellipse cx="24" cy="26" rx="8" ry="4" fill="url(#goldCoinLight)" stroke="#713f12" strokeWidth="0.8" />
      <ellipse cx="42" cy="25" rx="8.5" ry="4.2" fill="url(#goldCoinLight)" stroke="#713f12" strokeWidth="0.8" />
      <ellipse cx="58" cy="24" rx="8.5" ry="4.2" fill="url(#goldCoinLight)" stroke="#713f12" strokeWidth="0.8" />
      <ellipse cx="75" cy="25" rx="8.5" ry="4.2" fill="url(#goldCoinLight)" stroke="#713f12" strokeWidth="0.8" />
      <ellipse cx="90" cy="26" rx="8" ry="4" fill="url(#goldCoinLight)" stroke="#713f12" strokeWidth="0.8" />

      {/* Pequenas joias no meio do tesouro */}
      <polygon points="35,19 39,15 43,19 39,23" fill="#ef4444" stroke="#7f1d1d" strokeWidth="0.7" />
      <polygon points="71,20 75,16 79,20 75,24" fill="#10b981" stroke="#064e3b" strokeWidth="0.7" />

      {/* Brilhos cintilantes no ouro */}
      <path className="gold-sparkle sparkle-1" d="M 56 4 L 57.4 7.6 L 61 9 L 57.4 10.4 L 56 14 L 54.6 10.4 L 51 9 L 54.6 7.6 Z" fill="#fef9c3" />
      <path className="gold-sparkle sparkle-2" d="M 27 12 L 28 14.5 L 30.5 15.5 L 28 16.5 L 27 19 L 26 16.5 L 23.5 15.5 L 26 14.5 Z" fill="#ffffff" />
      <path className="gold-sparkle sparkle-3" d="M 85 11 L 86 13.5 L 88.5 14.5 L 86 15.5 L 85 18 L 84 15.5 L 81.5 14.5 L 84 13.5 Z" fill="#fef08a" />
    </svg>
  );
}
