import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import ENData from "./locale/EN.json";
import ARData from "./locale/AR.json";

const resources = {
  en: {
    translation: ENData
  },
  ar: {
    translation: ARData
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie']
    },

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;