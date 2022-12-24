//loading
$(window).on('load',function(){
  $("#loading").delay(2000).fadeOut('slow');
  $("#loading_inner").delay(1600).fadeOut('slow');
});

////////////////////////////////////////////////






// SP hamburger-menu
$(".navButton").click(function () {
  $(this).toggleClass('active');
   $("#nav-menu").toggleClass('panelactive');
     $(".circle-menu").toggleClass('circleactive');
        $("#header-menu").hide().fadeIn(1800);
  });
  
  
  
  //$("#nav-menu").click(function () {
    //$(".navButton").removeClass('active');
      //$("#nav-menu").removeClass('panelactive');
        //$(".circle-menu").removeClass('circleactive');
          //$("#header-menu").hide().fadeOut(1800);
  //});

////////////////////////////////////////////////





// Smooth Scrool
$(function() {

  $('a[href^="#"]').click(function() {

  
    var speed = 1200;
    var offset = 0;

    var anchor = $(this).attr("href");


    var target = $(anchor == "#" || anchor == "" ? 'html' : anchor);
    var position = target.offset().top + offset;


    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');

    return false;

  });

});

$('.dummy').click(function() {
  return false;

});
////////////////////////////////////////////////




  //pc-calendar 
$(".header-reserve").click(function () {
  $(".pc-calendar").toggleClass('open');
});
  ////////////////////////////////////////////////





  //sp-calendar
$(".sp_reserve").click(function () {
  $(".sp-calendar").toggleClass('open'); 
});




 ////////////////////////////////////////////////



 $(function() {
  $(window).scroll(function () {
     var target = 2000;
     var scroll = $(window).scrollTop();
     if( scroll >= target) {
        $("#page-top").fadeIn();
     }
     else {
        $("#page-top").fadeOut();
     }
  });
});








