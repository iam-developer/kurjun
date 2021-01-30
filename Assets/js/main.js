$(document).ready(function() {
    // Слайдер для рекламных баннеров:
    $(".advertising").slick({
        infinite: true,
        dots: true,
        arrow: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fadeIn: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1800,
    });

    // Слайдер для категории:
    $('.categories--slider').slick({
        infinite: true,
        dots: false,
        arrow: true,
        slidesToShow: 7,
        slidesToScroll: 4,
        adaptiveHeight: true,
    });
});