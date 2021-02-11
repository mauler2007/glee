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


  // $('.product-card__btn-heart').on('click', function(e){
  //   e.preventDefault();
  //   $(this).toggleClass('product-card__btn-heart--active');
  // });

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

  //  скрипт для плавного скрола
  //  $(".header__menu a, .header__arrow-bottom").on("click", function (event) {
  //    event.preventDefault();
  //    var id = $(this).attr('href'),
  //      top = $(id).offset().top;
  //    $('body,html').animate({
  //      scrollTop: top
  //    }, 1500);
  //  });

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



  // $('[data-fancybox]').fancybox({
  //   loop: true
  // });

});