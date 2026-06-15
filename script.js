$(document).ready(function () {
  var swiper = new Swiper(".type-1", {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    }
  });

    var swiper = new Swiper(".type-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    }
  });

  var swiper = new Swiper(".main-swiper", {
    loop: true,
    centeredSlides: true,
    speed: 1200,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
})