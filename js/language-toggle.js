import i18next from './i18n';

// Selecciona el botón de toggle
const languageSwitch = document.getElementById('language-switch');

// Función para cambiar el idioma
function changeLanguage() {
  const newLang = i18next.language === 'en' ? 'es' : 'en';
  console.log('Changing language to:', newLang); // Depuración
  i18next.changeLanguage(newLang, () => {
    updateContent(); // Actualiza el contenido después de cambiar el idioma
  });
}

// Agrega el evento de cambio al toggle
languageSwitch.addEventListener('change', changeLanguage);

// Actualiza el contenido de la página según el idioma seleccionado
function updateContent() {
  console.log('Updating content'); // Depuración
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.innerHTML = i18next.t(key); // Usa innerHTML para permitir etiquetas HTML
  });
}

// Escucha cambios en el idioma
i18next.on('languageChanged', updateContent);

// Inicializa el contenido
updateContent();
