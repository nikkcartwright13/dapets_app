import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ka from './locales/ka.json';
import en from './locales/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ka: { translation: ka },
      en: { translation: en },
    },
    fallbackLng: 'ka',
    supportedLngs: ['ka', 'en'],
    interpolation: { escapeValue: false },
    detection: {
      // Georgian is the site's primary language — only switch to English
      // when the visitor explicitly toggles it (saved below), never guess
      // from the browser's locale.
      order: ['localStorage'],
      lookupLocalStorage: 'dapet-lang',
      caches: ['localStorage'],
    },
  });

export default i18n;
