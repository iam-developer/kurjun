$(document).ready(function() {
    // Слайдер для рекламных баннеров:
    $(".advertising").slick({
        infinite: true,
        dots: true,
        arrow: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fadeIn: true,
        adaptiveHeight: true,
        // autoplay: true,
        autoplaySpeed: 1800,
        prevArrow: "<img class='left__arrow' src='./Assets/img/icon/left-arrow.png'>",
        nextArrow: "<img class='right__arrow' src='./Assets/img/icon/right-arrow.png'>"
    });

    // Слайдер для категории:
    $('.categories--slider').slick({
        infinite: true,
        dots: false,
        arrow: false,
        slidesToShow: 7,
        slidesToScroll: 3,
        adaptiveHeight: true,
        prevArrow: "<img class='left__arrow' src='./Assets/img/icon/left-arrow.png'>",
        nextArrow: "<img class='right__arrow' src='./Assets/img/icon/right-arrow.png'>"
    });
});