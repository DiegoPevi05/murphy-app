import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../assets/i18n/en.json';
import es from '../assets/i18n/es.json';
  
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3', 
  lng: 'ES',
  fallbackLng: 'ES',
  resources: {
    EN: en,
    ES: es
  },
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});
  
export default i18n;
