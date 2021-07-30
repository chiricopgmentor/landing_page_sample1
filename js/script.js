const $bgiCarousel = $(".js_bgiCarousel");

$(function () {
  var topBtn = $("#page_top");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.css("opacity", "1.0");
    } else {
      topBtn.css("opacity", "0");
    }
  });
  topBtn.click(function () {
    $("body,html").animate({ scrollTop: 0 }, 1500);
    return false;
  });
});
var ua = navigator.userAgent.toLowerCase();
var isMobile = /iphone/.test(ua) || /android(.+)?mobile/.test(ua);
if (!isMobile) {
  $('a[href^="tel:"]').on("click", function (e) {
    e.preventDefault();
  });
}
var touch =
  "ontouchstart" in document.documentElement ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0;
if (touch) {
  try {
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;
      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;
        if (styleSheet.rules[ri].selectorText.match(":hover")) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}

// 背景カルーセル
$bgiCarousel.slick({
  autoplay: true,
  arrows: false,
});