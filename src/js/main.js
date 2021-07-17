(function() {
  //Header scroll
  const $header = $(".header");
  const scroll = 0;
  const active = "active";
  
  $(window).scroll(function() {
    if ($(window).scrollTop() > scroll) {
      $header.addClass(active);
    } else {
      $header.removeClass(active);
    }
  });

  $('#productItemSlider').slick({
    arrows: false,
    appendDots: 'photo-product__dots',
    adaptiveHeight: true,
  });

  $('#similarProductItemSlider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '.prev',
    nextArrow: '.next',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
      }
    }]
  });
})()