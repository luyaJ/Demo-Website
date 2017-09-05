$(document).ready(function(){
    /*第一个 长的轮播图*/
    var i = 0;
    var clone = $("#images img").first().clone();
    $("#images").append(clone);

    function moveLeft(){
        i++; 
        if(i == 3){
            $("#images img").css({left:0});
            i = 0;
        }
        $("#images img").animate({left:-i*1062},1000);
    }
     var t = setInterval(moveLeft,2000);
     $(".content-mid-swipper").hover(function(){
         clearInterval(t);
     },function(){
         t = setInterval(moveLeft,2000);
     });

    /* 两个 小轮播 */
     var k = 0;
     var clone = $(".sImg img").first().clone();
     $(".sImg").append(clone);

     function moveLeft2(){
         k++;
         if(k == 3){
             $(".sImg img").css({left:0});
             k = 0;
         }
         $(".sImg img").animate({left:-k*515},1000);
     }
      var m = setInterval(moveLeft2,2000);
      $(".container-swipper").hover(function(){
          clearInterval(m);
      },function(){
          m = setInterval(moveLeft2,2000);
      });

});