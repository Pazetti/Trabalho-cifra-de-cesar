import BeachBackdrop from '../parts/BeachBackdrop';
import TreasureChest from '../parts/TreasureChest';
import Bottle from '../parts/Bottle';

/** Criptografar, cena 1: o pergaminho cai no baú cheio de ouro e a tampa fecha. */
export function ChestClosingScene() {
  return (
    <>
      <BeachBackdrop />
      <div className="scene-beach-center">
        <TreasureChest state="closing">
          <div className="parchment-drop">📜</div>
        </TreasureChest>
      </div>
    </>
  );
}

/** Criptografar, cena 2: o papel entra na garrafa, que é arremessada ao mar. */
export function BottleThrowScene() {
  return (
    <>
      <BeachBackdrop />
      <div className="scene-beach-center">
        <div className="bottle-throw-wrapper">
          <Bottle corkClass="cork-seal" scrollClass="scroll-into-bottle" />
        </div>
        <div className="sea-splash">
          <span className="splash-ring" />
          <span className="splash-drop drop-left" />
          <span className="splash-drop drop-center" />
          <span className="splash-drop drop-right" />
        </div>
      </div>
    </>
  );
}
