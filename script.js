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


/*pc-calender*/
$(".header-reserve").click(function () {
  $(".pc-calender").toggleClass('open');
});


$(".header-reserve").click(function () {

  });




/*sp-calender*/
$(".sp_reserve").click(function () {
    $(".sp-calender").toggleClass('open');
  
});


  $(".sp_reserve").click(function () {
    

    });