import { useTranslation } from 'react-i18next';
import PageHeader from '../components/ui/PageHeader';
import Reveal from '../components/ui/Reveal';
import './Pricing.css';

const TIERS = [
  { key: 'basic', icon: '🐾', variant: 'basic' },
  { key: 'plus', icon: '🛡️', variant: 'plus', badge: 'badgePopular' },
  { key: 'gold', icon: '👑', variant: 'gold', badge: 'badgeGold' },
];

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
          {TIERS.map(({ key, icon, variant, badge }, i) => {
            const points = t(`pages.pricing.tiers.${key}.points`, { returnObjects: true });
            return (
              <Reveal delay={i * 90} key={key}>
                <div className={`pricing-card pricing-card--${variant}`}>
                  {badge && <span className="pricing-badge">{t(`pages.pricing.${badge}`)}</span>}
                  <span className="pricing-icon">{icon}</span>
                  <h3>{t(`pages.pricing.tiers.${key}.name`)}</h3>
                  <p className="pricing-price">{t(`pages.pricing.tiers.${key}.price`)}</p>
                  <p className="pricing-blurb">{t(`pages.pricing.tiers.${key}.blurb`)}</p>
                  <ul className="pricing-points">
                    {points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <button type="button" className="pricing-cta">
                    {t(`pages.pricing.tiers.${key}.cta`)}
                  </button>
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
