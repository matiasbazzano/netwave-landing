$(document).ready(function(){
    var $carousel = $('.brand-carousel');
    var inactivityTimeout;

    $carousel.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, 
        arrows: true,
        dots: true,
        rtl: false
    });

    // Función para reiniciar el autoplay
    function resetAutoplay() {
        $carousel.slick('slickSetOption', 'autoplay', true, false);
    }

    // Función para detener el autoplay
    function stopAutoplay() {
        $carousel.slick('slickSetOption', 'autoplay', false, false);
    }

    // Manejar la inactividad del usuario
    function handleInactivity() {
        stopAutoplay(); // Detener autoplay
        clearTimeout(inactivityTimeout);

        inactivityTimeout = setTimeout(function() {
            resetAutoplay();
        }, 3000);
    }

    // Eventos para detectar interacción del usuario
    $carousel.on('touchstart mouseenter', handleInactivity);
    $carousel.on('touchend mouseleave', handleInactivity);

    // Iniciar el temporizador de inactividad al cargar la página
    handleInactivity();
});
