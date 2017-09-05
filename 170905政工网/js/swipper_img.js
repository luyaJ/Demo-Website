// 700*364px 的轮播图

$(document).ready(function(){
    var j = 0;
    //增加第一张在末尾，让效果接近无缝轮播
    var clone = $("#swipperImg img").first().clone();
    $("#swipperImg").append(clone);

    //向左的按钮
    $("#arrow_left").on("click",function(){
        moveLeft1();
    });
    function moveLeft1(){
        j++; //i=1,2,3,4
        if(j == 6){  //最后一下i=5
            $("#swipperImg img").css({left:0});
            j = 0;
        }
        $("#swipperImg img").animate({left:-j*700},1000);
        $("#rectBtn span").eq(j).addClass("onBtn").siblings().removeClass("onBtn");
    }

    //向右的按钮
    $("#arrow_right").on("click",function () {
        moveRight1();
    });
    function moveRight1(){
        j--;
        if(j == -1){
            $("#swipperImg img").css({left:-3500});
            j = 5;
        }
        $("#swipperImg img").animate({left:-j*700},1000);
        $("#rect span").eq(j).addClass("onBtn").siblings().removeClass("onBtn");
    }

    //自动动画--点击小圆圈
    $("#rect span").click(function () {
        var index = $(this).index();
        $(this).eq(j).addClass("onBtn").siblings().removeClass("onBtn");
        $("#swipperImg img").animate({left:-index*700},1000);
    });


    //对定时器的操作
    var tt = setInterval(moveLeft1,2000);
    $(".content-banner").hover(function(){
        clearInterval(tt);
    },function(){
        tt = setInterval(moveLeft1,2000);
    });
});