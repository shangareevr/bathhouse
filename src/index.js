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
