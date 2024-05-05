$(function () {

    window.sr = ScrollReveal();



    sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
    });

    sr.reveal('.js--fadeInBottom', {
        origin: 'bottom',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
    });

    sr.reveal('.js--fadeInTop', {
        origin: 'top',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
    });

});