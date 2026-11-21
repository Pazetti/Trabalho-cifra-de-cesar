import PirateShip from '../parts/PirateShip';

/** Criptografar, cena 3: o navio fisga a garrafa com o arpão. */
export default function SeaVoyageScene() {
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
      <PirateShip />

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
