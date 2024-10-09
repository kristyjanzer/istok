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
          slidesPerRow: 1
        },
    }
  ]
});
