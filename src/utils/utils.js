import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../translations/en.json';
import deTranslation from '../translations/de.json';
import { useTranslation } from 'react-i18next';


export const useTranslate = () => {
  const { t } = useTranslation();
  return t;
};


export const initializeI18n = () => {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: enTranslation },
        de: { translation: deTranslation }
      },
      lng: window.navigator.language || 'en', // Set to browser language or 'en' if not detected
      fallbackLng: 'en', // Fallback language
      interpolation: {
        escapeValue: false // React already protects us from XSS
      }
    });
}