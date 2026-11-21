/** Navio pirata (grupo SVG) usado na cena do mar. */
export default function PirateShip() {
  return (
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
  );
}
