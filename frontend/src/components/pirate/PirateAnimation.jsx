import { useEffect, useState } from 'react';
import { TIMELINE } from './timeline';
import './styles/index.css';

/**
 * Animação pirata que acompanha criptografar/descriptografar.
 * Avança pelas etapas de TIMELINE[mode] e chama onComplete ao terminar ou ao pular.
 * @param {{ mode: 'encrypt' | 'decrypt', onComplete: () => void }} props
 */
export default function PirateAnimation({ mode, onComplete }) {
  const [step, setStep] = useState(1);
  const steps = TIMELINE[mode];

  useEffect(() => {
    setStep(1);
    const timers = steps.map(({ endsAt }, i) =>
      setTimeout(() => (i === steps.length - 1 ? onComplete() : setStep(i + 2)), endsAt)
    );
    return () => timers.forEach(clearTimeout);
  }, [steps, onComplete]);

  const { Scene, caption } = steps[step - 1];

  return (
    <div className="pirate-stage-wrapper">
      <div className={`pirate-stage mode-${mode} step-${step}`}>
        {/* key por etapa: cada cena remonta e entra com fade, sem corte seco */}
        <div className="scene-layer" key={`${mode}-${step}`}>
          <Scene />
        </div>
      </div>

      <p className="stage-caption" key={`caption-${mode}-${step}`}>
        {caption}
      </p>

      <button type="button" className="skip-btn" onClick={onComplete}>
        Pular animação ⏭
      </button>
    </div>
  );
}
