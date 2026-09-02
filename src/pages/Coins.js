import { useTranslation } from 'react-i18next';
import PageHeader from '../components/ui/PageHeader';
import Reveal from '../components/ui/Reveal';
import './Coins.css';

const HIGHLIGHTS = [
  { key: 'earn', icon: '⭐' },
  { key: 'scan', icon: '📷' },
  { key: 'redeem', icon: '🎁' },
];

function Coins() {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader
        eyebrow={t('pages.coins.eyebrow')}
        title={t('pages.coins.title')}
        subtitle={t('pages.coins.subtitle')}
      />
      <section className="coins-intro dot-bg">
        <div className="section-inner coins-intro-inner">
          <Reveal className="coins-badge-wrap">
            <div className="coins-badge" aria-hidden="true">
              🪙
            </div>
          </Reveal>
          <Reveal delay={90} className="coins-intro-copy">
            <p>{t('pages.coins.paragraph')}</p>
            <span className="coins-soon">{t('pages.coins.soon')}</span>
          </Reveal>
        </div>
      </section>
      <section className="coins-highlights">
        <div className="section-inner coins-highlight-grid">
          {HIGHLIGHTS.map((item, i) => (
            <Reveal delay={i * 90} key={item.key}>
              <div className="coins-highlight-card">
                <div className="coins-highlight-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <h3>{t(`pages.coins.highlights.${item.key}.title`)}</h3>
                <p>{t(`pages.coins.highlights.${item.key}.desc`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export default Coins;
