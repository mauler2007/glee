$(function () {
  
  $('.main-slider__inner').slick({
    fade: true,
    arrows:false,
    dots:true
    // autoplay:true
  });

  $('.card__btn-heart').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('card__btn-heart--active');
  });

  $(".card__btn-heart").on("click",(function(){
    $(this).toggleClass("card__btn-heart--active")
  }));

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
  
  //  $('#MixItUp1').mixItUp({
  //   selectors: {
  //     control: '.week__btn'
  //   }
  // });

  // $('#MixItUp2').mixItUp({
  //   selectors: {
  //     control: '.new__btn'
  //   }
  // });





  // var mixer = mixitup('.week__box');


  
  $('[data-fancybox]').fancybox({
    loop: true
  });

});


