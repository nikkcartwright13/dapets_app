import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '../ui/Reveal';
import PhoneMockup from '../ui/PhoneMockup';
import homeVideo from '../../assets/video/home_page.mp4';
import homeVideoPoster from '../../assets/video/home_page-poster.jpg';
import './AppPreview.css';

function AppPreview() {
  const { t } = useTranslation();

  return (
    <section className="app-preview">
      <div className="section-inner app-preview-inner">
        <Reveal className="app-preview-copy">
          <span className="eyebrow">{t('homePreviews.appPreview.eyebrow')}</span>
          <h2>
            {t('homePreviews.appPreview.titlePlain')}{' '}
            <span className="app-preview-accent">{t('homePreviews.appPreview.titleAccent')}</span>
          </h2>
          <p>{t('homePreviews.appPreview.text')}</p>
          <Link to="/app" className="app-preview-cta">
            {t('homePreviews.appPreview.cta')} <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
        <Reveal delay={150} className="app-preview-visual">
          <PhoneMockup video={homeVideo} poster={homeVideoPoster} label={t('appScreens.home')} size="sm" />
        </Reveal>
      </div>
    </section>
  );
}

export default AppPreview;
