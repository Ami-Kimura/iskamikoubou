$(".navButton").click(function () {//ボタンクリック
  $(this).toggleClass('active');
   $("#nav-menu").toggleClass('panelactive');
     $(".circle-menu").toggleClass('circleactive');
  });
  
  
  
  $(".navButton").click(function () {
    　$(".navButton").removeClass('active');
      $("#nav-menu").removeClass('panelactive');
     $(".circle-menu").removeClass('circleactive');
  });