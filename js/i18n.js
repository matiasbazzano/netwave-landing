import i18next from 'i18next';

const resources = {
  en: {
    translation: {
      "about_us_title": "About Us",
    }
  },
  es: {
    translation: {
      "about_us_title": "Sobre Nosotros",
    }
  }
};

i18next.init({
  lng: 'en', // Idioma por defecto
  resources,
  interpolation: {
    escapeValue: false
  }
});

console.log('i18next initialized with language:', i18next.language);

export default i18next;