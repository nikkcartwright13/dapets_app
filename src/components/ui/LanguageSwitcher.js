import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LANGS = [
  { code: 'ka', label: 'ქა' },
  { code: 'en', label: 'EN' },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language || 'ka').startsWith('en') ? 'en' : 'ka';

  useEffect(() => {
    document.documentElement.lang = current;
  }, [current]);

  const other = LANGS.find((l) => l.code !== current);

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={() => i18n.changeLanguage(other.code)}
      aria-label={`Switch to ${other.code === 'en' ? 'English' : 'ქართული'}`}
    >
      {LANGS.find((l) => l.code === current).label}
    </button>
  );
}

export default LanguageSwitcher;
