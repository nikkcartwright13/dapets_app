import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo/logo.png';
import './Navbar.css';

function getInitialTheme() {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

function Navbar() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState(getInitialTheme);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const NAV_ITEMS = [
    { to: '/', label: t('nav.home'), end: true, icon: '🏠', color: 'var(--color-primary)' },
    { to: '/app', label: t('nav.app'), icon: '📱', color: 'var(--color-green)' },
    { to: '/service-centers', label: t('nav.serviceCenters'), icon: '🛠️', color: 'var(--color-error)' },
    { to: '/pricing', label: t('nav.pricing'), icon: '💳', color: '#f5a623' },
    { to: '/about', label: t('nav.about'), icon: 'ℹ️', color: 'var(--color-secondary)' },
  ];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('dapet-theme', theme);
  }, [theme]);

  useEffect(() => {
    let ticking = false;

    const measure = () => {
      ticking = false;
      // Hysteresis: enter "scrolled" only past 24px, leave it only below 8px.
      // A single shared threshold flickers the shrink animation on/off when
      // scrollY hovers right at that line (slow scrolling, trackpad/iOS
      // elastic overscroll bounce), which reads as the header "glitching".
      setScrolled((prev) => {
        const y = window.scrollY;
        return prev ? y > 8 : y > 24;
      });
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <header className={`navbar-wrap ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar-pill">
        <Link className="logo" to="/" aria-label="Dapet">
          <img src={logo} alt="" className="logo-mark" />
          <span className="logo-text">
            Da<span className="logo-accent">pet</span>
          </span>
        </Link>

        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="navbar-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t('nav.themeToLight') : t('nav.themeToDark')}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            type="button"
            className="menu-toggle"
            aria-label={t('nav.menuAria')}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className={`menu-icon ${menuOpen ? 'is-open' : ''}`}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-list">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => `mobile-menu-item ${isActive ? 'active' : ''}`}
              >
                <span className="mobile-menu-icon" style={{ background: item.color }}>
                  {item.icon}
                </span>
                <span className="mobile-menu-label">{item.label}</span>
                <span className="mobile-menu-chevron" aria-hidden="true">
                  ›
                </span>
              </NavLink>
            ))}
          </div>
          <Link to="/app" className="mobile-menu-cta" onClick={() => setMenuOpen(false)}>
            {t('nav.getApp')}
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
