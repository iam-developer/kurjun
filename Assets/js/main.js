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
        autoplay: true,
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

    // Catalog button:
    $('.catalog__btn').click(function() {
        $('.catalog__line2').toggleClass('catalog__line2__active');
        $('.catalog__line1').toggleClass('catalog__line1__active');
        $('.catalog__line3').toggleClass('catalog__line3__active');
        $('#catalog').toggleClass('active');
    });

// Страница "Карточка товара":
  $('.product-item-extra').click(function() {
    $('.product-item-extra').removeClass('active');
    $(this).addClass('active');
  });

  
// При наведении на звездочек:

  $('.zvezd2').hover(function() {
    $('.aa').addClass('active-hover');
  },function() {
    $('.aa').removeClass('active-hover');
  });

  $('.zvezd3').hover(function() {
    $('.bb').addClass('active-hover');
  },function() {
    $('.bb').removeClass('active-hover');
  });

  $('.zvezd4').hover(function() {
    $('.cc').addClass('active-hover');
  },function() {
    $('.cc').removeClass('active-hover');
  });

  $('.zvezd5').hover(function() {
    $('.dd').addClass('active-hover');
  },function() {
    $('.dd').removeClass('active-hover');
  });

//  События звездочек:
$('.zvezd1').on('click', function() {
  $('.zvezdochki').not(this).removeClass('active');
  $(this).toggleClass('active');
});
// 2-звездочка:
$('.zvezd2').on('click', function() {
  $('.zvezdochki').removeClass('active');
  $('.aa').addClass('active');
});
// 3-звездочка:
$('.zvezd3').on('click', function() {
  $('.zvezdochki').removeClass('active');
  $('.bb').addClass('active');
});
// 4-звездочка:
$('.zvezd4').on('click', function() {
  $('.zvezdochki').removeClass('active');
  $('.cc').addClass('active');
});
// 5-звездочка:
$('.zvezd5').on('click', function() {
  $('.zvezdochki').removeClass('active');
  $('.dd').addClass('active');
});

// При нажатии на Избранное:
  $('.like-svg').click(function() {
    $(this).css('display', 'none');
    $('.like-svg-checked').css('display', 'block');
  });
  $('.like-svg-checked').click(function() {
    $(this).css('display', 'none');
    $('.like-svg').css('display', 'block');
  });
// При нажатии на "Рейтинг":
  $('.rating-svg').click(function() {
    $(this).toggleClass('active');
  });
});

// Страница "Карточка товара":

let mainImg = document.querySelectorAll('.product-item');

for(let i = 0; i < mainImg.length; i++) {
  mainImg[i].style.display = 'none';
  mainImg[0].style.display = 'block';
}
