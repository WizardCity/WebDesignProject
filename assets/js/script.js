$(document).ready(function(){
    $(".navbar").hide(0).fadeIn(2000)
});

$(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
  });