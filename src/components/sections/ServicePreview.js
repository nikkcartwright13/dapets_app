import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '../ui/Reveal';
import { SERVICE_CATEGORIES } from '../../data/content';
import './ServiceCenters.css';
import './ServicePreview.css';

function ServicePreview() {
  const { t } = useTranslation();
  const categories = SERVICE_CATEGORIES.slice(0, 4);

  return (
    <section className="service-preview dot-bg">
      <div className="section-inner">
        <Reveal className="service-preview-heading">
          <span className="eyebrow">{t('homePreviews.servicePreview.eyebrow')}</span>
          <h2>{t('homePreviews.servicePreview.title')}</h2>
          <p>{t('homePreviews.servicePreview.subtitle')}</p>
        </Reveal>

        <div className="service-preview-grid">
          {categories.map((c, i) => (
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

        <Reveal className="service-preview-cta-wrap">
          <Link to="/service-centers" className="service-preview-cta">
            {t('homePreviews.servicePreview.cta')} <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default ServicePreview;
