import { createI18n } from 'vue-i18n';

// Importar mensajes de traducción
import en from '../i18n/locales/en.json';
import pt from '../i18n/locales/pt.json';

// Configuración de i18n
const i18n = createI18n({
  legacy: false, // Usar Composition API
  locale: localStorage.getItem('locale') || 'en', // Idioma inicial o por defecto
  fallbackLocale: 'en', // Idioma de respaldo
  messages: {
    en,
    pt,
  },
});

export default i18n;
