import { Link } from 'react-router-dom';
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
        <Link className="footer-link" to="/about">
          {t('footer.about')}
        </Link>
        <span className="footer-copy">{t('footer.copyright')}</span>
      </div>
    </footer>
  );
}

export default Footer;
