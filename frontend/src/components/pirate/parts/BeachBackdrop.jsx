/** Cenário da praia à noite: céu, lua, mar, areia e coqueiro. */
export default function BeachBackdrop() {
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
