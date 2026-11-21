import { ChestClosingScene, BottleThrowScene } from './scenes/EncryptScenes';
import SeaVoyageScene from './scenes/SeaVoyageScene';
import { BottleOnDeckScene, ChestOpeningScene, ChestOpenScene } from './scenes/DecryptScenes';

/**
 * Roteiro de cada modo: cena, legenda e o instante (ms desde o início) em que
 * a etapa termina. A última etapa encerra a animação. Os tempos acompanham a
 * duração das animações CSS de cada cena.
 */
export const TIMELINE = {
  encrypt: [
    {
      Scene: ChestClosingScene,
      endsAt: 2600,
      caption: '📜 Guardando o pergaminho no baú de ouro na praia e trancando a tampa...',
    },
    {
      Scene: BottleThrowScene,
      endsAt: 5200,
      caption: '🍾 Enrolando a chave no papel, colocando na garrafa e arremessando ao mar...',
    },
    {
      Scene: SeaVoyageScene,
      endsAt: 8800,
      caption: '⚓ Um navio pirata navegou pelos mares e fisgou a garrafa com um arpão!',
    },
  ],
  decrypt: [
    {
      Scene: BottleOnDeckScene,
      endsAt: 2300,
      caption: '🍾 Estourando a rolha no convés do navio e retirando o papel enrolado da garrafa...',
    },
    {
      Scene: ChestOpeningScene,
      endsAt: 4600,
      caption: '🗝️ Destrancando o baú do tesouro na praia e abrindo a tampa...',
    },
    {
      Scene: ChestOpenScene,
      endsAt: 6400,
      caption: '✨ Mensagem revelada! A chave foi inutilizada após o uso único.',
    },
  ],
};
