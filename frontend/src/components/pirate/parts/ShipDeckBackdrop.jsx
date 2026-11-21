/** Cenário do convés do navio, com mastro, lampião, amurada e barril. */
export default function ShipDeckBackdrop() {
  return (
    <svg
      className="deck-backdrop-svg"
      viewBox="0 0 480 250"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="deckSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#071226" />
          <stop offset="100%" stopColor="#122b49" />
        </linearGradient>
        <linearGradient id="deckSea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d3b5c" />
          <stop offset="100%" stopColor="#072236" />
        </linearGradient>
        <linearGradient id="deckPlanks" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6b401d" />
          <stop offset="50%" stopColor="#522f13" />
          <stop offset="100%" stopColor="#351d0b" />
        </linearGradient>
        <radialGradient id="lanternHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fde047" stopOpacity="0.65" />
          <stop offset="55%" stopColor="#f59e0b" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Céu noturno, estrelas e lua */}
      <rect x="0" y="0" width="480" height="118" fill="url(#deckSky)" />
      <g opacity="0.8">
        <circle cx="54" cy="28" r="1.3" fill="#fff" />
        <circle cx="136" cy="20" r="1" fill="#fef08a" />
        <circle cx="218" cy="40" r="1.4" fill="#fff" />
        <circle cx="294" cy="24" r="1.1" fill="#e2e8f0" />
        <circle cx="352" cy="46" r="1.2" fill="#fff" />
      </g>
      <circle cx="426" cy="34" r="17" fill="#fef08a" opacity="0.92" />
      <circle cx="426" cy="34" r="26" fill="#fde047" opacity="0.18" />

      {/* Mar ao fundo atrás da amurada do navio */}
      <rect x="0" y="106" width="480" height="58" fill="url(#deckSea)" />
      <g className="deck-sea-wave">
        <path
          d="M 0 120 Q 30 114 60 120 T 120 120 T 180 120 T 240 120 T 300 120 T 360 120 T 420 120 T 480 120 T 540 120 T 600 120 T 660 120 T 720 120 T 780 120 T 840 120 T 900 120 T 960 120 L 960 165 L 0 165 Z"
          fill="#10496b"
          opacity="0.7"
        />
      </g>
      <g opacity="0.35">
        <rect x="408" y="114" width="36" height="2" rx="1" fill="#fef08a" />
        <rect x="414" y="121" width="24" height="2" rx="1" fill="#fef08a" />
      </g>

      {/* Cabos de corda e vela lateral ao fundo */}
      <line x1="68" y1="0" x2="18" y2="128" stroke="#3b2716" strokeWidth="2" opacity="0.85" />
      <line x1="68" y1="0" x2="118" y2="128" stroke="#3b2716" strokeWidth="1.8" opacity="0.8" />
      <line x1="454" y1="0" x2="412" y2="128" stroke="#3b2716" strokeWidth="1.8" opacity="0.75" />

      {/* Mastro principal à esquerda */}
      <rect x="46" y="0" width="22" height="168" fill="#43230c" stroke="#241205" strokeWidth="2" />
      <line x1="53" y1="0" x2="53" y2="168" stroke="#5c3314" strokeWidth="2" opacity="0.5" />

      {/* Suporte e lampião pirata aceso no mastro */}
      <path d="M 68 82 L 92 82 L 92 90" stroke="#292524" strokeWidth="3.5" fill="none" />
      <circle cx="92" cy="102" r="34" fill="url(#lanternHalo)" className="lantern-glow" />
      <g className="deck-lantern">
        <rect x="86" y="90" width="12" height="4" rx="1" fill="#44403c" />
        <rect x="87" y="94" width="10" height="14" rx="2" fill="#fef08a" stroke="#78350f" strokeWidth="1.5" />
        <ellipse cx="92" cy="101" rx="2.8" ry="4.2" fill="#ffffff" opacity="0.9" />
        <rect x="85" y="108" width="14" height="4" rx="1.5" fill="#44403c" />
      </g>

      {/* Amurada / Parapeito de madeira do convés */}
      <g>
        {/* Postes verticais da amurada */}
        <rect x="18" y="124" width="10" height="40" fill="#4a2810" stroke="#261306" strokeWidth="1.5" />
        <rect x="116" y="124" width="10" height="40" fill="#4a2810" stroke="#261306" strokeWidth="1.5" />
        <rect x="234" y="124" width="10" height="40" fill="#4a2810" stroke="#261306" strokeWidth="1.5" />
        <rect x="352" y="124" width="10" height="40" fill="#4a2810" stroke="#261306" strokeWidth="1.5" />
        <rect x="452" y="124" width="10" height="40" fill="#4a2810" stroke="#261306" strokeWidth="1.5" />

        {/* Travessa inferior e corrimão superior */}
        <rect x="0" y="144" width="480" height="16" fill="#573114" stroke="#261306" strokeWidth="1.5" />
        <rect x="0" y="120" width="480" height="10" fill="#73431e" stroke="#2b1507" strokeWidth="1.8" />
        <line x1="0" y1="122" x2="480" y2="122" stroke="#a66c36" strokeWidth="1.2" opacity="0.55" />
      </g>

      {/* Piso do convés com tábuas em perspectiva */}
      <rect x="0" y="160" width="480" height="90" fill="url(#deckPlanks)" />
      <line x1="0" y1="160" x2="480" y2="160" stroke="#241205" strokeWidth="2.5" />

      {/* Linhas horizontais e em perspectiva das tábuas do convés */}
      <g stroke="#291507" strokeWidth="1.6" opacity="0.82">
        <line x1="0" y1="176" x2="480" y2="176" />
        <line x1="0" y1="195" x2="480" y2="195" />
        <line x1="0" y1="218" x2="480" y2="218" />
        <line x1="0" y1="244" x2="480" y2="244" />

        {/* Juntas verticais em perspectiva */}
        <line x1="85" y1="160" x2="55" y2="250" />
        <line x1="165" y1="160" x2="150" y2="250" />
        <line x1="240" y1="160" x2="240" y2="250" />
        <line x1="315" y1="160" x2="330" y2="250" />
        <line x1="395" y1="160" x2="425" y2="250" />
      </g>

      {/* Barril pirata no canto direito do convés */}
      <g transform="translate(382, 132)">
        <ellipse cx="26" cy="52" rx="22" ry="7" fill="rgba(0,0,0,0.4)" />
        <path
          d="M 10 8 Q 4 28 10 50 L 42 50 Q 48 28 42 8 Z"
          fill="#633716"
          stroke="#291406"
          strokeWidth="1.8"
        />
        <ellipse cx="26" cy="8" rx="16" ry="5" fill="#7c471e" stroke="#291406" strokeWidth="1.6" />
        <path d="M 7 19 Q 26 23 45 19" stroke="#3f3f46" strokeWidth="3.2" fill="none" />
        <path d="M 7 39 Q 26 43 45 39" stroke="#3f3f46" strokeWidth="3.2" fill="none" />
      </g>

      {/* Corda enrolada no convés à esquerda */}
      <g transform="translate(88, 186)" opacity="0.9">
        <ellipse cx="22" cy="10" rx="22" ry="8" fill="none" stroke="#c2a06c" strokeWidth="3.2" />
        <ellipse cx="22" cy="10" rx="15" ry="5.5" fill="none" stroke="#a68452" strokeWidth="2.8" />
        <ellipse cx="22" cy="10" rx="8" ry="3" fill="none" stroke="#d4b581" strokeWidth="2.4" />
      </g>

      {/* Sombra da garrafa apoiada no convés */}
      <ellipse cx="240" cy="224" rx="30" ry="7" fill="rgba(18, 9, 3, 0.58)" />
    </svg>
  );
}
