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



// ScrollTo
$(".to-registration").mPageScroll2id();


// Services Slider
$('.uni-slider').slick({
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

// Finishing Slider
$('.finishing-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  infinite: false,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1100,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          adaptiveHeight: true
      },
    },
    {
      breakpoint: 900,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        },
    }
  ]
});

// Minor Repairs
$('.minor-repair-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  slidesPerRow: 2,
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


// Dropmenu
$('.registration-form-select').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('registration-form-select--active');
  $(this).find('.registration-form-select__options').slideToggle(300);
});
$('.registration-form-select').focusout(function () {
  $(this).removeClass('registration-form-select--active');
  $(this).find('.registration-form-select__options').slideUp(300);
});
$('.registration-form-select__option').click(function () {
  $(this).parents('.registration-form-select').find('.registration-form-select__span').text($(this).text());
  $(this).parents('.registration-form-select').find('.registration-form-select__icon').addClass("registration-form__icon--ok");
  $(this).parents('.registration-form__field').addClass("registration-form__field--success");
  $(this).parents('.registration-form-select').find('.registration-form-select__input').attr('value', $(this).attr('id'));
});



 // Dropzone
 function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function (e) {
      $('.registration-form-dropzone__row').hide();

      // $('.registration-form-dropzone__image').attr('src', e.target.result);
      $('.registration-form-dropzone__upload').show();

      $('.registration-form-dropzone__remove-title').html(input.files[0].name);

    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}


function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.registration-form-dropzone__upload').hide();
  $('.registration-form-dropzone__row').show();
}
$('.registration-form-dropzone__row').bind('dragover', function () {
  $('.registration-form-dropzone').addClass('image-dropping');
});
$('.registration-form-dropzone__row').bind('dragleave', function () {
  $('.registration-form-dropzone').removeClass('image-dropping');
});