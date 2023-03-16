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
      }else{
        $element.removeClass("fade-in")
      }
    });
  }

  $(window).on("scroll resize", handleWindowView);
  $window.trigger("scroll");
  /* On Scroll Animation Ends Here */