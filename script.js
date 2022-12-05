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
          $("#header-menu").hide().fadeOut(1000);
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





/*calender*/

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      // ヘッダーのボタン
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
    },
    eventSources: [
      {
        // 日本の祝日カレンダー
        googleCalendarApiKey: "AIzaSyCdHJPFMQ9cJfEoBZIqo1D62Ot6WG56uOc",
        googleCalendarId: "c9a1e5cc381a8ce2e7ef9b86996f16f9a62ed7289e402649ffad995303128441@group.calendar.google.com"
      }
    ]
  });
  calendar.render();
});

//////////////////////////

$(".sp_reserve-img").click(function () {
  $(this).toggleClass('active');
   $(".sp-calender").toggleClass('active');
   $(".sp-calender span").toggleClass('active');

  });

  $(".sp_reserve-img").click(function () {
    $(this).removeClass('active');
     $(".sp-calender").removeClass('active');
     $(".sp-calender span").removeClass('active');
  
    });