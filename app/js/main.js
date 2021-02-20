$(function () {

  $('.main-slider__inner').slick({
    fade: true,
    arrows: false,
    dots: true,
    autoplay: true
  });

  $('.user-nav__item--menu').on('click', function () {
    $('.header__inner').toggleClass('header__inner--menu-open');
  });

  // $('.drop-menu').on('click', function () {
  //   $('.drop-menu ul').removeClass('mobile-drop');
  //   $(this).find('ul').addClass('mobile-drop');
  // });

  $('.header__item').on('click', function () {
    $('.header__item').removeClass('mobile-drop');
    $(this).toggleClass('mobile-drop');
  });

  $('.count').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).data('value')
    }, {
      duration: 2000,
      easing: 'swing',
      step: function (now) {
        $(this).text(this.Counter.toFixed());
      }
    });
  });

  const swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 5,
    slidesToScroll: 1,
    loop: true,
  });

  $(window).scroll(function () {
    var height = $(window).scrollTop();
    /*Если сделали скролл на 100px задаём новый класс для header*/
    if (height > 100) {
      $('header').addClass('header-fixed');
    } else {
      /*Если меньше 100px удаляем класс для header*/
      $('header').removeClass('header-fixed');
    }
  });

  $(".filter-aside__input-price").ionRangeSlider({

    onChange: function (data) {
      $('.filter-aside__from').text(data.from);
      $('.filter-aside__to').text(data.to);
    },
    onStart: function (data) {
      $('.filter-aside__from').text(data.from);
      $('.filter-aside__to').text(data.to);
    },
  });

  $(".recent__star").rateYo({
    normalFill: "#d6d6d6",
    starWidth: "12px",
    ratedFill: "#fc0",
    spacing: "6px",
    readOnly: true
  });

  $('.insights__sponsors').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 539,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  var mixer1 = mixitup('#MixItUp1', {
    selectors: {
      control: '.week__btn'
    }
  });

  var mixer2 = mixitup('#MixItUp2', {
    selectors: {
      control: '.new__btn'
    }
  });

});


// Это подходит только для лендинга  в машазине не работает
// $(".header__inner a").on("click", function (event) {
//   event.preventDefault();
//   var id = $(this).attr('href'),
//     top = $(id).offset().top;
//   $('body,html').animate({
//     scrollTop: top
//   }, 1500);
// });


// $('.product-card__btn-heart').on('click', function(e){
//   e.preventDefault();
//   $(this).toggleClass('product-card__btn-heart--active');
// });