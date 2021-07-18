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
    asNavFor: '#productItemSliderDots',
    infinite: false,
  });

  $('#productItemSliderDots').slick({
    arrows: false,
    asNavFor: '#productItemSlider',
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    focusOnSelect: true,
    infinite: false,
  });

  $('#similarProductItemSlider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '.prev',
    nextArrow: '.next',
    dots: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
      }
    }]
  });
})()