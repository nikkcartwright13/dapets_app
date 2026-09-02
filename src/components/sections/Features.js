import { useTranslation } from 'react-i18next';
import Reveal from '../ui/Reveal';
import { FEATURES } from '../../data/content';
import './Features.css';

function Features() {
  const { t } = useTranslation();

  return (
    <section className="features dot-bg" id="features">
      <div className="section-inner">
        <Reveal>
          <span className="eyebrow">{t('features.eyebrow')}</span>
          <h2>{t('features.title')}</h2>
        </Reveal>
        <div className="feature-grid">
          {FEATURES.map((f, i) => (
            <Reveal delay={i * 90} key={f.key}>
              <div className="feature-card">
                <div className="feature-dot" style={{ background: f.color }} />
                <h3>{t(`features.items.${f.key}.title`)}</h3>
                <p>{t(`features.items.${f.key}.desc`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
