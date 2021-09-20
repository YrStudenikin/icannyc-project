const reviewsSlider = new Swiper('.reviews-slider .swiper', {
  speed: 400,
  slidesPerView: "auto",
  // loop: true,
  // simulateTouch: false,
  navigation: {
    nextEl: '.reviews-slider__btn--next',
    prevEl: '.reviews-slider__btn--prev',
  },
  breakpoints: {
    769: {
      simulateTouch: false,
    }
  }
});
