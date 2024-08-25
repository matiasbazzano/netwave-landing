document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        en: {
            menu_about_us: 'About Us',
            menu_services: 'Our Services',
            menu_clients: 'Our Clients',
            menu_contact: 'Contact',
            banner_title: 'We build',
            banner_text: 'Tell us your idea and we will boost your business with customized digital solutions.',
            quote_btn: 'Get A Quote',
            about_us_title: 'About Us',
            about_us_text: 'At <strong>netwave</strong>, we specialize in creating custom websites tailored to your needs. Our passion for web design drives us to craft unique, user-friendly sites that stand out. We love what we do and are dedicated to delivering exceptional digital experiences. Let us bring your vision to life!',
            contact_us: 'Contact Us',
            services_title: 'Our Services',
            service_01: 'UX/UI Design',
            service_02: 'Web Development',
            service_04: 'Web Maintenance',
            service_text_01: 'We create intuitive and visually appealing user experiences to enhance engagement and satisfaction.',
            service_text_02: 'Our team builds responsive, high-performance websites tailored to your business needs.',
            service_text_03: 'We ensure your website functions flawlessly with thorough testing for usability, performance, and security.',
            service_text_04: 'We provide ongoing support and updates to keep your website running smoothly and securely.',
            clients_title: 'Some of our happy clients',
            clients_text: 'Here’s a selection of clients who have been delighted with our digital solutions and services.',
            how_work_title: 'How We Work',
            how_work_subtitle_01: 'Transparent Processes',
            how_work_subtitle_02: 'Latest Trends',
            how_work_subtitle_03: 'On-Time Delivery',
            how_work_text_01: 'We believe in complete transparency, keeping you informed at every step of the project to ensure your vision is realized.',
            how_work_text_02: 'Our team stays ahead of the curve, utilizing the latest trends and technologies to deliver cutting-edge solutions.',
            how_work_text_03: 'We pride ourselves on delivering projects on time, ensuring your business meets its goals without delay.',
            contact_form_title: 'Get In Touch',
            contact_form_name_field: 'Your full name',
            contact_form_email_field: 'Your email',
            contact_form_phone_field: 'Your phone number',
            contact_form_message_field: 'Message',
            contact_form_send_button: 'SEND',
            footer_text: "Share your vision with us and let's create something amazing together. We’re here to help bring your ideas to life.",
            copyright_text: 'Copyright © 2024 - All Rights Reserved.'
        },
        es: {
            menu_about_us: 'Sobre Nosotros',
            menu_services: 'Servicios',
            menu_clients: 'Clientes',
            menu_contact: 'Contacto',
            banner_title: 'Creamos',
            banner_text: 'Dinos tu idea y potenciaremos tu negocio con soluciones digitales personalizadas.',
            quote_btn: 'Cotización',
            about_us_title: 'Sobre Nosotros',
            about_us_text: 'En <strong>netwave</strong>, nos especializamos en crear sitios web personalizados adaptados a sus necesidades. Nuestra pasión por el diseño web nos impulsa a crear sitios únicos y fáciles de usar que destacan. Nos encanta lo que hacemos y estamos dedicados a ofrecer experiencias digitales excepcionales. ¡Déjanos darle vida a tu visión!',
            contact_us: 'Contáctanos',
            services_title: 'Servicios',
            service_01: 'Diseño UX/UI',
            service_02: 'Desarrollo Web',
            service_04: 'Mantenimiento Web',
            service_text_01: 'Creamos experiencias de usuario intuitivas y visualmente atractivas para mejorar la interacción y satisfacción.',
            service_text_02: 'Nuestro equipo construye sitios web receptivos y de alto rendimiento, adaptados a las necesidades de tu negocio.',
            service_text_03: 'Nos aseguramos de que tu sitio web funcione a la perfección mediante pruebas exhaustivas de usabilidad, rendimiento y seguridad.',
            service_text_04: 'Brindamos soporte continuo y actualizaciones para mantener tu sitio web funcionando de manera fluida y segura.',
            clients_title: 'Algunos de nuestros clientes satisfechos',
            clients_text: 'Aquí algunos de los clientes que han confiado en nuestras soluciones digitales y han quedado plenamente satisfechos.',
            how_work_title: 'Cómo Trabajamos',
            how_work_subtitle_01: 'Procesos Transparentes',
            how_work_subtitle_02: 'Últimas Tendencias',
            how_work_subtitle_03: 'Entrega Puntual',
            how_work_text_01: 'Creemos en la total transparencia, manteniéndote informado en cada etapa del proyecto para garantizar que tu visión se haga realidad.',
            how_work_text_02: 'Nuestro equipo se mantiene a la vanguardia, utilizando las tendencias y tecnologías más recientes para ofrecer soluciones innovadoras.',
            how_work_text_03: 'Nos enorgullece entregar los proyectos a tiempo, asegurando que tu negocio alcance sus metas sin retrasos.',
            contact_form_title: 'Contáctanos',
            contact_form_name_field: 'Tu nombre completo',
            contact_form_email_field: 'Tu correo electrónico',
            contact_form_phone_field: 'Tu número de teléfono',
            contact_form_message_field: 'Mensaje',
            contact_form_send_button: 'ENVIAR',
            footer_text: 'Comparte tu visión con nosotros y creemos algo increíble juntos. Estamos aquí para ayudarte a hacer realidad tus ideas.',
            copyright_text: 'Copyright © 2024 - Todos los Derechos Reservados.'
        }
    };

    const languageSwitch = document.getElementById('language-switch');


    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    languageSwitch.checked = savedLanguage === 'es';
    translatePage(savedLanguage);

    languageSwitch.addEventListener('change', function() {
        const language = languageSwitch.checked ? 'es' : 'en';
        localStorage.setItem('preferredLanguage', language); 
        translatePage(language);
    });

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
});
