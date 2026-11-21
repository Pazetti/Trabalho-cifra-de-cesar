/**
 * Garrafa de vidro com rolha e papel enrolado.
 * As classes definem qual animação roda em cada parte.
 * @param {{ className?: string, corkClass: string, scrollClass: string }} props
 */
export default function Bottle({ className = '', corkClass, scrollClass }) {
  return (
    <div className={`bottle ${className}`.trim()}>
      <div className={`cork ${corkClass}`} />
      <div className="bottle-neck" />
      <div className="bottle-body">
        <div className={`rolled-scroll ${scrollClass}`} />
      </div>
    </div>
  );
}
