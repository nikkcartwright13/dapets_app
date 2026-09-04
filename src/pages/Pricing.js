import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/ui/PageHeader';
import Reveal from '../components/ui/Reveal';
import './Pricing.css';

const TIERS = [
  { key: 'basic', icon: '🐾', variant: 'basic' },
  { key: 'plus', icon: '🛡️', variant: 'plus', badge: 'badgePopular', featured: true },
  { key: 'gold', icon: '👑', variant: 'gold', badge: 'badgeGold' },
];

function Pricing() {
  const { t } = useTranslation();
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow={t('pages.pricing.eyebrow')}
        title={t('pages.pricing.title')}
        subtitle={t('pages.pricing.subtitle')}
      />

      <div className="pricing-toolbar">
        <div className="billing-toggle">
          <button
            type="button"
            className={!yearly ? 'active' : ''}
            onClick={() => setYearly(false)}
          >
            {t('pages.pricing.billingMonthly')}
          </button>
          <button
            type="button"
            className={yearly ? 'active' : ''}
            onClick={() => setYearly(true)}
          >
            {t('pages.pricing.billingYearly')}
          </button>
        </div>
        <p className="pricing-trust-bar">{t('pages.pricing.trustBar')}</p>
      </div>

      <section className="pricing">
        <div className="section-inner pricing-grid">
          {TIERS.map(({ key, icon, variant, badge, featured }, i) => {
            const points = t(`pages.pricing.tiers.${key}.points`, { returnObjects: true });
            const isFree = key === 'basic';
            const price = isFree
              ? t('pages.pricing.tiers.basic.price')
              : `${t(`pages.pricing.tiers.${key}.${yearly ? 'priceYearly' : 'priceMonthly'}`)} / ${
                  yearly ? t('pages.pricing.billingYearly').toLowerCase() : t('pages.pricing.billingMonthly').toLowerCase()
                }`;

            return (
              <Reveal delay={i * 90} key={key}>
                <div
                  className={`pricing-card pricing-card--${variant} ${
                    featured ? 'pricing-card--featured' : ''
                  }`}
                >
                  {badge && <span className="pricing-badge">{t(`pages.pricing.${badge}`)}</span>}
                  <span className="pricing-icon">{icon}</span>
                  <h3>{t(`pages.pricing.tiers.${key}.name`)}</h3>
                  <p className="pricing-price">
                    {price}
                    {!isFree && yearly && (
                      <span className="pricing-savings">
                        {t(`pages.pricing.tiers.${key}.yearlySavings`)}
                      </span>
                    )}
                  </p>
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
