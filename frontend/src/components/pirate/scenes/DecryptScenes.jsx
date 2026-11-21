import BeachBackdrop from '../parts/BeachBackdrop';
import ShipDeckBackdrop from '../parts/ShipDeckBackdrop';
import TreasureChest from '../parts/TreasureChest';
import Bottle from '../parts/Bottle';

/** Descriptografar, cena 1: a rolha estoura no convés e o papel sai da garrafa. */
export function BottleOnDeckScene() {
  return (
    <>
      <ShipDeckBackdrop />
      <div className="scene-deck-center">
        <Bottle className="bottle-on-deck" corkClass="cork-pop" scrollClass="scroll-out-bottle" />
      </div>
    </>
  );
}

/** Descriptografar, cena 2: a chave destranca o baú e a tampa abre. */
export function ChestOpeningScene() {
  return (
    <>
      <BeachBackdrop />
      <div className="scene-beach-center">
        <TreasureChest state="opening">
          <div className="key-unlock">🗝️</div>
        </TreasureChest>
      </div>
    </>
  );
}

/** Descriptografar, cena 3: o pergaminho sai do baú aberto. */
export function ChestOpenScene() {
  return (
    <>
      <BeachBackdrop />
      <div className="scene-beach-center">
        <TreasureChest state="open">
          <div className="parchment-reveal">📜</div>
        </TreasureChest>
      </div>
    </>
  );
}
