$(document).ready(function() {
    // Слайдер для рекламных баннеров:
    $(".advertising").slick({
        infinite: true,
        dots: true,
        arrows: true,
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
        arrows: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: "<img class='left__arrow' src='./Assets/img/icon/left-arrow.png'>",
        nextArrow: "<img class='right__arrow' src='./Assets/img/icon/right-arrow.png'>"
    });

    // Слайдер для товара:
    $('.news--card').slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    });

    // Popup:
    $('.news--card').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: false,
        }
    });
});

