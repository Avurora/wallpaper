// JavaScript Document



$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});






$(function(){
    $(window).scroll(function (){   //ウィンドウがスクロールされたら実行
        $('tr').each(function(){     //.fadein に()ないの要素を繰り返し処理する.clickの差し替え
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 30){
                $(this).addClass('scrollin');
            }
        });
    });
});
    
