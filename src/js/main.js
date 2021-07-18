(function() {
  //Header scroll
  var $header = $(".header");
  var scroll = 0;
  var active = "active";
  
  $(window).scroll(function() {
    if ($(window).scrollTop() > scroll) {
      $header.addClass(active);
    } else {
      $header.removeClass(active);
    }
  });

  // Hamburger menu
  $('.hamburger').click(() => {
    $('.hamburger').toggleClass('active')
  })

  // TODO 
  // $('[data-target="collapse"]').click((e) => {
  //   console.log($('[data-target="collapse"]').attr());
  // })

  // COLLAPS
  $('#showMoreOverview').click(function() {
    $('#collapseOverview').toggleClass('open')
  })
  
  $('#showMoreIngredients').click(function() {
    $('#collapseIngredients').toggleClass('open')
  })
  
  $('#showMoreAboutBrand').click(function() {
    $('#collapseAboutBrand').toggleClass('open')
  })

  $('#showMoreDelivery').click(function() {
    $('#collapsDelivery').toggleClass('open')
  })

  $('#showMoreReviews').click(function() {
    $('#collapsReviews').toggleClass('open')
  })

  $('#showAllColours').click(function() {
    $('#palletAllColoursItem').toggleClass('show')
    $('#showAllColours').dellet()
  })

  $('#showMoreMobileIngredients').click(function() {
    $('#collapseIngredients').toggleClass('open')
  })

  $('#showMoreMobileBrand').click(function() {
    $('#collapseAboutBrand').toggleClass('open')
  })

  if ( $(window).width() < 768 ){
    $('#footerMenuCollapseServices').click(function() {
      $('#footerNavServicesContent').slideToggle("fast")
    })
  
    $('#footerMenuCollapseAboutUs').click(function() {
      $('#footerNavAboutUsContent').slideToggle("fast")
    })
  }else{
    console.log('Nice!')
  }

// SLICK-SLIDER
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
    slidesToScroll: 2,
    prevArrow: '.prev',
    nextArrow: '.next',
    dots: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: false,
      }
    }]
  });
})()