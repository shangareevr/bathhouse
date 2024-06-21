import './index.html';
import './index.scss';


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