import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo/logo.png';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="section-inner footer-inner">
        <div className="footer-brand">
          <span className="logo">
            <img src={logo} alt="" className="logo-mark" />
            <span>Dapet</span>
          </span>
          <p className="footer-tagline">{t('footer.tagline')}</p>
        </div>
        <span className="footer-copy">{t('footer.copyright')}</span>
        <span className="footer-credit">
          {t('footer.platformBy')}{' '}
          <a href="https://devline.digital" target="_blank" rel="noopener noreferrer">
            devline.digital
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
