import { useEffect, useState } from 'react';
import './PirateAnimation.css';

function TreasureChest({ state, children }) {
  return (
    <div className={`chest-3d chest-${state}`}>
      <div className="chest-shadow" />

      {/* Abertura interna ("boca do baú") */}
      <div className="chest-cavity">
        <div className="cavity-back-wall" />
        <div className="cavity-floor" />
        <div className="chest-hinges">
          <span className="hinge" />
          <span className="hinge" />
        </div>
      </div>

      {/* Pilha de moedas de ouro dentro do baú */}
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

      {/* Brilho interno (usado na abertura) */}
      <div className="chest-glow" />

      {/* Tampa articulada em 3D */}
      <div className="chest-lid-pivot">
        <div className="lid-face lid-inside">
          <div className="lid-ribs">
            <span className="lid-rib" />
            <span className="lid-rib" />
            <span className="lid-rib" />
          </div>
        </div>

        <div className="lid-face lid-outside">
          <div className="lid-strap lid-strap-left" />
          <div className="lid-strap lid-strap-right" />
          <div className="lid-clasp" />
        </div>
      </div>

      {children}

      {/* Parede frontal do baú */}
      <div className="chest-front">
        <div className="front-strap front-strap-left" />
        <div className="front-strap front-strap-right" />
        <div className="chest-lock-plate">
          <div className="keyhole" />
        </div>
      </div>
    </div>
  );
}

function BeachBackdrop() {
  return (
    <>
      <div className="sky-stars" />
      <div className="moon" />
      <div className="sea-horizon">
        <div className="sea-shimmer" />
      </div>
      <div className="shore-foam" />
      <div className="sand-beach" />

      {/* Coqueiro na lateral esquerda da praia */}
      <svg className="palm-tree" viewBox="0 0 120 160" aria-hidden="true">
        <path
          d="M28 158 Q36 105 56 58"
          stroke="#2c1a0e"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        <g className="palm-fronds">
          <path d="M56 58 Q28 40 8 54 Q30 50 56 58 Z" fill="#183825" />
          <path d="M56 58 Q30 22 14 26 Q35 36 56 58 Z" fill="#1f4930" />
          <path d="M56 58 Q62 20 88 22 Q70 36 56 58 Z" fill="#1f4930" />
          <path d="M56 58 Q86 34 110 48 Q84 48 56 58 Z" fill="#183825" />
          <path d="M56 58 Q82 56 100 76 Q78 64 56 58 Z" fill="#143020" />
          <circle cx="52" cy="63" r="4.5" fill="#4a2c12" />
          <circle cx="59" cy="64" r="4.5" fill="#3a210d" />
        </g>
      </svg>
    </>
  );
}

function ShipDeckBackdrop() {
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

function SeaVoyageScene() {
  return (
    <svg
      className="sea-voyage-svg"
      viewBox="0 0 480 250"
      preserveAspectRatio="xMidYMid slice"
      aria-label="Navio pirata navegando e pescando a garrafa com arpão"
    >
      <defs>
        <linearGradient id="oceanDeep" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f3d5e" />
          <stop offset="55%" stopColor="#0a2b45" />
          <stop offset="100%" stopColor="#06192a" />
        </linearGradient>
        <linearGradient id="hullWood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7a461e" />
          <stop offset="55%" stopColor="#522c10" />
          <stop offset="100%" stopColor="#2e1607" />
        </linearGradient>
        <linearGradient id="sailCream" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5e9cf" />
          <stop offset="100%" stopColor="#cbb68e" />
        </linearGradient>
      </defs>

      {/* Estrelas e lua */}
      <g opacity="0.8">
        <circle cx="46" cy="36" r="1.3" fill="#ffffff" />
        <circle cx="118" cy="24" r="1" fill="#fef08a" />
        <circle cx="186" cy="48" r="1.4" fill="#ffffff" />
        <circle cx="256" cy="28" r="1.1" fill="#e2e8f0" />
        <circle cx="318" cy="40" r="1.2" fill="#ffffff" />
        <circle cx="84" cy="72" r="1" fill="#cbd5e1" />
      </g>
      <circle cx="430" cy="34" r="18" fill="#fef08a" opacity="0.92" />
      <circle cx="430" cy="34" r="26" fill="#fde047" opacity="0.2" />

      {/* Base do oceano */}
      <rect x="0" y="148" width="480" height="102" fill="url(#oceanDeep)" />

      {/* Reflexo da lua no mar */}
      <g className="moon-reflection" opacity="0.32">
        <rect x="412" y="154" width="34" height="2.5" rx="1.2" fill="#fef08a" />
        <rect x="417" y="162" width="26" height="2" rx="1" fill="#fef08a" />
        <rect x="421" y="170" width="18" height="2" rx="1" fill="#fef08a" />
      </g>

      {/* Onda traseira */}
      <g className="svg-wave-back">
        <path
          d="M 0 156 Q 30 147 60 156 T 120 156 T 180 156 T 240 156 T 300 156 T 360 156 T 420 156 T 480 156 T 540 156 T 600 156 T 660 156 T 720 156 T 780 156 T 840 156 T 900 156 T 960 156 L 960 250 L 0 250 Z"
          fill="#124e70"
          opacity="0.72"
        />
      </g>

      {/* NAVIO PIRATA */}
      <g className="pirate-ship-sailing">
        <line
          x1="312"
          y1="154"
          x2="274"
          y2="136"
          stroke="#4a2810"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <rect x="330" y="92" width="5" height="66" fill="#3d200c" />
        <rect x="364" y="64" width="6" height="94" fill="#3d200c" />
        <rect x="398" y="102" width="4.5" height="52" fill="#3d200c" />
        <line x1="316" y1="104" x2="348" y2="104" stroke="#4a2810" strokeWidth="3" />
        <line x1="344" y1="84" x2="390" y2="84" stroke="#4a2810" strokeWidth="3.5" />

        <path
          d="M 320 105 Q 304 123 316 144 L 344 142 Q 334 124 345 105 Z"
          fill="url(#sailCream)"
          stroke="#9c8660"
          strokeWidth="1"
        />
        <path
          d="M 347 85 Q 326 112 342 146 L 386 144 Q 372 114 387 85 Z"
          fill="url(#sailCream)"
          stroke="#9c8660"
          strokeWidth="1.2"
        />
        <path
          d="M 398 106 Q 385 122 392 140 L 414 138 Q 408 122 414 108 Z"
          fill="#e2d1b3"
          stroke="#9c8660"
          strokeWidth="1"
        />

        <g className="pirate-flag-wave">
          <path d="M 365 65 L 336 69 L 341 75 L 336 81 L 365 78 Z" fill="#111827" />
          <circle cx="351" cy="72.5" r="2.2" fill="#f8fafc" />
          <line x1="348" y1="76" x2="354" y2="74" stroke="#f8fafc" strokeWidth="1" />
          <line x1="348" y1="74" x2="354" y2="76" stroke="#f8fafc" strokeWidth="1" />
        </g>

        <path
          d="M 304 152 L 320 156 L 392 154 L 404 142 L 434 142 L 424 198 L 322 198 Q 308 182 304 152 Z"
          fill="url(#hullWood)"
          stroke="#2b1406"
          strokeWidth="2"
        />

        <path d="M 308 162 L 430 156" stroke="#d4af37" strokeWidth="2.2" fill="none" />
        <circle cx="334" cy="170" r="3.2" fill="#fde047" stroke="#422006" strokeWidth="1.2" />
        <circle cx="356" cy="170" r="3.2" fill="#fde047" stroke="#422006" strokeWidth="1.2" />
        <circle cx="378" cy="170" r="3.2" fill="#fde047" stroke="#422006" strokeWidth="1.2" />
        <circle cx="408" cy="153" r="3" fill="#fef08a" stroke="#422006" strokeWidth="1.2" />
        <circle cx="420" cy="153" r="3" fill="#fef08a" stroke="#422006" strokeWidth="1.2" />

        <rect x="303" y="146" width="11" height="6" rx="2" fill="#57534e" stroke="#1c1917" strokeWidth="1" />
      </g>

      {/* GARRAFA BOIANDO NO MAR E SENDO PUXADA PELO ARPÃO */}
      <g transform="translate(108, 178)">
        <g className="sea-bottle-reel">
          <g className="sea-bottle-bob">
            <rect x="-3.5" y="-23" width="7" height="5" rx="1" fill="#b45309" />
            <rect
              x="-4.5"
              y="-18"
              width="9"
              height="8"
              rx="1.5"
              fill="rgba(186, 230, 253, 0.4)"
              stroke="#e0f2fe"
              strokeWidth="1.4"
            />
            <rect
              x="-10"
              y="-10"
              width="20"
              height="25"
              rx="6"
              fill="rgba(56, 189, 248, 0.35)"
              stroke="#e0f2fe"
              strokeWidth="1.5"
            />
            <g transform="rotate(12)">
              <rect x="-3.5" y="-6" width="7" height="17" rx="2" fill="#f6e7c1" stroke="#8a642c" strokeWidth="0.9" />
              <rect x="-3.8" y="1" width="7.6" height="3" fill="#b91c1c" />
            </g>
            <line x1="-6" y1="-6" x2="-6" y2="9" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        </g>
      </g>

      {/* ARPÃO E CORDA */}
      <g transform="translate(308, 150) rotate(-8)">
        <line
          className="harpoon-rope"
          x1="0"
          y1="0"
          x2="-202"
          y2="0"
          stroke="#e7d3a3"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <g className="harpoon-head">
          <line x1="16" y1="0" x2="-4" y2="0" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
          <polygon points="-12,0 3,-6 0,0 3,6" fill="#f1f5f9" stroke="#334155" strokeWidth="1" />
        </g>
      </g>

      {/* Respingo na água quando o arpão fisga a garrafa */}
      <g className="harpoon-splash" transform="translate(108, 178)">
        <ellipse className="h-splash-ring" cx="0" cy="4" rx="20" ry="6" fill="none" stroke="#e0f2fe" strokeWidth="2" />
        <circle className="h-drop-1" cx="-10" cy="0" r="2.8" fill="#e0f2fe" />
        <circle className="h-drop-2" cx="0" cy="-3" r="3.2" fill="#f0f9ff" />
        <circle className="h-drop-3" cx="11" cy="0" r="2.6" fill="#e0f2fe" />
      </g>

      {/* Brilho de captura no convés */}
      <g className="capture-sparkle" transform="translate(308, 140)">
        <path d="M 0 -10 L 2.5 -2.5 L 10 0 L 2.5 2.5 L 0 10 L -2.5 2.5 L -10 0 L -2.5 -2.5 Z" fill="#fde047" />
      </g>

      {/* Onda intermediária */}
      <g className="svg-wave-mid">
        <path
          d="M 0 182 Q 30 172 60 182 T 120 182 T 180 182 T 240 182 T 300 182 T 360 182 T 420 182 T 480 182 T 540 182 T 600 182 T 660 182 T 720 182 T 780 182 T 840 182 T 900 182 T 960 182 L 960 250 L 0 250 Z"
          fill="#0c3c5c"
          opacity="0.92"
        />
        <path
          d="M 0 182 Q 30 172 60 182 T 120 182 T 180 182 T 240 182 T 300 182 T 360 182 T 420 182 T 480 182 T 540 182 T 600 182 T 660 182 T 720 182 T 780 182 T 840 182 T 900 182 T 960 182"
          fill="none"
          stroke="rgba(186, 230, 253, 0.35)"
          strokeWidth="2"
        />
      </g>

      <ellipse className="ship-wake" cx="350" cy="184" rx="42" ry="4" fill="rgba(224, 242, 254, 0.38)" />

      {/* Onda frontal */}
      <g className="svg-wave-front">
        <path
          d="M 0 208 Q 40 196 80 208 T 160 208 T 240 208 T 320 208 T 400 208 T 480 208 T 560 208 T 640 208 T 720 208 T 800 208 T 880 208 T 960 208 L 960 250 L 0 250 Z"
          fill="#07253b"
        />
        <path
          d="M 0 208 Q 40 196 80 208 T 160 208 T 240 208 T 320 208 T 400 208 T 480 208 T 560 208 T 640 208 T 720 208 T 800 208 T 880 208 T 960 208"
          fill="none"
          stroke="rgba(125, 211, 252, 0.25)"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

export default function PirateAnimation({ mode, onComplete }) {
  const [step, setStep] = useState(1);

  useEffect(() => {
    setStep(1);
    const t1Delay = mode === 'encrypt' ? 2600 : 2300;
    const t2Delay = mode === 'encrypt' ? 5200 : 4600;
    const endDelay = mode === 'encrypt' ? 8800 : 6400;

    const t1 = setTimeout(() => setStep(2), t1Delay);
    const t2 = setTimeout(() => setStep(3), t2Delay);
    const t3 = setTimeout(() => onComplete(), endDelay);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [mode, onComplete]);

  const captions = {
    encrypt: {
      1: '📜 Guardando o pergaminho no baú de ouro na praia e trancando a tampa...',
      2: '🍾 Enrolando a chave no papel, colocando na garrafa e arremessando ao mar...',
      3: '⚓ Um navio pirata navegou pelos mares e fisgou a garrafa com um arpão!',
    },
    decrypt: {
      1: '🍾 Estourando a rolha no convés do navio e retirando o papel enrolado da garrafa...',
      2: '🗝️ Destrancando o baú do tesouro na praia e abrindo a tampa...',
      3: '✨ Mensagem revelada! A chave foi inutilizada após o uso único.',
    },
  };

  const isSeaVoyage = mode === 'encrypt' && step === 3;
  const isShipDeck = mode === 'decrypt' && step === 1;

  return (
    <div className="pirate-stage-wrapper">
      <div className={`pirate-stage mode-${mode} step-${step}`}>
        {/* key por etapa: cada cena remonta e entra com fade, sem corte seco */}
        <div className="scene-layer" key={`${mode}-${step}`}>
        {isSeaVoyage ? (
          <SeaVoyageScene />
        ) : isShipDeck ? (
          <>
            <ShipDeckBackdrop />

            {/* DESCRIPTOGRAFAR - CENA 1: Garrafa no convés abrindo e soltando o papel enrolado */}
            <div className="scene-deck-center">
              <div className="bottle bottle-on-deck">
                <div className="cork cork-pop" />
                <div className="bottle-neck" />
                <div className="bottle-body">
                  <div className="rolled-scroll scroll-out-bottle" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <BeachBackdrop />

            {/* CRIPTOGRAFAR - CENA 1: Baú cheio de ouro na praia fechando a boca */}
            {mode === 'encrypt' && step === 1 && (
              <div className="scene-beach-center">
                <TreasureChest state="closing">
                  <div className="parchment-drop">📜</div>
                </TreasureChest>
              </div>
            )}

            {/* CRIPTOGRAFAR - CENA 2: Papel enrolado entra na garrafa e é arremessado ao mar */}
            {mode === 'encrypt' && step === 2 && (
              <div className="scene-beach-center">
                <div className="bottle-throw-wrapper">
                  <div className="bottle">
                    <div className="cork cork-seal" />
                    <div className="bottle-neck" />
                    <div className="bottle-body">
                      <div className="rolled-scroll scroll-into-bottle" />
                    </div>
                  </div>
                </div>
                <div className="sea-splash">
                  <span className="splash-ring" />
                  <span className="splash-drop drop-left" />
                  <span className="splash-drop drop-center" />
                  <span className="splash-drop drop-right" />
                </div>
              </div>
            )}

            {/* DESCRIPTOGRAFAR - CENA 2: Chave abre o baú na praia */}
            {mode === 'decrypt' && step === 2 && (
              <div className="scene-beach-center">
                <TreasureChest state="opening">
                  <div className="key-unlock">🗝️</div>
                </TreasureChest>
              </div>
            )}

            {/* DESCRIPTOGRAFAR - CENA 3: Pergaminho sai do baú aberto */}
            {mode === 'decrypt' && step === 3 && (
              <div className="scene-beach-center">
                <TreasureChest state="open">
                  <div className="parchment-reveal">📜</div>
                </TreasureChest>
              </div>
            )}
          </>
        )}
        </div>
      </div>

      <p className="stage-caption" key={`caption-${mode}-${step}`}>
        {captions[mode][step]}
      </p>

      <button type="button" className="skip-btn" onClick={onComplete}>
        Pular animação ⏭
      </button>
    </div>
  );
}