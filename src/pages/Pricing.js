import { useTranslation } from 'react-i18next';
import PageHeader from '../components/ui/PageHeader';
import Reveal from '../components/ui/Reveal';
import './Pricing.css';

const TIER_KEYS = ['basic', 'plus', 'gold'];

function Pricing() {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader
        eyebrow={t('pages.pricing.eyebrow')}
        title={t('pages.pricing.title')}
        subtitle={t('pages.pricing.subtitle')}
      />
      <section className="pricing">
        <div className="section-inner pricing-grid">
          {TIER_KEYS.map((key, i) => {
            const points = t(`pages.pricing.tiers.${key}.points`, { returnObjects: true });
            return (
              <Reveal delay={i * 90} key={key}>
                <div className={`pricing-card ${key === 'plus' ? 'pricing-card--highlight' : ''}`}>
                  <h3>{t(`pages.pricing.tiers.${key}.name`)}</h3>
                  <p className="pricing-price">{t(`pages.pricing.tiers.${key}.price`)}</p>
                  <p className="pricing-blurb">{t(`pages.pricing.tiers.${key}.blurb`)}</p>
                  <ul className="pricing-points">
                    {points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Pricing;
