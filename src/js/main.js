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

  // COLLAPS
  $('#showMoreOverview').click(() => {
    $('#collapseOverview').toggleClass('open')
  })
  
  $('#showMoreIngredients').click(() => {
    $('#collapseIngredients').toggleClass('open')
  })
  
  $('#showMoreAboutBrand').click(() => {
    $('#collapseAboutBrand').toggleClass('open')
  })

  $('#showMoreDelivery').click(() => {
    $('#collapsDelivery').toggleClass('open')
  })

  $('#showMoreReviews').click(() => {
    $('#collapsReviews').toggleClass('open')
  })

  $('#showAllColours').click(() => {
    $('#palletAllColoursItem').toggleClass('show')
    $('#showAllColours').dellet()
  })

  if ( $(window).width() < 768 ){
    $('#footerMenuCollapseServices').click(() => {
      $('#footerNavServicesContent').slideToggle("fast")
    })
  
    $('#footerMenuCollapseAboutUs').click(() => {
      $('#footerNavAboutUsContent').slideToggle("fast")
    })
  }else{
    console.log('Nice!')
  }

    
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