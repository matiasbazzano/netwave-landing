import i18next from './i18n';

const languageSwitch = document.getElementById('language-switch');


function changeLanguage() {
  const newLang = i18next.language === 'en' ? 'es' : 'en';
  i18next.changeLanguage(newLang).then(() => {
    updateContent();
  });
}

function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.innerHTML = i18next.t(key);
  });
}

languageSwitch.addEventListener('click', changeLanguage);

updateContent();