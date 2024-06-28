$('.start__slider_wrap').slick({
  speed: 1000,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
});
$('.header__burger').click(function(){
  $(this).toggleClass('active');
  $('.header__list').toggle('slow');
  $('.header__call').toggleClass('active');
  $('.header__logo').toggleClass('active');
})
$('.about__slider_wrap').slick({
  speed: 1000,
  fade: false,
  cssEase: 'linear',
  autoplay: false,
  autoplaySpeed: 5000,
  arrows: false,
  variableWidth:true,
  centerMode:true,
  slidesToShow:3,
  centerPadding:0
});
$('.carts__wrapper').slick({
  speed: 1000,
  fade: false,
  cssEase: 'linear',
  autoplay: false,
  arrows: false,
  variableWidth:true,
  centerMode:false,
  slidesToShow:1,
});

$('.news__slider').slick({
  speed: 1000,
  fade: false,
  cssEase: 'linear',
  autoplay: false,
  arrows: false,
  variableWidth:true,
  centerMode:false,
  slidesToShow:1,
});


$('.gallery__big_wrap').slick({
  speed: 1000,
  fade: true,
  infinite:true,
  prevArrow:'.gallery__big_prev',
  nextArrow:'.gallery__big_next',
  cssEase: 'linear',
  variableWidth:false,
  centerMode:false,
  slidesToShow:1,
  asNavFor:'.gallery__small_wrap'
});

var slide = $('.gallery__small_wrap').slick({
  speed: 1000,
  fade: false,
  cssEase: 'linear',
  autoplay: false,
  arrows: false,
  infinite:true,
  variableWidth:true,
  centerMode:false,
  centerPadding:0,
  slidesToShow:1,
  focusOnSelect:true,
  asNavFor:'.gallery__big_wrap'
});
$('.gallery__item').not(':first').hide();
$('.gallery__small_wrap').on('afterChange', function(event, slick, currentSlide, nextSlide){
  $('.gallery__item').hide();
  $('.gallery__item').eq(currentSlide).show();
});



document.addEventListener('DOMContentLoaded', ()=>{
  Fancybox.bind("[data-fancybox]", {
    closeExisting:true
  });


  $('.team__slider').slick({
    speed: 1000,
    fade: false,
    cssEase: 'linear',
    autoplay: false,
    arrows: false,
    variableWidth:true,
    centerMode:false,
    centerPadding:0,
    slidesToShow:1,
  });
  $('.infomation__slider').slick({
    speed: 8000,
    autoplaySpeed:0,
    fade: false,
    draggable: true,
    cssEase: 'linear',
    autoplay: true,
    arrows: false,
    variableWidth:true,
    centerMode:true,
    slidesToShow:1,
    centerPadding:0,
    initialSlide:1,
  });
  $('.questions__answer').hide();
  $('.questions__question').click(function(){
    if(!$(this).hasClass('active')){
      $('.questions__question').removeClass('active');
      $(this).addClass('active');
      $('.questions__answer').hide();
      $(this).closest('.questions__item').find('.questions__answer').fadeIn();
    } else{
      $(this).removeClass('active');
      $('.questions__answer').fadeOut();
    }
  })

  $('.page__btns_item').first().addClass("active");
  $('.page__btns').click(function(){
    $(this).toggleClass('show');
  })
  $('.review__imgs').slick({
    speed: 1000,
    fade: false,
    cssEase: 'linear',
    autoplay: false,
    arrows: false,
    variableWidth:true,
    centerMode:false,
    centerPadding:0,
    slidesToShow:9,
    infinite:false,
    responsive: [
      {
          breakpoint: 1400,
          settings: {
              slidesToShow: 5,
              infinite: false,
          }
      },
      {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            infinite: false,
        }
    }
  ]
  });




  
  // Fancybox.bind('[data-fancybox="about"]'),({
    //   arrows: false,
    //   afterLoad: function(instance, current) {
      //     if (instance.group.length > 1 && current.$content) {
        //       current.$content.append('<button class="fancybox-button fancybox-button--arrow_right next" data-fancybox-next><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 11L2 11M2 11L2.45049 11.4505C4.14602 13.146 5.66992 15.0049 7 17V17M2 11L2.45049 10.5495C4.14602 8.85398 5.66992 6.99512 7 5V5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button><button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left prev"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2 11L20 11M20 11L19.5495 10.5495C17.854 8.85398 16.3301 6.99512 15 5V5M20 11L19.5495 11.4505C17.854 13.146 16.3301 15.0049 15 17V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> </button>');
        //     }
        //   }
        // });
      });
      


