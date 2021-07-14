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
})()
