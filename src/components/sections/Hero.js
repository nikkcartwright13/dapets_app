import { useTranslation } from 'react-i18next';
import PhoneMockup from '../ui/PhoneMockup';
import homeVideo from '../../assets/video/full_page.mp4';
import homeVideoPoster from '../../assets/video/full_page-poster.jpg';
import './Hero.css';

function Hero() {
  const { t } = useTranslation();

  return (
    <header className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="badge">{t('hero.badge')}</span>
          <h1>
            {t('hero.titleLine1')} <span className="text-primary">{t('hero.titleAccent')}</span>
          </h1>
          <p className="hero-sub">{t('hero.subtitle')}</p>
          <div className="hero-actions">

          </div>
        </div>
        <div className="hero-visual">
          <PhoneMockup
            label={t('appScreens.home')}
            video={homeVideo}
            poster={homeVideoPoster}
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;
