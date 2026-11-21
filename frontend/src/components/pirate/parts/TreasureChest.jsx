import GoldPile from './GoldPile';

/**
 * Baú 3D com tampa articulada.
 * @param {{ state: 'closing' | 'opening' | 'open', children?: import('react').ReactNode }} props
 *   children: item que entra/sai pela boca do baú (pergaminho, chave).
 */
export default function TreasureChest({ state, children }) {
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
      <GoldPile />

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
