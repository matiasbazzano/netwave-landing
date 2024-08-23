// Selecciona los elementos
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');

// Función para cerrar el menú
function closeMenu() {
    menu.classList.remove('active');
    hamburgerMenu.classList.remove('open');
}

// Abre y cierra el menú al hacer clic en el botón
hamburgerMenu.addEventListener('click', (event) => {
    event.stopPropagation(); // Evita que el clic se propague al document
    menu.classList.toggle('active');
    hamburgerMenu.classList.toggle('open');
});

// Cierra el menú al hacer clic en un enlace del menú
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

// Cierra el menú al hacer clic fuera de él
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        closeMenu();
    }
});

// Evita que el menú se cierre cuando se hace clic dentro del menú
menu.addEventListener('click', (event) => {
    event.stopPropagation();
});
