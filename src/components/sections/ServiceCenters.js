import { useTranslation } from 'react-i18next';
import Reveal from '../ui/Reveal';
import PhoneMockup from '../ui/PhoneMockup';
import { SERVICE_CATEGORIES, SERVICE_CENTER_BENEFITS } from '../../data/content';
import serviceListVideo from '../../assets/video/service_list.mp4';
import serviceListPoster from '../../assets/video/service_list-poster.jpg';
import './AppScreenSection.css';
import './ServiceCenters.css';

function ServiceCenters() {
  const { t } = useTranslation();
  const showcasePoints = t('serviceCenters.showcase.points', { returnObjects: true });

  return (
    <>
     

      <section className="app-screen">
        <div className="section-inner app-screen-inner">
          <Reveal className="app-screen-copy">
            <span className="eyebrow">{t('serviceCenters.showcase.eyebrow')}</span>
            <h2>
              {t('serviceCenters.showcase.titlePlain')}{' '}
              <span className="app-screen-accent">{t('serviceCenters.showcase.titleAccent')}</span>
            </h2>
            <p>{t('serviceCenters.showcase.text')}</p>
            <ul className="app-screen-points">
              {showcasePoints.map((point) => (
                <li key={point}>
                  <span className="app-screen-check" aria-hidden="true">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150} className="app-screen-visual">
            <PhoneMockup
              video={serviceListVideo}
              poster={serviceListPoster}
              label={t('serviceCenters.showcase.eyebrow')}
            />
          </Reveal>
        </div>
      </section>

      <section className="business dot-bg" id="business">
        <div className="section-inner">
          <div className="category-grid">
            {SERVICE_CATEGORIES.map((c, i) => (
              <Reveal delay={i * 90} key={c.key}>
                <div className="category-card">
                  <div className="category-icon-wrap">
                    <img src={c.icon} alt="" className="category-icon" />
                  </div>
                  <h3>{t(`serviceCenters.categories.${c.key}.label`)}</h3>
                  <p>{t(`serviceCenters.categories.${c.key}.desc`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="business-benefits">
        <div className="section-inner">
          <Reveal className="benefits-heading">
            <span className="eyebrow">{t('serviceCenters.benefits.eyebrow')}</span>
            <h2>{t('serviceCenters.benefits.title')}</h2>
          </Reveal>

          <div className="benefits-grid">
            {SERVICE_CENTER_BENEFITS.map((b, i) => (
              <Reveal delay={i * 80} key={b.key}>
                <div className="benefit-card">
                  <div className="benefit-icon" aria-hidden="true">
                    {b.icon}
                  </div>
                  <h3>{t(`serviceCenters.benefits.items.${b.key}.title`)}</h3>
                  <p>{t(`serviceCenters.benefits.items.${b.key}.desc`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceCenters;
