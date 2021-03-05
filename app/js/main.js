$(function () {

  $('.main-slider__inner').slick({
    fade: true,
    arrows: false,
    dots: true
    // autoplay: true
  });

  $('.user-nav__item--menu').on('click', function (e) {
    e.preventDefault()
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

  $('.btn-grid').on('click', function () {
    $('.week__gallery').removeClass('week__gallery--list');
    $('.product-card').removeClass('product-card--list');
  });

  $('.btn-list').on('click', function () {
    $('.week__gallery').toggleClass('week__gallery--list');
    $('.product-card').toggleClass('product-card--list');
  });

  const swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesToScroll: 1,
    loop: true,


    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3
      },

      992: {
        slidesPerView: 5
      },
    }
  });


  // var stop = $("#someElement").offset().top;
  // $(window).scroll(function () {
  //   if ($(window).scrollTop() <= stop) {
  //     $(window).off("scroll");
  //     $('.count').each(function () {
  //       $(this).prop('Counter', 0).animate({
  //         Counter: $(this).data('value')
  //       }, {
  //         duration: 3000,
  //         easing: 'swing',
  //         step: function (now) {
  //           $(this).text(this.Counter.toFixed());
  //         }
  //       });
  //     });
  //   }
  // });

  // У тебя есть хендлер на эвент scroll, эвент выстреливает каждый раз как пользователь изменит позицию скролла, у тебя есть какие - то данные которые ты можешь сверять, где этот скролл находится, где ты хочешь что - то запустить.Скомпилируй эти данные в голове и сделай.

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

  $('.filter-aside__title').on('click', function () {
    $(this).toggleClass('filter-aside__title--rotate-triangle');
    $(this).siblings('form').fadeToggle('200', 'linear');
  })

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

  $(".product-card__star").rateYo({
    normalFill: "#d6d6d6",
    starWidth: "17px",
    ratedFill: "#fc0",
    spacing: "10px",
    halfStar: false,
    fullStar: true,
    starSvg: '<svg class="product-card__icon-star"><use xlink:href="images/sprite.svg#icon-rate"></use></svg>',
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