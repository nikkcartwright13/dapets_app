import { useTranslation } from 'react-i18next';
import Reveal from '../ui/Reveal';
import { HOW_IT_WORKS_KEYS } from '../../data/steps';
import './HowItWorks.css';

function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section className="how dot-bg" id="how">
      <div className="section-inner">
        <Reveal>
          <span className="eyebrow">{t('howItWorks.eyebrow')}</span>
          <h2>{t('howItWorks.title')}</h2>
        </Reveal>
        <div className="how-row">
          {HOW_IT_WORKS_KEYS.map((key, i) => (
            <Reveal delay={i * 90} key={key}>
              <div className="how-step">
                <span className="how-step-num">{i + 1}</span>
                <h3>{t(`howItWorks.steps.${key}.title`)}</h3>
                <p>{t(`howItWorks.steps.${key}.desc`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
