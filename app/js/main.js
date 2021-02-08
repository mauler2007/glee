$(function () {

  $('.main-slider__inner').slick({
    fade: true,
    arrows: false,
    dots: true,
    autoplay: true
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
    slidesToScroll: 1
  });

  

  // $('[data-fancybox]').fancybox({
  //   loop: true
  // });

});