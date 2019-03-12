'use strict';

$("div a").click(function () {
  var target = $(this).attr("href");

  $("body, html").animate({
    scrollTop: $(target).offset().top - 80
  }, 300);
});

$(window).scroll(function () {
  var imageHeight = $("#hero-body").height();
  var scrollTop = $(window).scrollTop();

  /*var navColor = $(".navbar").css("background-color");
   navColor = navColor.substring(navColor.indexOf("(") + 1, navColor.length - 1).split(", ");
  navColor = `rgba(${navColor[0]},${navColor[1]},${navColor[2]},`;
   $(".navbar").css({
    "background-color": navColor + String(scrollTop/imageHeight) + ")"
  });*/

  var opacity = $(".navbar-background").css("opacity");

  $(".navbar-background").css({
    "opacity": String(scrollTop / imageHeight)
  });
});
