import i18next from 'i18next';

const resources = {
  en: {
    translation: {
      "about_us_title": "About Us",
      "about_us_text": "At <strong>netwave</strong>, we specialize in creating custom websites tailored to your needs. Our passion for web design drives us to craft unique, user-friendly sites that stand out. We love what we do and are dedicated to delivering exceptional digital experiences. Let us bring your vision to life!",
      "contact_us": "Contact Us"
    }
  },
  es: {
    translation: {
      "about_us_title": "Sobre Nosotros",
      "about_us_text": "En <strong>netwave</strong>, nos especializamos en crear sitios web personalizados adaptados a sus necesidades. Nuestra pasión por el diseño web nos impulsa a crear sitios únicos y fáciles de usar que destacan. Nos encanta lo que hacemos y estamos dedicados a ofrecer experiencias digitales excepcionales. ¡Déjanos hacer realidad tu visión!",
      "contact_us": "Contáctanos"
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

export default i18next;