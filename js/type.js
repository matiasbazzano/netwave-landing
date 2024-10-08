document.addEventListener('DOMContentLoaded', function () {
    const translations = {
        en: {
            typed_strings: [
                "Captivating websites",
                "Responsive designs",
                "Interactive platforms",
                "Creative brand solutions",
                "UX-enhancing sites",
                "Stunning web presence",
                "Cutting-edge solutions",
                "Seamless experiences",
                "High-performance sites",
                "Elegant designs",
                "Powerful growth tools"
            ]
        },
        es: {
            typed_strings: [
                "Sitios web cautivadores",
                "Diseños responsivos",
                "Plataformas interactivas",
                "Soluciones creativas",
                "Sitios que mejoran la UX",
                "Presencia web eficaz",
                "Soluciones de vanguardia",
                "Experiencias fluidas",
                "Sitios de alto rendimiento",
                "Diseños elegantes",
                "Herramientas de crecimiento"
            ]
        }
    };

    const languageSwitch = document.getElementById('language-switch');
    const typedElement = document.getElementById('typed-output');

    let typed;

    function initializeTyped(language) {
        if (typed) {
            typed.destroy();
        }
        const options = {
            strings: translations[language].typed_strings,
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1000,
            startDelay: 500,
            loop: true,
            cursorChar: '|',
        };
        typed = new Typed(typedElement, options);
    }

    function translatePage(language) {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[language] && translations[language][key]) {
                if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
                    element.setAttribute('placeholder', translations[language][key]);
                } else if (element.tagName.toLowerCase() === 'button') {
                    element.textContent = translations[language][key];
                } else {
                    element.innerHTML = translations[language][key];
                }
            }
        });
    }

    function setLanguage(language) {
        translatePage(language);
        initializeTyped(language);
        localStorage.setItem('selectedLanguage', language);
        languageSwitch.checked = (language === 'es');
    }

    languageSwitch.addEventListener('change', function() {
        const language = languageSwitch.checked ? 'es' : 'en';
        setLanguage(language);
    });

    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    setLanguage(savedLanguage);
});