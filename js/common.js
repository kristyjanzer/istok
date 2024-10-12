$(function() {

});

// Burger Menu
const body = document.querySelector("body");
const header = document.querySelector(".header");
const burgerMenu = document.querySelector(".header .header-button-menu");
const burgerBody = document.querySelector(".header .header-button-menu__body");


burgerMenu.addEventListener("click", (e) => {
  header.classList.toggle("header-menu-open");
  burgerBody.classList.toggle("active");
  body.classList.toggle("lock");
  e.stopPropagation();
});


$(".header-info__columns").clone().appendTo(".header-button-menu__body");
$(".uni-columns .uni-columns__image").clone().appendTo(".uni-image--mobile");




// Services Slider
$('.services-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  slidesPerRow: 3,
  dots: false,
  rows: 2,
  arrows: false,
  infinite: false,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 900,
        settings: {
          rows: 1,
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          adaptiveHeight: true
        },
    }
  ]
});

// Phone Mask
$.each($('input#phone'), function (index, val) {
  $(this).focus(function () {
    $(this).inputmask('+7 (999) 999-99-99', {
      clearMaskOnLostFocus: true, showMaskOnHover: false
    });
  });
});


// Validate Form
$('.registration-form').validate({
  rules: {
    name: {
      required: true,
    },
    phone: {
      required: true,
      minlength: 18,
      maxlength: 18,
    },
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    phone: {
      required: "Пожалуйста, введите номер полностью"
    },
    email: {
      required: "Пожалуйста, заполните поле"
    },
    name: {
      required: "Пожалуйста, заполните поле"
    }
  }
});

// Form
// function validate(field){
//   if(field.val().length === 0){
//     field.parents('.registration-form__fields').find('.registration-form__button').attr('disabled', true).addClass('registration-form__button--disabled');
//   }else{
//     field.parents('.registration-form__fields').find('.registration-form__button').attr('disabled', false).removeClass('registration-form__button--disabled');
//   }
//   return field;
// }

// $('.registration-form__input').blur(function(){
//   validate($(this));
// });