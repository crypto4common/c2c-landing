/* On Scroll Animation */
var $animation_elem = $(".fade-anime");
var $window = $(window);

function handleWindowView() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = window_height + window_top_position;

  $.each($animation_elem, (i, elem) => {
    var $element = $(elem);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_height + element_top_position;

    //check to see if this current container is within viewport
    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      $element.addClass("fade-in");
    } else {
      $element.removeClass("fade-in");
    }
  });
}

$(window).on("scroll resize", handleWindowView);
$window.trigger("scroll");
/* On Scroll Animation Ends Here */

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable:true
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  autoplay: {
    delay: 4000,
  },
});

$(window).on('load resize', function() {
  if ($(window).width() < 768) {
    $('why-us-sub-content-container').removeClass('swiper');
    $('why-us-sub-wrapper').removeClass('swiper-wrapper');
    $('.slider-container').removeClass('swiper-slide');
    $('.why-us-pagination').removeClass('swiper-pagination')
  } else {
    $('why-us-sub-content-container').addClass('swiper');
    $('why-us-sub-wrapper').addClass('swiper-wrapper');
    $('.slider-container').addClass('swiper-slide');
    $('.why-us-pagination').addClass('swiper-pagination')
  }
});
