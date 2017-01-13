  $(window).scroll(function () {
  	var height=$('.header' ).height();
    if ($(window).scrollTop() > height) {
      $('.nav-bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < height+1) {
      $('.nav-bar').removeClass('navbar-fixed');
    }
  });