// SP hamburger-menu
$(".navButton").click(function () {//ボタンクリック
  $(this).toggleClass('active');
   $("#nav-menu").toggleClass('panelactive');
     $(".circle-menu").toggleClass('circleactive');
        $("#header-menu").hide().fadeIn(1800);
  });
  
  
  
  $("#nav-menu").click(function () {
    $(".navButton").removeClass('active');
      $("#nav-menu").removeClass('panelactive');
        $(".circle-menu").removeClass('circleactive');
          $("#header-menu").hide().fadeOut(1800);
  });

////////////////////////////////////////////////





// Smooth Scrool
$(function() {

  $('a[href^="#"]').click(function() {

    // 初期設定：移動時間(ms)と頭出し位置
    var speed = 1200;
    var offset = 0;

    // アンカーを取得
    var anchor = $(this).attr("href");

    // ターゲットの位置を取得
    var target = $(anchor == "#" || anchor == "" ? 'html' : anchor);
    var position = target.offset().top + offset;

    // スクロール（アニメーション）
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


/*pc-calendar*/
$(".header-reserve").click(function () {
  $(".pc-calendar").toggleClass('open');
});


$(".header-reserve").click(function () {

  });




/*sp-calendar*/
$(".sp_reserve").click(function () {
    $(".sp-calendar").toggleClass('open');
  
});


  $(".sp_reserve").click(function () {
    
    

    });




    function slideSwitch() {
      var $active = $('#sp-slide img.active');
   
      if ( $active.length == 0 ) $active = $('#sp-slide img:last');
   
      var $next =  $active.next().length ? $active.next()
         : $('#sp-slide img:first');
   
      $active.addClass('last-active');
   
      $next.css({opacity: 0.0})
         .addClass('active')
         .animate({opacity: 1.0}, 2000, function() {
              $active.removeClass('active last-active');
         });
   }
   
   $(function() {
      setInterval( "slideSwitch()", 5000 );
   });