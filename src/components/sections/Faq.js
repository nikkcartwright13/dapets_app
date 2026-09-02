import { useTranslation } from 'react-i18next';
import Reveal from '../ui/Reveal';
import { FAQ_KEYS } from '../../data/steps';
import './Faq.css';

function Faq() {
  const { t } = useTranslation();

  return (
    <section className="faq" id="faq">
      <div className="section-inner">
        <Reveal>
          <span className="eyebrow">{t('faq.eyebrow')}</span>
          <h2>{t('faq.title')}</h2>
        </Reveal>
        <div className="faq-list">
          {FAQ_KEYS.map((key, i) => (
            <Reveal delay={i * 70} key={key}>
              <div className="faq-item">
                <h3>{t(`faq.items.${key}.q`)}</h3>
                <p>{t(`faq.items.${key}.a`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
