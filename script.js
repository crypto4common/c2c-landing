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
    clickable: true,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  autoplay: {
    delay: 4000,
  },
});

$(window).on("load resize", function () {
  if ($(window).width() < 768) {
    $("why-us-sub-content-container").removeClass("swiper");
    $("why-us-sub-wrapper").removeClass("swiper-wrapper");
    $(".slider-container").removeClass("swiper-slide");
    $(".why-us-pagination").removeClass("swiper-pagination");
  } else {
    $("why-us-sub-content-container").addClass("swiper");
    $("why-us-sub-wrapper").addClass("swiper-wrapper");
    $(".slider-container").addClass("swiper-slide");
    $(".why-us-pagination").addClass("swiper-pagination");
  }
});

$(function () {
  /* Text Typing Animation */
  let $earnMoneyHead = $(".earn-money-head");
  let $earnMoneySpan = $(".earn-money-head span");
  let $referMoneyHead = $(".refer-money-head");
  let $referMoneySpan = $(".refer-money-head span");

  let earnMoneyAnime = true;
  var i = 0;
  var speed = 280;
  let textValue = "";

  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.1em solid  #16E01E}";
    document.body.appendChild(css);
  };
  /* Text Typing Animation Ends Here */

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

      // if(i === 0){
      //   console.log("Window Top : ",window_top_position);
      //   console.log("Window Bottom : ",window_bottom_position);
      //   console.log("Element Top: ",element_top_position);
      //   console.log("Element Bottom : ",element_bottom_position);
      // }

      //check to see if this current container is within viewport
      if (
        element_bottom_position >= window_top_position &&
        element_top_position <= window_bottom_position
      ) {
        $element.addClass("fade-in");
      }
    });
  }

  $(window).on("scroll resize", handleWindowView);
  $window.trigger("scroll");
  /* On Scroll Animation Ends Here */

  /* Change Total Supply Text */
  $(window).on("resize", () => {
    $(".token-coins-details").each((i, element) => {
      let coins = ["Yearn", "DLotas"];
      if ($(document).width() <= 576) {
        $(element).html(`1000M ${coins[i]} Coin`);
      } else {
        $(element).html(`1,000,000,000 ${coins[i]} Coin`);
      }
    });
  });

  $("video").each(function () {
    if ($(this).is(":in-viewport")) {
      console.log("in view port");
      if (document.getElementById("v_" + howitworksvideo)) {
        video = document.getElementById("v_" + howitworksvideo);
        // video.pause();
        // video.currentTime = 0;
        // video.play();
        video.load();
      }
    }
  });

  /* Change Total Supply Text Ends Here */
});
